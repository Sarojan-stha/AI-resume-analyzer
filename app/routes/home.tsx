import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import { resume } from "react-dom/server";
import { resumes } from "~/constants";
import ResumeCard from "~/components/ResumeCard";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI-resume-analyzer" },
    { name: "description", content: "smart feedback for your dream job" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover ">
      <Navbar />

      <section className="main-section ">
        <div className="page-heading ">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>
      </section>

      <div className="resumes-section">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    </main>
  );
}
/*
const function =()=>{
  return <component id={1} name={'hello'} />
  }
flex flex-row flex-wrap gap-6

const component = (props) => {
  return <div>
{props.id}
   </div>
}

*/
