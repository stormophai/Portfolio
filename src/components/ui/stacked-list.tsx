import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ProfileIcon,
  Search01Icon,
  Cancel01Icon,
  Add01Icon,
  Briefcase01Icon,
  PaintBoardIcon,
  Database01Icon,
  QuillWrite01Icon,
} from "@hugeicons/core-free-icons";

interface Member {
  id: string;
  name: string;
  status: string;
  online: boolean;
  role: string;
  roleType: "pm" | "designer" | "data" | "creator";
  avatar: string;
}

const ALL_MEMBERS: Member[] = [
  {
    id: "01",
    name: "Shivam Singh",
    status: "Online",
    online: true,
    role: "Creative Director",
    roleType: "creator",
    avatar: "https://tapback.co/api/avatar/Shivam.webp",
  },
  {
    id: "02",
    name: "Sumit Patel",
    status: "Online",
    online: true,
    role: "Developer",
    roleType: "data",
    avatar: "https://tapback.co/api/avatar/Sumit.webp",
  },
  {
    id: "03",
    name: "Mayank Tiwari",
    status: "2h ago",
    online: false,
    role: "UI/UX Designer",
    roleType: "designer",
    avatar: "https://tapback.co/api/avatar/Mayank.webp",
  },
  {
    id: "04",
    name: "Samar Singh",
    status: "Online",
    online: true,
    role: "Project Lead",
    roleType: "pm",
    avatar: "https://tapback.co/api/avatar/Samar.webp",
  },
];

const ACTIVE_MEMBERS = ALL_MEMBERS.filter((m) => m.online);

const sweepSpring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 35,
  mass: 0.5,
};

const RoleBadge = ({
  type,
  label,
}: {
  type: Member["roleType"];
  label: string;
}) => {
  const styles = {
    pm: {
      bg: "bg-amber-500/10",
      text: "text-amber-400",
      border: "border-amber-500/20",
      icon: Briefcase01Icon,
    },
    designer: {
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      border: "border-blue-500/20",
      icon: PaintBoardIcon,
    },
    data: {
      bg: "bg-green-500/10",
      text: "text-green-400",
      border: "border-green-500/20",
      icon: Database01Icon,
    },
    creator: {
      bg: "bg-violet-500/10",
      text: "text-violet-400",
      border: "border-violet-500/20",
      icon: QuillWrite01Icon,
    },
  };

  const style = styles[type];
  const Icon = style.icon;

  return (
    <div
      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${style.bg} ${style.text} ${style.border} shrink-0`}
    >
      <HugeiconsIcon icon={Icon} size={12} strokeWidth={1.8} />
      <span className="text-xs font-medium tracking-tight uppercase whitespace-nowrap truncate max-w-[80px] sm:max-w-none">
        {label}
      </span>
    </div>
  );
};

const MemberItem = ({ member }: { member: Member }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: 10, y: 15, rotate: 1 },
      visible: { opacity: 1, x: 0, y: 0, rotate: 0 },
    }}
    transition={sweepSpring}
    style={{ originX: 1, originY: 1 }}
    className="flex items-center group py-4 first:pt-0 border-b border-white/[0.06] last:border-0"
  >
    <div className="relative mr-4 shrink-0">
      <img
        src={member.avatar}
        alt={member.name}
        className="w-12 h-12 rounded-full ring-2 ring-black/80 shadow-sm object-cover"
        onError={(e) => {
          const t = e.currentTarget;
          t.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=4c1d95&color=fff&bold=true&size=96`;
        }}
      />
      {member.online && (
        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#0f0f14] rounded-full flex items-center justify-center shadow-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
        </div>
      )}
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="text-base font-semibold text-white tracking-tight leading-none mb-1.5 truncate">
        {member.name}
      </h3>
      <div className="flex items-center gap-1.5 opacity-80">
        {member.online && (
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
        )}
        <p
          className={`text-sm font-medium leading-none ${
            member.online ? "text-green-500" : "text-white/40"
          }`}
        >
          {member.status}
        </p>
      </div>
    </div>
    <div className="shrink-0">
      <RoleBadge type={member.roleType} label={member.role} />
    </div>
  </motion.div>
);

export function StackedList() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAllMembers = useMemo(
    () =>
      ALL_MEMBERS.filter(
        (m) =>
          m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.role.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );

  return (
    <div className="relative w-full max-w-[440px] pb-6 bg-[#0a0a0f] rounded-[40px] border border-white/[0.08] flex flex-col overflow-hidden shadow-2xl shadow-black/60">
      <div className="flex flex-col h-full bg-[#0a0a0f]">
        <div className="p-8 pb-3">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
              Active Members
              <span className="text-xs bg-white/5 border border-white/10 px-2 py-1 mt-0.5 rounded-full text-white/40 leading-none font-normal">
                {ACTIVE_MEMBERS.length}
              </span>
            </h2>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full border-white/10 text-white/40 hover:text-white hover:bg-white/5"
            >
              <HugeiconsIcon icon={Add01Icon} size={18} strokeWidth={2.5} />
            </Button>
          </div>

          <div className="relative mb-4">
            <HugeiconsIcon
              icon={Search01Icon}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 z-10"
              size={16}
            />
            <Input
              placeholder="Search teammates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 pl-11 pr-4 bg-white/[0.04] border-white/10 focus-visible:ring-violet-500/30 rounded-2xl text-base placeholder:text-white/25"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-8 pb-20">
          <motion.div
            initial={false}
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
            className="space-y-0.5"
          >
            {ACTIVE_MEMBERS.map((member) => (
              <MemberItem key={`active-${member.id}`} member={member} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Expanding bottom panel — Member Directory */}
      <motion.div
        layout
        initial={false}
        animate={{
          height: isExpanded ? "calc(100% - 20px)" : "68px",
          width: isExpanded ? "calc(100% - 20px)" : "calc(100% - 40px)",
          bottom: isExpanded ? "10px" : "20px",
          left: isExpanded ? "10px" : "20px",
          borderRadius: isExpanded ? "32px" : "24px",
        }}
        transition={{
          type: "spring",
          stiffness: 240,
          damping: 30,
          mass: 0.8,
        }}
        className="absolute z-50 overflow-hidden border border-white/[0.08] flex flex-col group/bar bg-[#0f0f14]"
        style={{ cursor: isExpanded ? "default" : "pointer" }}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        <div
          className={`flex items-center justify-between px-3 h-[68px] shrink-0 transition-colors ${
            isExpanded
              ? "border-b border-white/[0.06]"
              : "hover:bg-white/[0.03]"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/40 transition-transform group-hover/bar:scale-105">
              <HugeiconsIcon icon={ProfileIcon} size={20} strokeWidth={2} />
            </div>
            <motion.div layout="position">
              <h4 className="text-base font-medium text-white tracking-tight leading-none">
                Team Directory
              </h4>
              <p className="text-xs leading-none text-white/35 mt-1">
                {ALL_MEMBERS.length} Members
              </p>
            </motion.div>
          </div>

          <div className="flex items-center gap-3">
            {!isExpanded && (
              <div className="flex -space-x-3">
                {ALL_MEMBERS.slice(0, 3).map((m) => (
                  <motion.img
                    key={`sum-${m.id}`}
                    layoutId={`avatar-${m.id}`}
                    src={m.avatar}
                    className="w-10 h-10 rounded-full ring-1 ring-[#0f0f14] shadow-sm object-cover"
                    alt={m.name}
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      t.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=4c1d95&color=fff&bold=true&size=80`;
                    }}
                  />
                ))}
                <div className="w-10 h-10 rounded-full ring-1 ring-[#0f0f14] bg-white/5 flex items-center justify-center shadow-sm relative">
                  <span className="text-sm font-medium text-white/50">
                    +{ALL_MEMBERS.length - 3}
                  </span>
                </div>
              </div>
            )}

            {isExpanded && (
              <button
                className="h-9 w-9 rounded-xl text-white/40 hover:text-white transition-all flex items-center justify-center bg-white/5 active:scale-90"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                  setSearchQuery("");
                }}
              >
                <HugeiconsIcon icon={Cancel01Icon} size={18} strokeWidth={2.5} />
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col">
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="px-6 py-4"
              >
                <div className="relative">
                  <HugeiconsIcon
                    icon={Search01Icon}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 z-10"
                    size={15}
                  />
                  <Input
                    placeholder="Search members..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-10 bg-white/[0.04] border-white/10 rounded-xl text-sm placeholder:text-white/25 pl-10"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex-1 overflow-y-auto px-6 py-2">
            <motion.div
              initial="hidden"
              animate={isExpanded ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.03, delayChildren: 0.1 },
                },
                hidden: {
                  transition: { staggerChildren: 0.02, staggerDirection: -1 },
                },
              }}
              className="space-y-0.5"
            >
              {filteredAllMembers.map((member) => (
                <MemberItem key={`list-${member.id}`} member={member} />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default StackedList;
