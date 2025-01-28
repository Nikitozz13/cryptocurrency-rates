import axios from 'axios';
import { data } from 'react-router-dom';
import { z } from 'zod';

type Ticker = string;

const RateSchema = z.object({
  rate: z.number(),
  ask: z.number(),
  bid: z.number(),
  diff24h: z.number(),
});
const CurrencySchema = z.record(RateSchema);
const CurrencyExtendedSchema = z.record(CurrencySchema);

export type Rate = z.infer<typeof RateSchema>;
type CurrencyExtended = z.infer<typeof CurrencyExtendedSchema>;

export const fetchRatesExtended = async (): Promise<CurrencyExtended> => {
  const response = await axios.get<CurrencyExtended>(
    'https://app.youhodler.com/api/v3/rates/extended'
  );
  const validation = CurrencyExtendedSchema.safeParse(response.data);
  if (!validation.success) {
    console.error(validation.error.errors);
    return {};
  }
  return validation.data;
};

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

type ParseCurrencyDetails = [Ticker, Rate];

export const parseCurrencyDetails = (
  data: CurrencyExtended,
  ticker: Ticker,
): ParseCurrencyDetails[] => {
  if (!data[ticker]) {
    return [];
  }
  return Object.entries(data[ticker]).sort();
};
