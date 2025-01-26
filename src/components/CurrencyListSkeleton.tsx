import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const CurrencyListSkeleton: React.FC = () => {
  return (
    <Skeleton variant="rectangular" width={600} height={700} />
  );
}

export default CurrencyListSkeleton;
