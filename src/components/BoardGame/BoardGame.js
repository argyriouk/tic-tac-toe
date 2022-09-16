import { connect } from 'react-redux';
import { Box } from "./components";
import { checkGameResult } from '../../actions/actions';

const BoardGame = ({
  board,
  players,
  result,
  checkResult
}) => {

  if (!(result.none || result.win)) {
    checkResult(board)
  }

  if (result.none) {
    return <div>No-one wins!</div>
  } else if (result.win === 'X') {
    return <div>Player1 wins</div>
  } else if (result.win === 'O') {
    return <div>Player2 wins</div>
  }


  return (
    <div>
      <div className="container">
        {
          board?.map((element, i) =>
            <Box symbol={element} index={i} />
          )
        }
      </div>
      <div>
        <p>
          <strong>Player1:</strong>
          {' '}
          {players.player1}
        </p>
        <p>
          <strong>Player2:</strong>
          {' '}
          {players.player2}
        </p>
        <p>
          <strong>Turn:</strong>
          {' '}
          {players.turn}
        </p>
      </div>
    </div>

  )
}


const mapStateToProps = (({ board, players, result }) => ({ board, players, result }));
const mapDispatchToProps = (dispatch) => {
  return {
    checkResult: (board) =>
      dispatch(checkGameResult(board))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BoardGame);