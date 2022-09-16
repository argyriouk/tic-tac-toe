
const initialState = [
  null, null, null,
  null, null, null,
  null, null, null,
]

export const board = (state = initialState, action) => {
  switch (action.type) {
    case 'DRAW_X':
      const newXState = [...state]
      newXState[action.cellIndex] = 'X'
      return newXState

    case 'DRAW_O':
      const newOState = [...state]
      newOState[action.cellIndex] = 'O'
      return newOState

    default:
      return state
  }
}