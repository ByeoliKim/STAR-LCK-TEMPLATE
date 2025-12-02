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
  slogan2: string;
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
    slogan: "Make Them Believe",
    slogan2: "#TogetherAs1#T1inME",
    colors: {
      primary: "#e2012d",
      secondary: "#111111",
      accent: "#FFFFFF",
    },
    players: [
      {
        id: "doran",
        name: "Doran",
        role: "TOP",
        image: "/teams/t1/t1_top_img.png",
        isPlaceholder: false,
      },
      {
        id: "oner",
        name: "Oner",
        role: "JGL",
        image: "/teams/t1/t1_jgl_img.png",
        isPlaceholder: false,
      },
      {
        id: "faker",
        name: "Faker",
        role: "MID",
        image: "/teams/t1/t1_mid_img.png",
        isPlaceholder: false,
      },
      {
        id: "keria",
        name: "Keria",
        role: "SPT",
        image: "/teams/t1/t1_spt_img.png",
        isPlaceholder: false,
      },
      {
        id: "peyz",
        name: "Peyz",
        role: "BOT",
        image: "/teams/t1/t1_bot_img.png",
        isPlaceholder: false,
      },
    ],
  },
  geng: {
    slug: "geng",
    name: "GEN.G",
    logo: "/teams/geng/logo_2.svg",
    slogan: "CHANGE THE GAME, CHANGE THE WORLD",
    slogan2: "TIGERNATION",
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
        image: "/teams/geng/geng_top_img.png",
        isPlaceholder: false,
      },

      {
        id: "canyon",
        name: "Canyon",
        role: "JGL",
        image: "/teams/geng/geng_jgl_img.png",
        isPlaceholder: false,
      },
      {
        id: "chovy",
        name: "Chovy",
        role: "MID",
        image: "/teams/geng/geng_mid_img.png",
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
    slogan: "Time to Prove Our selves.",
    slogan2: "We Make Legends",
    colors: {
      primary: "#ff0a07",
      secondary: "#111111",
      accent: "#FFFFFF",
    },
    players: [
      {
        id: "perfect",
        name: "PerfecT",
        role: "TOP",
        image: "/teams/kt/kt_top_img.png",
        isPlaceholder: false,
      },
      {
        id: "cuzz",
        name: "Cuzz",
        role: "JGL",
        image: "/teams/kt/kt_jgl_img.png",
        isPlaceholder: false,
      },
      {
        id: "bdd",
        name: "Bdd",
        role: "MID",
        image: "/teams/kt/kt_mid_img.png",
        isPlaceholder: false,
      },
      {
        id: "ghost",
        name: "Ghost",
        role: "SPT",
        image: "/teams/kt/kt_spt_img.png",
        isPlaceholder: false,
      },
      {
        id: "aiming",
        name: "Aiming",
        role: "BOT",
        image: "/teams/kt/kt_bot_img.png",
        isPlaceholder: false,
      },
    ],
  },
  hle: {
    slug: "hle",
    name: "HanHwa Life Esports",
    logo: "/teams/hle/logo_4.svg",
    slogan: "GREAT CHALLENGERS.",
    slogan2: "WHY NOT?! SUPER DIVE",
    colors: {
      primary: "#f37321",
      secondary: "#FFFFFF",
      accent: "#bbbdc0",
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
        id: "kanavi",
        name: "Kanavi",
        role: "JGL",
        image: "/teams/hle/hle_jgl_img.png",
        isPlaceholder: false,
      },
      {
        id: "zeka",
        name: "Zeka",
        role: "MID",
        image: "/teams/hle/hle_mid_img.png",
        isPlaceholder: false,
      },
      {
        id: "gumayusi",
        name: "Gumayusi",
        role: "BOT",
        image: "/teams/hle/hle_bot_img.png",
        isPlaceholder: false,
      },
      {
        id: "delight",
        name: "Delight",
        role: "SPT",
        image: "/teams/hle/hle_spt_img.png",
        isPlaceholder: false,
      },
    ],
  },
};
