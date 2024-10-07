import AdminListComponent from "../../components/admin/AdminListComponent.tsx";
import AdminProductComponent from "../../components/admin/AdminProductComponent.tsx";
import store from "../../../src/store.ts"
import {Provider} from "react-redux";

function AdminManagementPage() {
    return (
        <Provider store={store}>
        <div className="flex h-screen p-4">
            <AdminListComponent/>
            <AdminProductComponent/>
        </div>
    </Provider>
    );
}

export default AdminManagementPage;