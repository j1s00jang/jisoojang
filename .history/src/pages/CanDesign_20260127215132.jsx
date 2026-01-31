// import "./ProjectDetail.css";

// function CanDesign({ project }) {
//   if (!project) return null;

//   return (
//     <>
//       {project.concept && (
//         <section className="project-detail-section">
//           <h2>Concept</h2>
//           <p className="project-detail-preline">{project.concept}</p>
//         </section>
//       )}

//       {project.productMockupImage && (
//         <section className="project-detail-section">
//           <h2>Product mockups</h2>
//           <div className="project-detail-mockup">
//             <img
//               src={project.productMockupImage}
//               alt={`${project.name} product mockup`}
//               className="project-detail-mockup-image"
//               loading="lazy"
//             />
//           </div>
//         </section>
//       )}
//     </>
//   );
// }

// export default CanDesign;

import "./ProjectDetail.css";

function CanDesign({ project }) {
    if (!project) return null;

    return (
        <>
            {project.concept && (
                <section className="project-detail-section">
                    <h2 className="project-detail-section-title">Concept</h2>
                    <p className="project-detail-preline">{project.concept}</p>
                </section>
            )}

            {project.productMockupImage && (
                <section className="project-detail-section">
                    <h2>Product mockups</h2>
                    <div className="project-detail-mockup">
                        <img
                            src={project.productMockupImage}
                            alt={`${project.name} product mockup`}
                            className="project-detail-mockup-image"
                            loading="lazy"
                        />
                    </div>
                </section>
            )}
        </>
    );
}

export default CanDesign;
