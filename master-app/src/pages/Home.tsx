import './Home.less';
import { useModel } from 'umi';
import { useEffect } from 'react';


export default function IndexPage() {

  console.log('H5_ENV====', H5_ENV)

  const qiankunStateForSlave  = useModel("@@qiankunStateForSlave")

  const {userInfo, setUserInfo} = useModel('useUserInfo')

  console.log('qiankunStateForSlave====', qiankunStateForSlave, userInfo)

  useEffect(() => {
    qiankunStateForSlave.setGlobalState({
      ...qiankunStateForSlave.masterState,
      userName: 'qqqqq'
    })

    setUserInfo({
      www: 'www'
    })
  }, [])


  return (
    <div>
      <h1 className="title mt-10">Page index</h1>
    </div>
  );
}
