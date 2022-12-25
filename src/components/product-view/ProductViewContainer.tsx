import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ApiDataObject, ProductArray } from '../../models/product.model';
import { useProductQuery } from '../../services/productsApi';
import { ProductViewList } from './ProductViewList';

export const ProductViewContainer = () => {
    const [productData, setProductData] = useState<ProductArray>()
    const { id } = useParams<string>();
    const { data, isLoading } = useProductQuery(id);

    useEffect(() => {
        if (data) {
            setProductData(data);
        }
    }, [data]);

    return (
        <div>
            {isLoading ? (
                <div className='loading flex justify-center items-center mt-52'>Loading...</div>
            ) : productData &&
            < ProductViewList productData={productData} />
            }
        </div>
    )
}
