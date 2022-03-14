//state
const state = {
    message: '',
    showInputModal: false,
    modalHeaderName: '',
    modalId: '',
    modalPwd: ''

}

// mutations
const mutations = {
    changeMessage(state, newMsg) {
        state.message = newMsg
    },

    changeShowInputModal(state, headerName) {
        state.showInputModal = true
        state.modalHeaderName = headerName
    },
    closeInputModal(state) {
        state.showInputModal = false
    },
    checkPwd(state, id, pwd) {
        state.modalId = id
        state.modalPwd = pwd
    }
}

// actions
const actions = {
    callMutation({commit}, {newMsg}) {
        commit('changeMessage', newMsg)
    },
    callChangeShowInputModal({commit}, headerName, show) {
        commit('changeShowInputModal', headerName, show)
    },
    callCloseInputModal({commit}) {
        commit('closeInputModal')
    },
    callCheckPwd({commit},id,pwd){
        commit('checkPwd',id,pwd)
    }
}

// getters
const getters = {
    getMsg(state) {
        return `${state.message} => Length : ${state.message.length}`
    },
    showInputModal(state) {
        return state["inputModalStore/showInputModal"]
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}