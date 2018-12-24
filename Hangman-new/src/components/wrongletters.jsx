import React from 'react'

class wrongletters extends React.Component{
    render(){
        const splitUp = this.props.word.split('')
        const guessed = this.props.guessedLetters
        let wrongLetters =[]
        for (var letter of guessed){
            if (!splitUp.includes(letter)){
                wrongletters.push(letter)
            }
        }
        return (
            <div>
                {(wrongletters.lenght > 6 ) && <h1>You lost</h1>}
                <p>{wrongletters.join(' ')}</p>
                <img src={require('../../Images/f0${wrongletters.lenght + 1}.png') } />
            </div>
        )
    }
}
export default wrongletters