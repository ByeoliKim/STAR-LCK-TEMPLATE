// lib/config/teams.ts

export type LolRole = "TOP" | "JGL" | "MID" | "BOT" | "SPT";

// 모스트 챔피언 정보 타입
// 스토브리그 중 선수가 바뀌었어도 2025 월즈 기준으로 모스트 챔피언 데이터 넣음
// 최근 2025 월즈 기록 위주로 채움 더미 데이터가 있을 수도 있어용~!
// key : 내부적으로 사용할 챔피언 키 (예: nunu)
// name: 화면에 노출할 챔피언 이름 (예: 누누와 윌럼프)
// image: 챔피언 이미지
// winRate: 승률 (%)
export type MostChamp = {
  key: string;
  name: string;
  image: string;
  winRate: number;
};

// 플레이어 = 선수 타입
// mostChamps : 해당 선수의 주력 챔피언 목록 (3개 사용)
export type Player = {
  id: string;
  name: string;
  role: LolRole;
  image: string;
  isPlaceholder?: boolean;
  mostChamps?: MostChamp[];
};

// 팀 타입
// ReactBits Scroll 슬로건 텍스트 : slogan, slogan2
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
        mostChamps: [
          {
            key: "ksante",
            name: "크산테",
            image: "/champs/champs_1.jpg",
            winRate: 66.7,
          },
          {
            key: "renekton",
            name: "레넥톤",
            image: "/champs/champs_2.jpg",
            winRate: 66.7,
          },
          {
            key: "sion",
            name: "사이온",
            image: "/champs/champs_3.jpg",
            winRate: 66.7,
          },
        ],
      },
      {
        id: "oner",
        name: "Oner",
        role: "JGL",
        image: "/teams/t1/t1_jgl_img.png",
        isPlaceholder: false,
        mostChamps: [
          {
            key: "xinzhao",
            name: "신 짜오",
            image: "/champs/champs_4.jpg",
            winRate: 75.0,
          },
          {
            key: "wukong",
            name: "오공",
            image: "/champs/champs_5.jpg",
            winRate: 66.7,
          },
          {
            key: "jarvaniv",
            name: "자르반 4세",
            image: "/champs/champs_6.jpg",
            winRate: 66.7,
          },
        ],
      },
      {
        id: "faker",
        name: "Faker",
        role: "MID",
        image: "/teams/t1/t1_mid_img.png",
        isPlaceholder: false,
        mostChamps: [
          {
            key: "taliyah",
            name: "탈리야",
            image: "/champs/champs_7.jpg",
            winRate: 100.0,
          },
          {
            key: "orianna",
            name: "오리아나",
            image: "/champs/champs_8.jpg",
            winRate: 100.0,
          },
          {
            key: "anivia",
            name: "애니비아",
            image: "/champs/champs_9.jpg",
            winRate: 50.0,
          },
        ],
      },
      {
        id: "keria",
        name: "Keria",
        role: "SPT",
        image: "/teams/t1/t1_spt_img.png",
        isPlaceholder: false,
        mostChamps: [
          {
            key: "neeko",
            name: "니코",
            image: "/champs/champs_10.jpg",
            winRate: 75.0,
          },
          {
            key: "leona",
            name: "레오나",
            image: "/champs/champs_11.jpg",
            winRate: 100.0,
          },
          {
            key: "rakan",
            name: "라칸",
            image: "/champs/champs_12.jpg",
            winRate: 66.7,
          },
        ],
      },
      {
        id: "peyz",
        name: "Peyz",
        role: "BOT",
        image: "/teams/t1/t1_bot_img.png",
        isPlaceholder: false,
        mostChamps: [
          {
            key: "varus",
            name: "바루스",
            image: "/champs/champs_13.jpg",
            winRate: 100.0,
          },
          {
            key: "kaisa",
            name: "카이사",
            image: "/champs/champs_14.jpg",
            winRate: 66.7,
          },
          {
            key: "xayah",
            name: "자야",
            image: "/champs/champs_15.jpg",
            winRate: 100.0,
          },
        ],
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
        mostChamps: [
          {
            key: "sion",
            name: "사이온",
            image: "/champs/champs_16.jpg",
            winRate: 33.3,
          },
          {
            key: "ambessa",
            name: "암베사",
            image: "/champs/champs_17.jpg",
            winRate: 100.0,
          },
          {
            key: "ksante",
            name: "크산테",
            image: "/champs/champs_18.jpg",
            winRate: 50.0,
          },
        ],
      },

      {
        id: "canyon",
        name: "Canyon",
        role: "JGL",
        image: "/teams/geng/geng_jgl_img.png",
        isPlaceholder: false,
        mostChamps: [
          {
            key: "xinzhao",
            name: "신 짜오",
            image: "/champs/champs_19.jpg",
            winRate: 66.7,
          },
          {
            key: "wukong",
            name: "오공",
            image: "/champs/champs_20.jpg",
            winRate: 100.0,
          },
          {
            key: "vi",
            name: "바이",
            image: "/champs/champs_21.jpg",
            winRate: 50.0,
          },
        ],
      },
      {
        id: "chovy",
        name: "Chovy",
        role: "MID",
        image: "/teams/geng/geng_mid_img.png",
        isPlaceholder: false,
        mostChamps: [
          {
            key: "orianna",
            name: "오리아나",
            image: "/champs/champs_22.jpg",
            winRate: 66.7,
          },
          {
            key: "galio",
            name: "갈리오",
            image: "/champs/champs_23.jpg",
            winRate: 100.0,
          },
          {
            key: "ryze",
            name: "라이즈",
            image: "/champs/champs_24.jpg",
            winRate: 50.0,
          },
        ],
      },
      {
        id: "duro",
        name: "Duro",
        role: "SPT",
        image: "/teams/geng/geng_spt_img.png",
        isPlaceholder: false,
        mostChamps: [
          {
            key: "braum",
            name: "브라움",
            image: "/champs/champs_25.jpg",
            winRate: 66.7,
          },
          {
            key: "alistar",
            name: "알리스타",
            image: "/champs/champs_26.jpg",
            winRate: 50.0,
          },
          {
            key: "rakan",
            name: "라칸",
            image: "/champs/champs_27.jpg",
            winRate: 50.0,
          },
        ],
      },
      {
        id: "ruler",
        name: "Ruler",
        role: "BOT",
        image: "/teams/geng/geng_bot_img.png",
        isPlaceholder: false,
        mostChamps: [
          {
            key: "lucian",
            name: "루시안",
            image: "/champs/champs_28.jpg",
            winRate: 66.7,
          },
          {
            key: "kaisa",
            name: "카이사",
            image: "/champs/champs_29.jpg",
            winRate: 33.3,
          },
          {
            key: "corki",
            name: "코르키",
            image: "/champs/champs_30.jpg",
            winRate: 50.0,
          },
        ],
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
        mostChamps: [
          {
            key: "rumble",
            name: "럼블",
            image: "/champs/champs_31.jpg",
            winRate: 80.0,
          },
          {
            key: "ornn",
            name: "오른",
            image: "/champs/champs_32.jpg",
            winRate: 100.0,
          },
          {
            key: "renekton",
            name: "레넥톤",
            image: "/champs/champs_33.jpg",
            winRate: 100.0,
          },
        ],
      },
      {
        id: "cuzz",
        name: "Cuzz",
        role: "JGL",
        image: "/teams/kt/kt_jgl_img.png",
        isPlaceholder: false,
        mostChamps: [
          {
            key: "trundle",
            name: "트런들",
            image: "/champs/champs_34.jpg",
            winRate: 66.7,
          },
          {
            key: "wukong",
            name: "오공",
            image: "/champs/champs_35.jpg",
            winRate: 66.7,
          },
          {
            key: "jarvaniv",
            name: "자르반 4세",
            image: "/champs/champs_36.jpg",
            winRate: 100.0,
          },
        ],
      },
      {
        id: "bdd",
        name: "Bdd",
        role: "MID",
        image: "/teams/kt/kt_mid_img.png",
        isPlaceholder: false,
        mostChamps: [
          {
            key: "orianna",
            name: "오리아나",
            image: "/champs/champs_37.jpg",
            winRate: 100.0,
          },
          {
            key: "cassiopeia",
            name: "카시오페아",
            image: "/champs/champs_38.jpg",
            winRate: 66.7,
          },
          {
            key: "ryze",
            name: "라이즈",
            image: "/champs/champs_39.jpg",
            winRate: 33.3,
          },
        ],
      },
      {
        id: "ghost",
        name: "Ghost",
        role: "SPT",
        image: "/teams/kt/kt_spt_img.png",
        isPlaceholder: false,
        mostChamps: [
          {
            key: "alistar",
            name: "알리스타",
            image: "/champs/champs_40.jpg",
            winRate: 75.0,
          },
          {
            key: "braum",
            name: "브라움",
            image: "/champs/champs_41.jpg",
            winRate: 66.7,
          },
          {
            key: "neeko",
            name: "니코",
            image: "/champs/champs_42.jpg",
            winRate: 100.0,
          },
        ],
      },
      {
        id: "aiming",
        name: "Aiming",
        role: "BOT",
        image: "/teams/kt/kt_bot_img.png",
        isPlaceholder: false,
        mostChamps: [
          {
            key: "caitlyn",
            name: "케이틀린",
            image: "/champs/champs_43.jpg",
            winRate: 75.0,
          },
          {
            key: "ezreal",
            name: "이즈리얼",
            image: "/champs/champs_44.jpg",
            winRate: 100.0,
          },
          {
            key: "corki",
            name: "코르키",
            image: "/champs/champs_45.jpg",
            winRate: 100.0,
          },
        ],
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
        mostChamps: [
          {
            key: "ambessa",
            name: "암베사",
            image: "/champs/champs_46.jpg",
            winRate: 50.0,
          },
          {
            key: "rumble",
            name: "럼블",
            image: "/champs/champs_47.jpg",
            winRate: 100.0,
          },
          {
            key: "reksai",
            name: "렉사이",
            image: "/champs/champs_48.jpg",
            winRate: 50.0,
          },
        ],
      },
      {
        id: "kanavi",
        name: "Kanavi",
        role: "JGL",
        image: "/teams/hle/hle_jgl_img.png",
        isPlaceholder: false,
        mostChamps: [
          {
            key: "jarvaniv",
            name: "자르반 4세",
            image: "/champs/champs_49.jpg",
            winRate: 50.0,
          },
          {
            key: "vi",
            name: "바이",
            image: "/champs/champs_50.jpg",
            winRate: 100.0,
          },
          {
            key: "xinzhao",
            name: "신 짜오",
            image: "/champs/champs_51.jpg",
            winRate: 50.0,
          },
        ],
      },
      {
        id: "zeka",
        name: "Zeka",
        role: "MID",
        image: "/teams/hle/hle_mid_img.png",
        isPlaceholder: false,
        mostChamps: [
          {
            key: "azir",
            name: "아지르",
            image: "/champs/champs_52.jpg",
            winRate: 66.7,
          },
          {
            key: "aurora",
            name: "오로라",
            image: "/champs/champs_53.jpg",
            winRate: 50.0,
          },
          {
            key: "taliyah",
            name: "탈리야",
            image: "/champs/champs_54.jpg",
            winRate: 50.0,
          },
        ],
      },
      {
        id: "gumayusi",
        name: "Gumayusi",
        role: "BOT",
        image: "/teams/hle/hle_bot_img.png",
        isPlaceholder: false,
        mostChamps: [
          {
            key: "kaisa",
            name: "카이사",
            image: "/champs/champs_55.jpg",
            winRate: 33.3,
          },
          {
            key: "ezreal",
            name: "이즈리얼",
            image: "/champs/champs_56.jpg",
            winRate: 100.0,
          },
          {
            key: "lucian",
            name: "루시안",
            image: "/champs/champs_57.jpg",
            winRate: 100.0,
          },
        ],
      },
      {
        id: "delight",
        name: "Delight",
        role: "SPT",
        image: "/teams/hle/hle_spt_img.png",
        isPlaceholder: false,
        mostChamps: [
          {
            key: "alistar",
            name: "알리스타",
            image: "/champs/champs_58.jpg",
            winRate: 50.0,
          },
          {
            key: "rakan",
            name: "라칸",
            image: "/champs/champs_59.jpg",
            winRate: 100.0,
          },
          {
            key: "bard",
            name: "바드",
            image: "/champs/champs_60.jpg",
            winRate: 100.0,
          },
        ],
      },
    ],
  },
};
