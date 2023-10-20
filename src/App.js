import react from "react";
import reactDom from "react-dom/client";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import CatList from "./components/CatTodo/CatList";

// const AppLayout = () => {
//     return (
//         <div className="app">
//             <Header />
//             <Body />
//         </div>
//     )
// }

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'restaurant',
                element: <Body />
            },
            {
                path: 'todo',
                element: <CatList />
            }
        ]
    }
])

const root = reactDom.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)