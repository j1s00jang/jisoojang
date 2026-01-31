import postersThumbnail from "../../assets/projects/posters/posters_card.png";
import postersScreen from "../../assets/projects/posters/posters_screen.png";
import churu01Hairball from "../../assets/projects/posters/churu01_hairball.png";
import churu02Bites from "../../assets/projects/posters/churu02_bites.png";
import churu03Popnserve from "../../assets/projects/posters/churu03_popnserve.png";

export const posters = {
    id: 6,
    name: "Advertising Posters",
    slug: "posters",
    category: "graphic design",
    thumbnail: postersThumbnail,
    screenImage: postersScreen,
    summary:
        "The “Churu” poster series showcases three types of cat treats. Each poster focuses on type, flavour, or benefit, making the message quick to scan.",
    keySkills:
        "Information hierarchy / Typography / Layout / Brand styling / Copy-writing",
    concept:
        "The “Churu” poster series features three cat treats with joyful cat photos and clear product highlights. Each poster uses a main colour drawn from the product packaging to keep the design consistent mood. Soft, delicate colours and graphic emphasize the treats and the cats’ happy expressions, creating a warm, happiness for cats and their owners.",
    posters: [
        { id: "hairball", title: "Hairball Control", image: churu01Hairball },
        { id: "bites", title: "Bites", image: churu02Bites },
        { id: "popnserve", title: "POP'N Serve", image: churu03Popnserve },
    ],
};
