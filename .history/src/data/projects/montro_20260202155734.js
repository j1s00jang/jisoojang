import montroThumbnail from "../../assets/projects/montro/montro_card.png";
import montroScreen from "../../assets/projects/montro/montro_screen.png";
import montroMockup from "../../assets/projects/montro/montro_mockup.png";
import montroWebsite from "../../assets/projects/montro/montro_website.png";
import montroUserResearch1 from "../../assets/projects/montro/montro_userResearch01.png";
import montroUserResearch2 from "../../assets/projects/montro/montro_userResearch02.png";
import montroInsights1 from "../../assets/projects/montro/montro_insights01.png";
import montroBrandGuidelines1 from "../../assets/projects/montro/montro_guidelines01.png";
import montroKeyFeatures1 from "../../assets/projects/montro/montro_keyFeatures01.png";
import montroKeyFeatures2 from "../../assets/projects/montro/montro_keyFeatures02.png";
import montroKeyFeatures3 from "../../assets/projects/montro/montro_keyFeatures03.png";
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
  role: "UX/UI Designer / UX Researcher",
  keySkills:
    "UX / UI / Layout / Product Design / User Research / Branding / Marketing",
  overview:
    "Montro is a gamified expense-tracking app designed to help people build consistent spending habits by reducing “tracking fatigue.” Using behavior-design patterns such as clear goals, progress feedback, and lightweight rewards, Montro turns daily logging into a quick, motivating routine—so users can stay aware of their spending without feeling overwhelmed.",

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
      imageLayout: "row",
    },
    {
      heading: "Opportunity",
      paragraphs: [
        `**Montro** began with research into why younger users struggle to maintain expense-tracking habits. While many participants believed tracking improves spending awareness, they described manual logging as tedious and easy to abandon. Like a New Year’s resolution, tracking starts strong and quickly fades without ongoing motivation. This gap created an opportunity to redesign expense tracking as a low-effort routine supported by habit-building cues and rewards.`,
        `&nbsp;`,
        `So we focused on two levers: reducing logging friction and creating motivation loops that reward consistency.`,
      ],
      images: [],
      imageLayout: "row",
    },
    {
      heading: "My Role",
      paragraphs: [
        `Key contributions focused on making expense tracking feel less exhausting and more motivating through visual and interaction design. A cohesive mobile UI system was developed with a playful futuristic direction, supported by consistent hierarchy, grouping, and spacing rules to keep numerical data scannable.`,
        `&nbsp;`,
        `The dashboard prioritized goal progress as the main focal point, paired with brief motivational microcopy. Monthly insights and the reward-supported expense-entry flow were designed to encourage reflection and repeat use.`,
      ],
      images: [],
      imageLayout: "row",
    },
    {
      heading: "User Research",
      paragraphs: [
        `Survey feedback from 10 participants suggested that expense tracking often relies on familiar, long-standing routines rather than dedicated apps. The main barriers were low sustained motivation, friction from having to open an app for every purchase, and the perception that manual entry is tedious. Free tracking apps were also frequently described as discouraging due to intrusive ads and cluttered, overly complex layouts—reinforcing avoidance rather than habit formation.`,
      ],
      images: [montroUserResearch1, montroUserResearch2],
      caption: "Research summary: top barriers to adopting tracking apps.",
      imageLayout: "row",
    },
    {
      heading: "Insights",
      paragraphs: [
        `Insights showed that awareness alone doesn’t sustain expense tracking—consistency does. Long-term habit formation requires low-friction logging plus reinforcement (progress feedback and rewards) to prevent drop-off.`,
        `&nbsp;`,
        `These findings guided Montro’s values and clarified what the product must deliver. The user persona below represents the target user’s goals, barriers, and triggers that shaped the key experience decisions.`,
        `&nbsp;`,
      ],
      images: [
        {
          type: "iframe",
          src: "https://embed.figma.com/design/KPoHMB4oV1rHEHyfsWb9PM/User-Persona?node-id=25-58&embed-host=share",
          width: 1000,
          height: 650,
          className: "montro-insights-figma-embed",
          caption:
            "This persona reflects the most common motivation drop-off and friction points observed in the survey.",
        },
      ],
      imageLayout: "row",
    },
    {
      heading: "The discovery",
      paragraphs: [
        `**High habit formation potential:**`,
        `Despite frustrations, 55.6% have made tracking a regular habit, indicating that with the right features, more users could be nudged into consistent behaviour.`,
        `&nbsp;`,
        `**Incentives could be a game-changer:**`,
        `Incentive-based tracking could significantly boost adoption and consistency. Providing the user with some form of passive reward can help guide them to keep up a habit of tracking core expenses.`,
        `&nbsp;`,
        `**Skepticism toward bank syncing:**`,
        `Security concerns missed cash transactions, and incorrect categorization deters users from relying on bank-integrated solutions.`,
        `&nbsp;`,
        `**Desire for smarter tracking:**`,
        `Users don't just want summaries—they seek detailed insights and patterns across categories to make better financial decisions. Anyone can request numbers- meaningful suggestions to help guide their expense tracking journey make for a better user/app interaction system.`,
      ],
    },
    {
      heading: "How we started",
      paragraphs: [
        `Montro’s information architecture was structured around the primary user journeys and the smallest set of core features required to sustain daily tracking. The experience was designed to minimize numerical fatigue by keeping key tasks short, scannable, and repeatable. The user flow below maps how motivation and clarity were built into the journey—from quick expense entry to progress feedback and monthly reflection.`,
        `&nbsp;`,
        `**Design strategy**`,
        `&nbsp;`,

        `**Keep tracking effortless:** Reduce steps and decision points so logging feels quick and intuitive rather than complex.`,
        `**Reinforce consistency:** Tie rewards to goal progress and streak-like repetition to support long-term habit formation.`,
        `**Prevent numerical overload:** Use clear hierarchy, strong contrast, and streamlined screens to keep dense financial data easy to read.`,
      ],
      images: [
        {
          type: "iframe",
          src: "https://embed.figma.com/board/xwDzoST1o0eezu4KX5mNIn/User-Flow?node-id=1-144&embed-host=share",
          width: 800,
          height: 450,
          className: "montro-how-we-started-figma-embed",
          caption:
            "Montro team created a user flow to guide the design process and features list.",
        },
      ],
      imageLayout: "row",
    },
    {
      heading: "Brand Guidelines",
      paragraphs: [
        `Montro’s visual direction was shaped using a Moneta mood reference, then refined into an original style system optimized for high readability. High-contrast colors and energetic accents were chosen to keep financial data easy to scan and to support a motivating tone across the product. The style guide below captures the rules that maintain consistency across the UI.`,
      ],
      images: [montroBrandGuidelines1],
      imageLayout: "row",
    },
    {
      heading: "Key Features",
      paragraphs: [
        `**Fast expense entry:** Small purchases were treated as a key friction point because logging them often feels not worth the effort. A receipt-scan option enables quick capture from a single photo, while manual entry remains available when a receipt isn’t available—supporting consistent tracking without forcing an all-or-nothing workflow.`,
        `&nbsp;`,
        `**Budget setup with guided starting points:** A budgeting feature provides age-based starting suggestions informed by common financial benchmarks, while keeping full customization available to match individual goals and savings priorities.`,
        `&nbsp;`,
        `**Rewards tied to goal progress:** To support long-term habit formation, goal completion triggers a motivational moment—points are awarded and converted into rewards—reinforcing consistency beyond initial enthusiasm.`,
      ],
      images: [montroKeyFeatures1, montroKeyFeatures2, montroKeyFeatures3],
      imageLayout: "row",
      imageWrapperClass: "montro-key-features-images",
    },
    {
      heading: "Key learnings & reflections",
      paragraphs: [
        `Key learnings focused on evidence-informed design and iteration. Research inputs were converted into actionable priorities, then refined through prototype testing and feedback cycles to improve clarity, reduce cognitive load, and strengthen consistency in the experience. The project also expanded design-system thinking by defining repeatable rules for hierarchy, spacing, and components—especially for data-heavy interfaces. Working with full-stack students strengthened collaboration skills and improved the ability to align design intent with technical constraints.`,
      ],
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
