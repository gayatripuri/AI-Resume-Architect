import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
import { calculateATS } from "../utils/ats";

export default function ResumePreview() {
  const { resume } = useContext(ResumeContext);

  // Safe ATS calculation
  const score = calculateATS(resume, resume.jobDesc || "");

  // Color logic
  const getColor = () => {
    if (score > 70) return "text-green-600";
    if (score > 40) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="w-1/2 h-screen overflow-y-auto p-8 bg-white border-l">

      {/* Header */}
      <h1 className="text-3xl font-bold">
        {resume.personalInfo.name || "Your Name"}
      </h1>
      <p className="text-gray-600 mb-4">
        {resume.personalInfo.email} | {resume.personalInfo.phone}
      </p>

      {/* ATS Score */}
      <div className="mb-6">
        <span className={`font-bold ${getColor()}`}>
          ATS Score: {score}%
        </span>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">
          Education
        </h2>
        {resume.education.map((edu, i) => (
          <p key={i} className="text-gray-700">
            {edu.degree} - {edu.college} ({edu.year})
          </p>
        ))}
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">
          Experience
        </h2>
        {resume.experience.map((exp, i) => (
          <div key={i} className="mb-3">
            <p className="font-semibold">
              {exp.role} - {exp.company}
            </p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">
          Skills
        </h2>
        <p className="text-gray-700">{resume.skills}</p>
      </div>
    </div>
  );
}