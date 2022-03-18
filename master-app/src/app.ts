import { useState } from 'react';

import './styles/common.less'
import "tailwindcss/tailwind.css"
import 'antd/dist/antd.css'

export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState({});
  const setGlobalState = (state:{[key:string]:any}) => {setMasterState(state)}
  return {
    masterState,
    setMasterState,
    setGlobalState
  };
}