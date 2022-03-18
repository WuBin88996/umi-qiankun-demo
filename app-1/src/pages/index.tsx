import styles from './index.less';
import { useModel } from 'umi';
import { useEffect } from 'react';

export default function IndexPage() {

  const masterProps = useModel("@@qiankunStateFromMaster")

  console.log('masterProps====', masterProps)

  useEffect(() => {
    masterProps.setMasterState({...masterProps.masterState, phone: '11111111'})
  }, [])

  return (
    <div>
      <h1 className={styles.title}>子应用 index</h1>
    </div>
  );
}
