import { Link } from "react-router-dom";

function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header className="bg-yellow-500 shadow-md">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    {/* 로고는 중앙에 배치 */}
                    <div className="flex-1 text-center">
                        <span className="text-2xl font-bold text-white">ConviBox Admin</span>
                    </div>
                    {/* Exit 버튼은 오른쪽에 배치 */}
                    <div>
                        <Link
                            to='/'
                            className="bg-red-500 text-white hover:bg-red-600 transition duration-300 py-2 px-4 rounded-md">
                            Exit
                        </Link>
                    </div>
                </div>
            </header>
            <div className='flex w-full bg-yellow-50'>
                <aside className="w-1/4 p-4 bg-yellow-100">
                    <p>Sidebar</p>
                </aside>
                <main className="flex-1 p-4">{children}</main>
            </div>
        </>
    );
}

export default AdminLayout;
