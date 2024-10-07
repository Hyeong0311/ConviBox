import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startTransition } from "react";
import { setRecipeName, setDescription, setPrice, setKeywords } from '../../productSlice';
import {IRootState} from "../../types/product.ts";
import {deleteOne, modifyOne} from "../../api/productAPI.ts"; // 경로 조정 필요
import React, { useState } from 'react';
import LoadingComponent from "../../common/LoadingComponent.tsx";

function AdminProductComponent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const pno = useSelector((state: IRootState) => state.product.pno);
    const recipeName = useSelector((state: IRootState) => state.product.pname);
    const description = useSelector((state: IRootState) => state.product.pdesc);
    const price = useSelector((state: IRootState) => state.product.price);
    const keywords = useSelector((state: IRootState) => state.product.keyword);

    // 로컬 상태로 이미지 관리
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleClickMoveAdd = () => {
        startTransition(() => {
            navigate("/admin/add");
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedImage = e.target.files[0];
            setImage(selectedImage);

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string); // Base64로 변환된 이미지
            };
            reader.readAsDataURL(selectedImage); // 파일 읽기
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        setImagePreview(null);
    };

    const handleClickModify = () => {

        setLoading(true);

        const formData = new FormData();

        formData.append("pno", pno.toString()); // 번호 추가
        formData.append("pname", recipeName); // 제품 이름 추가
        formData.append("pdesc", description); // 설명 추가
        formData.append("price", price.toString()); // 가격 추가

        if (image) {
            formData.append("files", image); // 파일 추가
        }

        modifyOne(formData, pno).then(() => {

            setTimeout(() => {

                setLoading(false);
            }, 300)

        });
    };

    const handleClickRemove = () => {
        console.log(pno);
        // 실제 삭제 API 호출
        deleteOne(pno).then(response => {
            // 삭제 후 필요한 작업
            console.log(response);
        }).catch(error => {
            console.error("삭제 실패:", error);
        });
    };

    return (

        <>
            {loading && <LoadingComponent></LoadingComponent>}

            <div className="w-2/3 p-4 h-full">
                {/* 상단 버튼 */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className='font-bold text-xl'>Product Manager</h2>
                    <button
                        className="bg-green-600 text-white hover:bg-blue-600 transition duration-300 py-2 px-4 rounded-md"
                        onClick={handleClickMoveAdd}>
                        ADD
                    </button>
                </div>

                {/* 제품 정보 입력 */}
                <aside
                    className="h-full p-6 bg-[#f8c300] rounded-lg shadow-lg flex flex-col items-center justify-center">
                    <p className='font-bold text-lg mb-4 text-gray-800'>Recipe Details</p>

                    <ul className="flex flex-col space-y-4 w-full">
                        {/* 레시피 이름 */}
                        <li className="w-full">
                            <label className="font-semibold text-gray-800">Recipe Name:</label>
                            <input
                                type="text"
                                value={recipeName}
                                onChange={(e) => dispatch(setRecipeName(e.target.value))}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-4 focus:ring-yellow-400 transition-all"
                                placeholder="Enter recipe name"
                            />
                        </li>

                        {/* 설명 */}
                        <li className="w-full">
                            <label className="font-semibold text-gray-800">Description:</label>
                            <textarea
                                value={description}
                                onChange={(e) => dispatch(setDescription(e.target.value))}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-4 focus:ring-yellow-400 transition-all"
                                placeholder="Enter recipe description"
                                rows={4}
                            />
                        </li>

                        {/* 가격 */}
                        <li className="w-full">
                            <label className="font-semibold text-gray-800">Price:</label>
                            <input
                                type="text"
                                value={price}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^\d*$/.test(value)) {
                                        dispatch(setPrice(value));
                                    }
                                }}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-4 focus:ring-yellow-400 transition-all"
                                placeholder="Enter price"
                            />
                        </li>

                        {/* 키워드 */}
                        <li className="w-full">
                            <label className="font-semibold text-gray-800">Keywords:</label>
                            <input
                                type="text"
                                value={keywords}
                                onChange={(e) => dispatch(setKeywords(e.target.value))}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-4 focus:ring-yellow-400 transition-all"
                                readOnly={true}
                            />
                        </li>

                        {/* 이미지 업로드 */}
                        <li className="w-full">
                            <label className="font-semibold text-gray-800">Upload Image:</label>
                            {imagePreview && (
                                <div className="mt-2 flex items-end">
                                    <img
                                        src={imagePreview}
                                        alt={image?.name}
                                        className="w-24 h-20 object-cover rounded-lg shadow-lg mr-2 transition-transform transform hover:scale-105" // 이미지 크기 조정 및 효과 추가
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-sm text-gray-600">{image?.name}</p> {/* 파일 이름 추가 */}
                                        <button
                                            onClick={handleRemoveImage}
                                            className="mt-1 bg-red-600 text-white px-3 py-2 rounded-md transition duration-300 hover:bg-red-700"
                                        >
                                            Clear Image
                                        </button>
                                    </div>
                                </div>
                            )}
                            <input
                                type="file"
                                onChange={handleImageChange}
                                className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
                                accept="image/*"
                            />
                        </li>
                    </ul>
                </aside>

                {/* 하단 버튼 */}
                <div className="flex justify-end mt-4">
                    <button
                        className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 py-2 px-4 rounded-md mr-2"
                        onClick={handleClickModify}
                    >
                        Modify
                    </button>
                    <button
                        className="bg-red-600 text-white hover:bg-red-700 transition duration-300 py-2 px-4 rounded-md"
                        onClick={handleClickRemove}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
}

export default AdminProductComponent;
