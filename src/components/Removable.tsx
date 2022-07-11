import React, { useContext } from 'react'
import { Paper, Typography, Button } from '@mui/material'
import { DispatchContext } from '../App'
import { Item } from '../types'

type RemovableProps = {
  item: Item
}

const Removable = ({ item, ...props }: RemovableProps) => {
  const dispatch = useContext(DispatchContext)
  
  const handleRemove = (item: Item) => {
    dispatch({type: "REMOVE_ITEM", item })
  }

  return ( 
    <Paper>
        <Typography display="inline">{item.data}</Typography>
        <Button onClick={() => handleRemove(item)}> X </Button>
    </Paper>
  )
}

export default Removable
