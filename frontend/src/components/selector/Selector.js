import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeCategorieChanged } from '../../silces/graphSlice';

const Selector = ({categories}) => {
    const dispatch = useDispatch();
    const {activeCategorie} = useSelector(state=> state.graphs)
    const handleChange = (event) => {
        dispatch(activeCategorieChanged(event.target.value));
    };

    useEffect (() => {
        dispatch(activeCategorieChanged(activeCategorie))
    },[])

    return(
        <FormControl sx={{ m: 1, minWidth: 320 }} size="small">
        <InputLabel id="demo-select-small">Категория</InputLabel>
        <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={activeCategorie}
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