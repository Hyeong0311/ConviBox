import AdminLayout from "../../layout/AdminLayout.tsx";
import {Outlet} from "react-router-dom";

function AdminIndex() {
    return (
        <AdminLayout>
            <div className="flex justify-between items-center">
                <div className="flex-1"></div>

            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </AdminLayout>
    );
}

export default AdminIndex;