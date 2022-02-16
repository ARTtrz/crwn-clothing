import React from 'react';
import CollectionItem from '../../components/Collection-item/collection-item.component'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shop.selectors';
import styles from './collection.module.scss'


const CollectionPage = () => {

	const { collectionId } = useParams();
	const collection = useSelector(selectCollection(collectionId))
	const { title, items } = collection
	return (
		<div className={styles.collectionPage}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.items}>
				{
					items.map(item => <CollectionItem key={item.id} item={item} />)
				}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps /*collection*/) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default CollectionPage;