import { createContext, useState } from "react";

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resume, setResume] = useState({
    personalInfo: { name: "", email: "", phone: "" },
    education: [{ college: "", degree: "", year: "" }],
    experience: [{ company: "", role: "", description: "" }],
    skills: ""
  });

  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      {children}
    </ResumeContext.Provider>
  );
};