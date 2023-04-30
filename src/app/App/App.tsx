import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { AppHead } from '../AppHead/AppHead';
import { Route, Routes } from 'react-router-dom';

export const App: React.FC = () => {
	return (
		<Box className="App">
			<AppHead />
			<Routes>
				<Route path="/">
					<Route index element={<Box>Home</Box>} />
					<Route path="create" element={<Box>Create</Box>} />
				</Route>
			</Routes>
		</Box>
	);
};
