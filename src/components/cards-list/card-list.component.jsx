import { Component } from "react";
import './card-list.style.css'
import Card from "../card/card.component";

export class CardList extends Component{
    render(){
        console.log(this.props.monsters);
        console.log('render from cardList');
        const {monsters} = this.props;
        return (
            <div className="card-list">
                {monsters.map(monster => {
                    return <Card monster={monster}/>
                    }
                 )
                }
            </div>
        )
    }
}

export default CardList;