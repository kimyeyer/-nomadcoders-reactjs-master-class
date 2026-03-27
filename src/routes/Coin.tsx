import { useEffect, useState } from "react";
import { Switch, Route, useLocation, useParams, useRouteMatch, useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import { Helmet } from "react-helmet";


const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
    span:first-child {
        font-size: 10px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
`;
const Description = styled.p`
  margin: 20px 0px;
`;


const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
        props.isActive ? props.theme.accentColor : props.theme.textColor};
   a {
    padding: 7px 0px;
    display: block;
  }
`;


const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackButton = styled.button`
    position: absolute;
    left: 10px;
    top: 10px;  
    width: 30px;
    height: 30px;
    font-size: 20px;
    border-radius: 15px;
    border: none;
    background-color: #747d8c;
    color: #a4b0be;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #a4b0be;
        color: #747d8c;
    }
`;
interface RouteParams {
    coinId: string;
}
interface RouteState {
    name: string;
}

interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

export interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
}
const infoDummyData: InfoData = {
  "id": "btc-bitcoin",
  "name": "Bitcoin",
  "symbol": "BTC",
  "rank": 1,
  "is_new": false,
  "is_active": true,
  "type": "coin",
  "description": "Bitcoin is a cryptocurrency and worldwide payment system. It is the first decentralized digital currency, as the system works without a central bank or single administrator.",
  "message": "<string>",
  "open_source": true,
  "hardware_wallet": true,
  "started_at": "2009-01-03T00:00:00Z",
  "development_status": "Working product",
  "proof_type": "Proof of work",
  "org_structure": "Decentralized",
  "hash_algorithm": "SHA256",
  "first_data_at": "2018-10-03T11:48:19Z",
  "last_data_at": "2019-05-03T11:00:00"
}

const tickersDummyData: PriceData = {
  "id": "btc-bitcoin",
  "name": "Bitcoin",
  "symbol": "BTC",
  "rank": 1,
  "circulating_supply": 17007062,
  "total_supply": 17007062,
  "max_supply": 21000000,
  "beta_value": 0.735327,
  "first_data_at": "2010-11-14T07:20:41Z",
  "last_updated": "2018-11-14T07:20:41Z",
  "quotes": {
    "USD": {
      "price": 5162.15941296,
      "volume_24h": 7304207651.1585,
      "volume_24h_change_24h": -2.5,
      "market_cap": 91094433242,
      "market_cap_change_24h": 1.6,
      "percent_change_15m": 0,
      "percent_change_30m": 0,
      "percent_change_1h": 0,
      "percent_change_6h": 0,
      "percent_change_12h": -0.09,
      "percent_change_24h": 1.59,
      "percent_change_7d": 0.28,
      "percent_change_30d": 27.39,
      "percent_change_1y": -37.99,
      "ath_price": 20089,
      "ath_date": "2017-12-17T12:19:00Z",
      "percent_from_price_ath": -74.3
    }
  }
}
function Coin() {
    const { coinId } = useParams<RouteParams>();
    const { state } = useLocation<RouteState>();
    console.log(state)
    //useRouteMatch 훅을 이용해서 현재 URL이 /:coinId/price 또는 /:coinId/chart 인지 확인한다.
    const priceMatch = useRouteMatch(`/:coinId/price`);
    const chartMatch = useRouteMatch(`/:coinId/chart`);
    /* const {isLoading:isInfoLoading, data:infoData} = useQuery<InfoData>(['info',coinId], () => fetchCoinInfo(coinId));
    const {isLoading:isTickersLoading, data:tickersData} = useQuery<PriceData>(['tickers',coinId], () => fetchCoinTickers(coinId),{
        // refetchInterval: 5000,
    });
    
    const loading = isInfoLoading || isTickersLoading;
    return (
        <Container>
            <Helmet>
                <title>
                    {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
                </title>
            </Helmet>
            <Header>
                <Title>
                    {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
                </Title>
            </Header>
            {loading ? (
                <Loader>Loading...</Loader>
            ) : (
                <>
                    <Overview>
                        <OverviewItem>
                            <span>Rank:</span>
                            <span>{infoData?.rank}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Symbol:</span>
                            <span>${infoData?.symbol}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Price:</span>
                            <span>{tickersData?.quotes.USD.price.toFixed(2) }</span>
                        </OverviewItem>
                    </Overview>
                    <Description>{infoData?.description}</Description>
                    <Overview>
                        <OverviewItem>
                            <span>Total Suply:</span>
                            <span>{tickersData?.total_supply}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Max Supply:</span>
                            <span>{tickersData?.max_supply}</span>
                        </OverviewItem>
                    </Overview>
                    <Tabs>
                        <Tab isActive={chartMatch !== null}>
                            <Link to={`/${coinId}/chart`}>Chart</Link>
                        </Tab>
                        <Tab isActive={priceMatch !== null}>
                            <Link to={`/${coinId}/price`}>Price</Link>
                        </Tab>
                    </Tabs>
                    <Switch>
                        <Route path={`/:coinId/price`}>
                            <Price />
                        </Route>
                        <Route path={`/:coinId/chart`}>
                            <Chart coinId={coinId} />
                        </Route>
                    </Switch>
                </>
            )}
        </Container>
    ); */
    return (
        <Container>
            <Helmet>
                <title>
                    {state?.name ? state.name  : infoDummyData?.name}
                </title>
            </Helmet>
            <BackButton>
                <Link
                    to={`/`}
                >&larr;
                </Link>
            </BackButton>
            <Header>
                <Title>
                    {state?.name ? state.name: infoDummyData?.name}
                </Title>
            </Header>
         
                <>
                    <Overview>
                        <OverviewItem>
                            <span>Rank:</span>
                            <span>{infoDummyData?.rank}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Symbol:</span>
                            <span>${infoDummyData?.symbol}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Price:</span>
                            <span>{tickersDummyData?.quotes.USD.price.toFixed(2) }</span>
                        </OverviewItem>
                    </Overview>
                    <Description>{infoDummyData?.description}</Description>
                    <Overview>
                        <OverviewItem>
                            <span>Total Suply:</span>
                            <span>{tickersDummyData?.total_supply}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Max Supply:</span>
                            <span>{tickersDummyData?.max_supply}</span>
                        </OverviewItem>
                    </Overview>
                    <Tabs>
                        <Tab isActive={chartMatch !== null}>
                            <Link to={`/${coinId}/chart`}>Chart</Link>
                        </Tab>
                        <Tab isActive={priceMatch !== null}>
                            <Link to={`/${coinId}/price`}>Price</Link>
                        </Tab>
                    </Tabs>
                    <Switch>
                        <Route path={`/:coinId/price`}>
                            <Price {...tickersDummyData}/>
                        </Route>
                        <Route path={`/:coinId/chart`}>
                            <Chart coinId={coinId} />
                        </Route>
                    </Switch>
                </>
            
        </Container>
    )
}
export default Coin;

/* Type 선언 팁 */
/* 
    1. json 데이터를 전역변수로 선언한다.
    2. json의 key값을 우선 가져와 key값을 만든다.
    ex) Object.keys(temp1).join()
    3. json의 value값을 이용해서 interface의 value 타입을 지정한다.
    ex) Object.values(temp1).map(v => typeof v).join()
    key값에 value 넣기
    ctrl+shilft+L -> 여러 줄 선택 -> 붙여넣기
*/