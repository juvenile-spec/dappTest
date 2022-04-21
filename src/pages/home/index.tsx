import React, { memo } from 'react'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import {Button} from 'antd'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import {walletconnect} from '../../connectors'
import { useDispatch } from 'react-redux'
import { commonType,commonTypeOther } from '../../store/common/actions'

const Index = memo(() => {

  const { active, account, connector, activate, error } = useWeb3React()
 const dispatch =useDispatch()

  const click= async()=>{
    dispatch(commonType({common:'你好呀common'}))
  }
  const click2= async()=>{
    dispatch(commonTypeOther({common:'common222'}))
  }
//console.log(active, account, connector, activate, error,'active, account, connector, activate, error');


  console.log(process.env.REACT_APP_TEST,'env')
  return (
    <div>
        <Button onClick={click}>测试common的redux</Button>
        <Button onClick={click2}>测试common2的redux</Button>

    </div>
  )
})

export default Index;