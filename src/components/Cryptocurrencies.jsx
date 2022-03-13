import { Card, Row, Col, Input } from 'antd'
import millify from 'millify'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'


function Cryptocurrencies({simplified}) {
  const count = simplified ? 10 : 100;
  const {data: cryptoList, isFetching}= useGetCryptosQuery(count);
  const [cryptos, setcryptos] = useState(cryptoList?.data?.coins)
  const [searchTerm, setsearchTerm] = useState('')
  console.log(cryptos)
  useEffect(()=>{
    const filteredData=cryptoList?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(searchTerm));
    setcryptos(filteredData)
  }, [cryptoList, searchTerm])

  if(isFetching) return 'Loding...'
  return (
    <>
    {!simplified && 
     <div className='search-crypto'>
     <input placeholder='Search' onChange={(e)=>setsearchTerm(e.target.value)} />
   </div>
   }
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