import react from "react";
import reactDom from "react-dom/client";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import CatList from "./components/CatTodo/CatList";
import CatInfo from "./components/CatTodo/CatInfo";
import CatLayout from "./components/CatTodo/CatLayout";

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
                path: 'cat',
                element: <CatLayout />,
                children: [
                    {
                        path: 'list',
                        element: <CatList />,
                    },
                    {
                        path: 'info/:catId',
                        element: <CatInfo />
                    }
                ]
            },
        ]
    }
])

const root = reactDom.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)