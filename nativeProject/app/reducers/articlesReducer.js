const initialState ={
  articles:[]
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'GET_ARTICLES_PENDING': {
      return {...state,articles:[]}; break; }

    case 'GET_ARTICLES_FULFILLED': {
      return {...state,articles:action.payload.data.articles}; break; }

    default: { return state; break; }
  }
}
