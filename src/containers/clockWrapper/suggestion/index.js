import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

/*
 *  I used Autocomplete component from: https://material-ui.com/components/autocomplete/
 */


export const Suggestion = ({onChange, options}) => (
    <Autocomplete
        onChange={(event, newValue) => {
            if (newValue !== null) {
                onChange(newValue.name);
            } else {
                onChange(null);
            }
        }}
        options={options}
        getOptionLabel={(faction) => faction.name}
        getOptionSelected={(option, value) => option.name === value.name }
        style={{ width: 150, backgroundColor: "white" }}
        renderInput={(params) => <TextField {...params} variant="outlined" color="secondary" />}
    />
);

