import { Card, Row, Col, Input } from 'antd'
import millify from 'millify'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/CryptoApi'


function Cryptocurrencies({simplified}) {
  const count = simplified ? 10 : 100;
  const {data: cryptoList, isFetching}= useGetCryptosQuery(count);
  const [cryptos, setcryptos] = useState(cryptoList?.data?.coins)
  console.log(cryptos)
  if(isFetching) return 'Loding...'
  return (
    <>
      <Row gutter={[32,32]} className='crypto-card-container'>
        {cryptos?.map((coin)=>(
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={coin.uuid}>
            <Link to={`/crypto/${coin.uuid}`}>
              <Card 
              title={`${coin.rank}. ${coin.name}`}
              extra={<img className='crypto-image' src={coin.iconUrl} />}
              hoverable
              >
                <p>Price : {millify(coin.price)}</p>
                <p>Market Cap : {millify(coin.marketCap)}</p>
                <p>Daily Change : {millify(coin.change)} %</p>
              </Card>
              </Link>
          </Col>
        ))}

      </Row>
    </>
  )
}

export default Cryptocurrencies