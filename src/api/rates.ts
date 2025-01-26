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

// type RatesExtended = [keyof Currency, Currency][];

export const fetchRatesExtended = async (): Promise<CurrencyExtended> => {
  const response = await axios.get<CurrencyExtended>(
    'https://app.youhodler.com/api/v3/rates/extended'
  );
  return response.data;
};

// type ParsedRates = { currency: Ticker; rate: Pick<Rate, 'rate'> }[];
type ParsedRates = { currency: Ticker; rate: number }[];

export const parseRates = (
  data: CurrencyExtended,
  baseCurrency: Ticker
): ParsedRates => {
  return Object.entries(data)
    .flatMap(([currency, details]) => {
      const base = details[baseCurrency];
      if (base) {
        return { currency, rate: base.rate };
      }
      return [];
    })
    .sort((a, b) => a.currency.localeCompare(b.currency));
};
