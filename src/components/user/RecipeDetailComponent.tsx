import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../types/product.ts";
import LoadingComponent from "../../common/LoadingComponent.tsx";
import { getOne } from "../../api/productAPI.ts";

function RecipeDetailComponent(): ReactElement {
    const { pno } = useParams<{ pno: string }>();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const host = 'http://1.255.178.102:8089/api/products/view/'; // 이미지 확인용

    useEffect(() => {
        setLoading(true);

        getOne(pno).then((product: IProduct) => {
            setProduct(product);
            setLoading(false);
        });
    }, [pno]);

    // 로컬 스토리지에 레시피 담기
    const addToCart = (recipe: IProduct) => {
        // 로컬 스토리지에 저장된 기존 장바구니 정보를 가져옴
        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');

        // 새로운 레시피 정보를 추가
        const updatedCart = [...existingCart, recipe];

        // 로컬 스토리지에 업데이트된 장바구니 정보 저장
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        alert(`${recipe.pname}가 장바구니에 추가되었습니다.`);
    };

    return (
        <div className="w-full max-w-xl mx-auto mt-10 p-5 space-y-6">
            {loading && <LoadingComponent />}

            {!loading && product && (
                <>
                    {/* 제품 이미지 및 정보 */}
                    <div className="text-center space-y-3">
                        {product.uploadFileNames && product.uploadFileNames.length > 0 ? (
                            <img
                                src={`${host}${product.uploadFileNames[0]}`}
                                alt={product.pname}
                                className="w-full h-64 rounded-lg object-cover"
                            />
                        ) : (
                            <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
                                No Image
                            </div>
                        )}
                        <div className="text-2xl font-bold">{product.pname}</div>
                        <div className="text-xl text-gray-500">{product.price}원</div>
                    </div>

                    {/* 필요한 재료 및 조리 방법 */}
                    <div className="bg-white p-5 rounded-lg shadow-md space-y-3">
                        <div className="font-bold text-lg">필요 재료</div>
                        <div className="text-gray-700">{product.pname}</div>
                        <div className="font-bold text-lg">조리 방법</div>
                        <div className="text-gray-700 whitespace-pre-wrap">{product.pdesc}</div>
                    </div>

                    {/* 레시피 담기 버튼 */}
                    <div className="text-center">
                        <button
                            className="text-white py-3 px-6 rounded-lg font-bold text-lg"
                            style={{ backgroundColor: '#f8c300' }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d1a600')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f8c300')}
                            onClick={() => addToCart(product)}  // 버튼 클릭 시 로컬 스토리지에 저장
                        >
                            레시피 담기
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default RecipeDetailComponent;
