import React from "react"
import Header from "./Header"
import Body from "./Body"

const listCars = [
{
    id: 1,
    brand: "ford",
    name: "ford torino",
    year: "1970-01-01",
    origin: "USA"
},
{
    id: 2,
    brand: "ford",
    name: "ford galaxie 500",
    year: "1970-01-01",
    origin: "USA"
},
{
    id: 3,
    brand: "chevrolet",
    name: "chevrolet vega 2300",
    year: "1971-01-01",
    origin: "USA"
},
{
    id: 4,
    brand: "peugeot",
    name: "peugeot 504 (sw)",
    year: "1972-01-01",
    origin: "Europe"
},
{
    id: 5,
    brand: "renault",
    name: "renault 12 (sw)",
    year: "1972-01-01",
    origin: "Europe"
},
]

class CarShop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: "ford"
        }
    }

    updatefilter = (event) => {
        this.setState({
            filter: event.target.value
        })
    }

    render() {
        return <>
            {/* <Header></Header> */}
            <Body listCars={listCars}
            filter={this.state.filter}
            />
        </>
    }
}

export default CarShop