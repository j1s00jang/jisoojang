import postersThumbnail from "../../assets/projects/posters/posters_card.png";
import postersScreen from "../../assets/projects/posters/posters_screen.png";
import churu01Hairball from "../../assets/projects/posters/churu01_hairball.png";
import churu02Bites from "../../assets/projects/posters/churu02_bites.png";
import churu03Popnserve from "../../assets/projects/posters/churu03_popnserve.png";
import postersMockup01 from "../../assets/projects/posters/posters_mockup01.png";
import postersMockup02 from "../../assets/projects/posters/posters_mockup02.png";
import QuickView from "../../assets/projects/can_design/quickView_icon.svg";

export const posters = {
  id: 6,
  name: "Advertising posters: Churu",
  slug: "posters",
  category: "graphic design",
  thumbnail: postersThumbnail,
  screenImage: postersScreen,
  summary:
    "The “Churu” poster series showcases three types of cat treats. Each poster focuses on delivering the message of the type, flavour, and benefit.",
  keySkills:
    "Information hierarchy / Typography / Layout / Brand styling / Copy-writing",
  headerLinks: [
    {
      icon: QuickView,
      type: "anchor",
      anchorId: "posters-carousel",
      label: "Quick View",
    },
  ],
  concept:
    "The “Churu” poster series features three cat treats with cat photos and clear product highlights. Each poster uses a main colour drawn from the product packaging to keep the design consistent with the mood. Soft, delicate colours and graphics emphasize the treats and create a warm, inviting poster.",
  posters: [
    { id: "hairball", title: "Hairball Control", image: churu01Hairball },
    { id: "bites", title: "Bites", image: churu02Bites },
    { id: "popnserve", title: "POP'N Serve", image: churu03Popnserve },
  ],
  productMockupImage: postersMockup01,
  productMockupImage02: postersMockup02,
};
