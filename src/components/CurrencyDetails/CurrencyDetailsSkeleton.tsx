import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const CurrencyDetailsSkeleton: React.FC = () => {
  return (
    <Stack>
      <Skeleton variant="text" sx={{ fontSize: '1em' }} width={100} />
      <Skeleton variant="text" sx={{ fontSize: '1em' }} width={200} />
      <Skeleton variant="text" sx={{ fontSize: '1em' }} width={200} />
      <Skeleton variant="text" sx={{ fontSize: '1em' }} width={200} />
      <Skeleton variant="text" sx={{ fontSize: '1em' }} width={250} />
    </Stack>
  );
};

export default CurrencyDetailsSkeleton;
