import uiReducer from './ui/reducer'

const combinedReducer = (state = {}, action) => {
  return {
    ui: uiReducer(state.ui, action),
  }
}

export default combinedReducer
