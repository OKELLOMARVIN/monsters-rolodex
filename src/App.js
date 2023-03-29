import SearchBox from './components/search-box/search-box.component';
import './App.css';
import {useEffect, useState} from "react";
import CardList from "./components/cards-list/card-list.component";


const App = () => {
    console.log('render')
    const [searchField, setSearchField] = useState('') // [value, setValue]
    const [monsters, setMonsters] = useState([])
    const [filteredMonsters, setFilteredMonsters] = useState(monsters)
    console.log(searchField)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) =>
                response.json()
            ).then((users) => setMonsters(users));
    }, [])
    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        })
        setFilteredMonsters(newFilteredMonsters)
    }, [monsters, searchField])
    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
        console.log(searchField)
    };

    return (
        <div className="App">
            <h1 className='app-title'>Monsters Rolodex</h1>
            <SearchBox onChangeHandler={onSearchChange} placeHolder={'Search Monsters'}
                       className={'monsters-search-box'}/>
            <CardList monsters={filteredMonsters}/>
        </div>
    );
}

/*class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) =>
                response.json()
            ).then((users) => this.setState(() => {
            return {monsters: users}
        }));
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return {searchField}
        })
    };

    render() {
        const {monsters, searchField} = this.state;
        const {onSearchChange} = this;
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        })
        return (
            <div className="App">
                <h1 className='app-title'>Monsters Rolodex</h1>
                <SearchBox onChangeHandler={onSearchChange} placeHolder={'Search Monsters'}
                           className={'monsters-search-box'}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}*/

export default App;
