import React, { useState } from "react";
import Navbar from "~/components/Navbar";
import Uploader from "~/components/Uploader";
import { usePuterStore } from "~/lib/puter";

const upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Smart feedback for your dream job</h1>

          {isProcessing ? (
            <>
              <img src="images/resume-scan.gif" alt="resume-scanning" />
            </>
          ) : (
            <h3>Drop your resume for an ATS score and improvement tips.</h3>
          )}
          {!isProcessing && (
            <form action="submit">
              <div className="form-div">
                <label htmlFor="company-name">company-name</label>
                <input
                  type="text"
                  name="company-name"
                  id="jcompany-name"
                  placeholder="Meta"
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-title">job-title</label>
                <input
                  type="text"
                  name="job-title"
                  id="job-title"
                  placeholder="Full stack Developer"
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-Description">job-Description</label>
                <textarea rows={5} name="job-Description" id="job-Description">
                  Write a clear & concise job description with responsibilities
                  & expectations...
                </textarea>
              </div>
              <div className="form-div">
                <label htmlFor="job-title">job-title</label>
                <Uploader />
              </div>

              <button className="auth-button w-full">Analyze resume</button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default upload;
