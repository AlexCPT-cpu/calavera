import { Text, Row, Col} from '@nextui-org/react'
import { useContext } from 'react'
import { WalletConnectContext } from '../context/WalletConnectContext'
import { useMediaQuery } from './UseMediaQuery'

const PurchaseCard = () => {

  const isMd = useMediaQuery(960);
  const context = useContext(WalletConnectContext)
  const { account, ConnectWallet, Mint } = context

  const buyHandler = () => {
    let selected = document.getElementById('select1')
    let input = document.getElementById('input')
    Mint(selected.value, input.value)
  }

  return (
    <div>
      {isMd ?         <Col>
        <Col css={{mb:"$12"}}>
        <Text size={20} b>
            Connected Address:
        </Text>
        <Text>
            {account}
        </Text>
        <Text b>
        Minimum purchase
        </Text>
        <Text>
        1,000 $RIA
        </Text>
        <Text b>
        Select currency:
        </Text>
        <select id='select1' style={{color:"black", border:"2px solid orange", width:"180px", height:"50px", marginRight:"15px"}}>
            <option value='ETH'>ETH</option>
            <option value='USDT'>USDT</option>
            <option value='USDC'>USDC</option>
            <option value='BUSD'>BUSD</option>
            <option value='DAI'>DAI</option>
        </select>
        <Row>
        <button onClick={buyHandler} style={{background:"orange", padding:"10px 40px 10px 40px", marginTop:"10px",marginRight:"10px", border:"none"}}>BUY</button>
        <button disabled style={{background:"gray", padding:"10px 40px 10px 40px", marginTop:"10px", border:"none"}}>CLAIM</button>
        </Row>
        </Col>
        <Col>
        <Text size={20} b>
        Current price:
        </Text>
        <Text>
        1 USDT = 30.77 $RIA
        </Text>
        <Text b>
        You already bought:
        </Text>
        <Text>
        0 $RIA
        </Text>
        <Text style={{marginBottom:"20px"}} b>
        Enter $RIA amount:
        </Text>
        <input id='input' style={{border:"2px solid orange",width:"180px", height:"50px", color:"black"}} placeholder='$RIA amount' />
        </Col>
        </Col>:      <Row>
        <Col css={{mb:"$12"}}>
        <Text size={20} b>
            Connected Address:
        </Text>
        <Text>
            {account}
        </Text>
        <Text b>
        Minimum purchase
        </Text>
        <Text>
        1,000 $RIA
        </Text>
        <Text b>
        Select currency:
        </Text>
        <select id='select1' style={{color:"black", border:"2px solid orange", width:"180px", height:"50px", marginRight:"15px"}}>
            <option value='ETH'>ETH</option>
            <option value='USDT'>USDT</option>
            <option value='USDC'>USDC</option>
            <option value='BUSD'>BUSD</option>
            <option value='DAI'>DAI</option>
        </select>
        <Row>
        <button onClick={buyHandler} style={{background:"orange", padding:"10px 40px 10px 40px", marginTop:"10px",marginRight:"10px", border:"none"}}>BUY</button>
        <button disabled style={{background:"gray", padding:"10px 40px 10px 40px", marginTop:"10px", border:"none"}}>CLAIM</button>
        </Row>
        </Col>
        <Col>
        <Text size={20} b>
        Current price:
        </Text>
        <Text>
        1 USDT = 30.77 $RIA
        </Text>
        <Text b>
        You already bought:
        </Text>
        <Text>
        0 $RIA
        </Text>
        <Text style={{marginBottom:"20px"}} b>
        Enter $RIA amount:
        </Text>
        <input id='input' style={{border:"2px solid orange",width:"180px", height:"50px", color:"black"}} placeholder='$RIA amount' />
        </Col>
        </Row>}
    </div>
  )
}

export default PurchaseCard
