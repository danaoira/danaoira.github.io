import { UI_SELECT_PAGE } from './actions'

const initialState = {
  page: null,
}

type State = {
  page: null | string
}

type Action = {
  type: string,
  payload: any
}

const reducer = (state: State = initialState, { type, payload = {} }: Action) => {
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
