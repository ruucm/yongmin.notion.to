/**
 * UI
 */
export const breakPoint = 768

/**
 * Website
 */
export const defaultMeta = {
  title: "yongmin ruucm",
  description:
    "A journey of programming to solving creative people's problems.",
}
export const initialThemeState = {
  fontFamily: "system-ui, sans-serif",
  textSizeIncrement: "1.47",
  baseTextSize: 16,
  foregroundColorRgb: "0, 0, 0",
  backgroundColorHsl: "0, 0%, 76%",
  textFrameRatio: "2.37",
  textFrameY: "0.8",
  spaceIncrement: "1.65",
  unit: "0.5",
  accentHue: "254",
  accentSaturation: "31",
  accentLightness: "50",
  greySaturation: "5",
  radius: "0.4",
  fieldBorderWidth: "2",
  buttonRound: false,
}

export const imageBasePath = "/images"
export const placeholderBasePath = "/pages/assets/placeholders"

// @ts-ignore
export const placeholderImages = import.meta.globEager(
  `/pages/assets/placeholders/*.png`
)

/**
 * Data
 */
export const availableTags = [
  "design-teams",
  "techy-designers",
  "prototypers",
  "writers",
]
export const cardDatas = [
  {
    title: "Lighthouse Design System",
    description: `Open-sourced Design System solution to re-invent designing and developing workflows.`,
    duration: "2020 ~ ",
    slug: "lighthouse-design-system",
    tags: ["design-teams"],
    role: "Developer / System Designer",
    links: [
      {
        text: "Website",
        href: "https://lighthouse.harbor.school",
      },
    ],
  },
  {
    title: "Harbor School",
    description: `As the founder of Harbor School, I learned how software impacts people and society and markets.`,
    duration: "2018 ~ ",
    slug: "harbor-school",
    tags: ["techy-designers"],
    role: "Founder / Developer / Instructor",
    links: [
      {
        text: "harbor.school",
        href: "https://harbor.school",
      },
      {
        text: "class.harbor.school",
        href: "https://class.harbor.school",
      },
    ],
  },
  {
    title: "Framer Packages",
    description: ``,
    duration: "2018 ~ 2021",
    slug: "framer-packages",
    tags: ["prototypers"],
    role: "Developer / Designer",
    links: [
      {
        text: "Enhanced Lottie",
        href: "https://packages.framer.com/package/ruucm-h/enhanced-lottie",
      },
      {
        text: "Number Count",
        href: "https://packages.framer.com/package/ruucm-h/number-count",
      },
      {
        text: "Confetti +",
        href: "https://packages.framer.com/package/ruucm-h/confetti",
      },
      {
        text: "Saturation Gradients",
        href: "https://packages.framer.com/package/ruucm-h/mesh-gradients",
      },
    ],
  },
  {
    title: "3D Gradient Plugin for Figma & Framer",
    description: ``,
    duration: "2021 ─ WIP",
    slug: "3d-gradient-plugin",
    tags: ["prototypers"],
    role: "Developer / Designer",
    links: [
      {
        text: "Prototype",
        href: "https://elastic-lamport-d2e690.netlify.app/",
      },
    ],
  },
  {
    title: "Framer Code Generators",
    description: ``,
    duration: "2019",
    slug: "framer-code-generators",
    tags: ["techy-designers"],
    role: "Developer",
    links: [
      {
        text: "Framer Code Generators",
        href: "https://marketplace.visualstudio.com/items?itemName=ruucm.framerx-code-generators",
      },
    ],
  },
  {
    title: "Notion CMS",
    description: `Developed whole system (React + Python + Github CI)`,
    duration: "Oct 2020 ~ Dec 2020",
    slug: "notion-cms",
    tags: ["writers"],
    role: "Developer",
    links: [
      {
        text: "SLEI Magazine",
        href: "http://smile.seoul.kr/magazine",
      },
    ],
  },
  {
    title: "Framer Korea",
    description: `Lead Developer (React) / Program Manager`,
    duration: "2018 ~ ",
    slug: "framer-korea",
    tags: [],
    role: "Developer / Motion Designer",
    links: [
      {
        text: "2019 Meetup Website",
        href: "https://framerkorea.org/en/are-you-having-fun/",
      },
      {
        text: "2020 Meetup Website",
        href: "https://framerkorea.org",
      },
    ],
  },
  {
    title: "Seoul Lifelong Education Institute (SLEI) Magazine",
    description: `Developed whole website (React + Python + Github CI)`,
    duration: "Oct 2020 ~ Dec 2020",
    slug: "seli",
    tags: [],
    role: "Developer",
    links: [
      {
        text: "Website",
        href: "http://smile.seoul.kr/magazine",
      },
    ],
  },
  {
    title: "Pulsen - Motion based Chatbot",
    description: `Developed whole website (React + Framer)`,
    duration: "Mar 2019 - May 2019",
    slug: "pulsen",
    tags: [],
    role: "Developer",
    links: [
      {
        text: "Demo",
        href: "https://pulsen.netlify.app/?token=demo",
      },
    ],
  },
  {
    title: "Cnyttan - Online Shopping Site",
    description: `Developed whole website (Wordpress + PHP + React).`,
    duration: "Oct 2018 - Nov 2018",
    slug: "cnyttan",
    tags: [],
    role: "Developer",
    links: [
      {
        text: "Website",
        href: "https://cnyttan.com",
      },
    ],
  },
  // {
  //   title: "freelance works",
  //   description: `Make web applications to solve real-world challenges designing new development structures.`,
  //   duration: "2014 ~ ",
  //   slug: "freelance-works",
  // },
  {
    title: "vincent project",
    description: `Developed whole website (Wordpress + CSS).`,
    duration: "2014 ~ 2016",
    // outlink: "https://www.instagram.com/vincent.project/",
    slug: "vincent-project",
    tags: [],
    role: "Developer / Program Manager",
    links: [
      {
        text: "Instagram",
        href: "https://www.instagram.com/vincent.project/",
      },
      {
        text: "Website",
        href: "https://vincentproject.netlify.app/",
      },
    ],
  },
]

export const contactMail = "ruucm@ruucm.work"
