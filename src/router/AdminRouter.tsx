import {lazy} from "react";
import {Navigate} from "react-router-dom";


const AdminIndex = lazy(() => import("../page/admin/AdminIndex"))
const AdminSignin = lazy(() => import("../page/admin/AdminPage"))
const AdminManagement = lazy(() => import("../page/admin/AdminManagementPage"))



const AdminRouter = {
    path: "/admin",
    element: <AdminIndex />,
    children: [
        {
            path: "",
            element: <AdminSignin/>
        },
        {
            path:"",
            element: <Navigate to='signin' replace={true}></Navigate>
        },
        {
            path: "management",
            element: <AdminManagement />
        }
    ]
};
export default AdminRouter;