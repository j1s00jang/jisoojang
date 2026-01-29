import canDesignThumbnail from "../../assets/projects/can_design/canDesign_card.png";
import canDesignScreen from "../../assets/projects/can_design/CanDesignThumbnail.png";
import canDesignMockup from "../../assets/projects/can_design/all_mockup02.png";
import conceptImage01 from "../../assets/projects/can_design/fizzypop_logo_anatomy.png";
import conceptImage02 from "../../assets/projects/can_design/fizzypop_logo_concept.png";
import labelTomato from "../../assets/projects/can_design/CanDesign_04_Mockup_Design01_Tomato.png";
import labelOrange from "../../assets/projects/can_design/CanDesign_04_Mockup_Design02_Orange.png";
import labelGrape from "../../assets/projects/can_design/CanDesign_04_Mockup_Design03_Grape.png";
import canTomato from "../../assets/projects/can_design/tomato_mockup.png";
import canOrange from "../../assets/projects/can_design/orange_mockup.png";
import canGrape from "../../assets/projects/can_design/grape_mockup.png";
import tomatoLabelJpg from "../../assets/projects/can_design/fizzypop_01tomato_label.jpg";
import orangeLabelJpg from "../../assets/projects/can_design/fizzypop_02orange_label.jpg";
import grapeLabelJpg from "../../assets/projects/can_design/fizzypop_03grape_label.jpg";
import conceptImage03 from "../../assets/projects/can_design/tomato_drawing.png";
import conceptImage04 from "../../assets/projects/can_design/orange_drawing.png";
import conceptImage05 from "../../assets/projects/can_design/grape_drawing.png";

export const canDesign = {
    id: 3,
    name: "Beverage label design",
    titleLines: ["Beverage label", "design"],
    slug: "can-design",
    category: "graphic design",
    thumbnail: canDesignThumbnail,
    screenImage: canDesignScreen,
    summary:
        "A fruit-infused sparkling water packaging design, created in three flavours",
    keySkills: "Packaging Design / Branding / Typography / Information Layout",
    concept: `Fizzypop is a fruit-infused sparkling water made for young adults who want a drink that feels cool, bright, and refreshing without compromising their health goals. Instead of too sweet or heavy post-workout drinks, Fizzypop offers a zero-sugar alternative with real fruit infusion for a clean, uplifting reset.`,
    conceptImage01: conceptImage01,
    conceptImage02: conceptImage02,
    conceptParagraph2: `Sky-inspired colour shifts were used to echo fizzypop’s flavour palette and suggest a fresh, everyday routine. A nature-led colour range keeps the label lively and clean, pure bold, playful type adds a youthful tone that feels approachable for young adults. The flavour font is lighter and softer to slow the pace of the modern life and reinforce a well-being, healthy lifestyle message.`,
    conceptImage03: conceptImage03,
    conceptImage04: conceptImage04,
    conceptImage05: conceptImage05,
    productMockupImage: canDesignMockup,
    flavours: [
        {
            id: "tomato",
            title: "Tomato Flavour",
            description:
                "It features a contemporary, minimal tomato illustration set against a cool summer beach-blue background. The Fizzypop title uses a clean, artistic type style to lift up a bright, sunny day. Sleek, playful label stickers highlight key benefits, adding a fun, modern vibe while keeping the overall design crisp and refreshing.",
            labelImage: labelTomato,
            labelTopImage: tomatoLabelJpg,
            canMockup: canTomato,
        },
        {
            id: "orange",
            title: "Orange Flavour",
            description:
                "A warm orange palette and citrus-inspired illustration bring energy and brightness. Clean typography and benefit stickers keep information easy to scan while maintaining a fresh, modern look.",
            labelImage: labelOrange,
            labelTopImage: orangeLabelJpg,
            canMockup: canOrange,
        },
        {
            id: "grape",
            title: "Grape Flavour",
            description:
                "A bold grape colourway paired with playful illustration creates a fun, vibrant feel. The layout balances strong branding with clear product details for a crisp, refreshing impression.",
            labelImage: labelGrape,
            labelTopImage: grapeLabelJpg,
            canMockup: canGrape,
        },
    ],
};
