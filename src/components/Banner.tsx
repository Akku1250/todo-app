import { Box, PaletteMode, useMediaQuery, useTheme } from '@mui/material';

interface IProps {
  mode: PaletteMode;
}

function Banner({ mode }: IProps) {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.up('xs'));
  const md = useMediaQuery(theme.breakpoints.up('md'));

  const renderImage = () => {
    const imageDark = [require('../assets/images/BgDesktopDark.jpg'), require('../assets/images/BgMobileDark.jpg')];
    const imageLight = [require('../assets/images/BgDesktopLight.jpg'), require('../assets/images/BgMobileLight.jpg')];

    if (md) {
      return mode === 'light' ? imageLight[0] : imageDark[0];
    }

    if (xs) {
      return mode === 'light' ? imageLight[1] : imageDark[1];
    }
  };

  return (
    <Box
      component={'img'}
      sx={{ height: { xs: 200, sm: 300 }, width: '100%' }}
      src={renderImage()}
      alt={'Todo background'}
    />
  );
}

export default Banner;
