import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      Movie<span style={{ color: 'purple' }}>Maven</span>
    </Typography>
  );
};

export default Logo;