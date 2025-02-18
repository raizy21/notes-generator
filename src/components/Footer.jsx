import FooterText from "./footer/FooterText";
import Linkedin from "./footer/Linkedin";
import Instagram from "./footer/Instagram";
import Github from "./footer/Github";
import Youtube from "./footer/Youtube";
import United from "./footer/United";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary  m-[auto] sm:ml-0 sm:h-[5rem] sm:flex sm:flex-row sm:justify-between">
        <FooterText />

        <div className="flex sm:flex-row  sm:h-[5rem] justify-center   ">
          <Linkedin />
          <Instagram />
          <Github />
          <Youtube />
          <United />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
