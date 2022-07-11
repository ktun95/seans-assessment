import React, { useReducer, useContext } from 'react';
import './App.css';
import MyHeader from './components/MyHeader';
import MyInput from './components/MyInput';
import MyItems from './components/MyItems';
import { ItemAction, Item } from './types'

type InitialItemStateType = Item[];

const itemReducer = (state: Item[], action: ItemAction) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item]
    case 'REMOVE_ITEM':
      const newState = state.filter((item) => item.id !== action.item.id)
      return [...newState]
    default:
      throw new Error();
  }
}

export const DispatchContext = React.createContext<React.Dispatch<any>>(() => null)
const StateContext = React.createContext<InitialItemStateType>([])
      
function App() {
  const [items, dispatch] = useReducer(itemReducer, [])

  return (
    <div className="App">
      <MyHeader />
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={items}>
          <MyInput />
          <MyItems items={items} />
        </StateContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
