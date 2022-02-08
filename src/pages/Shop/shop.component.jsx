import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import CollectionsOverview from '../../components/Collections-overview/collections-overview.component'
import CollectionPage from '../Collection/collection.component';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import styles from './shop.module.scss';
import WithSpinner from '../../components/With-spinner/with-spinner.component';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import CollectionPageContainer from '../Collection/collection.container';
import { createStructuredSelector } from 'reselect';
import CollectionsOverviewContainer from '../../components/Collections-overview/collections-overview.container';
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {


	unsubscribeFromSnapShot = null;

	componentDidMount() {
		// const { updateCollections } = this.props
		// const collectionRef = firestore.collection('collections');

		// // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-project-b9ac9/databases/(default)/documents/collections')
		// // 	.then(response => response.json())
		// // 	.then(collections => console.log(collections))

		// collectionRef.get().then(snapshot => {
		// 	const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
		// 	updateCollections(collectionsMap);
		// 	this.setState({ loading: false });
		// });
		const { fetchCollectionsStart } = this.props;

		fetchCollectionsStart();
	}

	render() {
		const { match, isCollectionsLoaded } = this.props
		return (
			<div className={styles.shopPage}>
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverviewContainer}
				// render={(props) => <CollectionsOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
				/>
				<Route
					path={`${match.path}/:collectionId`}
					// render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}
					component={CollectionPageContainer}
				/>
			</div>
		)
	}


}

const mapStateToProps = createStructuredSelector({
	// isCollectionFetching: selectIsCollectionFetching,
	isCollectionsLoaded: selectIsCollectionsLoaded,
})

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)