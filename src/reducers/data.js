function data(state, action) { 
    switch (action.type) {
        case 'SEARCH_VIDEO': {
            let result = []
            if (action.payload.query) {
                const list = state.data.categories[2].playlist;
                result = list.filter(elem => {
                    return elem.author.toLowerCase().includes(action.payload.query.toLowerCase())
                })
            }
            return {
                ...state,
                search: result
            }
        }
        default:
            return state
    }
}

export default data;