import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SxProps } from '@mui/system';
import ArrowBack from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

interface BackButtonProps {
  sx?: SxProps;
}

const BackButton: React.FC<BackButtonProps> = ({ sx }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <IconButton
      aria-label='back'
      color='inherit'
      onClick={handleBackClick}
      sx={{
        ...sx,
      }}
    >
      <ArrowBack />
    </IconButton>
  );
};

export default BackButton;
