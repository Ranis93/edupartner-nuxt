export const state = () => ({
  bredcrumbAmount: 0, // Общее кол-во хлеб.крошек
  currentBredcrumbs: { values: [''], paths: [''] }
})

export const getters = {
  getCurrentPathForBredcrumb_1 (state) {
    return state.currentBredcrumbs.paths[0]
  },
  getCurrentPathForBredcrumb_2 (state) {
    return state.currentBredcrumbs.paths[1]
  },
  getCurrentPathForBredcrumb_3 (state) {
    return state.currentBredcrumbs.paths[2]
  },
  getCurrentBredcrumb_1 (state) {
    return state.currentBredcrumbs.values[0]
  },
  getCurrentBredcrumb_2 (state) {
    return state.currentBredcrumbs.values[1]
  },
  getCurrentBredcrumb_3 (state) {
    return state.currentBredcrumbs.values[2]
  },
  getBgColor (state) {
    if (state.currentBredcrumbs.values[1] === 'История компании') {
      return true
    }
    return false
  }
}

export const mutations = {
  // Мутации не должны быть асинхронными
  changeAmountBredcrumbs (state, num) {
    state.bredcrumbAmount = num.value
  },
  hideBredcrumb (state) {
    state.bredcrumbAmount = 0
  },
  changeBredcrumbs (state, payload) {
    state.currentBredcrumbs = payload
  }
}
