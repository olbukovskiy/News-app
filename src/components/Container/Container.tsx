import styles from "./Container.module.scss";

interface IProps {
  children: React.ReactNode;
}

export const Container: React.FunctionComponent<IProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
