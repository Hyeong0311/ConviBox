import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";
import LoadingComponent from "../common/LoadingComponent.tsx";


const AdminIndex = lazy(() => import("../page/admin/AdminIndex"))
const AdminSignin = lazy(() => import("../page/admin/AdminPage"))
const AdminManagement = lazy(() => import("../page/admin/AdminManagementPage"))
const AdminAdd = lazy(() => import("../page/admin/AdminAddPage"))

const loading = <LoadingComponent></LoadingComponent>


const AdminRouter = {
    path: "/admin",
    element: <Suspense fallback={loading}><AdminIndex /></Suspense>,
    children: [
        {
            path: "",
            element: <Suspense fallback={loading}><AdminSignin/></Suspense>
        },
        {
            path:"",
            element: <Navigate to='signin' replace={true}></Navigate>
        },
        {
            path: "management",
            element: <Suspense fallback={loading}><AdminManagement /></Suspense>
        },
        {
            path: "add",
            element: <Suspense fallback={loading}><AdminAdd/></Suspense>
        }
    ]
};
export default AdminRouter;