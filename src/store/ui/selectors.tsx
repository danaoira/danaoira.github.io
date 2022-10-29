type State = {
  ui: {
    page: string | null
  }
}

const getSelectedPage = (state: State) => (state.ui ? state.ui.page : 'null')

export { getSelectedPage }
