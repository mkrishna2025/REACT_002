import { ADD_ARTICLE } from "../constants";

const initialState = {
  articles: []
};

//const rootReducer = (state = initialState, action) => state;


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      /* As state is immutable we cant add like below.
      state.articles.push(action.payload);
      return state;
      */
      return { ...state, articles: [...state.articles, action.payload] };
      
    default:
      return state;
  }
};
export default rootReducer;