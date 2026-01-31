import scaffoldThumbnail from "../../assets/projects/scaffold/scaffold_card.png";
import scaffoldScreen from "../../assets/projects/scaffold/scaffold_screen01.png";
import scaffoldMockup from "../../assets/projects/scaffold/scaffold_mockup01.png";
import scaffoldUserResearch1 from "../../assets/projects/scaffold/scaffold_userResearch01.png";
import scaffoldUserResearch2 from "../../assets/projects/scaffold/scaffold_userResearch02.png";
import scaffoldInsights1 from "../../assets/projects/scaffold/scaffold_insights01.png";
import scaffoldInsights2 from "../../assets/projects/scaffold/scaffold_insights02.png";
import scaffoldHowWeStarted1 from "../../assets/projects/scaffold/scaffold_howWeStarted01.png";
import scaffoldBrandGuidelines1 from "../../assets/projects/scaffold/scaffold_guidelines01.png";
import scaffoldKeyFeatures1 from "../../assets/projects/scaffold/scaffold_keyFeatures01.png";
import scaffoldKeyFeatures2 from "../../assets/projects/scaffold/scaffold_keyFeatures02.png";
import scaffoldKeyFeatures3 from "../../assets/projects/scaffold/scaffold_keyFeatures03.mov";

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
    overview: `Skilled tradespeople struggled to keep track of grant deadlines or abandoned their search for grant funding due to the friction of navigating multiple websites.

Scaffold is an all-in-one financial resource app designed to help users manage their financial situations. Ensuring fundamental usability was challenging as disparate features and experiments competed for attention. As the scope expanded, reliability and performance issues increased, requiring careful prioritization and refinement.`,

    /* --- ContentSections (template) --- */
    sections: [
        {
            heading: "Opportunity",
            paragraphs: [
                "The project aimed to help users quickly discover grants and financial information from anywhere, including during commutes. A key challenge was reducing friction in the application process while keeping information clear and easy to navigate on a small screen. The solution focused on building a reliable foundation that supports users' financial circumstances and helps them track deadlines to avoid missing opportunities.",
                "\n\nOur high-level goals were to:\n\n1. Surface only eligible resources, no more website-hopping\n2. Make information easy to scan and accessible on mobile devices\n3. Reduce repetitive typing and user frustration",
            ],
            images: [],
            imageLayout: "row",
        },
        {
            heading: "My Role",
            paragraphs: [
                "Scaffold's UX/UI foundation was developed to help users review eligible grants at a glance. The main screen uses the application profile to surface key grant highlights, paired with each organization's logo to support quick recognition.",
                "Generous spacing and clear grouping were used to prevent information from feeling crowded or overwhelming, while important details were highlighted to ensure they were not missed.",
            ],
            images: [],
            imageLayout: "row",
        },
        {
            heading: "User Research",
            paragraphs: [
                "At the start of the project, the direction was still unclear, and there were no specific goals defined for skilled tradespeople. To gather insights based on real experiences, the team visited a construction site to ask survey questions and reached out through personal connections, including tradespeople introduced through a friend's sister. Those conversations helped reveal how frustrating it can be to find reliable financial information and grant details across multiple websites.",
            ],
            images: [scaffoldUserResearch1, scaffoldUserResearch2],
            imageLayout: "stack",
        },
        {
            heading: "Insights",
            paragraphs: [
                "Based on primary and secondary research, ideas for key features began to emerge. User testing helped clarify the challenges skilled tradespeople faced and validated which solutions would be most useful.",
            ],
            images: [scaffoldInsights1],
            imageLayout: "stack",
        },
        {
            // if you want to add p-image-p2-p3, add like this:
            paragraphs: [
                "Some grants for skilled tradespeople were no longer available, and others had deadlines that had already passed.",
                "\nIn addition, most participants reported not applying for grants because they assumed they were not eligible or felt overwhelmed by unclear requirements and too many steps. Constantly monitoring grant information across hundreds of websites was not realistic for their day-to-day lives.",
            ],
            images: [scaffoldInsights2],
            imageLayout: "stack",
        },
        {
            paragraphs: [
                "A core insight was that grants and financial resources are not simply “extra money.” For skilled tradespeople, they provide a financial foundation that helps them sustain and continue their careers. This value informed Scaffold’s direction as a financial support app designed to make that foundation easier to access and maintain.",
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
            images: [],
            imageLayout: "row",
        },
        {
            heading: "How we started",
            paragraphs: [
                "Three core questions informed Scaffold’s design strategy:",
                "\n1. How can the experience work for everyone, everywhere? \n2. Which contexts and constraints should be considered? \n3. How can the application process be simplified while helping users track deadlines?",
                "\nEarly on, it was important to understand the factors that shape skilled tradespeople’s day-to-day experiences, including their work routines and lifestyle constraints. The team mapped user journeys across key scenarios, then translated those insights into a framework of contexts and situational spectrum to guide feature decisions and layout priorities.",
            ],
            images: [scaffoldHowWeStarted1],
            imageLayout: "row",
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
            heading: "Key features",
            paragraphs: [
                "Grant information needed to be easy to scan without causing users to miss critical details. A card-based layout surfaced the grant name, deadline, and eligibility at a glance, paired with each organization’s logo for quick recognition. This structure helped users quickly identify eligible grants in British Columbia, Canada, while remaining flexible enough to scale and adapt across different user contexts.",
                "Because grants are often applied for on external websites, each card included a direct link to the official application page to reduce website-hopping. To streamline repeated form entry, Scaffold introduced a profile built around commonly required personal and education-related questions, allowing information to be copied and reused to minimize repetitive typing and reduce errors. Since essay writing on a phone is inconvenient, a web supplement supported drafting on a larger screen, with AI assistance for generating a first draft from saved profile details and a structured list for managing applied grants.",
            ],
            images: [scaffoldKeyFeatures1, scaffoldKeyFeatures2],
            imageLayout: "row",
        },
        {
            paragraphs: [],
            images: [
                {
                    type: "video",
                    src: scaffoldKeyFeatures3,
                    className: "scaffold-key-features-video",
                },
            ],
            imageLayout: "row",
        },
    ],
};
