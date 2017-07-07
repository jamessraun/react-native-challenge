const initialState = {
  source : [],

}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'Get_SOURCES_PENDING': {
      return {...state,sources:[]}; break; }

    case 'Get_SOURCES_FULFILLED': {
      return {...state,sources:action.payload.data.sources}; break; }

    default: { return state; break; }
  }
}
