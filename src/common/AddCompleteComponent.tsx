import {ReactElement} from "react";


interface AddCompleteComponentProps {

    message: string;
    onClick: () => void;
}


function AddCompleteComponent({message, onClick}: AddCompleteComponentProps): ReactElement{
    return (

        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 shadow-lg w-96">
                <div className="text-center">
                    {/* 모달 내용 */}
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">{message}</h2>

                    {/* 확인 버튼 */}
                    <button
                        className="bg-[#f8c300] text-white py-2 px-6 rounded-full font-semibold hover:bg-yellow-600 transition duration-200"
                        onClick={onClick}
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddCompleteComponent;