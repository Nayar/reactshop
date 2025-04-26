function Body(props) {
    return <>
        <ul>
                { props.listCars
                .filter(car => car.brand.includes(props.filter))
                .map(car => <li key={car.id}>{car.id} {car.brand} {car.name} {car.year} {car.origin}</li>) }
            </ul>
    </>
}

export default Body