import React, { useState, useContext} from 'react'
import { Container, Grid, TextField, Button } from '@mui/material'
import { nanoid } from 'nanoid'
import { DispatchContext } from '../App'
import { Item } from '../types'

const MyInput = () => {
  const [inputData, setInputData] = useState<string>('')
  const dispatch = useContext(DispatchContext)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (inputData) {
      const newItem: Item = {
        id: nanoid(),
        data: inputData
      }
      dispatch({type: "ADD_ITEM", item: newItem})
    }
    setInputData('')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputData(e.target.value)
  }

  return (
    <Container sx={{marginBottom: "2rem"}}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1} sx={{width: "fit-content", margin: "auto"}}>
          <Grid item>
            <TextField 
              variant="standard"
              id="item-input" 
              name="item" 
              label="New Item"
              type="string"
              value={inputData}
              onChange={handleChange}/>
          </Grid>
          <Grid item alignItems="stretch" style={{ display: "flex" }}>
            <Button
              variant="contained"
              type="submit"> Add Item </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default MyInput