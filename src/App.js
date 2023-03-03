import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
    };
    console.log('constructor');
  }

  componentDidMount(){
    console.log('ComponentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( (response) => 
    response.json()
    ).then((users)=> this.setState(() => {
      return {monsters: users}
    }));
  }

  render(){
    console.log('render')
    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='Seach Monsters'
          onChange={(event)=>{
            const searchString = event.target.value.toLocaleLowerCase();
            console.log(searchString);
            const filteredMonsters = this.state.monsters.filter((monster)=>{
              return monster.name.toLocaleLowerCase().includes(event.target.value);
            })
            this.setState(()=>{
              return {monsters: filteredMonsters}
            })
          }}
        />
          {
            this.state.monsters.map((monster)=> {
              return <h1 key={monster.id}>{monster.name}</h1>
            } )
          }       
      </div>
    );
  }  
}

export default App;
