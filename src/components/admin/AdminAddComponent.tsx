import { IProduct } from "../../types/product.ts";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { postProduct } from "../../api/productAPI.ts";
import AddCompleteComponent from "../../common/AddCompleteComponent.tsx";
import { useNavigate } from "react-router-dom";

const initState: IProduct = {
    pname: '',
    pdesc: '',
    price: '',
    keyword: '',
};

function AdminAddComponent() {
    const [recipe, setRecipe] = useState<IProduct>({ ...initState });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const filesRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();


    const addMutation = useMutation({
        mutationFn: (formData) => postProduct(formData),
        onSuccess: () => {
            setIsModalOpen(true);  // 모달 열기
            setRecipe({ ...initState });  // 폼 초기화
        },
    });


    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setRecipe((prev) => ({
            ...prev,
            [name]: name === 'price' ? (value ? parseFloat(value) : 0) : value, // 빈 문자열 처리
        }));
    }, []);

    const handleClickAdd = () => {
        const files = filesRef.current?.files;
        const formData = new FormData();

        formData.append("pname", recipe.pname);
        formData.append("pdesc", recipe.pdesc);
        formData.append("keyword", recipe.keyword || '');
        formData.append("price", recipe.price.toString());

        if (files) {
            for (let i = 0; i < files.length; i++) {
                formData.append("files", files[i]);
            }
        }

        addMutation.mutate(formData);
    };

    const closeCallback = () => {
        setIsModalOpen(false);
        navigate({ pathname: '/admin/management' });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {isModalOpen && <AddCompleteComponent message={'등록완료'} onClick={closeCallback}/>}
            <div className="w-full max-w-md h-auto p-6 shadow-lg rounded-lg bg-[#f8c300]"> {/* 화면 침범을 방지하도록 크기를 줄임 */}
                <aside className="w-full p-4 bg-[#f8c300] rounded-lg flex flex-col items-center justify-between">
                    <p className="font-bold text-2xl text-gray-800 mb-4">상품 추가</p>
                    <ul className="flex flex-col items-center w-full space-y-4">

                        <li className="w-full">
                            <label htmlFor="name" className="block mb-1 font-semibold text-gray-800">Name</label>
                            <input
                                type="text"
                                name="pname"
                                className="p-2 border rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-yellow-500 transition-all"
                                value={recipe.pname}
                                onChange={handleChange}
                                placeholder="Enter product name"
                            />
                        </li>

                        <li className="w-full">
                            <label htmlFor="pdesc"
                                   className="block mb-1 font-semibold text-gray-800">Description</label>
                            <textarea
                                name="pdesc"
                                className="p-2 border rounded-lg w-full h-24 resize-none focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-yellow-500 transition-all"
                                value={recipe.pdesc}
                                onChange={handleChange}
                                placeholder="Enter product description"
                            />
                        </li>

                        <li className="w-full">
                            <label htmlFor="price" className="block mb-1 font-semibold text-gray-800">Price</label>
                            <input
                                type="text"
                                name="price"
                                className="p-2 border rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-yellow-500 transition-all"
                                value={recipe.price}
                                onChange={handleChange}
                                placeholder="Enter price"
                            />
                        </li>

                        <li className="w-full">
                            <label htmlFor="keyword" className="block mb-1 font-semibold text-gray-800">Keyword</label>
                            <input
                                type="text"
                                name="keyword"
                                className="p-2 border rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-yellow-500 transition-all"
                                value={recipe.keyword}
                                onChange={handleChange}
                                placeholder="Enter keyword"
                            />
                        </li>

                        <li className="w-full">
                            <label htmlFor="files" className="block mb-1 font-semibold text-gray-800">Files</label>
                            <input
                                type="file"
                                ref={filesRef}
                                name="files"
                                multiple={true}
                                className="block w-full text-sm text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-orange-500 file:text-white hover:file:bg-orange-600 transition-all"
                            />
                        </li>

                        <div className="flex justify-end w-full mt-4">
                            <button
                                className="bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-400 transition-all py-2 px-6 rounded-lg font-semibold"
                                onClick={handleClickAdd}>
                                ADD
                            </button>
                        </div>
                    </ul>
                </aside>
            </div>
        </div>
    );
}

export default AdminAddComponent;
