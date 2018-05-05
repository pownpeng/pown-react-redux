export default (state = [], action) => {
  switch (action.type) {
    case "ADD_LOAD" :
      return action.payload
    default:
      return state
  }
}
