import montroThumbnail from "../../assets/projects/montro/montro_card.png";
import montroLogo from "../../assets/projects/montro/montro_logo.png";
import montroScreen from "../../assets/projects/montro/montro_screen.png";
import montroMockup from "../../assets/projects/montro/montro_mockup.png";
import montroWebsite from "../../assets/projects/montro/montro_website.png";

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
            paragraphs: ["Add content about your role in this project."],
            images: [],
            imageLayout: "row",
        },
        {
            heading: "User Research",
            paragraphs: ["Add content about user research insights."],
            images: [],
            imageLayout: "row",
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
