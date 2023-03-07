import { Component } from "react";
export class SearchBox extends Component{
    render(){
        return (
            <input 
          className='search-box' 
          type='search' 
          placeholder='Seach Monsters'
          onChange={this.props.onChangeHandler}
        />
        )
    }
}

export default SearchBox;