import React, { useEffect } from 'react';
import './App.css';
import { Box } from '@mui/material';
import { AppHead } from '../AppHead/AppHead';
import { Route, Routes, useLocation } from 'react-router-dom';
import { RouterLoyaout } from '../RouterLoyaout';

export const App: React.FC = () => {
	const location = useLocation();

	useEffect(() => {
		console.log(location);
	}, [location]);

	return (
		<Box className="App">
			<AppHead />
			<RouterLoyaout />
			<Routes>
				<Route>
					<Route index element={<Box>Home</Box>} />
					<Route path="create" element={<Box>Create</Box>} />
				</Route>
			</Routes>
		</Box>
	);
};
