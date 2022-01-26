import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../MenuItem/menuItem.components';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import styles from './directory.module.scss'

const Directory = ({ sections }) => {
	return (
		<div className={styles.directoryMenu}>
			{sections.map(({ title, imageUrl, size, id, linkUrl }) => (
				<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} id={id} linkUrl={linkUrl} />
			))}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);