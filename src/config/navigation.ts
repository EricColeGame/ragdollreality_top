import {
  BookOpen,
  Cog,
  Gamepad2,
  KeyRound,
  RefreshCw,
  Swords,
  Users,
  type LucideIcon,
} from "lucide-react";

type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "combat", path: "/combat", icon: Swords, isContentType: true },
  { key: "modes", path: "/modes", icon: Gamepad2, isContentType: true },
  { key: "updates", path: "/updates", icon: RefreshCw, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
  { key: "codes", path: "/codes", icon: KeyRound, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
