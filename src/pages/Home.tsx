import React, { Suspense } from 'react';
import { CurrencyList } from 'components/CurrencyList';
import { CurrencyListSkeleton } from 'components/CurrencyList';

const HomePage: React.FC = () => {
  return (
    <Suspense fallback={<CurrencyListSkeleton />}>
      <CurrencyList />
    </Suspense>
  );
}

export default HomePage;
