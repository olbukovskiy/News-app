import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

import styles from "./NavItem.module.scss";

export const NavItem = function ({ route, name }) {
  return (
    <li>
      <NavLink
        className={(navData) => (navData.isActive ? styles.link : "")}
        to={route}
      >
        <Typography variant="h5" component="p">
          <span className={styles.navigationList__text}>{name}</span>
        </Typography>
      </NavLink>
    </li>
  );
};

NavItem.propTypes = {
  route: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
