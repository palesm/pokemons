import React, {useEffect} from 'react';
import useLocalStorageState from '../hooks/useLocalStorage';
import axios from 'axios';
import {FormControl, InputLabel, MenuItem, Select, Typography} from '@mui/material';

interface CategoryPromise {
  data: any
}

interface CategoryResponse {
  count: any,
  next: any,
  previous: any,
  results: any
}

interface CategoryResult {
  name: string,
  url: string
}

const url = 'https://pokeapi.co/api/v2/type/'

function CategorySelector(props: any) {
  const [categories, setCategories] = useLocalStorageState("categories", null);
  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const res: CategoryPromise = await axios.get(url);
      const categories: CategoryResponse = await res.data;
      setCategories(categories);
    }
    // fetch data if no categories stored
    !categories && fetchData()
      .catch(console.error);
  }, [])
  const handleChange = (event: any) => {
    console.log(event.target.value)
  }
  return (
    <>
      {categories?.results ?
        <FormControl style={{marginTop: '100px', width: '40%'}}>
          <InputLabel id="category-select-label">Categories</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            defaultValue=""
            label="Categories"
            placeholder="Please select a category"
            onChange={handleChange}
          >
            <MenuItem disabled value="">
              <em>Please select a category</em>
            </MenuItem>
            {categories.results.map((category: CategoryResult, index: number) =>
              <MenuItem key={category.name} value={category.url}>{category.name}</MenuItem>)}
          </Select>
        </FormControl>
        :
        <Typography marginTop={10}>No data</Typography>
      }
    </>
  );
}

export default CategorySelector;