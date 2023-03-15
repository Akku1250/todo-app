import { Brightness7 } from '@mui/icons-material';
import { styled } from '@mui/material';

const Brightness7Icon = styled(Brightness7)({
  '@keyframes animate': {
    from: {
      opacity: 0,
      transform: 'scale(0)',
    },
    to: {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
  animation: 'animate 500ms ease-in-out',
});

export default Brightness7Icon;
