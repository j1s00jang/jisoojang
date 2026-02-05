import scaffoldThumbnail from "../../assets/projects/scaffold/scaffold_card.png";
import scaffoldScreen from "../../assets/projects/scaffold/scaffold_screen01.png";
import scaffoldMockup from "../../assets/projects/scaffold/scaffold_mockup01.png";
import scaffoldUserResearch1 from "../../assets/projects/scaffold/scaffold_userResearch01.png";
import scaffoldUserResearch2 from "../../assets/projects/scaffold/scaffold_userResearch02.png";
import scaffoldBrandGuidelines1 from "../../assets/projects/scaffold/scaffold_guidelines01.png";
import scaffoldKeyFeatures1 from "../../assets/projects/scaffold/scaffold_keyFeatures01.png";
import scaffoldKeyFeatures2 from "../../assets/projects/scaffold/scaffold_keyFeatures02.png";
import scaffoldKeyFeatures3 from "../../assets/projects/scaffold/scaffold_keyFeatures03.mp4";
import scaffoldMarketing1 from "../../assets/projects/scaffold/scaffold_marketing01.png";
import scaffoldMarketing2 from "../../assets/projects/scaffold/scaffold_marketing02.jpg";
import scaffoldMarketing3 from "../../assets/projects/scaffold/scaffold_marketing03.jpg";
import scaffoldKeyLearnings1 from "../../assets/projects/scaffold/scaffold_keyLearnings01.png";
import scaffoldKeyLearnings2 from "../../assets/projects/scaffold/scaffold_keyLearnings02.jpg";
import scaffoldStoryboard from "../../assets/projects/scaffold/scaffold_storyboard.png";
import scaffoldKeyLearnings3 from "../../assets/projects/scaffold/scaffold_keyLearnings03.mp4";
import scaffoldKeyLearnings4 from "../../assets/projects/scaffold/scaffold_keyLearnings04.png";
import scaffoldKeyLearnings5 from "../../assets/projects/scaffold/scaffold_keyLearnings05.png";
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
  overview: `Skilled tradespeople often missed grant deadlines or gave up looking for funding because the process was spread across multiple websites. **Scaffold** is an all-in-one financial resource app designed to help users find relevant grants, track deadlines, and stay organized in one place.`,
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
        `Scaffold project focused on helping users quickly discover grants and financial information from anywhere, including during commutes. A key challenge was reducing friction in the application process while keeping content clear and easy to navigate on a small screen. The opportunity was to make grant information simpler to find, easier to understand, and faster to act on, so fewer deadlines and funding options would be missed.`,

        `&nbsp;`,

        `**High-level goals were to:**
1. Show eligible resources in one place to reduce website-hopping.
2. Make information easy to scan on mobile so as not to miss the deadline.
3. Reduce repetitive typing to lower frustration and speed up applications.`,
      ],
      images: [],
      imageLayout: "row",
    },
    {
      heading: "My role",
      paragraphs: [
        `Owned dashboard UX, UI consistency, marketing print materials, and video storytelling:`,
        `&nbsp;`,
        `- Designed the main dashboard wireframe and core card layout, which became the baseline for the team’s UI/UX work.`,
        `- Defined the UI spacing system across screens, including typography rules, line spacing, component spacing, and alignment.`,
        `- Owned designing the visual identity and layout of the brochure and business card.`,
        `- Created the storyboard and script for the promotional video and directed the shoot day.`,
      ],
      images: [],
      imageLayout: "row",
    },
    {
      heading: "User research",
      paragraphs: [
        `Early exploratory research was conducted through a construction site visit and outreach through referrals and personal networks. The findings helped clarify the project direction and supported a mid-project shift in focus.`,
        `&nbsp;`,
        `**A clear pain point emerged:**`,
        `Grant information is spread across multiple websites, making it difficult to find reliable details and stay on top of deadlines. The survey results below highlight the most common challenges and needs shared during early research.`,
      ],
      images: [scaffoldUserResearch1, scaffoldUserResearch2],
      imageLayout: "stack",
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
      imageLayout: "row",
    },
    {
      heading: "Findings & Direction",
      paragraphs: [
        `Early research showed that grant access wasn’t only blocked by eligibility. Even when people believed they qualified, many dropped off because information was hard to find and the process required multiple steps, documents, and repeated effort.`,
        `&nbsp;`,
        `**Several patterns appeared consistently:**`,
        `- Grant information was often outdated, with some programs no longer available and others already past their deadlines.`,
        `- Eligibility and requirements felt unclear, leading to hesitation and drop-off.`,
        `- The process felt long and demanding, especially when time and attention were limited.`,
        `- Checking grant updates across many websites was not realistic in day-to-day life.`,
        `&nbsp;`,
        `Based on the findings, key features were developed with a clear user flow to address the patterns.`,
      ],
      images: [
        {
          type: "iframe",
          src: "https://embed.figma.com/board/Hd9SkllzfNwA02Vx50dng7/Scaffold-Ideation-User-Flow--Copy-?node-id=67-69&embed-host=share",
          width: 1000,
          height: 550,
          className: "scaffold-how-we-started-figma-embed",
          caption: "User flow diagram & Key features ideation on Figma",
        },
      ],
    },
    {
      heading: "Design principles & Starting point",
      paragraphs: [
        `These insights shaped a clear expectation: financial resources should be easy to find, simple to understand, and quick to act on.`,
        `&nbsp;`,
        `**1. Minimal friction:** Reduce steps and repeated input where possible`,
        `**2. Clear guidance:** Make requirements and next steps easy to follow`,
        `**3. Mobile-first clarity:** Help users scan key details quickly on a small screen`,
        `**4. Deadline support:** Make important dates hard to miss`,
        `&nbsp;`,
        `To merge into a cohesive design strategy, user personas were created to represent key audience segments and guide feature decisions.`,
      ],
    },
    {
      images: [
        {
          type: "iframe",
          src: "https://embed.figma.com/proto/SF7NG15PW8O3hxeu0CKaSw/User-Persona?node-id=1-61&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share",
          width: 800,
          height: 650,
          className: "scaffold-discovery-figma-embed",
        },
      ],
      imageLayout: "stack",
    },
    {
      paragraphs: [
        `**Three guiding questions informed the design strategy:**`,
        `&nbsp;`,
        `How can the experience work for everyone, everywhere?`,
        `Which contexts and constraints should be considered?`,
        `How can the application process be simplified while helping users track deadlines?`,
        `&nbsp;`,
        `Day-to-day routines and real-world constraints were considered early, including work schedules and on-the-go use. Key scenarios were mapped into simple journeys, then translated into a set of context rules to guide feature decisions and layout priorities—keeping the core flow focused on eligibility, clear steps, and deadline visibility.`,
      ],
      images: [],
      imageLayout: "stack",
    },
    {
      heading: "Key features",
      paragraphs: [
        `Grant information needed to be easy to scan without missing critical details. Scaffold focused on **three core features** that reduce friction and help users act on opportunities faster.`,
        `&nbsp;`,
        `- **Scan-friendly grant cards** : A card-based layout highlights the grant name, deadline, and eligibility at a glance. Each card also includes the organization’s logo to support quick recognition. This structure helps users quickly identify eligible grants in British Columbia, Canada, while staying flexible enough to scale across different needs and contexts.`,
      ],
    },
    {
      paragraphs: [
        `- **Direct path to official applications** : Because most grants are completed on external sites, each grant card includes a direct link to the official application page. This reduces unnecessary searching and cuts down on repeated website-hopping.`,
      ],
      images: [scaffoldKeyFeatures1, scaffoldKeyFeatures2],
      imageLayout: "row",
      imageWrapperClass: "scaffold-key-features-media",
    },
    {
      paragraphs: [
        `- **Profile + web supplement to reduce repeated work** : Many grant applications ask for the same information. By creating a profile based on commonly required personal and educational questions, the details can be copied and reused to reduce repetitive typing and prevent small errors. Since essay writing on a phone is inconvenient, a web supplement supports drafting on a larger screen, including AI-assisted first-draft support using saved profile details.`,
      ],
    },
    {
      images: [
        {
          type: "video",
          src: scaffoldKeyFeatures3,
          className: "scaffold-key-features-video",
          caption:
            "Web supplement to reduce repetitive typing and speed up applications",
        },
      ],
      imageLayout: "stack",
      imageWrapperClass: "scaffold-key-features-media",
    },
    {
      heading: "Brand guidelines",
      paragraphs: [
        `The visual identity utilizes a signature purple to create strong recognition, complemented by energetic orange accents that draw attention to key actions and highlights.`,
        `&nbsp;`,
        `Two typefaces support both personality and readability: Akira is used for titles and labels to create a bold, structured tone, while Montserrat is used for longer text to keep content clear and easy to read—especially on mobile screens.`,
        `&nbsp;`,
        `The logo is built around the letter “S,” using stacked block shapes that suggest construction and stability. This reinforces the brand idea of building foundations, aligning the look and feel with Scaffold’s purpose: helping users find support and stay on track.`,
      ],
      images: [scaffoldBrandGuidelines1],
      imageLayout: "row",
    },
    {
      heading: "Marketing",
      paragraphs: [
        `The brochure cover was designed to grab attention with a bold logo and a concise slogan. A subtle grid pattern in the background references scaffolding and reinforces the visual identity. The Z-fold format supports a clear story: it starts with the day-to-day challenges skilled tradespeople face, then moves into how Scaffold helps as a supportive financial resource.`,
        `&nbsp;`,
        `The business card uses the same colour palette to maintain brand consistency. Soft curved edges create a distinctive, approachable look, helping the card stand out while staying aligned with the overall brand.`,
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
        `This work highlighted the real-world differences between **RGB and CMYK**. Multiple rounds of print testing helped refine the colour palette and improve consistency from screen to print.`,
        `&nbsp;`,
        `It also reinforced the value of strong grid systems in print design—supporting clearer hierarchy, alignment, and spacing across both the brochure and business card layouts.`,
      ],
    },
    {
      heading: "Storyboard & Film production",
      paragraphs: [
        `The promotional video was planned with a storyboard before production began. The story was inspired by an experience uncovered during research: a skilled tradeswoman was able to continue training and manage daily life after receiving grant support.`,
        `&nbsp;`,
        `The storyboard and script were developed independently, and filming was coordinated and directed on the shoot day with support from the team. The final video was screened on pitch day to introduce the app concept and reinforce Scaffold’s core message—financial support can be a foundation that helps skilled tradespeople sustain their careers.`,
      ],
      images: [scaffoldStoryboard],
      imageLayout: "row",
      imageWrapperClass: "scaffold-storyboard-media",
    },
    {
      images: [scaffoldKeyLearnings1, scaffoldKeyLearnings2],
      imageLayout: "row",
      imageWrapperClass: "scaffold-key-learnings-media",
    },
    {
      sectionId: "promo-video",
      heading: "Promotional video",
      images: [
        {
          type: "video",
          src: scaffoldKeyLearnings3,
          className: "scaffold-key-features-video",
        },
      ],
      imageLayout: "stack",
      imageWrapperClass: "scaffold-key-features-media",
    },
    {
      heading: "Key learnings & reflections",
      images: [scaffoldKeyLearnings4, scaffoldKeyLearnings5],
      imageLayout: "row",
      imageWrapperClass: "scaffold-key-learnings-media",
    },
    {
      paragraphs: [
        `This project became a strong foundation for growth in UI/UX design—from early research and ideation to a full prototype and live demo. Ongoing feedback and guidance from BCIT instructors also helped strengthen communication and teamwork throughout the process.`,
        `&nbsp;`,
        `**What this experience strengthened:**`,
        `&nbsp;`,
        `- **End-to-end UI/UX skills:** building from early research and ideation to a full prototype and live demo.`,
        `- **Communication and teamwork:** collaborating more clearly through feedback and guidance from BCIT instructors.`,
        `- **Storytelling and decisions:** presenting on showcase day improved structured thinking and clear communication.`,
        `- **Iteration mindset:** learned to test, adjust, take feedback, and improve after setbacks.`,
        `&nbsp;`,
        `Overall, **Scaffold project was a key milestone**, bringing the full story together—from early ideas to a developed product—in front of a large audience. The process created space for experimentation, iteration, and learning through challenges, shaping a more confident and resilient design approach.`,
      ],
    },
  ],
};
