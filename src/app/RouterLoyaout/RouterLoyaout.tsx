import { AppBar, Toolbar, Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useCallback } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const pages = ['home', 'create'];

export const RouterLoyaout: React.FC = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const handleClick = useCallback(
		(page: string) => {
			const pagePath = page === 'home' ? '' : page;

			if (pathname !== `/${pagePath}`) {
				navigate(pagePath);
			}
		},
		[pathname]
	);

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
