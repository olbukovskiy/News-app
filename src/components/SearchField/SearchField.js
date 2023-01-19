import { Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";

import styles from "./SearchField.module.scss";

const initialValues = { search: "" };

export function SearchField({ onSubmit, value }) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.setFieldValue("search", value);
          actions.setSubmitting(false);
          actions.resetForm();
          onSubmit(values.search);
        }}
      >
        {({ isSubmitting }) => {
          return (
            <div className={styles.search__container}>
              <Form className={styles.search__form}>
                <button
                  className={styles.search__button}
                  type="submit"
                  disabled={isSubmitting}
                >
                  <FiSearch className={styles.icon} size={20} />
                  <span className={styles.search__label}>Search</span>
                </button>
                <Field
                  className={styles.search__input}
                  type="text"
                  autoComplete="off"
                  name="search"
                  placeholder="Search articles"
                />
              </Form>
            </div>
          );
        }}
      </Formik>
    </>
  );
}

SearchField.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
};
