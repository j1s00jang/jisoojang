import montroThumbnail from "../../assets/projects/montro/montro_card.png";
import montroScreen from "../../assets/projects/montro/montro_screen.png";
import montroMockup from "../../assets/projects/montro/montro_mockup.png";
import montroWebsite from "../../assets/projects/montro/montro_website.png";
import montroUserResearch1 from "../../assets/projects/montro/montro_userResearch01.png";
import montroUserPersonas from "../../assets/projects/montro/montro_userPersonas.png";
import montroBrandGuidelines1 from "../../assets/projects/montro/montro_guidelines01.png";
import montroKeyFeatures1 from "../../assets/projects/montro/montro_keyFeatures01.mp4";
import montroKeyFeatures2 from "../../assets/projects/montro/montro_keyFeatures02.mp4";
import montroKeyLearnings1 from "../../assets/projects/montro/montro_keyLearnings01.mp4";
import montroLivedemoIcon from "../../assets/projects/montro/montro_livedemo_icon.png";
import montroWireframesIcon from "../../assets/projects/montro/montro_wireframes_icon.png";
import montroWebIcon from "../../assets/projects/montro/montro_web_icon.png";

export const montro = {
  id: 2,
  name: "Montro",
  slug: "montro",
  category: "ux/ui",

  thumbnail: montroThumbnail,
  screenImage: montroScreen,
  mockupImage: montroMockup,

  summary:
    "Gamified expense-tracking app that builds spending & saving goals and reward milestones",
  timeline: "Jan 2025 - May 2025 (18 weeks)",
  role: "UX/UI Designer / UX Researcher",
  keySkills:
    "UX / UI / Layout / Product Design / User Research / Branding / Marketing",
  overview: `**Montro is a gamified expense-tracking app** designed to help people build consistent spending habits by reducing “tracking fatigue” through behaviour design patterns such as clear goals, progress feedback, and rewards. Montro turns daily logging into a quick, motivating routine, so users can stay aware of their spending without feeling overwhelmed.`,

  headerLinks: [
    {
      icon: montroLivedemoIcon,
      label: "live demo",
      type: "liveDemo",
      url: "https://frontend-zyfs.onrender.com/login",
    },
    {
      icon: montroWireframesIcon,
      label: "wireframes",
      type: "external",
      url: "https://www.figma.com/design/m941MXTjIgArJgKf7thszG/Design----Proto---Copy-?node-id=1585-12406&t=zEQS4WyG1DHceZwM-1",
    },
    {
      icon: montroWebIcon,
      label: "marketing web",
      type: "external",
      url: "https://montro.framer.website",
    },
  ],

  sections: [
    {
      paragraphs: [],
      images: [montroWebsite],
      caption:
        "A marketing website was created to communicate Montro's value proposition and key features.",
      imageLayout: "row",
    },
    {
      heading: "Opportunity",
      paragraphs: [
        `**Montro** began with why younger users struggle to maintain expense-tracking habits. From the research, many participants believed tracking improves spending awareness. They described manual logging as tedious and easy to abandon; tracking expenses could be easily discouraged by manual typing and getting lost on track. This gap created an opportunity to redesign expense tracking as a low-effort routine supported by habit-building cues and rewards.`,
      ],
      images: [],
      imageLayout: "row",
    },
    {
      heading: "User Research",
      images: [montroUserResearch1],
      paragraphs: [
        `Survey results from 10 participants pointed out that expense tracking often relies on familiar, long-standing routines rather than dedicated apps. The main barriers were low sustained motivation, friction from having to open an app for every purchase, and the perception that manual entry is tedious. Free expense tracking apps were also often described as discouraging due to distracting ads and cluttered, overly complex layouts, and a lack of motivation. That reinforces avoidance rather than expense tracking habit building.`,
      ],
      imageLayout: "row",
    },
    {
      heading: "Insights",
      paragraphs: [
        `Insights showed that people understand expense tracking is important, but staying consistent is hard because there are few rewards and habits take time to build. One participant has tracked expenses for over 20 years and has maintained the habit. Participants also agreed that building this habit at a young age helps financially. To help young users form a long-term habit, logging must be quick and easy, and the app should motivate them with progress updates and small rewards.`,
        `&nbsp;`,
        `Montro's user personas were developed using research insights aligned with Montro’s goals.`,
      ],
      images: [montroUserPersonas],
      imageLayout: "row",
    },
    // {
    //   heading: "The discovery",
    //   paragraphs: [
    //     `**High habit formation potential:**`,
    //     `Despite frustrations, 55.6% have made tracking a regular habit, indicating that with the right features, more users could be nudged into consistent behaviour.`,
    //     `&nbsp;`,
    //     `**Incentives could be a game-changer:**`,
    //     `Incentive-based tracking could significantly boost adoption and consistency. Providing the user with some form of passive reward can help guide them to keep up a habit of tracking core expenses.`,
    //     `&nbsp;`,
    //     `**Skepticism toward bank syncing:**`,
    //     `Security concerns missed cash transactions, and incorrect categorization deters users from relying on bank-integrated solutions.`,
    //     `&nbsp;`,
    //     `**Desire for smarter tracking:**`,
    //     `Users don't just want summaries—they seek detailed insights and patterns across categories to make better financial decisions. Anyone can request numbers- meaningful suggestions to help guide their expense tracking journey make for a better user/app interaction system.`,
    //   ],
    // },
    {
      heading: "How we started",
      paragraphs: [
        `Montro’s information architecture was built around the main user journeys and the key features needed for simple daily tracking. The experience reduces screen fatigue by keeping tasks short, clear, and easy to repeat. The user flow below shows how the journey supports motivation from quick expense entry to progress updates. Monthly insights add a fun touch while helping users understand their spending and saving.`,
        `&nbsp;`,
        `**Design strategy**`,
        `&nbsp;`,

        `**Keep tracking effortless:** Reduce steps for logging expenses, and allow a quick glance at spending and saving goals from the main dashboard.`,
        `**Build long-term habit by motivation:** Use self-set goals and small rewards to encourage consistent tracking over time.`,
        `**Prevent numerical overload:** Avoid screens packed with numbers. Use clear hierarchy, strong contrast, and simplified layouts to make financial info easy to read.`,
      ],
      images: [
        {
          type: "iframe",
          src: "https://embed.figma.com/board/xwDzoST1o0eezu4KX5mNIn/User-Flow?node-id=1-144&embed-host=share",
          width: 800,
          height: 450,
          className: "montro-how-we-started-figma-embed",
          caption:
            "Created a user flow with an information architecture to support the design strategy.",
        },
      ],
      imageLayout: "row",
    },
    {
      heading: "Brand Guidelines",
      paragraphs: [
        `Montro’s visual style uses a playful, futuristic colour palette to create a positive feeling, then applies a clean, structured layout for high readability. High contrast and bright colours make financial data quick to scan and keep the tone motivating. The style guide below shows the rules used to keep the UI consistent.`,
      ],
      images: [montroBrandGuidelines1],
      imageLayout: "row",
    },
    {
      heading: "Key Features",
      paragraphs: [
        `**Fast expense logging:** Small purchases often didn’t feel worth the effort to log. A quick log and receipt-scan option lets users capture an expense with one photo, while manual entry is available when there’s no receipt.`,
      ],
      images: [
        {
          type: "video",
          src: montroKeyFeatures1,
          autoPlay: true,
          className: "scaffold-key-features-video",
          caption: "Main dashboard to quick expense logging",
        },
      ],
      imageLayout: "stack",
      imageWrapperClass: "scaffold-key-features-media",
    },
    {
      paragraphs: [
        `**Guided budget setup:** Budgeting starts with simple, age-based suggestions informed by financial research, with full customization to match personal goals and saving preferences.`,
        `&nbsp;`,
        `**Rewards for long-term habits:** To support habit-building, completing a goal triggers a motivational moment. Users earn reward points for reaching goals and can redeem them for gift cards (e.g., Apple or Nintendo).`,
      ],
      images: [
        {
          type: "video",
          src: montroKeyFeatures2,
          autoPlay: true,
          className: "scaffold-key-features-video",
          caption:
            "Set up budget with guided suggestions and customization options",
        },
      ],
      imageLayout: "stack",
      imageWrapperClass: "scaffold-key-features-media",
    },
    {
      heading: "Key learnings & reflections",
      paragraphs: [
        `From a user-testing comment: “The colour hurts my eyes. I would probably not use it.” **Montro team rebalanced user needs with the original concept and turned feedback into clear design priorities.** Prototype testing and repeated feedback cycles improved clarity, reduced cognitive load, and strengthened consistency across the experience.`,
        `&nbsp;`,
        `Exploring references, building multiple mood boards, and developing an alternative concept provided strong lessons in translating feedback into UX/UI decisions. The project also strengthened design-system thinking by defining repeatable rules for hierarchy, spacing, and components, especially for data-heavy screens. Collaborating with a large group, including full-stack development students, improved teamwork, communication, and cross-functional collaboration.`,
      ],
    },
    {
      heading: "Promotional video",
      images: [
        {
          type: "video",
          src: montroKeyLearnings1,
          className: "montro-key-learnings-video",
        },
      ],
      imageLayout: "row",
    },
  ],
};
