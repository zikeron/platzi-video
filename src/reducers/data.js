import schema from '../schemas/index'
import { fromJS } from 'immutable';

const initialState = fromJS ({
    entities: schema.entities,
    categories: schema.result.categories,
    search: '',
})

function data( state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_VIDEO': {
            // let result = []
            // if (action.payload.query) {
            //     const list = state.data.categories[2].playlist;
            //     result = list.filter(elem => {
            //         return elem.author.toLowerCase().includes(action.payload.query.toLowerCase())
            //     })
            // }
            // return {
            //     ...state,
            //     search: result
            // }
            return state.set('search', action.payload.query)
        }
        default:
            return state
    }
}

export default data;