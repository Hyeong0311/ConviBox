import React from 'react';

const ProductCard: React.FC<{ image: string; name: string; price: string }> = ({ image, name, price }) => {
    return (
        <div className="min-w-[150px] max-w-[150px] bg-white shadow-lg rounded-lg p-4 min-h-[200px]">
            <img src={image} alt={name} className="w-full h-auto rounded-md" />
            <div className="mt-2 text-center">
                <h3 className="text-gray-800 text-sm font-semibold truncate">{name}</h3>
                <p className="text-gray-500 text-sm">{price}</p>
            </div>
        </div>
    );
};

const ProductListComponent: React.FC = () => {
    const products = [
        { image: '/test1.png', name: '제주레몬망고스무디', price: '4,400원' },
        { image: '/test2.png', name: '제주당근오렌지티', price: '4,400원' },
        { image: '/test3.png', name: '우도땅콩바나나', price: '4,400원' },
        { image: '/test1.png', name: '제주레몬망고스무디', price: '4,400원' },
        { image: '/test2.png', name: '제주당근오렌지티', price: '4,400원' },
        { image: '/test3.png', name: '우도땅콩바나나', price: '4,400원' },
        { image: '/test1.png', name: '제주레몬망고스무디', price: '4,400원' },
        { image: '/test2.png', name: '제주당근오렌지티', price: '4,400원' },
        { image: '/test3.png', name: '우도땅콩바나나', price: '4,400원' },
        { image: '/test1.png', name: '제주레몬망고스무디', price: '4,400원' },
        { image: '/test2.png', name: '제주당근오렌지티', price: '4,400원' },
        { image: '/test3.png', name: '우도땅콩바나나', price: '4,400원' },
        { image: '/test1.png', name: '제주레몬망고스무디', price: '4,400원' },
        { image: '/test2.png', name: '제주당근오렌지티', price: '4,400원' },
        // 더 많은 제품들 추가 가능
    ];

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">3천원 이하</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
                {products.map((product, index) => (
                    <ProductCard key={index} image={product.image} name={product.name} price={product.price} />
                ))}
            </div>

            <h2 className="text-lg font-bold mb-4">5천원 이하</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
                {products.map((product, index) => (
                    <ProductCard key={index} image={product.image} name={product.name} price={product.price} />
                ))}
            </div>

            <h2 className="text-lg font-bold mb-4">1만원 이하</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
                {products.map((product, index) => (
                    <ProductCard key={index} image={product.image} name={product.name} price={product.price} />
                ))}
            </div>

            <h2 className="text-lg font-bold mb-4">1만원 이상</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
                {products.map((product, index) => (
                    <ProductCard key={index} image={product.image} name={product.name} price={product.price} />
                ))}
            </div>
        </div>
    );
};

export default ProductListComponent;