import './Page1.less';
import { useModel } from 'umi';
import { useEffect } from 'react';
export default function Page() {


  const qiankunStateForSlave  = useModel("@@qiankunStateForSlave")

  const { userInfo } = useModel('useUserInfo')

  console.log('qiankunStateForSlave====', qiankunStateForSlave) 

  console.log('userInfo====', userInfo)

  useEffect(() => {
    qiankunStateForSlave.setGlobalState({
      ...qiankunStateForSlave.masterState,
      bbbbb: 'bbbbb'
    })
  }, [])

  return (
    <div>
      <h1>Page Page1</h1>
    </div>
  );
}
