import {useNavigate} from "react-router-dom";
import {startTransition} from "react";

function AdminComponent() {
    const navigate = useNavigate();

    const handleClickSubmit = () => {
        startTransition(() => {
            navigate('/admin/management');
        });

    }


    return (
        <div className='m-4 md:m-20'>
            <div className='border-2 bg-amber-400 rounded-lg flex items-center justify-center min-h-32 p-4'>
                <label className="p-8 m-2 font-bold">Password</label>
                <input
                    type='password'
                    id="password"
                    className="p-2 border rounded"
                />
                <button className="bg-yellow-50 text-black hover:bg-yellow-50 transition duration-300 py-2 px-4 ml-4 rounded-md"
                onClick={() => handleClickSubmit()}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default AdminComponent;
