function Header(props) {
    return <>
        <h1>Header Component</h1>
        <h1>Welcome to our Car Shop</h1>
        <h2>We are currently showing "{props.filter}" cars</h2>
        <input type="text" onChange={props.updatefilter}></input>
    </>
}

export default Header