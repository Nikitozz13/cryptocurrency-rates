import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { CurrencyDetails } from 'components/CurrencyDetails';
import { CurrencyDetailsSkeleton } from 'components/CurrencyDetails';

type TickerRouteParams = {
  ticker: string;
}

const TickerPage: React.FC = () => {
  const { ticker } = useParams<TickerRouteParams>();

  return (
    <Suspense fallback={<CurrencyDetailsSkeleton />}>
      <CurrencyDetails ticker={ticker!} />
    </Suspense>
  );
}

export default TickerPage;
