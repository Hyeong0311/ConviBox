import {useNavigate} from "react-router-dom";
import {startTransition} from "react";
import AdminListComponent from "./AdminListComponent.tsx";
import {useSelector} from "react-redux";

function AdminProductComponent() {

    const navigate = useNavigate();
    const productDesc = useSelector((state) => state.product.productDesc);


    const handleClickMoveAdd = () => {
        startTransition(() => {
            navigate("/admin/add");
        });
    }

    // const handleDemo = () => {
    //     console.log(Productdesc)
    // }

    return (

        <div className="w-2/3 p-4 h-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className='font-bold'></h2>
                <button
                    className="bg-green-600 text-white hover:bg-blue-600 transition duration-300 py-2 px-4 rounded-md"
                onClick={() => handleClickMoveAdd()}>
                    ADD
                </button>
            </div>

            <aside className="h-full p-4 bg-yellow-200 rounded-lg flex flex-col items-center justify-center">
                <p className='font-bold'>Product list</p>
                <ul className="flex flex-col items-center">
                    <div>{productDesc || "선택된 제품 설명이 없습니다."}
                    </div>
                </ul>
            </aside>
            <div className="flex justify-end mt-4">
                <button
                    className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 py-2 px-4 rounded-md mr-2">
                    Modify
                </button>
                <button
                    className="bg-red-600 text-white hover:bg-red-700 transition duration-300 py-2 px-4 rounded-md">
                    Delete
                </button>
            </div>
        </div>
    );
}

export default AdminProductComponent;