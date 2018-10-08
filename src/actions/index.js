import * as AT from '../action-types/index'

export function openModal (mediaId) {
   return {
     type: AT.OPEN_MODAL,
     payload: {
         mediaId
     }
   } 
}

export function closeModal (mediaId) {
    return {
      type: AT.CLOSE_MODAL,
    } 
}
 
 export function searchEntities (query) {
    return {
      type: AT.SEARCH_ENTITIES,
      payload: {
          query
      }
    } 
 } 

 export function searchAsyncEntities (query) {
  return (dispatch) => {
    dispatch(isLoading(true))
    setTimeout(()=>{
      dispatch(isLoading(false))
      dispatch(searchEntities(query))
    }, 5000)
  } 
} 

export function isLoading( value ){
  return {
    type: AT.IS_LOADING,
    payload: {
      value
    } 
  }
}