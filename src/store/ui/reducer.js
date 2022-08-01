import { UI_SELECT_PAGE } from './actions'

const initialState = {
  page: null,
}

const reducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case UI_SELECT_PAGE:
      return {
        ...state,
        page: payload.page,
      }

    default:
      return state
  }
}

export default reducer
