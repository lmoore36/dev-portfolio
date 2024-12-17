"use client";

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <title>Oliver Cieplinski</title>
      </Head>
    
      <div className="relative min-h-screen">
        <div className="relative z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <section id="home">

            <div className="mobile-spacing">
              <br />
              <br />
            </div>
            
            {/* name section */}
            <div className="typewriter-container">
              <h1 className="typewriter site-title">
                <br />
                <br />
                Lucille Moore
              </h1>
            </div>

            {/* intro section text */}
            <div>
              <p className="intro-text">
                Hi, I'm Lucy. I'm a student at UNC Chapel Hill studying <b>Computer Science</b> and <b>Peace, War, and Defense</b>.
                I currently specialise in
                <span className="highlight" style={{ color: "#B89B72" }}> Python</span>,
                <span className="highlight" style={{ color: "#B89B72" }}> C#</span> and
                <span className="highlight" style={{ color: "#B89B72" }}> JavaScript</span>.
              </p>

              {/* social media buttons */}
              <div className="social-buttons">
                <a className="github-button" href="https://github.com/oliciep" target="_blank" style={{ backgroundColor: "#ffffff", color: "white" }}>
                  <img src="/images/contacts/github.png" alt="GitHub Icon" /> GitHub
                </a>
                <a className="linkedin-button" href="https://www.linkedin.com/in/oli-cieplinski" target="_blank" style={{ backgroundColor: "#ffffff" }}>
                  <img src="/images/contacts/linkedin.png" alt="LinkedIn Icon" /> LinkedIn
                </a>
              </div>
            </div>

          </section>
        </div>
      </div>
    </>
  );
}