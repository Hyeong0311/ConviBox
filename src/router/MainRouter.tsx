import {createBrowserRouter} from "react-router-dom";
import AdminRouter from "./AdminRouter.tsx";
import UserRouter from "./UserRouter.tsx";
import LoadingComponent from "../common/LoadingComponent.tsx";
import {lazy, Suspense} from "react";

const MainPage = lazy(() => import('../page/user/MainPage'))

const loading = <LoadingComponent></LoadingComponent>


const MainRouter = createBrowserRouter([

    {
        path:"/",
        element: <Suspense fallback={loading}><MainPage/></Suspense>
    },
    UserRouter,
    AdminRouter
])

export default MainRouter;