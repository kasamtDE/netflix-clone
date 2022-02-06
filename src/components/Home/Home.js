import React, { useContext, useEffect, useState } from "react";
import datas from "../../fixtures/jumbo.json";
import faqs from "../../fixtures/faqs.json";
import add from "./add.png";
import "./Home.css";
import EmailButtons from "../EmailButtons/EmailButtons";
import Header from "../Header/Header";

export default function Home() {
  const addClass = (id) => {
    const answer = document.querySelectorAll(".faq-answer");
    const openIcon = document.querySelectorAll(".faq-question-icon");
    const getText = answer[id - 1];
    const getIcon = openIcon[id - 1];
    getText.classList.toggle("open");
    getIcon.classList.toggle("open-icon");
  };

  const checkUrl = window.location.pathname.includes("/en");

  return (
    <div>
      <Header />

      <div className="hero-container">
        <div className="overlay"></div>
        <div className="text-container">
          {!checkUrl ? (
            <>
              <h1>Unbegrenzt Filme, Serien und mehr.</h1>
              <h2>
                Genießen Sie Netflix, wo immer Sie möchten. Jederzeit kündbar.
              </h2>
              <p>
                Sind Sie startklar? Geben Sie Ihre E-Mail-Adresse ein, um Ihre
                Mitgliedschaft zu beginnen oder zu reaktivieren.
              </p>
            </>
          ) : (
            <>
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </>
          )}
          <EmailButtons />
        </div>
      </div>
      {datas.map((data) => {
        let {
          id,
          image,
          title,
          subTitle,
          miniImage,
          video,
          after,
          direction,
          titleEnglish,
          subTitleEnglish,
        } = data;
        let homeMobile;
        if (image && image.includes("home-mobile")) {
          homeMobile = image;
        }
        if (checkUrl) {
          title = titleEnglish;
          subTitle = subTitleEnglish;
        }
        return (
          <div key={id} className="section-container">
            <div
              className="section-container-inner"
              style={{ flexDirection: direction }}
            >
              <div className="text-container">
                <h1>{title}</h1>
                <p> {subTitle} </p>
              </div>
              {image && !image.includes("home-mobile") && (
                <div
                  className={
                    miniImage ? "img-container mini-image" : "img-container"
                  }
                >
                  {image && !image.includes("home-mobile") ? (
                    <div className="img-container">
                      <img src={image} />{" "}
                    </div>
                  ) : (
                    ""
                  )}
                  {video && (
                    <div className="animation-container">
                      <video
                        className={
                          video.includes("video-devices")
                            ? "stranger-things-video"
                            : "video"
                        }
                        autoPlay
                        muted
                        loop
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                  )}
                </div>
              )}

              {miniImage && (
                <div className="animation-container-stranger-things">
                  {homeMobile && (
                    <img className="stranger-things" src={homeMobile} />
                  )}
                  <div className="animation-box-container">
                    <img className="mini-image" src={miniImage} />
                    <div className="animation-text">
                      <h3> Stranger Things </h3>
                      <p> Download Läuft... </p>
                    </div>
                    <img className="animation-image" src={after} />
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
      <div className="section-container">
        <div
          className="section-container-inner"
          style={{ flexDirection: "column" }}
        >
          <h1 className="faq-title">Häufig gestellte Fragen</h1>
          <ul className="faq-container">
            {faqs.map((faq) => {
              let { header, body, headerEnglish, bodyEnglish } = faq;
              if (checkUrl) {
                body = bodyEnglish;
                header = headerEnglish;
              }
              return (
                <li key={faq.id} className="faq-text-container">
                  <button
                    className="faq-question"
                    onClick={() => addClass(faq.id)}
                  >
                    <span>{header}</span>
                    <img src={add} className="faq-question-icon" />
                  </button>
                  <div className="faq-answer">
                    <span>{body}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="form-container">
            {checkUrl ? (
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            ) : (
              <p>
                Sind Sie startklar? Geben Sie Ihre E-Mail-Adresse ein, um Ihre
                Mitgliedschaft zu beginnen oder zu reaktivieren.
              </p>
            )}
            <EmailButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
