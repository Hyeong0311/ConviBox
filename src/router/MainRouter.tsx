import {createBrowserRouter} from "react-router-dom";
import AdminRouter from "./AdminRouter.tsx";
import UserRouter from "./UserRouter.tsx";


const MainRouter = createBrowserRouter([
    UserRouter,
    AdminRouter
])

export default MainRouter;