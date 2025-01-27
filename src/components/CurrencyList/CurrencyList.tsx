import React, { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { fetchRatesExtended, parseRates } from 'api/rates';
import CurrencyListItem from './CurrencyListItem';

const DEFAULT_BASE_CURRENCY = 'usd';

const CurrencyList = () => {
  const [baseCurrency, setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY);

  const { data } = useSuspenseQuery({
    queryKey: ['ratesExtended'],
    queryFn: () => fetchRatesExtended(),
  });

  const parsedRates = parseRates(data, baseCurrency);

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

      <Stack
        direction="row"
        justifyContent="flex-end"
        spacing={2}
        sx={{ marginBottom: 2 }}
      >
        <Select
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
          sx={{ marginBottom: 2 }}
        >
          {parsedRates.map(({ currency }) => currency)
            .sort()
            .map((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency.toUpperCase()}
              </MenuItem>
            ))}
        </Select>
      </Stack>

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
