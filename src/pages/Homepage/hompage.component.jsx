import React from 'react';
import Directory from '../../components/Directory/directory.component';

import styles from './homepage.module.scss'

const HomePage = () => {
	return (
		<div className={styles.homepage}>
			<Directory />
		</div>
	)
}

export default HomePage;