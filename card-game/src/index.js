import React from 'react';
import ReactDOM from 'react-dom';
import { Button, CardDisplay } from './Button';
import * as serviceWorker from './serviceWorker';
import './App.css';
import { cards, shuffle } from './Cards'


shuffle(cards);

export const userCards = []
for (let i = 0; i < 26; i++) {
    userCards.push(cards[i]);
}
export const compCards = []
for (let i = 26; i < cards.length; i++){
    compCards.push(cards[i]);
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWar: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }
  isWar () {
    return this.state.isWar;
  }
  handleClick () {
    document.getElementById("user-card").src=require(`${userCards[0].img}`);
    document.getElementById("comp-card").src=require(`${compCards[0].img}`);
    if (userCards[0].value > compCards[0].value) {
      userCards.push(userCards[0], compCards[0]);
      userCards.shift();
      compCards.shift();
      console.log(userCards.length + 4);
      this.setState({
        isWar: false
      })
      document.getElementById('user-card-about').innerHTML = `User cards remaining: ${userCards.length} `;
      document.getElementById('comp-card-about').innerHTML = `Computer cards remaining: ${compCards.length}`;
    } else if (userCards[0].value < compCards[0].value) {
      compCards.push(userCards[0], compCards[0]);
      userCards.shift();
      compCards.shift();
      this.setState({
        isWar: false
      })
      document.getElementById('user-card-about').innerHTML = `User cards remaining: ${userCards.length} `;
      document.getElementById('comp-card-about').innerHTML = `Computer cards remaining: ${compCards.length}`;
    } else if (userCards[0].value === compCards[0].value) {
      if (userCards[3].value >= compCards[3].value) {
        document.getElementById('user-card-about').innerHTML = `User cards remaining: ${userCards.length + 4} `;
      } else {
        document.getElementById('comp-card-about').innerHTML = `Computer cards remaining: ${compCards.length + 4}`;
      }
      this.setState({
          isWar: true
        });

    }
    
    

    if(userCards.length === 0) {
      document.getElementById('comp-card-about').innerHTML = `Computer wins!`;
    } else if (compCards.length === 0) {
      document.getElementById('user-card-about').innerHTML = `User wins!`;
    }
  };

  handleClick2 () {
    shuffle(userCards);
    shuffle(compCards);
  }

  handleClick3 () {

    if (userCards[3].value >= compCards[3].value) {
      userCards.push(userCards[0], userCards[1], userCards[2], userCards[3], compCards[0], compCards[1], compCards[2], compCards[3])
      userCards.splice(0, 4);
      compCards.splice(0, 4); 
    } else if (compCards[3].value > userCards[3].value) {
      compCards.push(userCards[0], userCards[1], userCards[2], userCards[3], compCards[0], compCards[1], compCards[2], compCards[3])
      userCards.splice(0, 4);
      compCards.splice(0, 4);
  }

    this.setState({
      isWar: false
    });
    this.handleClick();
  }

  render() {
    return (
    <div>
      <CardDisplay isWar={this.isWar()} />
      <Button onClick={this.handleClick} onClick2={this.handleClick2} onClick3={this.handleClick3} isWar={this.isWar()} />
    </div>)
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/* if (userCards[3].value >= compCards[3].value) {
        userCards.push(userCards[0], userCards[1], userCards[2], userCards[3], compCards[0], compCards[1], compCards[2], compCards[3])
        userCards.splice(0, 4);
        compCards.splice(0, 4); 
        console.log(userCards);
        console.log(compCards);
      } else if (compCards[3].value > userCards[3].value) {
        compCards.push(userCards[0], userCards[1], userCards[2], userCards[3], compCards[0], compCards[1], compCards[2], compCards[3])
        userCards.splice(0, 4);
        compCards.splice(0, 4);
        console.log(userCards);
        console.log(compCards);
      }
      */