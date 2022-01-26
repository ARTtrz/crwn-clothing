import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import CollectionsOverview from '../../components/Collections-overview/collections-overview.component'
import CollectionPage from '../Collection/collection.component';


import styles from './shop.module.scss'

const ShopPage = ({ match }) => (

	<div className={styles.shopPage}>
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
	</div>

);



export default ShopPage