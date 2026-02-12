import scaffoldThumbnail from "../../assets/projects/scaffold/scaffold_card.png";
import scaffoldScreen from "../../assets/projects/scaffold/scaffold_screen01.png";
import scaffoldMockup from "../../assets/projects/scaffold/scaffold_mockup01.png";
import scaffoldUserResearch1 from "../../assets/projects/scaffold/scaffold_userResearch01.png";
import scaffoldUserResearch2 from "../../assets/projects/scaffold/scaffold_userResearch02.png";
import scaffoldBrandGuidelines1 from "../../assets/projects/scaffold/scaffold_guidelines01.png";
import scaffoldKeyFeatures1 from "../../assets/projects/scaffold/scaffold_keyFeatures01.mp4";
import scaffoldKeyFeatures2 from "../../assets/projects/scaffold/scaffold_keyFeatures02.mp4";
import scaffoldKeyFeatures3 from "../../assets/projects/scaffold/scaffold_keyFeatures03.mp4";
import scaffoldMarketing1 from "../../assets/projects/scaffold/scaffold_marketing01.png";
import scaffoldMarketing2 from "../../assets/projects/scaffold/scaffold_marketing02.png";
import scaffoldMarketing3 from "../../assets/projects/scaffold/scaffold_marketing03.png";
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
    "All-in-one platform that consolidates grant information for tradespeople with AI support",
  timeline: "Sep 2025 - Dec 2025 (13 weeks)",
  role: "UX/UI Designer / Graphic Designer",
  keySkills:
    "UX / UI / Layout / Product Design / User Research / Branding / Marketing / Print Design",
  overview: `Skilled tradespeople often miss grant deadlines and give up on searching for funding because the fundings are spread across multiple websites. **Scaffold is an all-in-one financial resource app** designed to help users find relevant grants, track deadlines, and stay organized by consolidating it all into one place.`,
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
        `Scaffold focuses on helping users quickly discover grants and financial information that can be used on the go. A key challenge was reducing friction in the application process while keeping content clear and easy to navigate on a small screen. The key focus was to make grant information simpler to find, easier to understand, and faster to act on, so fewer deadlines and funding options will be missed.`,

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
      heading: "User research",
      paragraphs: [
        `Early exploratory research was conducted through a construction site visit and outreach through referrals and personal networks. The findings helped clarify the project’s direction and supported a mid-project shift in focus.`,
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
      heading: "Findings & Direction",
      paragraphs: [
        `Early research indicated that grant access wasn’t only blocked by eligibility but also ease of applying. When people believed they qualified, many quit because information was hard to find and the application process required multiple steps, documents, and repeated effort.`,
        `&nbsp;`,
        `**Several patterns appeared consistently:**`,
        `- Grant information was often outdated, with some programs no longer available and others grants being expired.`,
        `- Eligibility and requirements felt vague which discouraged applying.`,
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
      ],
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
        `Grant information needed to be easy to read at a glance without missing critical details. Scaffold focused on three core features that reduce friction and help users act on opportunities faster.`,
        `&nbsp;`,
        `- **Scan-friendly grant cards** : A card-based layout highlights the grant name, deadline, and eligibility at a glance. Each card also includes the organization’s logo to support quick recognition. This structure helps users quickly identify eligible grants in British Columbia, Canada, while staying flexible enough to scale across different needs and contexts.`,
      ],
      images: [
        {
          type: "video",
          src: scaffoldKeyFeatures1,
          autoPlay: true,
          className: "scaffold-key-features-video",
          caption: "Scan-friendly grant cards and instant navigation",
        },
      ],
      imageLayout: "row",
      imageWrapperClass: "scaffold-key-features-media",
    },
    {
      paragraphs: [
        `- **AI-powered voice profile for easy setup:** : Users can build a profile with voice input on the go. The AI captures key details even with unclear speech. The profile can be reused across applications and helps filter eligible grants on the dashboard.`,
      ],
      images: [
        {
          type: "video",
          src: scaffoldKeyFeatures2,
          autoPlay: true,
          className: "scaffold-key-features-video",
          caption: "AI-powered voice profile for easy setup",
        },
      ],
      imageLayout: "row",
      imageWrapperClass: "scaffold-key-features-media",
    },
    {
      paragraphs: [
        `- **Web supplement to reduce frustration** : Since writing essays on a phone is inconvenient, a web supplement supports drafting on a larger screen. It also offers AI help to generate a first draft using the saved profile details for faster, more consistent submissions.`,
      ],
    },
    {
      images: [
        {
          type: "video",
          src: scaffoldKeyFeatures3,
          className: "scaffold-key-features-video",
          caption:
            "With the web supplement, users can easily copy and paste into the application form",
        },
      ],
      imageLayout: "stack",
      imageWrapperClass: "scaffold-key-features-media",
    },
    {
      heading: "Brand guidelines",
      paragraphs: [
        `The visual identity was built by a combination of purple and orange. The purple was used as the main brand colour to make Scaffold easy to recognize. Orange was used to give an energetic feel to highlight important actions and key information.`,
        `&nbsp;`,
        `Two fonts are used to balance style and readability. To structure information hierarchy, bold font is used for titles and labels while legible font is used for longer text with special consideration to mobile usage.`,
        `&nbsp;`,
        `Scaffold logo created from letter “S” and stacked blocks shapes to suggest building a strong foundation. Ultimately, Scaffold’s goal is helping tradespeople finds financial support to continue their career path. `,
      ],
      images: [scaffoldBrandGuidelines1],
      imageLayout: "row",
    },
    {
      heading: "Marketing materials",
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
        `Overall, **the Scaffold project was a major milestone.** Building it from a blank canvas into a real product based on user insights fosters an understanding of why user experience matters. On top of that, pitching Scaffold to a large audience was a valuable learning experience. Just as Scaffold was designed to be a foundation for tradespeople, this project became a foundation for understanding UX and UI design.`,
      ],
    },
  ],
};
