import { routes } from "routes";
import { NavItem } from "components/NavItem/NavItem";
import styles from "./Navigation.module.scss";

const menu = [{ id: "home", name: "Home", route: routes.HOME }];

export const Navigation = function () {
  return (
    <nav>
      <ul className={styles.navigationList}>
        {menu.map(({ id, name, route }) => {
          return <NavItem key={id} route={route} name={name} />;
        })}
      </ul>
    </nav>
  );
};
