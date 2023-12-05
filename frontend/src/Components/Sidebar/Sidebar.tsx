import { NavLink } from "react-router-dom";
import { Drawer } from "@mui/material";
import { useLocation } from "react-router-dom";
import { MENU_LIST } from "./Sidebar.constants";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <Drawer transitionDuration={40} variant={"persistent"} open={true}>
      <div className={styles.wrapperSidebar}>
        <div className={styles.wrapperButton}>
          {MENU_LIST.map((item) => (
            <NavLink
              id={item.id.toString()}
              key={item.id}
              to={{
                pathname: item.path,
              }}
              aria-haspopup="true"
            >
              <div
                className={
                  location.pathname === item.path
                    ? styles.activeSidebarButton
                    : styles.sidebarButton
                }
              >
                {item.label}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
