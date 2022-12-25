import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiDataObject } from '../../../models/product.model';
import { useCategoryQuery, useDeleteMutation, useEditMutation } from '../../../services/productsApi';
import { Category } from './Category';

export const CategoriesProductsContainer:React.FC = () => {
    const [productData, setProductData] = useState<ApiDataObject>();
    const { category } = useParams<string>();

    //--> fetching data, updateing and delete 
    const { data, isLoading } = useCategoryQuery(category);
    const [deletePost, response] = useDeleteMutation();
    const [updateProduct, updateResponse] = useEditMutation();
    useEffect(() => {
        if (data) {
            setProductData(data);
        }

    }, [data]);


    //--->Delete Product 

    useEffect(() => {
        if (productData) {
            let apiData = JSON.parse(JSON.stringify(productData));
            if (response?.data?.isDeleted == true) {
                const index = apiData.products.findIndex((item: any) => item.id == response?.data?.id);
                if (index > -1) { // only splice array when item is found
                    apiData.products.splice(index, 1); // 2nd parameter means remove one item only
                }
                setProductData(apiData);
            }
        }

    }, [response?.data])

    //---> close: Delete Product

    //--->Update Product 

    useEffect(() => {
        if (productData) {
            let apiData = JSON.parse(JSON.stringify(productData));
            if (updateResponse?.data?.id) {
                const index = apiData.products.findIndex((item: any) => item.id == updateResponse?.data?.id);
                if (index > -1) { // only splice array when item is found
                    apiData.products.splice(index, 1, updateResponse?.data); // 2nd parameter means remove one item only
                }
                setProductData(apiData);

            }
        }

    }, [updateResponse?.data])

    //---> close: Update Product

    return (
        <div>
            {isLoading ? (
                <div className='loading'>Loading...</div>
            ) : productData &&
            <Category productData={productData} deletePost={deletePost} updateProduct={updateProduct}/>
            }
        </div>
    )
}
