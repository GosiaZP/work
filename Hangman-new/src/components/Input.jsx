import React from 'react'
class Input extends React.Component {
    _handleSubmit(event){
        const input = this.refs.textInput.value 
        if (input.lenght === 0){
            console.log('Need 1 letter')
        } else if (this.props.guessedLetters.includes(input)){
            alert('You already guessed this letter')
        } else {
            this.props._updateGuessedLettes(input)
        }
        event.preventDefault()
    }
}
render(); {
    return (
        <div>
            <form onSubmit={this._handleSubmit.bind(this)}>
                <input type="text" ref="textInput" maxLength='1'/>
                <button>Submit</button>
            </form>
        </div>
    )
    }

export default Input
