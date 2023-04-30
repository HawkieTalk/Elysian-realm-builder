import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { AppHead } from '../AppHead/AppHead';
import { Route, Routes } from 'react-router-dom';
import { RouterLoyaout } from '../RouterLoyaout';

export const App: React.FC = () => {
	return (
		<Box className="App">
			<AppHead />
			<RouterLoyaout />
			<Routes>
				<Route path="Elysian-realm-builder">
					<Route index element={<Box>Home</Box>} />
					<Route path="create" element={<Box>Create</Box>} />
				</Route>
			</Routes>
		</Box>
	);
};
