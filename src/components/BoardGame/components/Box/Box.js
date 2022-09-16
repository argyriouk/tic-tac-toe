import { connect } from 'react-redux';
import { drawX, drawO, changeTurn } from '../../../../actions/actions';

const Box = ({
  players,
  symbol,
  index,
  draw,
  board,
}) => (
  <div className='cell' onClick={() => draw(players, index, board)}>
    {symbol ? (symbol === 'X' ? <div>X</div> : <div>O</div>) : ''}
  </div >
);


const mapStateToProps = ({ board, players }) => ({ board, players })

const mapDispatchToProps = (dispatch) => {
  return {
    draw: (players, cellIndex, board) => {
      if (!board[cellIndex]) {
        if (players[players.turn] === 'X') {
          dispatch(drawX(cellIndex))
        } else {
          dispatch(drawO(cellIndex))
        }
        dispatch(changeTurn())
      }
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Box);