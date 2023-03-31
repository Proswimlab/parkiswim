import React, { useEffect, useState } from "react";
import "../style/Home.css";
import TrianglesLeft from "../img/triangles-left.png";
import AdultsBanner from "../img/adultsbanner.png";
import wawBanner from "../img/wawbanner.png";
import locationDot from "../img/location.png";
import wiif from "../img/wiif.png";
import Number from "../img/01.svg";
import { NavLink } from "react-router-dom";
import reviews from "../data/reviews";
import { useTranslation } from "react-i18next";

import PoligonLeft from "../img/PolygonLeft.png";
import PoligonRight from "../img/PolygonRight.png";
import { OurValues } from "../components/OurValues";

function importAll(r: any) {
  return r.keys().map(r);
}

export function Home({ refs }: { refs: any }) {
  const { t } = useTranslation("home");
  let [indexShown, setIndexShown] = useState(0);

  let listOfLogos = [];
  listOfLogos = importAll(
    require.context("../img/logos/", false, /\.(png|jpe?g|svg)$/)
  );

  const useReachtHash = () => {
    const [path, setPath] = React.useState(window.location.hash);
    const listenToPopstate = () => {
      const winPath = window.location.hash;
      setPath(winPath);
    };
    React.useEffect(() => {
      window.addEventListener("popstate", listenToPopstate);
      return () => {
        window.removeEventListener("popstate", listenToPopstate);
      };
    }, []);
    return path;
  };

  const hash = useReachtHash();
  useEffect(() => {
    console.log('location changed');
    
    console.log(hash);
    if (hash) {
      let elem = document.getElementById(hash.slice(1));
      console.log(elem);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [hash, ]);

  return (
    <div className="home">
      <div className="banner">
        <div className="title">Parkiswim.</div>
        <div className="powered">
          <p>Powered by</p>
          <p className="big">Proswimlab</p>
        </div>
      </div>
      <section ref={refs.what} id="whatisit" className="what flex">
        <div className="what-container">
          <div className="action">
            <div className="subtitle">{t("what")}?</div>
            <div className="title">{t("what_sub")}</div>
            <div className="text">{t("what_description")}</div>
            <NavLink to="" className="button dark desktoponly">
              {t("contact_us")}
            </NavLink>
          </div>
        </div>
        <img src={AdultsBanner} alt={""} />
      </section>

      <section ref={refs.where} id="whereandwhen" className="waw flex">
        <img src={wawBanner} alt={""} />
        <div className="waw-container">
          <div className="action">
            <div className="title">{t("waw_sub")}?</div>
            <div className="location flex">
              <img src={locationDot} className="desktoponly"/>
              {t("waw_location")}
            </div>
            <div className="time text">{t("waw_time")}</div>
            <div className="text">{t("waw_description")}</div>
            <NavLink to="/contact" className="button dark">
              {t("contact_us")}
            </NavLink>
          </div>
          <div className="ml-auto flex info mr-auto">
            <div className="prices">
              <div className="wrapper">
                <div className="intro">{t("price_for")}</div>
                <div className="flex">
                  <div className="euro">&euro;</div>
                  <div className="price">118</div>
                </div>
              </div>
              <div className="text">
                {t("point1")} <br />
                {t("point2")} <br />
                {t("point3")} <br />
                {t("point4")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={refs.who} id="whoisitfor" className="wiif flex">
        <div className="wiif-container">
          <div className="action">
            <div className="subtitle">{t("wiif")}?</div>
            <div className="title">{t("wiif_sub")}</div>
            <div className="text">{t("wiif_description")}</div>
            <NavLink to="" className="button dark desktoponly">
              {t("contact_us")}
            </NavLink>
          </div>
        </div>
        <img src={wiif} alt={""} />
      </section>
      <OurValues refs={refs} />
      <section ref={refs.about} id="aboutus" className="wawe flex">
        <div className="wawe-container">
          <div className="action">
            <div className="subtitle">{t("wawe")}?</div>
            <div className="title">{t("wawe_sub")}</div>
          </div>
          <div id="silke" className="person">
            <div className="img"></div>
            <div className="content">
              <h3>{t("silke")}</h3>
              <p className="subtitle">Manager</p>
              <p>{t("silke_about")}</p>
            </div>
          </div>
          <div id="veerle" className="person">
            <div className="content">
              <h3>{t("veerle")}</h3>
              <p className="subtitle">Verantwoordelijke Wachtebeke</p>
              <p>{t("veerle_about")}</p>
            </div>
            <div className="img"></div>
          </div>
          <div id="louise" className="person">
            <div className="img"></div>
            <div className="content">
              <h3>{t("louise")}</h3>
              <p className="subtitle">Coördinator Oost-Vlaanderen</p>
              <p>{t("louise_about")}</p>
            </div>
         </div>
         <div id="ama" className="person">
	          <div className="content">
              <h3>{t("ama")}</h3>
              <p className="subtitle">Coördinator West-Vlaanderen</p>
              <p>{t("ama_about")}</p>
            </div>
            <div className="img"></div>
          </div>

        </div>
      </section>

      <div className="reviews">
        <div className="number-wrapper">
          <img className="number" src={Number} alt="01" />
          <img className="dark-triangle" src={TrianglesLeft} alt="Triangles" />
        </div>
        <div className="reviews-container">
          <div className="action">
            <img
              className="cursor-pointer"
              src={PoligonLeft}
              alt="Previous"
              onClick={(e) => {
                if (indexShown > 0) {
                  setIndexShown(indexShown - 1);
                }
              }}
            />
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`review ${indexShown === index ? "active" : ""}`}
              >
                <div className="subtitle">{t("our_reviews")}</div>
                <div className="title">“{review.review}”</div>
                <div className="info">
                  <div className="name">{review.by}</div>
                  <div className="job">{review.function}</div>
                </div>
              </div>
            ))}
            <img
              className="cursor-pointer"
              src={PoligonRight}
              alt="Next"
              onClick={(e) => {
                if (indexShown < reviews.length - 1) {
                  setIndexShown(indexShown + 1);
                }
              }}
            />
          </div>
          <div className="lessons">
            <NavLink className="button" to="contact">
              {t("contact_us")}
            </NavLink>
          </div>
        </div>
      </div>
      <div className="approved">
        <div className="action">
          <div className="title">{t("approved_by")}.</div>
        </div>
        <div className="logos">
          {listOfLogos.map((image: string, index: string) => (
            <img key={index} src={image} alt={`Team member nr ${index}`}></img>
          ))}
        </div>
      </div>
    </div>
  );
}
