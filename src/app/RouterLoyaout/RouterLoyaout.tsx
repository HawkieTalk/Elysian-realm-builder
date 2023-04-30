import { AppBar, Toolbar, Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const pages = ['home', 'create'];

export const RouterLoyaout: React.FC = () => {
	const navigate = useNavigate();
	const handleClick = useCallback((page: string) => {
		const pagePath = page === 'home' ? '' : page;

		navigate(`Elysian-realm-builder/${pagePath}`);
	}, []);

	return (
		<>
			<Box>
				<AppBar position="static">
					<Container maxWidth="xl">
						<Toolbar disableGutters>
							<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
								{pages.map((page) => (
									<Button
										key={page}
										onClick={() => handleClick(page)}
										sx={{ my: 2, color: 'white', display: 'block' }}
									>
										{page}
									</Button>
								))}
							</Box>
						</Toolbar>
					</Container>
				</AppBar>
			</Box>
			<Outlet />
		</>
	);
};
