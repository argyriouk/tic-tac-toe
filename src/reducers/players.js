
const initialState = {
  player1: 'X',
  player2: 'O',
  turn: 'player1'
};

export const players = (state = initialState, action) => {
  switch (action.type) {
    case 'TURN':

      const newState = { ...state }

      if (newState.turn === 'player1') {
        newState.turn = 'player2'
      } else {
        newState.turn = 'player1'
      }
      return newState

    default:
      return state
  }
}