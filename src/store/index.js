import { createStore } from 'redux'

function rootReducer() {
    return [{
        id: 1,
        title: "Maria SANTA MONICA Juana",
    }, {
        id: 2,
        title: "João Juana",
    }]
}

const store = createStore(rootReducer)

export default store;