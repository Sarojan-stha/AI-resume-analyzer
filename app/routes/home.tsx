import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import { resume } from "react-dom/server";
import { resumes } from "~/constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI-resume-analyzer" },
    { name: "description", content: "smart feedback for your dream job" },
  ];
}

export default function Home() {
  const { auth, puterReady } = usePuterStore();
  const navigate = useNavigate();
  const location = useLocation();
  const next = location.search.split("?next")[1];

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/auth?redirect=/");
    }
  }, [auth.isAuthenticated]);

  console.log(auth.isAuthenticated);

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
