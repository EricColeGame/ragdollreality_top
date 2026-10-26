export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Ragdoll Reality Wiki",
  shortName: "Ragdoll Reality",
  logoText: "RR",
  tagline: "Weapons, Zombies, Physics & Updates",
  description: "Explore Ragdoll Reality on Roblox with weapon unlocks, ragdoll physics, zombie horde survival, playground hazards, controls, and weekly update guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ragdollreality.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ragdollreality.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/127932298993998/Ragdoll-Reality",
  heroVideoId: "7whZLVq5kGg", // Roblox Ragdoll Reality gameplay showcase
  social: {},
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
