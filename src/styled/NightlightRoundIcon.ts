import { NightlightRound } from '@mui/icons-material';
import { styled } from '@mui/material';

const NightlightRoundIcon = styled(NightlightRound)({
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

export default NightlightRoundIcon;
