import React from 'react'
import Removable from './Removable'
import { Stack, Container, Typography } from '@mui/material'
import { ItemProps } from '../types'

const MyItems = ({ items = [], ...props } : ItemProps)=> {
  return (
    <Container maxWidth="sm">
        <Typography variant="subtitle1">{`My Items (${items.length})`}</Typography>
        <Stack spacing={1}>
                {items.map((item, idx) => <Removable key={idx} item={item} />)}
        </Stack>
    </Container>
  )
}

export default MyItems