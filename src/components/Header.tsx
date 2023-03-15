import { Stack, Box, Typography, IconButton } from '@mui/material';
import { Brightness7Icon, NightlightRoundIcon } from '../styled';

interface IProps {
  OnClick: () => void;
}

function Header({ OnClick }: IProps) {
  return (
    <Stack
      justifyContent={'space-between'}
      direction={'row'}
      width={'100%'}
    >
      <Box
        alignItems={'center'}
        display={'flex'}
      >
        <Typography
          variant="h4"
          height={32}
          letterSpacing={6}
          fontWeight={'bold'}
          color={'#fff'}
        >
          {'TODO'}
        </Typography>
      </Box>
      <Box
        alignItems={'center'}
        display={'flex'}
      >
        <IconButton onClick={OnClick}>
          <Brightness7Icon
            sx={({ palette }) => ({
              transition: 'display 3s',
              color: '#fff',
              display: palette.mode === 'dark' ? 'none' : 'block',
            })}
            fontSize={'large'}
          />
          <NightlightRoundIcon
            sx={({ palette }) => ({
              transition: 'display 3s',
              color: '#fff',
              display: palette.mode === 'light' ? 'none' : 'block',
            })}
            fontSize={'large'}
          />
        </IconButton>
      </Box>
    </Stack>
  );
}

export default Header;
