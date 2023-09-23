import react from "react";
import reactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = reactDom.createRoot(document.getElementById('root'))
root.render(<AppLayout />)