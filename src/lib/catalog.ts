import {
  Video,
  Smartphone,
  Mic,
  AudioLines,
  ShieldCheck,
  Sparkles,
  Image as ImageIcon,
  Target,
  TrendingUp,
  Phone,
  Globe,
  BadgeCheck,
  Wallet,
  ShieldAlert,
  MessageSquare,
  Package,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  name: string;
  description: string;
  icon: LucideIcon;
  emoji: string;
  accent: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  emoji: string;
  icon: LucideIcon;
  tagline: string;
  items: ServiceItem[];
}

export const categories: ServiceCategory[] = [
  {
    id: "video-voice",
    title: "Video Call & Voice Tools",
    emoji: "🎥",
    icon: Video,
    tagline: "Real-time transmission & vocal modification — pro grade.",
    items: [
      {
        name: "Ultimate Real-Time Video Transmission & Voice Modifier Engine",
        description:
          "Live video & voice changing setup for real-time calls.",
        icon: Video,
        emoji: "🎥",
        accent: "#00e676",
      },
      {
        name: "Ultimate Mobile Live Video Transmission & Vocal Modifier — Single-Phone Setup",
        description:
          "Single-phone setup for live streaming with voice modification.",
        icon: Smartphone,
        emoji: "📱",
        accent: "#00e676",
      },
      {
        name: "Physical Voice Changer Device Kit",
        description:
          "Hardware voice changer unit with multi-voice effects.",
        icon: Mic,
        emoji: "🎙️",
        accent: "#00e676",
      },
      {
        name: "New Celebrity Voice Clone Update / Play.HT v2",
        description:
          "Instant voice cloning setup — sound like anyone.",
        icon: AudioLines,
        emoji: "🎧",
        accent: "#00e676",
      },
    ],
  },
  {
    id: "vpn-access",
    title: "VPN Login & Access",
    emoji: "🌐",
    icon: ShieldCheck,
    tagline: "Premium VPN accounts — 1 month, 2 months, or full year.",
    items: [
      {
        name: "Premium VPN Accounts: PIA, NordVPN, ExpressVPN, IPVanish, HMA, Surfshark",
        description:
          "Choose your provider — 1-month, 2-month, or 1-year plans available.",
        icon: ShieldCheck,
        emoji: "🛡️",
        accent: "#2979ff",
      },
    ],
  },
  {
    id: "ai-media",
    title: "AI & Media Generators",
    emoji: "🎬",
    icon: Sparkles,
    tagline: "Next-gen AI tools for content creation & editing.",
    items: [
      {
        name: "The Ultimate Image-To-Video Generator",
        description: "Turn photos into realistic moving videos.",
        icon: Sparkles,
        emoji: "✨",
        accent: "#b388ff",
      },
      {
        name: "Undressing Tool & Custom Picture Edits",
        description:
          "Advanced image processing & custom edits on any picture.",
        icon: ImageIcon,
        emoji: "🖼️",
        accent: "#b388ff",
      },
    ],
  },
  {
    id: "social-ads",
    title: "Social Media & Ads",
    emoji: "🚀",
    icon: Target,
    tagline: "Dominate every platform. Ads, boosts, engagement.",
    items: [
      {
        name: "Multi-Platform Ads Mastery: Zangi, Telegram, WhatsApp, FB, IG, TikTok",
        description:
          "Ad setup & targeted campaigns across every major platform.",
        icon: Target,
        emoji: "🎯",
        accent: "#ff6d00",
      },
      {
        name: "Social Media Boosting & Engagement",
        description:
          "Real followers, likes, views, shares across all platforms.",
        icon: TrendingUp,
        emoji: "📈",
        accent: "#ff6d00",
      },
    ],
  },
  {
    id: "verification",
    title: "Verification & Accounts",
    emoji: "📱",
    icon: Phone,
    tagline: "Virtual numbers, eSIMs, profiles & formats.",
    items: [
      {
        name: "Cheap Virtual Numbers for Verification",
        description:
          "OTP numbers for WhatsApp, Telegram, dating apps & business platforms.",
        icon: Phone,
        emoji: "📞",
        accent: "#00b8d4",
      },
      {
        name: "Prepaid & Monthly eSIMs Available: USA, Canada, UK",
        description: "Active eSIM phone numbers for USA, Canada, and UK.",
        icon: Globe,
        emoji: "🌍",
        accent: "#00b8d4",
      },
      {
        name: "Freshly Available Working Profiles & Formats",
        description:
          "Amira Dahab & active working profile packs, ready to deploy.",
        icon: BadgeCheck,
        emoji: "✅",
        accent: "#00b8d4",
      },
    ],
  },
  {
    id: "financial",
    title: "Financial & Utility Tools",
    emoji: "💳",
    icon: Wallet,
    tagline: "Crypto, recovery, proof generators & shipping.",
    items: [
      {
        name: "Instant Crypto Wallet Flashing & Permanent Top-Up System",
        description: "Crypto wallet balance display setups, instant activation.",
        icon: Wallet,
        emoji: "💰",
        accent: "#ffb300",
      },
      {
        name: "Scam Recovery Update / Collins Macdonald Full Update",
        description: "Complete recovery guide & format update — latest version.",
        icon: ShieldAlert,
        emoji: "⚠️",
        accent: "#ffb300",
      },
      {
        name: "Fake Chat Proof Generators: WhatsApp, IG, TikTok, Bank Receipts, PayPal, Zelle",
        description:
          "Mockup generator for chats & receipts across all major platforms.",
        icon: MessageSquare,
        emoji: "💬",
        accent: "#ffb300",
      },
      {
        name: "Courier & Shipping Tracking Services: FedEx, UPS, DHL",
        description: "Tracking updates for FedEx, UPS, and DHL shipments.",
        icon: Package,
        emoji: "📦",
        accent: "#ffb300",
      },
    ],
  },
];
