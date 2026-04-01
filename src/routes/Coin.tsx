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

export interface InfoData {
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

function Coin() {
    const { coinId } = useParams<RouteParams>();
    const { state } = useLocation<RouteState>();
    //useRouteMatch 훅을 이용해서 현재 URL이 /:coinId/price 또는 /:coinId/chart 인지 확인한다.
    const priceMatch = useRouteMatch(`/:coinId/price`);
    const chartMatch = useRouteMatch(`/:coinId/chart`);
    const { isLoading: isInfoLoading, data: infoData } = useQuery<InfoData>(['info', coinId], () => fetchCoinInfo(coinId));
    const { isLoading: isTickersLoading, data: tickersData } = useQuery<PriceData>(['tickers', coinId], () => fetchCoinTickers(coinId), {
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
            <BackButton>
                <Link
                    to={`/`}
                >&larr;
                </Link>
            </BackButton>
            <Header>
                <Title>
                    {state?.name ? state.name : loading ? "Loading..." : infoData?.name }
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
                            <span>{tickersData?.quotes?.USD.price.toFixed(2)}</span>
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
                            <Price
                                percent_change_1h={tickersData?.quotes.USD.percent_change_1h ?? 0}
                                percent_change_1y={tickersData?.quotes.USD.percent_change_1y ?? 0}
                                percent_change_6h={tickersData?.quotes.USD.percent_change_6h ?? 0}
                                percent_change_7d={tickersData?.quotes.USD.percent_change_7d ?? 0}
                                percent_change_12h={tickersData?.quotes.USD.percent_change_12h ?? 0}
                                percent_change_15m={tickersData?.quotes.USD.percent_change_15m ?? 0}
                                percent_change_24h={tickersData?.quotes.USD.percent_change_24h ?? 0}
                                percent_change_30d={tickersData?.quotes.USD.percent_change_30d ?? 0}
                                percent_change_30m={tickersData?.quotes.USD.percent_change_30m ?? 0}
                            />
                        </Route>
                        <Route path={`/:coinId/chart`}>
                            <Chart coinId={coinId} />
                        </Route>
                    </Switch>
                </>
            )}
        </Container>
    );
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