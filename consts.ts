/**
 * UI
 */
export const breakPoint = 768
export const imageDefaltRatio = 1720 / 1053
export const youtubeVideoDefaltRatio = 3584 / (2240 - 10) // calculate width of youtube videos borders

/**
 * Website
 */
export const defaultMeta = {
  title: "yongmin ruucm",
  description: "A journey of programming to solving creative people's problems.",
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
export const placeholderImages = import.meta.globEager(`/pages/assets/placeholders/*.png`)

/**
 * Data
 */
export const availableTags = ["teams", "designers", "code-beginners", "writers", "highlights"]
export const cardDatas = [
  {
    title: "Shader Gradient",
    description: `3D Gradient Plugin & Package for Figma & Framer.`,
    duration: "2021 ─ 2023",
    slug: "shadergradient",
    tags: ["designers", "highlights"],
    role: "Developer / Designer (Director)",
    links: [
      {
        text: "Prototype",
        href: "https://shadergradient-8pju2hxvd-ruucm.vercel.app/landing",
      },
      {
        text: "Website",
        href: "https://www.shadergradient.co",
      },
      {
        text: "Framer",
        href: "https://framer.com/projects/new?duplicate=sJitbgOn6on6Savojbyk",
      },
      {
        text: "Figma Plugin",
        href: "https://www.figma.com/community/plugin/1203016883447870818/ShaderGradient",
      },
    ],
  },
  {
    title: "Payroller Design System",
    excerpt: `Super efficient workflow for designers and developers to work together.`,
    description: `Designers can draw real system components and it automatically converted to codes that can be used directly by developers. It was an innovative workflow for all team members and improved efficiency dramatically.`,
    duration: "2022 ~ ",
    slug: "payroller-design-system",
    tags: ["teams", "highlights"],
    role: "DevOps (Webpack + esbuild + Turborepo & Framer) / System Designer",
    links: [
      {
        text: "Website",
        href: "https://new-auth.d.payroller.io/signup/",
      },
    ],
  },
  {
    title: "Lighthouse Design System",
    description: `Open-sourced Design System solution to re-invent designing and developing workflows. It is one of the most popular packages in Framer Package Stores.`,
    // (It's been in the top five on the Framer Packages list.)
    duration: "2020 ~ ",
    slug: "lighthouse-design-system",
    tags: ["teams"],
    role: "Developer / System Designer",
    links: [
      {
        text: "Documentation Website",
        href: "https://lighthouse.harbor.school",
      },
      {
        text: "Lighthouse Gallery",
        href: "https://framer.com/projects/lighthouse-gallery--ky1cQZRYNQoLD9MZTOC3",
      },
      {
        text: "GitHub",
        href: "https://github.com/harbor-school/lighthouse",
      },
      {
        text: "Harbor School",
        href: "https://harbor.school/en/",
      },
    ],
  },
  {
    title: "Harbor School & Video Scrubber",
    description: `As the founder of Harbor School, I learned how software impacts people and society and markets. So I started to build a school to teach people how to code. I've been teaching about 100 students for about two years.`,
    duration: "2018 ~ ",
    slug: "harbor-school",
    tags: ["code-beginners", "highlights"],
    role: "Founder / Instructor / Developer / Designer / Video Editor",
    links: [
      {
        text: "Harbor School (online)",
        href: "https://harbor.school",
      },
      {
        text: "Harbor School (version.1 ─ offline lectures)",
        href: "https://class.harbor.school",
      },
      {
        text: "Video Scrubber (Demo)",
        href: "https://harbor.school/en/modern-html-css/html-basics/prerequisites/",
      },
    ],
  },
  {
    title: "Framer Packages",
    description: `I've been building many popular Framer packages for about two years for designers to create animations and prototypes quickly.`,
    duration: "2018 ~ ",
    slug: "framer-packages",
    tags: ["designers"],
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
    title: "Framer Code Generators",
    description: `Introducing a familiar path for designers who struggles to learn codes.`,
    duration: "2019",
    slug: "framer-code-generators",
    tags: ["code-beginners"],
    role: "Developer / Designer",
    links: [
      {
        text: "VS Code Extension",
        href: "https://marketplace.visualstudio.com/items?itemName=ruucm.framerx-code-generators",
      },
      {
        text: "Chrome Extension",
        href: "https://chrome.google.com/webstore/detail/framer-code-generator/lijpejhigjbpnfgonmnknknaoneddjei",
      },
    ],
  },
  {
    title: "Notion CMS",
    description: `I developed and designed the "Notion CMS System" for continuous writer's experiences. It applied to various websites, including the SELI Magazine.`,
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
