import postersThumbnail from "../../assets/projects/posters/posters_card.png";
import postersScreen from "../../assets/projects/posters/posters_screen.png";
import churu01Hairball from "../../assets/projects/posters/churu01_hairball.png";
import churu02Bites from "../../assets/projects/posters/churu02_bites.png";
import churu03Popnserve from "../../assets/projects/posters/churu03_popnserve.png";
import postersMockup01 from "../../assets/projects/posters/posters_mockup01.png";
import postersMockup02 from "../../assets/projects/posters/posters_mockup02.png";
import QuickView from "../../assets/projects/can_design/quickView_icon.svg";

export const pawrents = {
  id: 6,
  name: "AI UX/UI project: Pawrents",
  slug: "pawrents",
  category: "ux/ui",
  thumbnail: postersThumbnail,
  screenImage: postersScreen,
  summary: "[In-progress] UX/UI project for a pet co-parenting app built",
  keySkills:
    "AI UX/UI Design / User Research / Information Architecture / Interaction Design / Visual Design / Prototyping",
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
