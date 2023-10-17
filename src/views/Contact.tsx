import React from "react";
import "../style/Contact.css";
import LocationLight from "../img/location-light.svg";
import LocationDark from "../img/location-dark.svg";
import PhoneLight from "../img/phone-light.svg";
import PhoneDark from "../img/phone-dark.svg";
import MailLight from "../img/mail-light.svg";
import MailDark from "../img/mail-dark.svg";
import joinus from "../img/joinus.png";
import { NavLink } from "react-router-dom";


export function Contact() {
  return (
    <div className="contact-container">
      <div className="catch">
        <div className="subtitle">HEY</div>
        <div className="title">Let’s get in touch.</div>
      </div>
      <div className="contact-img"> </div>
<div className="location grey">
  <div className="title">Parkiswim Wachtebeke</div>
  <div className="details">
    <div className="item">
      <img src={LocationDark} alt="Location" />
      <div>Puidonkdreef 1 9185 Wachtebeke</div>
    </div>
    <div className="flex flex-column split">
      <div className="item">
        <img src={PhoneDark} alt="Phone" />
        <div>+32477702991</div>
      </div>
      <div className="item mail">
        <img src={MailDark} alt="Mail" />
        <div>veerle@parkiswim.be</div>
      </div>
    </div>
  </div>
</div>
<div className="location grey">
  <div className="title">Parkiswim Antwerpen</div>
  <div className="details">
    <div className="item">
      <img src={LocationDark} alt="Location" />
      <div>Desguinlei 17/19, 2018 Antwerpen</div>
    </div>
    <div className="flex flex-column split">
      <div className="item">
        <img src={PhoneDark} alt="Phone" />
        <div>+32486139694</div>
    
      </div>
      <div className="item mail">
        <img src={MailDark} alt="Mail" />
        <div>louise.wittouck@ugent.be</div>
       
      </div>
    </div>
  </div>
</div>
<div className="location grey">
  <div className="title">Parkiswim Brugge</div>
  <div className="details">
    <div className="item">
      <img src={LocationDark} alt="Location" />
      <div>Veltemweg 35, 8310 Brugge</div>
    </div>
    <div className="flex flex-column split">
      <div className="item">
        <img src={PhoneDark} alt="Phone" />
        <div>+32476343334</div>
      </div>
      <div className="item mail">
        <img src={MailDark} alt="Mail" />
        <div>Amaryllis@parkiswim.be</div>
      </div>
    </div>
  </div>
</div>

      

      <div className="join-us flex">
        <div>
          <div className="catch">
            <div className="title">Join our team.</div>
          </div>
          <p>
            Ben je een gepassioneerd door parkiswim en wil je graag ons team
            versterken? <br />
           Stuur dan een mailtje naar silke@proswimlab.be.
          </p>
          <a className="button full" href="mailto:silke@proswimlab.be">
           Contacteer ons
          </a>
        </div>
        <img src={joinus} alt="Join PSL now" />
      </div>
    </div>
  );
}
