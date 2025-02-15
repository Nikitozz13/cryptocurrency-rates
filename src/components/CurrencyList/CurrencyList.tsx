import React from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CurrencyExtended, fetchRatesExtended, ParsedRate, parseRates } from 'api/rates';
import CurrencyListItem from './CurrencyListItem';

const DEFAULT_BASE_CURRENCY = 'usd';

const CurrencyList: React.FC = () => {
  const baseCurrency: string = DEFAULT_BASE_CURRENCY;
  const { data } = useSuspenseQuery<CurrencyExtended>({
    queryKey: ['ratesExtended'],
    queryFn: () => fetchRatesExtended(),
  });

  const parsedRates: ParsedRate[] = parseRates(data, baseCurrency);

  if (!parsedRates.length) {
    return (
      <Paper elevation={3} sx={{ maxWidth: 600, padding: 3, height: '100%' }}>
        <Typography variant="h6" align="center" gutterBottom>
          Exchange Rates
        </Typography>
        <Typography variant="body1" align="center">
          No rates available.
        </Typography>
      </Paper>
    )
  }

  return (
    <Paper elevation={3} sx={{ maxWidth: 600, padding: 3, height: '100%' }}>
      <Typography variant="h6" align="center" gutterBottom>
        Exchange Rates ({baseCurrency.toUpperCase()})
      </Typography>
      <Stack spacing={2} sx={{ overflowY: 'auto', flexGrow: 1 }}>
        {parsedRates.map(({ currency, rate }) => (
          <CurrencyListItem
            key={currency}
            currency={currency}
            baseCurrency={baseCurrency}
            rate={rate}
          />
        ))}
      </Stack>
    </Paper>
  );
}

export default CurrencyList;
