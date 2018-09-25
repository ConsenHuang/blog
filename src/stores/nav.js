const state = {
  nav: [
    { value: '首页',
      id: 1
    },
    { value: '旅行',
      id: 2
    },
    { value: '心情',
      id: 3
    },
    { value: '美食',
      id: 4
    },
    { value: '留言板',
      id: 5
    }
  ],
  currentNav: {
    value: '首页',
    id: 1
  }
}
const getters = {
  // getEventState: (state) => {
  //   if (state.isEventReady && state.eventState === eventStateEnum.eventSetup) {
  //     return eventStateEnum.eventSetupReady
  //   } else {
  //     return state.eventState
  //   }
  // }
}
const mutations = {
  updateNav (state, item) {
    state.currentNav = item
  }
}
const actions = {
  updateNav ({commit}, item) {
    commit('updateNav', item)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
