import {createBrowserRouter} from "react-router-dom";
import {lazy} from "react";


const MainPage = lazy(() => import("../page/MainPage"));

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    },
    {
        path: "/"
    }
])

export default MainRouter;