import React, { useState } from 'react'
import diceEmpty from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

function Dice() {

  const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6]
  const [randomDice, setRandomDice] = useState(diceArr[Math.floor(Math.random() * diceArr.length)])

  const handleChangeDice = () => {
    setRandomDice((prevDice) => {
      if (prevDice !== diceEmpty) {
        prevDice = diceEmpty
      }
      return prevDice
    })
  }

  if (randomDice === diceEmpty){
    function delay(time) {
      return new Promise(resolve => setTimeout(resolve, time));
    }
    delay(1000).then(() => setRandomDice((prevDice) => prevDice = diceArr[Math.floor(Math.random() * diceArr.length)]));
  }

  return (
    <div>
      <img src={randomDice} alt={diceArr} height='150' onClick={handleChangeDice}/>
    </div>
  )
}

export default Dice