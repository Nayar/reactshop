import React from "react"

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
            filter: "chev"
        }
    }

    render() {
        return <>
            <h1>Welcome to our Car Shop</h1>
            <h2>We are currently showing "{this.state.filter}" cars</h2>
            <input type="text" value={this.state.filter}></input>
            <ul>
                { listCars
                .filter(car => car.brand.includes(this.state.filter))
                .map(car => <li key={car.id}>{car.id} {car.brand} {car.name} {car.year} {car.origin}</li>) }
            </ul>
        </>
    }
}

export default CarShop