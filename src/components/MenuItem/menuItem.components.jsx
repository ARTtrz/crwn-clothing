import React from 'react';
import styles from './menuItem.module.scss';
import cn from 'classnames'
import { withRouter } from 'react-router-dom';


const MenuItem = ({ title, imageUrl, size, history, key, linkUrl, match }) => {
	return (
		<div
			key={key}
			className={cn(styles.menuItem, {
				[styles.large]: size === 'large'


			}

			)}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<div
				className={styles.backgroundImage}
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			>

			</div>
			<div className={styles.content}>
				<h1 className={styles.title}>{title.toUpperCase()}</h1>
				<span className={styles.subtitle}>SHOP NOW</span>
			</div>
		</div>
	)
}

export default withRouter(MenuItem)