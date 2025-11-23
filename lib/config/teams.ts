// lib/config/teams.ts

export type LolRole = "TOP" | "JGL" | "MID" | "BOT" | "SPT";

export type Player = {
  id: string;
  name: string;
  role: LolRole;
  image: string;
  isPlaceholder?: boolean;
};
export type Team = {
  slug: string;
  name: string;
  logo: string;
  slogan: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  players: Player[];
};

export const TEAM_CONFIGS: Record<string, Team> = {
  t1: {
    slug: "t1",
    name: "T1",
    logo: "/teams/t1/logo_1.svg",
    slogan: "ONE AND ONLY T1",
    colors: {
      primary: "#E2012D",
      secondary: "#111111",
      accent: "#FFFFFF",
    },
    players: [
      {
        id: "doran",
        name: "Doran",
        role: "TOP",
        image: "/teams/t1/t1_top_img.jpg",
        isPlaceholder: false,
      },
      {
        id: "oner",
        name: "Oner",
        role: "JGL",
        image: "/teams/t1/t1_jgl_img.jpg",
        isPlaceholder: false,
      },
      {
        id: "faker",
        name: "Faker",
        role: "MID",
        image: "/teams/t1/t1_mid_img.jpg",
        isPlaceholder: false,
      },
      {
        id: "keria",
        name: "Keria",
        role: "SPT",
        image: "/teams/t1/t1_spt_img.jpg",
        isPlaceholder: false,
      },
      {
        id: "peyz",
        name: "Peyz",
        role: "BOT",
        image: "/teams/t1/t1_bot_img.jpg",
        isPlaceholder: false,
      },
    ],
  },
  geng: {
    slug: "geng",
    name: "GEN.G",
    logo: "/teams/geng/logo_2.svg",
    slogan: "WE ARE GEN.G",
    colors: {
      primary: "#aa8a00",
      secondary: "#111111",
      accent: "#FFFFFF",
    },
    players: [
      {
        id: "kiin",
        name: "Kiin",
        role: "TOP",
        image: "/teams/geng/geng_top_img.jpg",
        isPlaceholder: false,
      },

      {
        id: "canyon",
        name: "Canyon",
        role: "JGL",
        image: "/teams/geng/geng_jgl_img.jpg",
        isPlaceholder: true,
      },
      {
        id: "chovy",
        name: "Chovy",
        role: "MID",
        image: "/teams/geng/geng_mid_img.jpg",
        isPlaceholder: false,
      },
      {
        id: "duro",
        name: "Duro",
        role: "SPT",
        image: "/teams/geng/geng_spt_img.png",
        isPlaceholder: false,
      },
      {
        id: "ruler",
        name: "Ruler",
        role: "BOT",
        image: "/teams/geng/geng_bot_img.png",
        isPlaceholder: false,
      },
    ],
  },
  kt: {
    slug: "kt",
    name: "kt Rolster",
    logo: "/teams/kt/logo_3.svg",
    slogan: "ONE AND ONLY kt",
    colors: {
      primary: "#E2012D",
      secondary: "#111111",
      accent: "#FFFFFF",
    },
    players: [
      {
        id: "top-empty",
        name: "TBD",
        role: "TOP",
        image: "/teams/placeholder/silhouette.png",
        isPlaceholder: true,
      },
      {
        id: "jgl-empty",
        name: "TBD",
        role: "JGL",
        image: "/teams/placeholder/silhouette.png",
        isPlaceholder: true,
      },
      {
        id: "bdd",
        name: "Bdd",
        role: "MID",
        image: "/teams/kt/kt_mid_img.jpg",
        isPlaceholder: false,
      },
      {
        id: "spt-empty",
        name: "TBD",
        role: "SPT",
        image: "/teams/placeholder/silhouette.png",
        isPlaceholder: true,
      },
      {
        id: "bot-empty",
        name: "TBD",
        role: "BOT",
        image: "/teams/placeholder/silhouette.png",
        isPlaceholder: true,
      },
    ],
  },
  hle: {
    slug: "hle",
    name: "HanHwa Life Esports",
    logo: "/teams/hle/logo_4.svg",
    slogan: "ONE AND ONLY hle",
    colors: {
      primary: "#E2012D",
      secondary: "#111111",
      accent: "#FFFFFF",
    },
    players: [
      {
        id: "zeus",
        name: "Zeus",
        role: "TOP",
        image: "/teams/hle/hle_top_img.png",
        isPlaceholder: false,
      },
      {
        id: "jgl-empty",
        name: "TBD",
        role: "JGL",
        image: "/teams/placeholder/silhouette.png",
        isPlaceholder: true,
      },
      {
        id: "mid-empty",
        name: "TBD",
        role: "MID",
        image: "/teams/placeholder/silhouette.png",
        isPlaceholder: true,
      },
      {
        id: "gumayusi",
        name: "Gumayusi",
        role: "BOT",
        image: "/teams/hle/hle_bot_img.png",
        isPlaceholder: false,
      },
      {
        id: "spt-empty",
        name: "TBD",
        role: "SPT",
        image: "/teams/placeholder/silhouette.png",
        isPlaceholder: true,
      },
    ],
  },
};
