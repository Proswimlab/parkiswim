import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import User from "../img/user.svg";
import Heart from "../img/heart.svg";
import ArrowUp from "../img/arrow-up.svg";
import ArrowRight from "../img/double-arrow-right.svg";
import { useTranslation } from "react-i18next";
import "../style/OurValues.css";
export function OurValues({ refs }: { refs: any }) {
  const { t } = useTranslation("values");
  const scrollToRef = (ref: any) =>
    ref.current && window.scrollTo(0, ref.current.offsetTop);
  return (
    <div className="our-values">
      <div className="action">
        <div className="subtitle">{t("our_values")}</div>
        <div className="title">{t("what_we_stand_for")}.</div>
        <NavLink
          to="/#aboutus"
          className="button full about"
          onClick={(e) => {
            e.preventDefault();
            scrollToRef(refs.about);
          }}
        >
          {t("about_us")}
        </NavLink>
      </div>
      <div className="details">
        <div className="item">
          <img src={User} alt="" />
          <div className="item-title">{t("expertise")}.</div>
          <div className="text">{t("expertise_description")}</div>
        </div>
        <div className="item">
          <img src={Heart} alt="" />
          <div className="item-title">{t("personal")}.</div>
          <div className="text">{t("personal_description")}</div>
        </div>
        <div className="item">
          <img src={ArrowUp} alt="" />
          <div className="item-title">{t("innovative")}.</div>
          <div className="text">{t("innovative_description")}</div>
        </div>
        <div className="item">
          <img src={ArrowRight} alt="" />
          <div className="item-title">{t("enthusiast")}.</div>
          <div className="text">{t("enthusiast_description")}</div>
        </div>
        <NavLink to="/about" className="button dark about mobile">
          {t("about_us")}
        </NavLink>
      </div>
    </div>
  );
}
