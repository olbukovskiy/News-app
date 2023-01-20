import { NavLink } from "react-router-dom";
import { routes } from "routes";
import { Typography } from "@mui/material";

import styles from "./Navigation.module.scss";

const menu = [{ id: "home", name: "Home", route: routes.HOME }];

export function Navigation() {
  return (
    <nav>
      <ul className={styles.navigationList}>
        {menu.map(({ id, name, route }) => {
          return (
            <li key={id}>
              <NavLink
                className={(navData) => (navData.isActive ? styles.link : "")}
                to={route}
              >
                <Typography variant="h4" component="p">
                  <span className={styles.navigationList__text}>{name}</span>
                </Typography>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
