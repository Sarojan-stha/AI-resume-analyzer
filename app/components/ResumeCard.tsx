import React from "react";
import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({
  resume: {
    id,
    companyName,
    jobTitle,
    feedback: { overallScore },
    imagePath,
  },
}: {
  resume: Resume;
}) => {
  return (
    <Link
      to={`/resume/${companyName}`}
      className="resume-card animate-in fade-in duration-1000"
    >
      <div className="resume-card-header flex flex-row justify-between">
        <div>
          <h2 className="!text-black font-bold text-lg">{companyName}</h2>
          <h3>{jobTitle}</h3>
        </div>
        <ScoreCircle score={overallScore} />
      </div>

      <div className="w-full h-full  mb-4 overflow-hidden rounded-3xl shadow-lg">
        <img
          src={`${imagePath}`}
          alt={`resume-${id}`}
          className=" object-cover"
        />
      </div>
    </Link>
  );
};

export default ResumeCard;
