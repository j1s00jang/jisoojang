import magazineThumbnail from "../../../src/assets/projects/magazine/magazine_thumbnail.png";
// import magazineMockup from "../../assets/projects/magazine/magazine_mockup.png"; // Uncomment when image is added

// Screen images (using thumbnails as fallback for projects without screen images)
const magazineScreen = magazineThumbnail;

export const magazine = {
    id: 4,
    name: "magazine",
    slug: "magazine",
    category: "graphic design",
    thumbnail: magazineThumbnail,
    screenImage: magazineScreen,
    summary:
        "Travel magazine design introducing travel packages and a digital e-book",
    keySkills:
        "Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign",
    concept: "Add concept content here",
    productMockupImage: null, // Add: import magazineMockup and set to magazineMockup
};
