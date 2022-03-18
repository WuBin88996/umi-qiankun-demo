import {useState} from 'react'

const useUserInfo = () => {
  const [userInfo,setUserInfo] = useState<{www: string}>({www: ''})

  const getUserInfo = () => {

  }

  return {
    userInfo,
    setUserInfo,
    getUserInfo
  }
}

export default useUserInfo