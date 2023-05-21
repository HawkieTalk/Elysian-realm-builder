import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export interface AppLoyaoutProps {
	title?: string;
}

const AppLoyaout: React.FC<PropsWithChildren<AppLoyaoutProps>> = ({
	children,
}) => {
	return <Box sx={{ p: 2 }}>{children}</Box>;
};

export default AppLoyaout;
