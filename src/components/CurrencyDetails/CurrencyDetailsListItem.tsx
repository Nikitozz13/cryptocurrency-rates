import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Rate } from 'api/rates';
import { Stack } from '@mui/material';

interface CurrencyListItemProps {
  currency: string;
  rate: Rate;
}

const CurrencyListItem: React.FC<CurrencyListItemProps> = ({
  currency,
  rate,
}) => {
  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent
        sx={{
          padding: 3,
        }}
      >
        <Typography
          variant="body1"
          fontWeight="bold"
        >
          {currency.toUpperCase()}
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body1" component="span">
            {`Rate: ${rate.rate}`}
          </Typography>
          <Typography variant="body1" component="span">
            {`Bid: ${rate.bid}`}
          </Typography>
          <Typography variant="body1" component="span">
            {`Ask: ${rate.ask}`}
          </Typography>
          <Typography variant="body1" component="span">
            {`24h Change: ${rate.diff24h}`}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CurrencyListItem;
