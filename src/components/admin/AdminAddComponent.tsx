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
        <div className="flex items-center justify-center h-screen">
            {isModalOpen && <AddCompleteComponent message={'등록완료'} onClick={closeCallback} />}
            <div className="w-1/2 h-4/5 p-4">
                <aside className="h-full p-4 bg-yellow-200 rounded-lg flex flex-col items-center justify-between">
                    <p className='font-bold'>상품추가</p>
                    <ul className="flex flex-col items-center w-full">

                        <li className="mb-4 w-full">
                            <label htmlFor="name" className="block mb-1">Name</label>
                            <input
                                type='text'
                                name='pname'
                                className="p-2 border rounded w-full"
                                value={recipe.pname}
                                onChange={handleChange} />
                        </li>

                        <li className="mb-4 w-full">
                            <label htmlFor="pdesc" className="block mb-1">Description</label>
                            <textarea
                                name='pdesc'
                                className="p-2 border rounded w-full h-32 resize-none"
                                value={recipe.pdesc}
                                onChange={handleChange} />
                        </li>

                        <li className="mb-4 w-full">
                            <label htmlFor="price" className="block mb-1">Price</label>
                            <input
                                type='text'
                                name='price'
                                className="p-2 border rounded w-full"
                                value={recipe.price}
                                onChange={handleChange} />
                        </li>

                        <li className="mb-4 w-full">
                            <label htmlFor="keyword" className="block mb-1">Keyword</label>
                            <input
                                type='text'
                                name='keyword'
                                className="p-2 border rounded w-full"
                                value={recipe.keyword}
                                onChange={handleChange} />
                        </li>

                        <li className="mb-4 w-full">
                            <label htmlFor="files" className="block mb-1">Files</label>
                            <input type='file' ref={filesRef} name='files' multiple={true} />
                        </li>
                        <div className="flex justify-end w-full">
                            <button
                                className="bg-green-600 text-white hover:bg-green-700 transition duration-300 py-2 px-4 rounded-md"
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
