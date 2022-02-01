import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import CollectionsOverview from '../../components/Collections-overview/collections-overview.component'
import CollectionPage from '../Collection/collection.component';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import styles from './shop.module.scss';
import WithSpinner from '../../components/With-spinner/with-spinner.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	state = {
		loading: true
	}



	unsubscribeFromSnapShot = null;

	componentDidMount() {
		const { updateCollections } = this.props
		const collectionRef = firestore.collection('collections');

		// fetch('https://firestore.googleapis.com/v1/projects/crwn-db-project-b9ac9/databases/(default)/documents/collections')
		// 	.then(response => response.json())
		// 	.then(collections => console.log(collections))

		collectionRef.get().then(snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
	}

	render() {
		const { match } = this.props
		const { loading } = this.state;
		return (
			<div className={styles.shopPage}>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
				/>
			</div>
		)
	}


}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)