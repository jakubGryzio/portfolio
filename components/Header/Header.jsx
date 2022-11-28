import React, { useRef, useEffect } from "react";

import { Container } from "reactstrap";
import classes from "./Header.module.css";
import Link from "next/link";
import NAV_LINK from "../../data/navLink";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const headerHandler = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerHandler);

    return () => window.removeEventListener("scroll", headerHandler);
  }, []);

  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${classes.menu__activate}`);

  return (
    <header className={classes.header} ref={headerRef}>
      <Container>
        <div className={classes.nav__wrapper}>
          {/* <div className={classes.logo}>
                    <div className={classes.description}>
                        <h4>jakubgryz.io</h4>
                    </div>
                </div> */}
          <div
            className={classes.navigation}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={classes.nav__menu}>
              {NAV_LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}

              <div className={classes.nav__right}>
                <p className="d-flex align-items-center gap-2 mb-0">
                  <i className="ri-mail-line"></i>jakubgryzio@gmail.com
                </p>
              </div>
            </div>
          </div>
          <span className={classes.mobile__menu}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
