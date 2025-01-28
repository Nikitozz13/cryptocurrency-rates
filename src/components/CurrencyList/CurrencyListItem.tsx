import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface CurrencyListItemProps {
  currency: string;
  baseCurrency: string;
  rate: number;
}

const CurrencyListItem: React.FC<CurrencyListItemProps> = ({
  currency,
  baseCurrency,
  rate,
}) => {
  return (
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
  );
};

export default CurrencyListItem;
