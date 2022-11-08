import { ThreeDots } from "react-loader-spinner";
import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.container}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="var(--primary-color)"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
}
