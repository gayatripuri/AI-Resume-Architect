import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

export default function ResumeForm() {
  const { resume, setResume } = useContext(ResumeContext);

  const handlePersonal = (e) => {
    setResume({
      ...resume,
      personalInfo: {
        ...resume.personalInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleEducation = (e, index) => {
    const updated = [...resume.education];
    updated[index][e.target.name] = e.target.value;
    setResume({ ...resume, education: updated });
  };

  const handleExperience = (e, index) => {
    const updated = [...resume.experience];
    updated[index][e.target.name] = e.target.value;
    setResume({ ...resume, experience: updated });
  };

  return (
    <div style={{ width: "50%", padding: "20px", background: "#f3f4f6" }}>
      <h2>Form</h2>

      {/* Personal Info */}
      <input name="name" placeholder="Name" onChange={handlePersonal} /><br />
      <input name="email" placeholder="Email" onChange={handlePersonal} /><br />
      <input name="phone" placeholder="Phone" onChange={handlePersonal} /><br />

      {/* Education */}
      <h3>Education</h3>
      {resume.education.map((edu, i) => (
        <div key={i}>
          <input name="college" placeholder="College" onChange={(e) => handleEducation(e, i)} /><br />
          <input name="degree" placeholder="Degree" onChange={(e) => handleEducation(e, i)} /><br />
          <input name="year" placeholder="Year" onChange={(e) => handleEducation(e, i)} /><br />
        </div>
      ))}

      {/* Experience */}
      <h3>Experience</h3>
      {resume.experience.map((exp, i) => (
        <div key={i}>
          <input name="company" placeholder="Company" onChange={(e) => handleExperience(e, i)} /><br />
          <input name="role" placeholder="Role" onChange={(e) => handleExperience(e, i)} /><br />
          <input name="description" placeholder="Description" onChange={(e) => handleExperience(e, i)} /><br />
        </div>
      ))}

      {/* Skills */}
      <h3>Skills</h3>
      <input
        placeholder="Skills"
        onChange={(e) =>
          setResume({ ...resume, skills: e.target.value })
        }
      />
    </div>
  );
}