import React from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import NewLogo from "../img/small-logo.svg";
import Facebook from "../img/facebook.svg";
import Youtube from "../img/youtube.svg";
import Instagram from "../img/instagram.svg";
import "../style/Footer.css";
import { useTranslation } from "react-i18next";

export function Footer({ refs }: { refs: any }) {
  const { t } = useTranslation("header");
  const matchLogin = useRouteMatch({
    path: "/login",
    exact: true,
  });
  const matchAccount = useRouteMatch({
    path: "/account",
  });
  const scrollToRef = (ref: any) =>
    ref.current && window.scrollTo(0, ref.current.offsetTop);

  if (matchLogin || matchAccount) {
    return null;
  }

  return (
    <div className="footer-container items-center">
      <Link to="/">
        <img src={NewLogo} alt={"Proswimlab"} />
      </Link>
      <div className="ml-auto mr-auto flex items-center justify-center">
        <NavLink
          exact={true}
          className="navitem"
          to="/#whatisit"
          activeClassName="nowseeing"
          onClick={() => {
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
            scrollToRef(refs.about);
          }}
        >
          {t("about_us")}
        </NavLink>
        <NavLink exact={true} className="navitem" to="/contact">
          {t("contact")}
        </NavLink>
      </div>
      <div className="flex items-center justify-center">
        <a href="https://www.facebook.com/Proswimlab" target="_blank">
          <img className="social" src={Facebook} alt="Facebook" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCXZdTVMFrawzP7Mp8eKR4Vg/videos"
          target="_blank"
        >
          <img className="social" src={Youtube} alt="Youtube" />
        </a>
        <a href="https://www.instagram.com/proswimlab/?hl=en" target="_blank">
          <img className="social" src={Instagram} alt="Instagram" />
        </a>
      </div>
    </div>
  );
}
