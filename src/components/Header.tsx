import React, { useState } from "react";
import NewLogo from "../img/logo.svg";
import LogoDark from "../img/logo-dark.svg";
import "../style/Header.css";
import { Link, NavLink, useHistory, useRouteMatch } from "react-router-dom";
import Cross from "../img/cross.svg";
import { LANGUAGE } from "../App";
import { useTranslation } from "react-i18next";

export function NewHeader({
  setLanguage,
  language,
  refs
}: {
  setLanguage: (lang: LANGUAGE) => void;
  language: LANGUAGE;
  refs: any
}) {
  const [showingMobileMenu, showMobileMenu] = useState(false);
  const { t, i18n } = useTranslation("header");

  return (
    <div
      className={`header-container dark ${
        showingMobileMenu ? "mobile" : ""
      }`}
    >
      <Link
        onClick={() => {
          showMobileMenu(false);
        }}
        to="/"
      >
        <img
          src={LogoDark}
          alt={"Proswimlab"}
        />
      </Link>
      {showingMobileMenu ? (
        <img
          className="mobile-button"
          src={Cross}
          alt="Cross"
          onClick={() => {
            showMobileMenu(false);
          }}
        />
      ) : (
        <div
          className="mobile-button"
          onClick={() => {
            showMobileMenu(true);
          }}
        >
          <svg
            width="25"
            height="22"
            viewBox="0 0 25 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="4" fill="#F6F9FA" />
            <rect y="9" width="25" height="4" fill="#F6F9FA" />
            <rect y="18" width="25" height="4" fill="#F6F9FA" />
          </svg>
        </div>
      )}
      <div className="all-container">
        <div className="flex flex-column mobile-container">
          <div className="lang-container mb-4">
            <div
              className={`lang ${language === LANGUAGE.EN ? "nowseeing" : ""}`}
              onClick={async () => {
                setLanguage(LANGUAGE.EN);
                await i18n.changeLanguage(LANGUAGE.EN);
              }}
            >
              ENG
            </div>
            <div className="separator" />
            <div
              className={`lang ${language === LANGUAGE.NL ? "nowseeing" : ""}`}
              onClick={async () => {
                setLanguage(LANGUAGE.NL);
                await i18n.changeLanguage(LANGUAGE.NL);
              }}
            >
              NL
            </div>
          </div>

          <div className="mt-4 flex navitems">
            <NavLink
              exact={true}
              className="navitem"
              to="/#whatisit"
              activeClassName="nowseeing"
              onClick={() => {
                showMobileMenu(false);
                scrollToRef(refs.what);
              }}
            >
              {t("what")}?
            </NavLink>
            <NavLink
              exact={true}
              className="navitem"
              to="/#whoisitfor"
              onClick={() => {
                showMobileMenu(false);
                scrollToRef(refs.who);
              }}
            >
              {t("who")}?
            </NavLink>
            <NavLink
              exact={true}
              className="navitem"
              to="/#whereandwhen"
              onClick={() => {
                showMobileMenu(false);
                scrollToRef(refs.where);
              }}
            >
              {t("where_and_when")}?
            </NavLink>
            <NavLink
              exact={true}
              className="navitem"
              to="/#aboutus"
              onClick={() => {
                showMobileMenu(false);
                scrollToRef(refs.about);
              }}
            >
              {t("about_us")}
            </NavLink>
            <NavLink
              exact={true}
              className="navitem"
              to="/contact"
              activeClassName="nowseeing"
              onClick={() => {
                showMobileMenu(false);
              }}
            >
              {t("contact")}
            </NavLink>

              <NavLink
            to="/login"
            className="navitem button full login"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = 'https://platform.parkiswim.proswimlab.be/en';
            }}
          >
            Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
const scrollToRef = (ref:any) => ref.current && window.scrollTo(0, ref.current.offsetTop) 
