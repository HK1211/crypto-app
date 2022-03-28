import React from "react";
import milify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const { Title } = Typography;

function Home() {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

if(isFetching) return 'Loding...'
  return (
    <>
      <Title level={2} className="heading">
        세계 암호화폐{" "}
      </Title>
      <Row gutter={[32, 16]}>
        <Col span={12}><Statistic title="전체 암호화폐" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="전체 거래소" value={milify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="전체 시가총액" value={`$${milify(globalStats.totalMarketCap)}`} /></Col>
        <Col span={12}><Statistic title="24시간 거래량" value={`$${milify(globalStats.total24hVolume)}`} /></Col>      
        <Col span={12}><Statistic title="전체 시장" value={milify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className='home-title'>암호화폐 시가총액 순위</Title>
        <Title level={2} className='show-more'><Link to='/cryptocurrencies'><small><small>더보기</small></small></Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className='home-title'>암호화폐 뉴스</Title>
        <Title level={2} className='show-more'><Link to='/news'><small><small>더보기</small></small></Link></Title>
      </div>
      <News simplified />
    </>
  );
}

export default Home;
