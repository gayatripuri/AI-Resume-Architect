
import './App.css';
import ResumePreview from './components/ResumePreview';
import ResumeForm from './components/ResumeForm';
import { ResumeProvider } from './context/ResumeContext';

function App() {
  return (
     <ResumeProvider>
      <div style={{ display: "flex", height: "100vh" }}>
        <ResumeForm />
        <ResumePreview />
      </div>
    </ResumeProvider>
  );
}

export default App;
