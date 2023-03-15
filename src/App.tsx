import React, { useState } from 'react';
import { Box, PaletteMode, Stack } from '@mui/material';
import MuiProvider from './theme/MuiProvider';
import { Banner, Header } from './components';

function App() {
  const [mode, setMode] = useState<PaletteMode>('light');

  const handleThemeChange = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return (
    <MuiProvider mode={mode}>
      <Stack>
        <Banner mode={mode} />
        <Box
          display={'flex'}
          justifyContent={'center'}
          sx={{ width: { xs: '89%', sm: 570 }, margin: { xs: '-153px auto', sm: '-224px auto' } }}
        >
          <Header OnClick={handleThemeChange} />
        </Box>
      </Stack>
    </MuiProvider>
  );
}

export default App;
