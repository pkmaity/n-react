import react from "react";
import reactDom from "react-dom/client";

/*
    Header
        Logo
        Nav Items
    Body
        Search
        RestaurantContainer
            RestaurantCard
    Footer
        Copyright
        Links
        Address
        Contact
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://i.pinimg.com/474x/b3/e5/f3/b3e5f321d4aedcf983a6c95f5a6d0b88.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contats</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    )
}

const root = reactDom.createRoot(document.getElementById('root'))
root.render(<AppLayout />)