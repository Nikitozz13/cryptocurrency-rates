import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Button } from '@mui/material';

import { fetchRatesExtended } from '../api/rates';

// Или через react.lazy
function DataList() {
  const { data } = useSuspenseQuery({
    queryKey: ['rates'],
    queryFn: () => fetchRatesExtended(),
  });

  return (
    <ul>
      {data.map(([ticker, tickers]) => (
        <li key={ticker}>
          {ticker}
          <ul>
            {Object.entries(tickers).map(([innerTicker, rate]) => (
              <li key={innerTicker}>{innerTicker}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

function Home() {
  const { ticker } = useParams();

  return (
    <div>
      <h1>Home Page</h1>
      <h2>{ticker}</h2>
      <Button variant="contained" color="primary">
        Material-UI Button
      </Button>
      <Suspense fallback={<div>Loading using suspense...</div>}>
        <DataList />
      </Suspense>
    </div>
  );
}

export default Home;
