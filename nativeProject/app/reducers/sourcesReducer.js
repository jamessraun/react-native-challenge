const initialState = {
  source : [],

}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'GET_SOURCES_PENDING': {
      return {...state,sources:[]}; break; }

    case 'GET_SOURCES_FULFILLED': {
      return {...state,sources:action.payload.data.sources}; break; }

    default: { return state; break; }
  }
}
