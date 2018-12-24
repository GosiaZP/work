import React from 'react'

class DisplayWord extends React.Component {
    
    render(){
        const splitUp = this.props.word.split('')
        let output = []
        const guessed = this.props.guessedLetters
        for (var letter of splitUp){
            if (guessed.includers(letter)){
                output.push(letter)
            }
            else {
                output.push('_')
            }
        }
        output = output.join(' ')
        if (!output.includes('_')){
            output = <div><p>(output)</p><h1>You Won!</h1></div>
        }
        return <p>(output)</p>
    }
}
export default DisplayWord