import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { OutlinedInput } from "@mui/material";
import { filterArticles } from "redux/filterSlice";

import styles from "./FilterBar.module.scss";

export const FilterBar = function () {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterSearchValue = searchParams.get("search") ?? "";
  const dispatch = useDispatch();

  const onChange = (event) => {
    const filterValue = event.target.value.trim().toLowerCase();
    const searchQuery = filterValue !== "" ? { search: filterValue } : {};
    setSearchParams(searchQuery);
    dispatch(filterArticles(filterValue));
  };

  useEffect(() => {
    if (filterSearchValue === "") {
      dispatch(filterArticles(filterSearchValue));
      return;
    }

    dispatch(filterArticles(filterSearchValue));
  }, [dispatch, filterSearchValue]);

  return (
    <>
      <label>
        <span className={styles.filter__title}>Filter by keywords</span>
        <div className={styles.filter__wrapper}>
          <FiSearch size={20} className={styles.icon} />
          <OutlinedInput
            className={styles.filter__input}
            type="search"
            onChange={onChange}
            value={filterSearchValue}
            placeholder="Search news"
          />
        </div>
      </label>
    </>
  );
};
