import scaffoldThumbnail from "../../assets/projects/scaffold/scaffold_card.png";
import scaffoldScreen from "../../assets/projects/scaffold/scaffold_screen01.png";
import scaffoldMockup from "../../assets/projects/scaffold/scaffold_mockup01.png";
import scaffoldSurveyResults from "../../assets/projects/scaffold/scaffold_surveyResults01.png";
import scaffoldSurveyResults2 from "../../assets/projects/scaffold/scaffold_surveyResults02.png";

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
    scaffoldSurveyResults,
    scaffoldSurveyResults2,

    /* --- Intro (ProjectDetail header / Overview) --- */
    summary:
        "All-in-one funding platform for tradespeople that consolidates grant information with AI support",
    role: "UX/UI Designer / Graphic Designer",
    keySkills:
        "UX / UI / Layout / Product Design / User Research / Branding / Marketing / Print Design",
    overview: `Skilled tradespeople struggled to keep track of grant deadlines or abandoned their search for grant funding due to the friction of navigating multiple websites.

Scaffold is an all-in-one financial resource app designed to help users manage their financial situations. Ensuring fundamental usability was challenging as disparate features and experiments competed for attention. As the scope expanded, reliability and performance issues increased, requiring careful prioritization and refinement.`,

    /* --- Id 1 & 2 sections (Opportunity, My Role, User Research) --- */
    opportunity: `The project aimed to help users quickly discover grants and financial information from anywhere, including during commutes. A key challenge was reducing friction in the application process while keeping information clear and easy to navigate on a small screen. The solution focused on building a reliable foundation that supports users' financial circumstances and helps them track deadlines to avoid missing opportunities.

Our high-level goals were to:

1. Surface only eligible resources, no more website-hopping
2. Make information easy to scan and accessible on mobile devices
3. Reduce repetitive typing and user frustration`,
    myRole: `Scaffold's UX/UI foundation was developed to help users review eligible grants at a glance. The main screen uses the application profile to surface key grant highlights, paired with each organization's logo to support quick recognition.

Generous spacing and clear grouping were used to prevent information from feeling crowded or overwhelming, while important details were highlighted to ensure they were not missed.`,
    userResearch: `At the start of the project, the direction was still unclear, and there were no specific goals defined for skilled tradespeople. To gather insights based on real experiences, the team visited a construction site to ask survey questions and reached out through personal connections, including tradespeople introduced through a friend's sister. Those conversations helped reveal how frustrating it can be to find reliable financial information and grant details across multiple websites.`,

    /* --- ContentSections (Scaffold-specific blocks) --- */
    sections: [
        {
            heading: "Idea pitching & Promotional Video",
            paragraphs: [
                "Scaffold team pitched the idea with promotional video. Add contents only for scaffold project has.",
            ],
            images: [],
            imageLayout: "row",
        },
    ],
};
