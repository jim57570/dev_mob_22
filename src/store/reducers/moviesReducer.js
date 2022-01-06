const initialState = { myValues: [] }

function moviesReducer(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'ADD': // Exemple pour ajouter une valeur
      nextState = {
        ...state,
        myValues: [...state.myValues, action.value]
      };
      return nextState || state
    case 'DELETE':
      nextState = state;
      const index = nextState.myValues.indexOf(action.value);
      if(index != -1) {
        nextState.myValues.splice(index, 1);
      }
      return nextState || state
    default:
      return state
  };
}

export default moviesReducer;