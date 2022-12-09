import { Container, Text, Row, Col, Button, Progress} from '@nextui-org/react'
import Image from 'next/image'

const Supporters = () => {
  return (
    <div className='mr-11'>
        <Row className='space-x-4' justify='center' css={{mt:"$15"}} >
        <a href='https://kucoin.com/'><Image className='support' src='/kc.png' alt='supporter' width={150} height={60} /></a>
        <a href='https://polygonstudios.com/'><Image className='support' src='/ps.png' alt='supporter' width={150} height={60} /></a>
        <a href='https://gate.io/'><Image className='support' src='/gt.png' alt='supporter' width={150} height={60} /></a>
        <a href='https://nftb.io/'><Image className='support' src='/nb.png' alt='supporter' width={150} height={60} /></a>
        </Row>

        <Row className='space-x-4' justify='center' >
        <a href='https://windvane.io/'><Image className='support'src='/wv.png' alt='supporter' width={150} height={60} /></a>
        <a href='https://zelwin.finance/'><Image className='support' src='/zf.png' alt='supporter' width={150} height={60} /></a>
        <a href='https://chainplay.gg/'><Image className='support' src='/cp.png' alt='supporter' width={150} height={60} /></a>
        <a href='https://www.xt.com/'><Image className='support' src='/xt.png' alt='supporter' width={150} height={60} /></a>
 
        </Row>
    </div>
  )
}

export default Supporters