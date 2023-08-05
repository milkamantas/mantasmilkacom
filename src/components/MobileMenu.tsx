import { FunctionComponent, useState } from "react";
import styles from "./MobileMenu.module.css";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IconContext } from "react-icons";
import Nav from "./Nav";
import { NavType } from "./Nav"; // Here's the import

const MobileMenu: FunctionComponent<NavType> = ({
  onAboutMeClick,
  onProjectsClick,
  onContactMeClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.mobilemenu}>
      <div
        className={styles.mobilemenuClosed}
        onClick={() => setIsOpen(true)}
        style={{ display: isOpen ? "none" : "flex" }}
      >
        <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
          <IoMdMenu />
        </IconContext.Provider>
      </div>
      <div
        className={styles.mobilemenuOpen}
        onClick={() => setIsOpen(false)}
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
          <IoMdClose />
        </IconContext.Provider>
      </div>
      <Nav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onAboutMeClick={onAboutMeClick}
        onProjectsClick={onProjectsClick}
        onContactMeClick={onContactMeClick}
      />
    </div>
  );
};

export default MobileMenu;
