import styles from "./Loader.module.scss";

export const Loader: React.FunctionComponent = () => {
  return (
    <div className={styles.spinnerBackdrop}>
      <div className={styles.loadingWrapper}>
        <span className={styles.dot1}></span>
        <span className={styles.dot2}></span>
        <span className={styles.dot3}></span>
        <span className={styles.dot4}></span>
        <span className={styles.dot5}></span>
        <span className={styles.dot6}></span>
        <span className={styles.dot7}></span>
        <span className={styles.dot8}></span>
        <span className={styles.dot9}></span>
        <span className={styles.dot10}></span>
        <span className={styles.dot11}></span>
        <p className={styles.loading}>Loading</p>
      </div>
    </div>
  );
};
