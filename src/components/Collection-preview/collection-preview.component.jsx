import React from 'react';
import CollectionItem from '../Collection-item/collection-item.component';
import styles from './collection-preview.module.scss'

const CollectionPreview = ({ title, items }) => {
	return (
		<div className={styles.collectionPreview}>
			<h1 className={styles.title}>{title.toUpperCase()}</h1>
			<div className={styles.preview}>
				{
					items
						.filter((item, index) => index < 100)
						.map(({ id, ...otherItemProps }) => (
							<CollectionItem key={id} {...otherItemProps} />
						))
				}
			</div>
		</div>
	)
}

export default CollectionPreview