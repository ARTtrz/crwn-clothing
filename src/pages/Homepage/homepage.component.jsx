import React from 'react';
import Directory from '../../components/Directory/directory.component';

import styles from './homepage.module.scss'


import { HomePageContainer } from './homepage.styles';
const HomePage = () => {
	return (
		<HomePageContainer>
			<Directory />
		</HomePageContainer>
	)
}

export default HomePage;