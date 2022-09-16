import { checkForWinner } from '../helpers/resultProcess';


// board
export const drawX = (cellIndex) => {
  return {
    type: 'DRAW_X',
    cellIndex
  }
}

export const drawO = (cellIndex) => {
  return {
    type: 'DRAW_O',
    cellIndex
  }
}

// players
export const changeTurn = () => {
  return {
    type: 'TURN',
  }
}

//result
export const checkGameResult = (board) => {
  if (checkForWinner(board, 'X')) {
    return {
      type: 'X_WINS',
    }
  } else if (checkForWinner(board, 'O')) {
    return {
      type: 'O_WINS'
    }
  } else {
    const checkEmptyCell = board.filter(symbol => symbol === null);
    if (checkEmptyCell.length === 0) {
      return {
        type: 'NOONE_WINS'
      }
    } else {
      return {
        type: 'DEFAULT'
      }
    }
  }
}
