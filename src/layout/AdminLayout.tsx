import { useLocation, useNavigate } from "react-router-dom";
import { startTransition } from "react";
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
            <header className="bg-yellow-500 flex justify-between items-center px-4 py-2">
                {/* 왼쪽에 빈 공간을 추가해 중앙 정렬 */}
                <div className="flex-1"></div>

                {/* 중앙에 텍스트 */}
                <div className="flex items-center justify-center flex-1">
                    <span className="text-2xl font-bold text-white">ConviBox Admin</span>
                </div>

                {/* 오른쪽에 Exit 버튼 */}
                <div className="flex justify-end flex-1">
                    <button
                        onClick={handleExit}
                        className="bg-red-500 text-white hover:bg-red-600 transition duration-300 py-2.5 px-6 rounded-md text-2xl font-bold">
                        Exit
                    </button>
                </div>
            </header>

            <div className='flex w-full h-full'>
                {location.pathname === '/management' && <AdminListComponent></AdminListComponent>}
                <main className="flex-1 p-4">{children}</main>
            </div>
        </>
    );
}

export default AdminLayout;
