import React from 'react';
import { useParams } from 'react-router-dom';

const TickerPage = () => {
  const { ticker } = useParams();

  return (
    <div>
      <h1>{ticker}</h1>
    </div>
  );
}

export default TickerPage;
