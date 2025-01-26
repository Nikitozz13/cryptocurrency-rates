/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';

type Ticker = string;

type Rate = {
  rate: number;
  ask: number;
  bid: number;
  diff24h: number;
};

type Currency = {
  [key: Ticker]: Rate;
};

type CurrencyExtended = {
  [key: Ticker]: Currency;
};

type RatesExtended = [keyof Currency, Currency][];

export const fetchRatesExtended = async (): Promise<RatesExtended> => {
  const response = await axios.get<CurrencyExtended>(
    'https://app.youhodler.com/api/v3/rates/extended'
  );
  return Object.entries(response.data).sort();
};

export default {
  fetchRatesExtended,
};
