import { PaletteMode, createTheme } from '@mui/material';

export const theme = (mode: PaletteMode | undefined) => {
	return createTheme({
		palette: {
			mode,
			primary: {
				main: 'hsl(220, 98%, 61%)',
			},
			text: {
				primary: mode === 'light' ? 'hsl(235, 19%, 35%)' : 'hsl(234, 39%, 85%)',
				secondary: mode === 'light' ? 'hsl(233, 11%, 84%)' : 'hsl(234, 11%, 52%)',
				disabled: mode === 'light' ? 'hsl(233, 11%, 84%)' : 'hsl(234, 11%, 52%)',
			},
			background: {
				default: mode === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(235, 21%, 11%)',
			},
		},
		typography: {
			fontFamily: `'Josefin Sans', sans-serif`,
		},
	});
};
