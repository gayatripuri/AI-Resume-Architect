import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
import { rewriteWithAI } from "../utils/ai";

export default function ResumeForm() {
  const { resume, setResume } = useContext(ResumeContext);

  // Personal Info
  const handlePersonal = (e) => {
    setResume({
      ...resume,
      personalInfo: {
        ...resume.personalInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Education
  const handleEducation = (e, index) => {
    const updated = [...resume.education];
    updated[index][e.target.name] = e.target.value;
    setResume({ ...resume, education: updated });
  };

  // Experience
  const handleExperience = (e, index) => {
    const updated = [...resume.experience];
    updated[index][e.target.name] = e.target.value;
    setResume({ ...resume, experience: updated });
  };

  // AI Rewrite
  const handleAI = (index) => {
    const updated = [...resume.experience];
    updated[index].description = rewriteWithAI(updated[index].description);
    setResume({ ...resume, experience: updated });
  };

  return (
    <div className="w-1/2 h-screen overflow-y-auto p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Resume Form</h2>

      {/* Personal Info */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Personal Info</h3>
        <input name="name" placeholder="Name" onChange={handlePersonal}
          className="w-full p-2 border rounded mb-2" />
        <input name="email" placeholder="Email" onChange={handlePersonal}
          className="w-full p-2 border rounded mb-2" />
        <input name="phone" placeholder="Phone" onChange={handlePersonal}
          className="w-full p-2 border rounded" />
      </div>

      {/* Education */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Education</h3>
        {resume.education.map((edu, i) => (
          <div key={i} className="bg-white p-3 rounded shadow mb-3">
            <input name="college" placeholder="College"
              onChange={(e) => handleEducation(e, i)}
              className="w-full p-2 border rounded mb-2" />
            <input name="degree" placeholder="Degree"
              onChange={(e) => handleEducation(e, i)}
              className="w-full p-2 border rounded mb-2" />
            <input name="year" placeholder="Year"
              onChange={(e) => handleEducation(e, i)}
              className="w-full p-2 border rounded" />
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Experience</h3>
        {resume.experience.map((exp, i) => (
          <div key={i} className="bg-white p-3 rounded shadow mb-3">
            <input name="company" placeholder="Company"
              onChange={(e) => handleExperience(e, i)}
              className="w-full p-2 border rounded mb-2" />
            <input name="role" placeholder="Role"
              onChange={(e) => handleExperience(e, i)}
              className="w-full p-2 border rounded mb-2" />
            <textarea name="description" placeholder="Description"
              onChange={(e) => handleExperience(e, i)}
              className="w-full p-2 border rounded mb-2" />

            {/* AI Button FIXED */}
            <button
              onClick={() => handleAI(i)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Improve with AI ✨
            </button>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Skills</h3>
        <input
          placeholder="e.g React, Node, SQL"
          onChange={(e) =>
            setResume({ ...resume, skills: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Job Description */}
      <div>
        <h3 className="font-semibold mb-2">Job Description</h3>
        <textarea
          placeholder="Paste Job Description"
          onChange={(e) =>
            setResume({ ...resume, jobDesc: e.target.value })
          }
          className="w-full p-2 border rounded h-28"
        />
      </div>
    </div>
  );
}