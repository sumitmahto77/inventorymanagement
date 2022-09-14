import React from 'react'
import { render as rtlRender} from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

// As a basic setup, import your same slice reducers
import rootReducer from './redux/rootReducer';

export function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: rootReducer , preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return rtlRender(ui,{wrapper: Wrapper, ...renderOptions})
}

export * from '@testing-library/react'
export { render }