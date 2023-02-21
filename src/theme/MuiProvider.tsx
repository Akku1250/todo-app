import { CssBaseline, PaletteMode } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { theme } from '.';

interface IProps {
	mode: PaletteMode | undefined;
	children?: React.ReactNode;
}

const MuiProvider = ({ mode, children }: IProps) => {
	return (
		<ThemeProvider theme={theme(mode)}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default MuiProvider;
