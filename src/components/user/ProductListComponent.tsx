import React, { ReactElement, useEffect, useState, useRef } from 'react';
import { IProduct, IProducts } from "../../types/product.ts";
import { getList } from "../../api/productAPI.ts";
import LoadingComponent from "../../common/LoadingComponent.tsx";
import { useNavigate } from "react-router-dom";

const initialState: IProducts = {
    dtoList: []
}

function ProductListComponent(): ReactElement {
    const [products, setProducts] = useState<IProducts>({...initialState});
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const under3000Ref = useRef<HTMLDivElement>(null);
    const over3000Ref = useRef<HTMLDivElement>(null);
    const over5000Ref = useRef<HTMLDivElement>(null);
    const over10000Ref = useRef<HTMLDivElement>(null);

    const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
        const host = 'http://1.255.178.102:8089/api/products/view/';
        return (
            <div
                className="min-w-[150px] max-w-[150px] bg-white shadow-lg rounded-lg p-4 min-h-[200px]"
                onClick={() => productClick(product.pno)}
            >
                {product.uploadFileNames && product.uploadFileNames.length > 0 ? (
                    <img
                        src={`${host}${product.uploadFileNames[0]}`}
                        alt={product.pname}
                        className="w-full h-[150px] object-cover rounded-md"
                    />
                ) : (
                    <div className="w-full h-[150px] bg-gray-200 flex items-center justify-center rounded-md">
                        No image available
                    </div>
                )}
                <div className="mt-2 text-center">
                    <h3 className="text-gray-800 text-sm font-semibold truncate">{product.pname}</h3>
                    <p className="text-gray-500 text-sm">{product.price}</p>
                </div>
            </div>
        );
    };

    useEffect(() => {
        setLoading(true);
        getList().then(item => {
            setProducts(item);
            setLoading(false);
        });
    }, []);

    const under3000: IProduct[] = [];
    const over3000: IProduct[] = [];
    const over5000: IProduct[] = [];
    const over10000: IProduct[] = [];

    products.dtoList.forEach((product) => {
        if (product.price < 3000) {
            under3000.push(product);
        } else if (product.price >= 3000 && product.price < 5000) {
            over3000.push(product);
        } else if (product.price >= 5000 && product.price < 10000) {
            over5000.push(product);
        } else if (product.price >= 10000) {
            over10000.push(product);
        }
    });

    const productClick = (pno: number) => {
        navigate(`/recipe/${pno}`);
    };

    // 좌우 버튼 클릭 시 스크롤 이동 함수
    const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className="p-4">
            {loading && <LoadingComponent></LoadingComponent>}

            {!loading && <>
                <div className="relative">
                    <h2 className="text-lg font-bold mb-4">3천원 이하</h2>
                    <button
                        onClick={() => scrollLeft(under3000Ref)}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-12 h-12 flex items-center justify-center"
                    >
                        <img src="/icon-park-outline--left-c.svg" alt="left-arrow" className="w-full h-full" />
                    </button>
                    <div className="flex space-x-4 overflow-x-auto pb-4" ref={under3000Ref}>
                        {under3000.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                    <button
                        onClick={() => scrollRight(under3000Ref)}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-12 h-12 flex items-center justify-center"
                    >
                        <img src="/icon-park-outline--right-c.svg" alt="right-arrow" className="w-full h-full" />
                    </button>
                </div>

                <div className="relative">
                    <h2 className="text-lg font-bold mb-4">5천원 이하</h2>
                    <button
                        onClick={() => scrollLeft(over3000Ref)}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-12 h-12 flex items-center justify-center"
                    >
                        <img src="/icon-park-outline--left-c.svg" alt="left-arrow" className="w-full h-full" />
                    </button>
                    <div className="flex space-x-4 overflow-x-auto pb-4" ref={over3000Ref}>
                        {over3000.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                    <button
                        onClick={() => scrollRight(over3000Ref)}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-12 h-12 flex items-center justify-center"
                    >
                        <img src="/icon-park-outline--right-c.svg" alt="right-arrow" className="w-full h-full" />
                    </button>
                </div>

                <div className="relative">
                    <h2 className="text-lg font-bold mb-4">1만원 이하</h2>
                    <button
                        onClick={() => scrollLeft(over5000Ref)}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-12 h-12 flex items-center justify-center"
                    >
                        <img src="/icon-park-outline--left-c.svg" alt="left-arrow" className="w-full h-full" />
                    </button>
                    <div className="flex space-x-4 overflow-x-auto pb-4" ref={over5000Ref}>
                        {over5000.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                    <button
                        onClick={() => scrollRight(over5000Ref)}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-12 h-12 flex items-center justify-center"
                    >
                        <img src="/icon-park-outline--right-c.svg" alt="right-arrow" className="w-full h-full" />
                    </button>
                </div>

                <div className="relative">
                    <h2 className="text-lg font-bold mb-4">1만원 이상</h2>
                    <button
                        onClick={() => scrollLeft(over10000Ref)}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-12 h-12 flex items-center justify-center"
                    >
                        <img src="/icon-park-outline--left-c.svg" alt="left-arrow" className="w-full h-full" />
                    </button>
                    <div className="flex space-x-4 overflow-x-auto pb-4" ref={over10000Ref}>
                        {over10000.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                    <button
                        onClick={() => scrollRight(over10000Ref)}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-12 h-12 flex items-center justify-center"
                    >
                        <img src="/icon-park-outline--right-c.svg" alt="right-arrow" className="w-full h-full" />
                    </button>
                </div>
            </>}
        </div>
    );
}

export default ProductListComponent;
