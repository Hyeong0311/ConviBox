import {createBrowserRouter} from "react-router-dom";
import {lazy} from "react";
import AdminRouter from "./AdminRouter.tsx";


const MainPage = lazy(() => import("../page/user/MainPage.tsx"));

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    },
    {
        path: "/"
    },AdminRouter
])

export default MainRouter;