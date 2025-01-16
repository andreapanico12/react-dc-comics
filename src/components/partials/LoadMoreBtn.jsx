import styles from './LoadMoreBtn.module.css'

const LoadMoreButton = () => {
  return (
    <div className={styles.loadMoreContainer}>
      <button className={styles.loadMoreButton}>
        LOAD MORE
      </button>
    </div>
  );
};

export default LoadMoreButton