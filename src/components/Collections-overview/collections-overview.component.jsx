import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../Collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import styles from './collections-overview.module.scss'

const CollectionsOverview = ({ collections }) => {
	return (
		<div className={styles.collectionsOverview}>
			{
				collections.map(({ id, ...props }) => (
					<CollectionPreview key={id} {...props} />
				))
			}
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)