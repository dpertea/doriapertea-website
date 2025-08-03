import React, { useEffect, useState, useMemo } from "react";
import "./fireflies.scss";

const Fireflies: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const quantity = 50;

  const SKILLS = [
    "JavaScript",
    "TypeScript",
    "NodeJS",
    "React",
    "Angular",
    "NestJS",
    "GraphQL",
    "Express",
    "MongoDB",
    "SQL",
    "PostgreSQL",
    "Java",
    "C#",
    "Python",
    "FastAPI",
    "Flask",
    "AWS",
    "Docker",
    "HTML",
    "CSS",
    "SCSS",
    "Git",
    "JIRA",
    "Figma",
    "Graphql",
    "NextJS",
    "NestJS",
    "Jest",
    "Cypress",
    "Vite",
    "Webpack",
    "CI/CD",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, []);

  const picks = useMemo(
    () =>
      Array.from({ length: quantity }, () => {
        const idx = Math.floor(Math.random() * SKILLS.length);
        return SKILLS[idx];
      }),
    []
  );

  if (!visible) return null;

  /* binary 0 and 1s:
  return (
    <div id="background-wrapper">
      {Array.from({ length: quantity }, (_, i) => {
        const bit = Math.random() < 0.5 ? "0" : "1";
        return <div className="firefly" data-char={bit} key={i} />;
      })}
    </div>
  );*/

  /* skills */
  // pick `quantity` random skills once

  return (
    <div id="background-wrapper">
      {picks.map((skill: string, i: number) => (
        <div className="firefly" data-char={skill} key={i} />
      ))}
    </div>
  );
};

export default Fireflies;
