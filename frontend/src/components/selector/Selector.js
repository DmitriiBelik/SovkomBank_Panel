import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';

const Selector = ({categories}) => {
    const [categorie, setCategorie] = useState('');
    const handleChange = (event) => {
        setCategorie(event.target.value);
    };

    useEffect (() => {
        setCategorie(categories[0])
    },[])

    return(
        <FormControl sx={{ m: 1, minWidth: 320 }} size="small">
        <InputLabel id="demo-select-small">Категория</InputLabel>
        <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={categorie}
            label="categories"
            onChange={handleChange}
        >
            {
                categories.map((categorie) => (
                    <MenuItem key={categorie} value={categorie}>
                        {categorie}
                    </MenuItem>
                ))
          }
        </Select>   
        </FormControl>
  );
}

export default Selector