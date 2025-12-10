import React from "react";
import Navbar from "~/components/Navbar";

const upload = () => {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover ">
      <Navbar />
      <section className="main-section">
        <div className="page-heading ">
          <h1>Smart feedback for your dream job</h1>
          <h3>Drop your resume for an ATS score and improvement tips.</h3>
        </div>

        <div>
          <div className="border form-div">
            <label htmlFor="">label</label>
            <input type="text" placeholder="input" />
          </div>
          <label htmlFor="">label</label>
          <input type="text" placeholder="input" />
          <label htmlFor="">label</label>
          <input type="text" placeholder="input" />
          <label htmlFor="">label</label>
          <input type="text" placeholder="input" />
        </div>
      </section>
    </main>
  );
};

export default upload;
