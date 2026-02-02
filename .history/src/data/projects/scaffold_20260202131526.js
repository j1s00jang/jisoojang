import scaffoldThumbnail from "../../assets/projects/scaffold/scaffold_card.png";
import scaffoldScreen from "../../assets/projects/scaffold/scaffold_screen01.png";
import scaffoldMockup from "../../assets/projects/scaffold/scaffold_mockup01.png";
import scaffoldUserResearch1 from "../../assets/projects/scaffold/scaffold_userResearch01.png";
import scaffoldUserResearch2 from "../../assets/projects/scaffold/scaffold_userResearch02.png";
import scaffoldBrandGuidelines1 from "../../assets/projects/scaffold/scaffold_guidelines01.png";
import scaffoldKeyFeatures1 from "../../assets/projects/scaffold/scaffold_keyFeatures01.png";
import scaffoldKeyFeatures2 from "../../assets/projects/scaffold/scaffold_keyFeatures02.png";
import scaffoldKeyFeatures3 from "../../assets/projects/scaffold/scaffold_keyFeatures03.mov";
import scaffoldMarketing1 from "../../assets/projects/scaffold/scaffold_marketing01.png";
import scaffoldMarketing2 from "../../assets/projects/scaffold/scaffold_marketing02.jpg";
import scaffoldMarketing3 from "../../assets/projects/scaffold/scaffold_marketing03.jpg";
import scaffoldKeyLearnings1 from "../../assets/projects/scaffold/scaffold_keyLearnings01.png";
import scaffoldKeyLearnings2 from "../../assets/projects/scaffold/scaffold_keyLearnings02.png";
import scaffoldKeyLearnings3 from "../../assets/projects/scaffold/scaffold_keyLearnings03.mp4";
import scaffoldKeyLearnings4 from "../../assets/projects/scaffold/scaffold_keyLearnings04.png";
import scaffoldKeyLearnings5 from "../../assets/projects/scaffold/scaffold_keyLearnings05.png";
import scaffoldInsights1 from "../../assets/projects/scaffold/scaffold_insights01.png";
import scaffoldLivedemoIcon from "../../assets/projects/scaffold/scaffold_livedemo_icon.png";
import scaffoldWireframesIcon from "../../assets/projects/scaffold/scaffold_wireframes_icon.png";
import scaffoldPromoIcon from "../../assets/projects/scaffold/scaffold_promo_icon.png";

export const scaffold = {
  /* --- Metadata --- */
  id: 1,
  name: "Scaffold",
  slug: "scaffold",
  category: "ux/ui",

  /* --- Assets --- */
  thumbnail: scaffoldThumbnail,
  screenImage: scaffoldScreen,
  mockupImage: scaffoldMockup,

  /* --- Intro (ProjectDetail header / Overview) --- */
  summary:
    "All-in-one funding platform for tradespeople that consolidates grant information with AI support",
  role: "UX/UI Designer / Graphic Designer",
  keySkills:
    "UX / UI / Layout / Product Design / User Research / Branding / Marketing / Print Design",
  overview:
    "Skilled tradespeople often missed grant deadlines or gave up looking for funding because the process was spread across multiple websites. Scaffold is an all-in-one financial resource app designed to help users find relevant grants, track deadlines, and stay organized in one place. \n\n As the project scope expanded, multiple features competed for attention, making it challenging to maintain a clear and usable core experience. Reliability and performance also became more important over time, requiring careful prioritization and ongoing refinement.",
  headerLinks: [
    {
      icon: scaffoldLivedemoIcon,
      label: "live demo",
      type: "liveDemo",
      url: "https://scaffold-ivory.vercel.app/grants?tab=Eligible",
    },
    {
      icon: scaffoldWireframesIcon,
      label: "wireframes",
      type: "external",
      url: "https://www.figma.com/design/GwmCtoUnl6Bwqr3FUsPauU/UI-design--Copy-?node-id=1878-3978&t=2Lx7lSpPUDo2GuJx-1",
    },
    {
      icon: scaffoldPromoIcon,
      label: "promo video",
      type: "anchor",
      anchorId: "promo-video",
    },
  ],

  /* --- ContentSections (template) --- */
  sections: [
    {
      heading: "Opportunity",
      paragraphs: [
        "Scaffold project focused on helping users quickly discover grants and financial information from anywhere, including during commutes. A key challenge was reducing friction in the application process while keeping content clear and easy to navigate on a small screen. The opportunity was to make grant information simpler to find, easier to understand, and faster to act on—so fewer deadlines and funding options would be missed.",
        "\n\nHigh-level goals were to:\n\n1. Show eligible resources to reduce website-hopping.\n2. Make information easy to scan on mobile.\n3. Reduce repetitive typing to lower frustration and speed up applications",
      ],
      images: [],
      imageLayout: "row",
    },
    {
      heading: "My Role",
      paragraphs: [
        "Sole contributor across dashboard UX, UI consistency, marketing print materials, and video storytelling:",
        "\n - Designed the main dashboard wireframe and core card layout, which became the baseline for the team’s UI/UX work.",
        "- Defined the UI spacing system across screens, including typography rules, line spacing, component spacing, and alignment.",
        "- Owned the print-tested marketing materials, including the brochure and business card.",
        "- Created the storyboard and script for the promotional video, and directed the shoot day.",
      ],
      images: [],
      imageLayout: "row",
    },
    {
      heading: "User Research",
      paragraphs: [
        "Early exploratory research was conducted through a construction site visit and outreach through referrals and personal networks. The findings helped clarify the project direction and supported a mid-project shift in focus.",
        "\n A clear pain point emerged: grant information is spread across multiple websites, making it difficult to find reliable details and stay on top of deadlines. The survey results below highlight the most common challenges and needs shared during early research.",
      ],
      images: [scaffoldUserResearch1, scaffoldUserResearch2],
      imageLayout: "stack",
    },
    {
      heading: "Findings & Direction",
      paragraphs: [
        "Early research showed that grant access wasn’t only blocked by eligibility. Even when people believed they qualified, many still dropped off because information was hard to find and the process required multiple steps, documents, and repeated effort.",
        "\n Several patterns appeared consistently:",
        "\n - Grant information was often outdated, with some programs no longer available and others already past their deadlines.",
        "- Eligibility and requirements felt unclear, leading to hesitation and drop-off.",
        "- The process felt long and demanding, especially when time and attention were limited.",
        "- Checking grant updates across many websites was not realistic in day-to-day life.",
      ],
    },
    {
      heading: "Design principles & Starting point",
      paragraphs: [
        "These insights shaped a clear expectation: financial resources should be easy to find, simple to understand, and quick to act on. The experience focused on:",
        "\n Minimal friction: reduce steps and repeated input where possible",
        "Clear guidance: make requirements and next steps easy to follow",
        "Mobile-first clarity: help users scan key details quickly on a small screen",
        "Deadline support: make important dates hard to miss",
      ],
    },
    {
      images: [
        {
          type: "iframe",
          src: "https://embed.figma.com/board/h0fL114MqoYIkco8U5CMx2/Research-and-Ideation?node-id=0-1&embed-host=share",
          width: 1000,
          height: 550,
          className: "scaffold-insights-figma-embed",
          caption: "Primary and secondary research on Figma",
        },
      ],
      imageLayout: "stack",
    },
    {
      paragraphs: [
        "Three guiding questions informed the design strategy:",
        "How can the experience work for everyone, everywhere?",
        "Which contexts and constraints should be considered?",
        "How can the application process be simplified while helping users track deadlines?",
      ],
      images: [],
      imageLayout: "stack",
    },
    {
      heading: "The discovery",
      paragraphs: [
        "Primary research revealed that many participants knew they were eligible for grants, yet still abandoned the process because information was difficult to find and applications required multiple steps and documentation. These insights clarified a clear expectation: skilled tradespeople wanted to access financial resources with minimal effort and minimal friction.",
        "\nEveryone deserves access to the grants they qualify for—and to financial information that is easy to find. Clear guidance can become a foundation for stability. That idea sparked the creation of Scaffold.",
      ],
      images: [
        {
          type: "iframe",
          src: "https://embed.figma.com/proto/SF7NG15PW8O3hxeu0CKaSw/User-Persona?node-id=1-61&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share",
          width: 800,
          height: 650,
          className: "scaffold-discovery-figma-embed",
        },
      ],
      imageLayout: "row",
    },
    {
      heading: "How we started",
      paragraphs: [
        "Three core questions informed Scaffold’s design strategy:",
        "\n1. How can the experience work for everyone, everywhere?",
        "2. Which contexts and constraints should be considered?",
        "3. How can the application process be simplified while helping users track deadlines?",
        "\nEarly on, it was important to understand the factors that shape skilled tradespeople’s day-to-day experiences, including their work routines and lifestyle constraints. The team mapped user journeys across key scenarios, then translated those insights into a framework of contexts and situational spectrum to guide feature decisions and layout priorities.",
      ],
      images: [
        {
          type: "iframe",
          src: "https://embed.figma.com/board/Hd9SkllzfNwA02Vx50dng7/Scaffold-Ideation-User-Flow--Copy-?node-id=67-69&embed-host=share",
          width: 1000,
          height: 450,
          className: "scaffold-how-we-started-figma-embed",
        },
      ],
      imageLayout: "stack",
    },
    {
      heading: "Brand Guidelines",
      paragraphs: [
        "The iconic purple draws attention, complemented by energetic orange accents. Two typefaces are used across Scaffold’s identity: Akira is applied to titles and labels to create a bold, structured tone, while Montserrat supports readability and usability in longer text. The Scaffold logo is built around the letter “S,” with stacked block forms that suggest construction and stability. This visual concept reinforces the brand idea of “building foundations,” aligning the identity with the purpose and value of Scaffold.",
      ],
      images: [scaffoldBrandGuidelines1],
      imageLayout: "row",
    },
    {
      heading: "Key Features",
      paragraphs: [
        "Grant information needed to be easy to scan without causing users to miss critical details. A card-based layout surfaced the grant name, deadline, and eligibility at a glance, paired with each organization’s logo for quick recognition. This structure helped users quickly identify eligible grants in British Columbia, Canada, while remaining flexible enough to scale and adapt across different user contexts.",
        "\nBecause grants are often applied for on external websites, each card included a direct link to the official application page to reduce website-hopping. To streamline repeated form entry, Scaffold introduced a profile built around commonly required personal and education-related questions, allowing information to be copied and reused to minimize repetitive typing and reduce errors. Since essay writing on a phone is inconvenient, a web supplement supported drafting on a larger screen, with AI assistance for generating a first draft from saved profile details and a structured list for managing applied grants.",
      ],
      images: [scaffoldKeyFeatures1, scaffoldKeyFeatures2],
      imageLayout: "row",
      imageWrapperClass: "scaffold-key-features-media",
    },
    {
      images: [
        {
          type: "video",
          src: scaffoldKeyFeatures3,
          className: "scaffold-key-features-video",
          caption: "Streamline grant application process with web supplement",
        },
      ],
      imageLayout: "stack",
      imageWrapperClass: "scaffold-key-features-media",
    },
    {
      heading: "Marketing",
      paragraphs: [
        "The brochure cover was designed to capture attention with a bold logo and a concise slogan. A subtle grid pattern in the background referenced scaffolding and reinforced the project’s visual identity. The Z-fold format guided viewers through a clear storytelling, starting with the day-to-day struggles skilled tradespeople face and progressing to how Scaffold functions as a supportive financial app.",
        "\nThe business cards used the same colour scheme to maintain brand consistency, with softly curved cuts that created a distinctive, approachable look and helped the cards stand out.",
      ],
      images: [scaffoldMarketing1],
      imageLayout: "row",
    },
    {
      images: [scaffoldMarketing2, scaffoldMarketing3],
      imageLayout: "row",
      imageWrapperClass: "scaffold-marketing-images",
    },
    {
      paragraphs: [
        "This work highlighted the practical differences between RGB and CMYK. Multiple rounds of print testing helped refine the palette and ensured more consistent results from screen to print.",
        "\nIt also reinforced key principles of print layout and grid systems, supporting clearer hierarchy, alignment, and spacing across the brochure and business card designs.",
      ],
    },
    {
      heading: "Storyboard & Film Production",
      paragraphs: [
        "Scaffold created the storyboard before production began. The story was inspired by a real experience uncovered during research: a skilled tradeswoman facing financial struggle was able to continue her training and daily life after receiving grants. With the support of a passionate team, the concept was brought to life as a cinematic promotional video.",
        "\nThe video was screened on pitch day to introduce the app concept, and it reinforced the same message the Scaffold product aimed to deliver—financial support can be a foundation that helps skilled tradespeople sustain their careers.",
      ],
      images: [scaffoldKeyLearnings1, scaffoldKeyLearnings2],
      imageLayout: "row",
    },
    {
      sectionId: "promo-video",
      heading: "Promotional video",
      images: [
        {
          type: "video",
          src: scaffoldKeyLearnings3,
          className: "project-detail-mockup-image",
        },
      ],
      imageLayout: "stack",
      imageWrapperClass: "scaffold-key-learnings-media",
    },
    {
      heading: "Key learnings & reflections",
      images: [scaffoldKeyLearnings4, scaffoldKeyLearnings5],
      imageLayout: "row",
      imageWrapperClass: "scaffold-key-learnings-media",
    },
    {
      paragraphs: [
        "This project became a strong foundation for growth in UI/UX design. It strengthened communication and collaboration across the team, supported by generous guidance from BCIT instructors throughout the process.",
        "\nPresenting the work to a large audience—sharing how the concept evolved from early ideas to a developed product—was a proud milestone. Most importantly, the project created space for experimentation, iteration, and learning from failures, shaping a more confident and resilient design approach.",
      ],
    },
  ],
};
