import React from "react";
import milify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";

const { Title } = Typography;

function Home() {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
console.log(data)
if(isFetching) return 'Loding...'
  return (
    <>
      <Title level={2} className="heading">
        Global crypto{" "}
      </Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats && globalStats.total}></Statistic></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={globalStats && milify(globalStats.totalExchanges)}></Statistic> </Col>
        <Col span={12}><Statistic title="Total Market Cap" value={globalStats && milify(globalStats.totalMarketCap)}></Statistic></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={globalStats && milify(globalStats.total24hVolume)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Markets" value={globalStats && milify(globalStats.totalMarkets)}></Statistic></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies</Title>
        <Title level={2} className='show-more'><Link to='/cryptocurrencies'><small>more</small></Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Latest Crytpto News</Title>
        <Title level={2} className='show-more'><Link to='/cryptocurrencies'>more</Link></Title>
      </div>
    </>
  );
}

export default Home;
