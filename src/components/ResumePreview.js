import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

export default function ResumePreview() {
  const { resume } = useContext(ResumeContext);

  return (
    <div style={{ width: "50%", padding: "20px" }}>
      <h1>{resume.personalInfo.name}</h1>
      <p>{resume.personalInfo.email} | {resume.personalInfo.phone}</p>

      <h2>Education</h2>
      {resume.education.map((edu, i) => (
        <p key={i}>
          {edu.degree} - {edu.college} ({edu.year})
        </p>
      ))}

      <h2>Experience</h2>
      {resume.experience.map((exp, i) => (
        <div key={i}>
          <p><b>{exp.role}</b> - {exp.company}</p>
          <p>{exp.description}</p>
        </div>
      ))}

      <h2>Skills</h2>
      <p>{resume.skills}</p>
    </div>
  );
}