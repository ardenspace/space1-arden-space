import React from "react";

type Project = {
  title: string;
  tech: string;
  descriptions: string[];
};

type CareerCompanyCardProps = {
  name: string;
  position: string;
  period: string;
  projects: Project[];
};

export default function CareerCompanyCard({
  name,
  position,
  period,
  projects,
}: CareerCompanyCardProps) {
  return (
    <div className="company">
      <div className="title">{name}</div>
      <div className="desc">
        {position} | {period}
      </div>

      {projects?.map((project, index) => (
        <div key={index} className="project">
          <div className="project-title">{project.title}</div>
          <div className="desc">{project.tech}</div>
          <ul className="dot-list">
            {project.descriptions.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
