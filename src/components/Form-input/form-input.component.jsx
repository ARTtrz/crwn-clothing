import React from 'react';
import styles from './form-input.module.scss'
import cn from 'classnames'

const FormInput = ({ handleChange, label, ...otherProps }) => {
	return (
		<div className={styles.group}>
			<input className={styles.formInput} onChange={handleChange} {...otherProps} />
			{
				label ?
					(<label className={cn(styles.formInputLabel, {
						[styles.shrink]: otherProps.value.length
					})}>
						{label}
					</label>)
					:
					null
			}
		</div>
	)
}

export default FormInput