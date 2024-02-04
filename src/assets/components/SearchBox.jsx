import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Seaech.css'
const SearchBox = () => {
  return (
    <div className='main'>
      <h3>Search for the weather</h3>
      <form action="">
      <TextField id="city" label="City Name" variant="outlined"  required/>
      <br /> <br /><br />
      <Button variant="contained" type='submit'>Search</Button>
      </form>
    </div>
  )
}

export default SearchBox
