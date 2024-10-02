import AdminListComponent from "../../components/admin/AdminListComponent.tsx";
import AdminProductComponent from "../../components/admin/AdminProductComponent.tsx";
function AdminManagementPage() {
    return (
        <div className="flex h-screen p-4">
            <AdminListComponent/>
            <AdminProductComponent/>
        </div>
    );
}

export default AdminManagementPage;