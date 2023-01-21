import PropTypes from "prop-types";
import { OutlinedInput } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import styles from "./FilterBar.module.scss";

export const FilterBar = function ({ onChange, filterValue }) {
  return (
    <>
      <label>
        <span className={styles.filter__title}>Filter by keywords</span>
        <div className={styles.filter__wrapper}>
          <FiSearch size={20} className={styles.icon} />
          <OutlinedInput
            className={styles.filter__input}
            type="text"
            onChange={onChange}
            value={filterValue}
            placeholder="Search news"
          />
        </div>
      </label>
    </>
  );
};

FilterBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string,
};
