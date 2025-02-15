import React from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
  CurrencyExtended,
  fetchRatesExtended,
  ParseCurrencyDetails,
  parseTickerDetails,
} from 'api/rates';
import CurrencyDetailsListItem from './CurrencyDetailsListItem';

interface CurrencyDetailsProps {
  ticker: string;
}

const CurrencyDetails: React.FC<CurrencyDetailsProps> = ({ ticker }) => {
  const { data } = useSuspenseQuery<CurrencyExtended>({
    queryKey: ['ratesExtended'],
    queryFn: () => fetchRatesExtended(),
  });

  const parsedCurrency: ParseCurrencyDetails[] = parseTickerDetails(data, ticker);

  if (!parsedCurrency) {
    return <div>Invalid ticker.</div>;
  }

  if (!parsedCurrency.length) {
    return <div>No data available</div>;
  }

  return (
    <Paper elevation={3} sx={{ maxWidth: 600, padding: 3, height: '100%' }}>
      <Typography variant="h6" align="center" gutterBottom>
        Exchange Rates for {ticker.toUpperCase()}
      </Typography>

      <Stack spacing={2} sx={{ overflowY: 'auto', flexGrow: 1 }}>
        {parsedCurrency.map(([currency, rate]) => (
          <CurrencyDetailsListItem
            key={currency}
            currency={currency}
            rate={rate}
          />
        ))}
      </Stack>
    </Paper>
  );
};

export default CurrencyDetails;
