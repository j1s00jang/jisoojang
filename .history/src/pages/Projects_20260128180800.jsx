import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import "./Projects.css";
import "./ProjectDetail.css";
import { projects } from "../data/projectsData";

function Projects() {
    const [activeTab, setActiveTab] = useState("all");

    const breadcrumbItems = [
        { label: "Home", link: "/" },
        { label: "Projects", link: "/projects" },
    ];

    const filteredProjects =
        activeTab === "all"
            ? projects
            : projects.filter((project) => project.category === activeTab);

    return (
        <div className="project-detail-content">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="projects-content">
                <div className="projects-container">
                    {/* Tabs */}
                    <nav
                        className="projects-tabs"
                        aria-label="Project categories"
                    >
                        <ul>
                            <li
                                className={activeTab === "all" ? "active" : ""}
                                onClick={() => setActiveTab("all")}
                            >
                                all
                            </li>
                            <li
                                className={
                                    activeTab === "ux/ui" ? "active" : ""
                                }
                                onClick={() => setActiveTab("ux/ui")}
                            >
                                ux/ui
                            </li>
                            <li
                                className={
                                    activeTab === "graphic design"
                                        ? "active"
                                        : ""
                                }
                                onClick={() => setActiveTab("graphic design")}
                            >
                                graphic design
                            </li>
                        </ul>
                    </nav>

                    {/* Grid */}
                    <div className="projects-grid">
                        {filteredProjects.map((project) => (
                            <Link
                                key={project.id}
                                to={`/projects/${project.slug}`}
                                className="project-card"
                                data-category={project.category}
                            >
                                <div className="project-card-image-wrap">
                                    <img
                                        src={project.thumbnail}
                                        alt={`${project.name} thumbnail`}
                                        className="project-card-image"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="project-card-text">
                                    <h3 className="project-card-title">
                                        {project.name}
                                    </h3>
                                    <p className="project-card-description">
                                        {project.summary}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
