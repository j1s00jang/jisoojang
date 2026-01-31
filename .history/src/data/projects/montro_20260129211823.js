import montroThumbnail from "../../assets/projects/montro/montro_card.png";
import montroLogo from "../../assets/projects/montro/montro_logo.png";
import montroScreen from "../../assets/projects/montro/montro_screen.png";
import montroMockup from "../../assets/projects/montro/montro_mockup.png";
import montroWebsite from "../../assets/projects/montro/montro_website.png";
import montroUserResearch1 from "../../assets/projects/montro/montro_userResearch01.png";
import montroUserResearch2 from "../../assets/projects/montro/montro_userResearch02.png";
import montroInsights1 from "../../assets/projects/montro/montro_insights01.png";

export const montro = {
    id: 2,
    name: "Montro",
    slug: "montro",
    category: "ux/ui",

    /* --- Assets --- */
    thumbnail: montroThumbnail,
    screenImage: montroScreen,
    mockupImage: montroMockup,

    /* --- Intro (ProjectDetail header / Overview) --- */

    summary:
        "Gamified expense-tracking app that builds spending & saving goals and reward milestones",
    role: "UX/UI Designer",
    keySkills:
        "Figma, Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign",
    overview:
        "Montro is a gamified expense-tracking application that transforms the mundane task of tracking expenses into an engaging and rewarding experience. The app uses behavioral psychology principles to encourage better spending habits.",

    /* --- ContentSections (template) --- */
    sections: [
        {
            paragraphs: [],
            images: [montroWebsite],
            imageLayout: "row",
        },
        {
            heading: "Opportunity",
            paragraphs: [
                "Montro began with research on how long-term expense-tracking habits influence spending, particularly when established in the teens and twenties. Survey findings showed that many participants valued tracking but found recording every purchase manually tedious. This gap revealed an opportunity to support younger users with a more effortless, consistent approach.",
                "\nHowever, expense tracking often follows the pattern of a New Year’s resolution: it starts strong and fades by February. Sustaining the habit requires ongoing motivation, not just good intentions. That need is where Montro began.",
            ],
            images: [],
            imageLayout: "row",
        },
        {
            heading: "My Role",
            paragraphs: [
                "Key contribution included leading the visual and interaction design to make expense tracking feel less exhausting and more motivating. A fun, futuristic visual direction with vibrant colours was developed and applied to a cohesive mobile UI system. On the main dashboard, a goal-status indicator was prioritized as the primary focal point and paired with a cheerful quote to reinforce motivation at a glance.",
                "\nMonthly insights and the expense-entry flow were designed to support reflection and encourage repeat use through a reward system. Generous spacing, clear grouping, and consistent hierarchy prevented the interface from feeling crowded or overwhelming, even when large amounts of numerical data were presented.",
            ],
            images: [],
            imageLayout: "row",
        },
        {
            heading: "User Research",
            paragraphs: [
                "Survey results from 10 participants indicated that many people stick to familiar, long-standing tracking habits instead of using an app. Common reasons included low motivation, the added effort of opening an app for each expense, and the perception that manual entry is tedious. In addition, free apps were often seen as discouraging due to intrusive ads and overly complex layouts.",
            ],
            images: [montroUserResearch1, montroUserResearch2],
            imageLayout: "row",
        },
        {
            heading: "Insights",
            paragraphs: [
                "Research findings confirmed that building a long-term expense-tracking habit can help reduce unnecessary spending. At the same time, the research showed that sustained behaviour change requires supportive financial-service features that reduce friction and reinforce consistency. These insights became the starting point for shaping Montro’s key values and defining what the product needed to deliver.",
            ],
            images: [montroInsights1],
            imageLayout: "row",
        },
        {
            heading: "The discovery",
            paragraphs: [
                "High habit formation potential",
                "\nDespite frustrations, 55.6% have made tracking a regular habit, indicating that with the right features, more users could be nudged into consistent behaviour.",
                "\nIncentives could be a game-changer",
                "\nIncentive-based tracking could significantly boost adoption and consistency. Providing the user with some form of passive reward can help guide them to keep up a habit of tracking core expenses.",
                "\nSkepticism toward bank syncing",
                "\nSecurity concerns missed cash transactions, and incorrect categorization deters users from relying on bank-integrated solutions.",
                "\nDesire for smarter tracking",
                "\nUsers don't just want summaries—they seek detailed insights and patterns across categories to make better financial decisions. Anyone can request numbers- meaningful suggestions to help guide their expense tracking journey make for a better user/app interaction system.",
            ],
        },
        {
            heading: "Key Features",
            paragraphs: [
                "Add content about key features and design decisions.",
            ],
            images: [montroLogo],
            imageLayout: "row",
            imageWrapperClass: "montro-key-features-images",
        },
    ],
};
