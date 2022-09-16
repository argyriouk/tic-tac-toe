
const initialState = {
  win: null,
  none: false
};

export const result = (state = initialState, action) => {
  switch (action.type) {
    case 'X_WINS':
      return {
        win: 'X',
        none: false
      }
    case 'O_WINS':
      return {
        win: 'O',
        none: false
      }
    case 'NOONE_WINS':
      return {
        win: null,
        none: true
      }
    default:
      return state
  }
}