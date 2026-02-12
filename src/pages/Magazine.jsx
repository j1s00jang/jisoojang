import "./ProjectDetail.css";
import "./Magazine.css";
import Footer from "../components/Footer";
import UpNextBanner from "../components/UpNextBanner";
import MagazineFlipbook from "../components/MagazineFlipbook";

function Magazine({ project }) {
  if (!project) return null;

  return (
    <>
      {project.concept && (
        <section className="project-detail-section">
          <h2>Concept</h2>
          <p className="project-detail-preline">{project.concept}</p>
          {(project.conceptImage01 || project.conceptImage02) && (
            <div className="project-detail-concept-images">
              {project.conceptImage01 && (
                <img
                  src={project.conceptImage01}
                  alt={`${project.name} concept`}
                  className="project-detail-logo-anatomy"
                  loading="lazy"
                />
              )}
              {project.conceptImage02 && (
                <img
                  src={project.conceptImage02}
                  alt={`${project.name} concept`}
                  className="project-detail-logo-concept"
                  loading="lazy"
                />
              )}
            </div>
          )}
          {project.conceptParagraph2 && (
            <p className="project-detail-preline project-detail-concept-p2">
              {project.conceptParagraph2}
            </p>
          )}
        </section>
      )}

      <section className="project-detail-section magazine-pages-section">
        <h2>Brochure pages</h2>
        <div className="magazine-pages-wrap">
          <MagazineFlipbook />
        </div>
      </section>

            {project.productMockupImage && (
                <section className="project-detail-section magazine-mockups-section">
                    <h2>Product mockups</h2>
                    <div className="project-detail-mockup project-detail-mockup-stack">
            <img
              src={project.productMockupImage}
              alt={`${project.name} product mockup`}
              className="project-detail-mockup-image"
              loading="lazy"
            />
            {project.productMockupImage02 && (
              <img
                src={project.productMockupImage02}
                alt={`${project.name} product mockup`}
                className="project-detail-mockup-image"
                loading="lazy"
              />
            )}
          </div>

          <UpNextBanner
            to="/projects/interactive_tutorial"
            title="Interactive Tutorial"
          />
          <Footer />
        </section>
      )}
    </>
  );
}

export default Magazine;
