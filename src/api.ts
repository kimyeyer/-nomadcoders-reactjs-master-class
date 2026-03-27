import { InfoData, PriceData } from "./routes/Coin";
import { ICoin } from "./routes/Coins";

const BASE_URL = `https://api.coinpaprika.com/v1`;
const UPDATED_BASE_URL = `https://ohlcv-api.nomadcoders.workers.dev`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`)
  .then((response) => response.json()
  .catch(()=>{
    return dummyCoins;
  }));
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`)
  .then((response) =>
    response.json()
  ).catch(()=>{
    return dummyInfo;
  });
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`)
  .then((response) =>
    response.json()
  ).catch(()=>{
    return dummyTickers;
  });
}
export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${UPDATED_BASE_URL}?coinId=${coinId}`
  ).then((response) => response.json());
}


const dummyCoins: ICoin[] = [
  {
    "id": "btc-bitcoin",
    "name": "Bitcoin",
    "symbol": "BTC",
    "rank": 1,
    "is_new": false,
    "is_active": true,
    "type": "coin"
  },
  {
    "id": "eth-ethereum",
    "name": "Ethereum", 
    "symbol": "ETH",
    "rank": 2,
    "is_new": false,
    "is_active": true,
    "type": "coin"
  },
]

const dummyInfo: InfoData = {
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

const dummyTickers: PriceData = {
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