export const state = () => ({
  opened: false,
  data: {},
})

export const mutations = {
  open(state, modalData) {
    state.opened = true
    state.data = modalData
  },
  close(state) {
    state.opened = false
  },
  empty(state) {
    state.data = {}
  },
  addData(state, modalData) {
    state.data = modalData
  },
}
