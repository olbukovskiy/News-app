import { OutlinedInput } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import styles from "./FilterBar.module.scss";

export const FilterBar = function ({ onChange }) {
  return (
    <div>
      <label>
        <span className={styles.filter__title}>Filter by keywords</span>
        <div className={styles.filter__wrapper}>
          <FiSearch size={20} className={styles.icon} />
          <OutlinedInput
            className={styles.filter__input}
            type="text"
            onChange={onChange}
            placeholder="Search news"
          />
        </div>
      </label>
    </div>
  );
};
