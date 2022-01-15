import React from 'react';

import styles from './collection-item.module.scss';

const CollectionItem = ({ id, name, price, imageUrl, }) => {
	return (
		<div className={styles.collectionItem}>
			<div
				className={styles.image}
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>


			<div className={styles.collectionFooter}>
				<span className={styles.name}>{name}</span>
				<span className={styles.price}>{price}</span>

			</div>
		</div>
	)
}

export default CollectionItem