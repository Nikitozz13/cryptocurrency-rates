import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const CurrencyDetailsSkeleton: React.FC = () => {
  return (
    <div>
      <h3><Skeleton variant="text" sx={{ fontSize: '1em' }} width={100} /></h3>
      <p><Skeleton variant="text" sx={{ fontSize: '1em' }} width={200} /></p>
      <p><Skeleton variant="text" sx={{ fontSize: '1em' }} width={200} /></p>
      <p><Skeleton variant="text" sx={{ fontSize: '1em' }} width={200} /></p>
      <p><Skeleton variant="text" sx={{ fontSize: '1em' }} width={250} /></p>
    </div>
  );
};

export default CurrencyDetailsSkeleton;
