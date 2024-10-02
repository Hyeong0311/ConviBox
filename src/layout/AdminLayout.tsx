import {useLocation, useNavigate} from "react-router-dom";
import {startTransition} from "react";
import AdminListComponent from "../components/admin/AdminListComponent.tsx";

function AdminLayout({ children }: { children: React.ReactNode }) {

    const navigate = useNavigate();

    const location = useLocation();

    const handleExit = () => {
        startTransition(() => {
            navigate('/');
        });
    };


    return (
        <>
            <header className="bg-yellow-500">
                    <div className="flex justify-center ">
                        <span className="text-2xl font-bold text-white ">ConviBox Admin</span>
                    </div>
                <nav>
                    <div className="flex justify-end">
                        <button
                            onClick={()=>handleExit()}
                            className="bg-red-500 text-white hover:bg-red-600 transition duration-300 py-2 px-4 rounded-md">
                            Exit
                        </button>
                    </div>
                </nav>
            </header>
            <div className='flex w-full h-full'>
                {location.pathname === '/management' && <AdminListComponent></AdminListComponent>}
                <main className="flex-1 p-4">{children}</main>
            </div>
        </>
    );
}

export default AdminLayout;
