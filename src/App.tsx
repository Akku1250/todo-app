import React from 'react';
import './App.css';
import { Typography } from '@mui/material';
import MuiProvider from './theme/MuiProvider';

function App() {
	return (
		<MuiProvider mode={'dark'}>
			<div className="App">
				<Typography
					variant="h1"
					sx={({ palette }) => ({ color: palette.primary.main })}
				>
					Create React App
				</Typography>
				<Typography variant="h4">Primary text</Typography>
				<Typography
					variant="h4"
					color="text.secondary"
				>
					Secondary text
				</Typography>
			</div>
		</MuiProvider>
	);
}

export default App;
