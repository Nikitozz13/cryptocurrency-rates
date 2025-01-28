import axios from 'axios';
import { z } from 'zod';

const RateSchema = z.object({
  rate: z.number(),
  ask: z.number(),
  bid: z.number(),
  diff24h: z.number(),
});
const CurrencySchema = z.record(RateSchema);
const CurrencyExtendedSchema = z.record(CurrencySchema);

export type Rate = z.infer<typeof RateSchema>;
export type Currency = z.infer<typeof CurrencySchema>;
export type CurrencyExtended = z.infer<typeof CurrencyExtendedSchema>;

export type ParsedRate = { currency: string; rate: number };
export type ParseCurrencyDetails = [string, Rate];

/**
 * Fetches validated extended rates from the API.
 */
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

/**
 * Parses the rates from the API response to a base currency.
 * @param data The API response data.
 * @param baseCurrency The base currency to parse the rates to.
 */
export const parseRates = (
  data: CurrencyExtended,
  baseCurrency: string
): ParsedRate[] => {
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

/**
 * Parses the currency details for a given ticker.
 * @param data The API response data.
 * @param ticker The ticker to parse the details for.
 */
export const parseTickerDetails = (
  data: CurrencyExtended,
  ticker: string,
): ParseCurrencyDetails[] => {
  if (!data[ticker]) {
    return [];
  }
  return Object.entries(data[ticker]).sort();
};
