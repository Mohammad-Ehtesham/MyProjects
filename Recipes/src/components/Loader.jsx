import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={`${styles["Loader-size"]}`}>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["dot"]}`}></div>
        <div className={`${styles["dot"]}`}></div>
        <div className={`${styles["dot"]}`}></div>
        <div className={`${styles["dot"]}`}></div>
        <div className={`${styles["dot"]}`}></div>
        <div className={`${styles["dot"]}`}></div>
        <div className={`${styles["dot"]}`}></div>
        <div className={`${styles["dot"]}`}></div>
        <div className={`${styles["dot"]}`}></div>
        <div className={`${styles["dot"]}`}></div>
        <div className={`${styles["dot"]}`}></div>
        <div className={`${styles["dot"]}`}></div>
        <div className={`${styles["dot"]}`}></div>
        <div className={`${styles["dot"]}`}></div>
        <div className={`${styles["dot"]}`}></div>
        <div className={`${styles["dot"]}`}></div>
      </div>
    </div>
  );
};

export default Loader;
