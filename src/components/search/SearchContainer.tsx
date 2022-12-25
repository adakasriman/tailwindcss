import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { ApiDataObject } from '../../models/product.model';
import { useDeleteMutation, useEditMutation, useSearchQuery } from '../../services/productsApi';
import { Search } from './Search';



export const SearchContainer: React.FC = () => {
    const [productData, setProductData] = useState<ApiDataObject>();
    const [searchItem, setSearchitem] = useState<string | number | any>()
    const [searchParams, SetSearchParams] = useSearchParams();


    //--> fetching data, updateing and delete 
    const { data, isLoading } = useSearchQuery(searchItem);
    const [deletePost, response] = useDeleteMutation();
    const [updateProduct, updateResponse] = useEditMutation();

    let value = sessionStorage.getItem("searchData");
    useEffect(() => {

        setSearchitem(value);
        if (value) {
            SetSearchParams({ q: value ? value : searchItem });
        }
    }, [searchItem, value]);


    useEffect(() => {
        if (data) {
            setProductData(data);
            debugger
        }
    }, [data])

    //--->Delete Product 

    useEffect(() => {

        if (productData) {
            debugger
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
            debugger
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

    return (
        <div>
            {isLoading ? (
                <div className='loading flex justify-center items-center mt-52'>Loading...</div>
            ) : productData &&
            <Search productData={productData} deletePost={deletePost} updateProduct={updateProduct} />
            }
        </div>
    )
}
