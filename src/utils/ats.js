export const calculateATS = (resume, jobDesc) => {
  if (!jobDesc) return 0;

  const keywords = jobDesc.toLowerCase().split(" ");
  const resumeText = JSON.stringify(resume).toLowerCase();

  let match = 0;

  keywords.forEach((word) => {
    if (resumeText.includes(word)) {
      match++;
    }
  });

  return Math.floor((match / keywords.length) * 100);
};