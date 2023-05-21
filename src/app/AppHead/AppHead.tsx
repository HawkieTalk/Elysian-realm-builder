import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

export const AppHead: FC = () => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Elysian realm builder</title>
			</Helmet>
		</>
	);
};
