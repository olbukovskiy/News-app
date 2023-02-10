import Skeleton from "react-loading-skeleton";
import style from "./SkeletonCard.module.scss";

export const SkeletonCard: React.FunctionComponent = () => {
  const skeletonContentFields: number = 4;
  return (
    <li className={style.card}>
      <div className={style.thumb} style={{ marginBottom: "25px" }}>
        <Skeleton className={style.skeletonPicture} />
      </div>
      <div className={style.skeletonThumb}>
        {Array(skeletonContentFields)
          .fill(0)
          .map((_, index) => {
            return <Skeleton key={index} className={style.contentSkeleton} />;
          })}
      </div>
    </li>
  );
};
