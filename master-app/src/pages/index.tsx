import styles from './index.less';

export default function IndexPage() {

  console.log('H5_ENV====', H5_ENV)

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
