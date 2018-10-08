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