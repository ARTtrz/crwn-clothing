import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionFetching, } from '../../redux/shop/shop.selectors';
import WithSpinner from '../With-spinner/with-spinner.component';
import collectionsOverviewComponent from './collections-overview.component';



const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(collectionsOverviewComponent)

export default CollectionsOverviewContainer