import { Component } from "react";
import Table from "./Table";

class App2 extends Component{
    render(){
        const character = [{
            name: "Akash",
            age : 20,
        },
        {
            name:"Mahesh",
            age :22,
        },
        {
            name:"Ramesh",
            age :23,
        }
    ]
        return(
           <Table ch={character}/>
        )
    }
}
export default App2;