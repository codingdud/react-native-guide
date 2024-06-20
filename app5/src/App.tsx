import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Snackbar from 'react-native-snackbar'
import Icons from './components/Icons'
import { useState } from 'react'
const App = () => {
  const [isCross, setIssCross] = useState<boolean>(false)
  const [gameWin, setGameWin] = useState<string>('')
  const [gameDraw, setGameDraw] = useState(new Array(9).fill('empty', 0, 9))

  const reloadGame = () => {
    setGameDraw(new Array(9).fill('empty', 0, 9))
    setGameWin('')
    setIssCross(false)
  }
  const checkWinner = () => {
    if (
      gameDraw[0] === gameDraw[1] &&
      gameDraw[0] === gameDraw[2] &&
      gameDraw[0] !== 'empty'
    ) {
      setGameWin(`${gameDraw[0]} won the game! 🥳`);
    } else if (
      gameDraw[3] !== 'empty' &&
      gameDraw[3] === gameDraw[4] &&
      gameDraw[4] === gameDraw[5]
    ) {
      setGameWin(`${gameDraw[3]} won the game! 🥳`);
    } else if (
      gameDraw[6] !== 'empty' &&
      gameDraw[6] === gameDraw[7] &&
      gameDraw[7] === gameDraw[8]
    ) {
      setGameWin(`${gameDraw[6]} won the game! 🥳`);
    } else if (
      gameDraw[0] !== 'empty' &&
      gameDraw[0] === gameDraw[3] &&
      gameDraw[3] === gameDraw[6]
    ) {
      setGameWin(`${gameDraw[0]} won the game! 🥳`);
    } else if (
      gameDraw[1] !== 'empty' &&
      gameDraw[1] === gameDraw[4] &&
      gameDraw[4] === gameDraw[7]
    ) {
      setGameWin(`${gameDraw[1]} won the game! 🥳`);
    } else if (
      gameDraw[2] !== 'empty' &&
      gameDraw[2] === gameDraw[5] &&
      gameDraw[5] === gameDraw[8]
    ) {
      setGameWin(`${gameDraw[2]} won the game! 🥳`);
    } else if (
      gameDraw[0] !== 'empty' &&
      gameDraw[0] === gameDraw[4] &&
      gameDraw[4] === gameDraw[8]
    ) {
      setGameWin(`${gameDraw[0]} won the game! 🥳`);
    } else if (
      gameDraw[2] !== 'empty' &&
      gameDraw[2] === gameDraw[4] &&
      gameDraw[4] === gameDraw[6]
    ) {
      setGameWin(`${gameDraw[2]} won the game! 🥳`);
    } else if (!gameDraw.includes('empty', 0)) {
      setGameWin('Draw game... ⌛️');
    }
  }

  const onChange = (itemNum: number) => {
    if (gameWin) {
      return Snackbar.show({
        text: gameWin,
        backgroundColor: '#38CC77',
        textColor: '#fff',
        duration: Snackbar.LENGTH_LONG,
      })
    }

    if (gameDraw[itemNum] === 'empty') {
      gameDraw[itemNum] = isCross ? 'cross' : 'circle'
      setIssCross(!isCross)
    } else {
      return Snackbar.show({
        text: 'Already filled',
        backgroundColor: '#38CC77',
        textColor: '#fff',
        duration: Snackbar.LENGTH_LONG,
      })
    }
    checkWinner()
  }
  return (
    <SafeAreaView>
      <StatusBar />
      {gameWin ? (
        <View>
          <View style={[styles.winnerInfo]}>
            <Text style={[styles.winnerTxt]}>{gameWin}</Text>
          </View>
        </View>
      ) : (
        <View style={[styles.playerInfo, isCross ? styles.playerX : styles.playerO]}>
          <Text style={[styles.gameTurnTxt]}>PLAYER:{isCross ? 'X' : 'O'}</Text>
        </View>
      )}
      <FlatList
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        data={gameDraw}
        style={[styles.grid]}
        renderItem={({ item, index }) => (<Pressable
          key={index}
          style={[styles.card]}
          onPress={() => onChange(index)}>
          <Icons name={item} />
        </Pressable>)}
      />
      <Pressable style={[styles.gameBtn]} onPress={reloadGame}>
        <Text style={[styles.gameBtnText]} >
          Play Again
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default App


const styles = StyleSheet.create({
  playerInfo: {
    height: 56,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#333',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
})
