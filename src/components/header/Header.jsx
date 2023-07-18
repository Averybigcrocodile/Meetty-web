import cn from "classnames";
import styles from "../../style.module.css";
import meettyLogo from "../../logo/meetty_logo.png";
import En from "../../logo/en.png";
import Ua from "../../logo/ua.png";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BsList, BsXLg } from "react-icons/bs";

function Header({
  homeId,
  aboutId,
  productsId,
  sellersId,
  contactsId,
  howId,
  scrollToSection,
}) {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(true);
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 677) {
        setBurger(false);
      } else {
        setBurger(true);
      }
    };

    window.addEventListener("load", handleWindowResize);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("load", handleWindowResize);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleScrollToSection = (id) => {
    scrollToSection(id);
  };

  return (
    <div className={cn(styles.header)}>
      <div className={cn(styles.header__logo)}>
        <img
          className={cn(styles.header__logo_img)}
          src={meettyLogo}
          alt="logo"
          onClick={() => handleScrollToSection(homeId)}
        />
        <div className={cn(styles.header__burger)}>
          {burger ? (
            <BsList
              className={cn(styles.header__burger)}
              onClick={() => setBurger(false)}
            />
          ) : (
            <BsXLg
              className={cn(styles.header__burger)}
              onClick={() => setBurger(true)}
            />
          )}
        </div>
      </div>
      {burger === false && (
        <ul className={cn(styles.header__list)}>
          <li onClick={() => handleScrollToSection(aboutId)}>
            {t("link.about")}
          </li>
          <li onClick={() => handleScrollToSection(productsId)}>
            {t("link.products")}
          </li>
          <li onClick={() => handleScrollToSection(howId)}>{t("link.how")}</li>
          <li onClick={() => handleScrollToSection(sellersId)}>
            {t("link.buy")}
          </li>
          <li onClick={() => handleScrollToSection(contactsId)}>
            {t("link.contacts")}
          </li>
          <li>
            {lang ? (
              <img
                className={cn(styles.header__lang)}
                src={Ua}
                alt="UA"
                onClick={() => i18n.changeLanguage("ua") && setLang(false)}
              />
            ) : (
              <img
                className={cn(styles.header__lang)}
                src={En}
                alt="En"
                onClick={() => i18n.changeLanguage("en") && setLang(true)}
              />
            )}
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
