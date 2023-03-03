export const state = () => ({
  footerIsShow: true
})

export const getters = {
  getFooterIsShow (state) {
    return state.footerIsShow
  },
  scrollPageToTop () {
    // Scroll to top for all views
    return window.scrollBy({
      top: -Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      ),
      behavior: 'smooth'
    })
  }
}

export const mutations = {
  showFooter (state) {
    state.footerIsShow = true
  },
  hideFooter (state) {
    state.footerIsShow = false
  }
}
