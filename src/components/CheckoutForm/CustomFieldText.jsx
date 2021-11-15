import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

const FormInput = ({ name, label, required }) => {
	const { control } = useFormContext();

	return (
		<Grid item xs={12} sm={6}>
			<Controller
				defaultValue=' '
				render={({ field }) => (
					<TextField {...field} label={label} fullWidth required />
				)}
				control={control}
				name={name}
			/>
		</Grid>
	);
};

export default FormInput;
