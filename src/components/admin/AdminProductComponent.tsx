import {useNavigate} from "react-router-dom";
import {startTransition} from "react";
import AdminListComponent from "./AdminListComponent.tsx";

function AdminProductComponent() {

    const navigate = useNavigate();

    const [Productdesc] = AdminListComponent();

    const handleClickMoveAdd = () => {
        startTransition(() => {
            navigate("/admin/add");
        });
    }

    const handleDemo = () => {
        console.log(Productdesc)
    }

    return (

        <div className="w-2/3 p-4 h-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className='font-bold'></h2>
                <button
                    className="bg-green-600 text-white hover:bg-blue-600 transition duration-300 py-2 px-4 rounded-md"
                onClick={() => handleClickMoveAdd()}>
                    ADD
                </button>
                <button onClick={() => handleDemo()}>demo</button>
            </div>

            <aside className="h-full p-4 bg-yellow-200 rounded-lg flex flex-col items-center justify-center">
                <p className='font-bold'>Product list</p>
                <ul className="flex flex-col items-center">
                    <div>재료: 불닭볶음면 1봉지, 스파게티면 1봉지 , 물 600ml, 치즈 (선택), 대파 (선택)
                        조리방법
                        1. 냄비에 물을 끓이고 스파게티면을 8-10분 익힙니다.
                        2. 익힌 면을 건져내고, 같은 물에 불닭볶음면을 넣어 4-5분 끓입니다.
                        3. 면이 익으면 양념과 물을 섞고, 스파게티면을 추가해 잘 섞습니다.
                        4. 원하는 경우 치즈와 대파를 올려 완성합니다.
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