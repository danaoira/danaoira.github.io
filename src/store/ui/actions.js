export const UI_SELECT_PAGE = 'UI_SELECT_PAGE'

const uiSelectPage = (page) => {
  return {
    type: UI_SELECT_PAGE,
    payload: {
      page,
    },
  }
}

export { uiSelectPage }
