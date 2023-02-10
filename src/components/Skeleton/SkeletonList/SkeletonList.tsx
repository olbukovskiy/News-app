import { SkeletonCard } from "../SkeletonCard/SkeletonCard";
import styles from "./SkeletonList.module.scss";

export const SkeletonList: React.FunctionComponent = () => {
  const skeletonItems: number = 9;
  return (
    <ul className={styles.cardsList}>
      {Array(skeletonItems)
        .fill(0)
        .map((_, index) => {
          return <SkeletonCard key={index} />;
        })}
    </ul>
  );
};
