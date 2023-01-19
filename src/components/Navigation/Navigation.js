import { NavLink } from "react-router-dom";
import { routes } from "routes";
import { Typography } from "@mui/material";

import styles from "./Navigation.module.scss";

const menu = [
  { id: "home", name: "Home", route: routes.HOME },
  { id: "articles", name: "Articles", route: routes.ARTICLES },
];

export function Navigation() {
  return (
    <nav>
      <ul className={styles.navigationList}>
        {menu.map(({ id, name, route }) => {
          return (
            <li key={id}>
              <NavLink className={styles.link} to={route}>
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
