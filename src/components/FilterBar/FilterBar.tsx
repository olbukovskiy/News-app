import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { OutlinedInput } from "@mui/material";
import { filterArticles } from "redux/filterSlice";
import hooks from "hooks";

import styles from "./FilterBar.module.scss";

interface ISearchQuery {
  [prop: string]: string;
}

const { useAppDispatch } = hooks;

export const FilterBar: React.FunctionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterSearchValue = searchParams.get("search") ?? "";
  const dispatch = useAppDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue: string = event.target.value.trim().toLowerCase();
    const searchQuery: ISearchQuery =
      filterValue !== "" ? { search: filterValue } : {};
    setSearchParams(searchQuery);
    dispatch(filterArticles(filterSearchValue));
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
