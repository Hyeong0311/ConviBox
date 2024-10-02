import {Link, useNavigate} from "react-router-dom";
import {startTransition} from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {

    const navigate = useNavigate();

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
                {/*<aside className="w-1/4 p-4 bg-yellow-100">*/}
                {/*    <p>Sidebar</p>*/}
                {/*</aside>*/}
                <main className="flex-1 p-4">{children}</main>
            </div>
        </>
    );
}

export default AdminLayout;
