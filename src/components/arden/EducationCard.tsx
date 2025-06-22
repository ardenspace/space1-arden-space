import React from "react";

type EducationItem = {
  title: string;
  period: string;
};

type EducationCardProps = {
  entries: EducationItem[];
};

export default function EducationCard({ entries }: EducationCardProps) {
  return (
    <div className="company">
      {entries.map((entry, index) => (
        <div key={index}>
          <div className="title">{entry.title}</div>
          <div className="desc">| {entry.period}</div>
        </div>
      ))}
    </div>
  );
}
