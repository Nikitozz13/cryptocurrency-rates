import React, { Suspense } from 'react';
import CurrencyList from 'components/CurrencyList';

const HomePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CurrencyList />
    </Suspense>
  );
}

export default HomePage;
