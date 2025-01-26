import React from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchRatesExtended } from 'api/rates';

const DEFAULT_BASE_CURRENCY = 'usd';

interface CurrencyDetailsProps {
  ticker: string;
}

const CurrencyDetails: React.FC<CurrencyDetailsProps> = ({ ticker }) => {
  const { data } = useSuspenseQuery({
    queryKey: ['ratesExtended'],
    queryFn: () => fetchRatesExtended(),
  });

  const rateDetails = data[DEFAULT_BASE_CURRENCY][ticker];
  if (!rateDetails) {
    return <div>Invalid ticker.</div>;
  }

  return (
    <div>
      <h3>{ticker} Details</h3>
      <p>Rate: {rateDetails.rate}</p>
      <p>Bid: {rateDetails.bid}</p>
      <p>Ask: {rateDetails.ask}</p>
      <p>24h Change: {rateDetails.diff24h}</p>
    </div>
  );
};

export default CurrencyDetails;
