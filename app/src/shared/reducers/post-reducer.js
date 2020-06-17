export function postReducer (state = [], action) {
  console.log(action)
  switch (action.type) {
    case 'GET_ALL_POSTS':
      return action.payload
    case 'GET_POST_BY_POST_ID':
      return [...state, action.payload]
    default :
      return state
  }
}