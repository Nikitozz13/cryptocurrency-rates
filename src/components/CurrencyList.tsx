import React, { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { fetchRatesExtended, parseRates } from 'api/rates';
import { Link } from 'react-router-dom';

const DEFAULT_BASE_CURRENCY = 'usd';

const CurrencyList = () => {
  const [baseCurrency, setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY);

  const { data } = useSuspenseQuery({
    queryKey: ['ratesExtended'],
    queryFn: () => fetchRatesExtended(),
  });

  const parsedRates = parseRates(data, baseCurrency);

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
          {Object.keys(data[Object.keys(data)[0]])
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
          <Link 
            to={`/${currency}`}
            key={currency}
            style={{ textDecoration: 'none' }}
          >
            <Card variant="outlined" sx={{ width: '100%' }}>
              <CardActionArea>
                <CardContent
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: 3,
                  }}
                >
                  <Typography
                    variant="body1"
                    component="span"
                    fontWeight="bold"
                  >
                    {currency.toUpperCase()}
                  </Typography>
                  <Typography variant="body1" component="span">
                    {`${rate} ${baseCurrency.toUpperCase()}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </Stack>
    </Paper>
  );
}

export default CurrencyList;
