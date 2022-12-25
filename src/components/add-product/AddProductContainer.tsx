import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAddProductMutation } from '../../services/productsApi';
import { AddProduct } from './AddProduct';

export const AddProductContainer: React.FC = () => {

    const [addProduct, response] = useAddProductMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (response?.data?.id) {
            sessionStorage.setItem("newProduct", JSON.stringify(response.data));
            navigate(`/products`);
        }
    }, [response?.data?.id]);

    return (
        <div>
            <AddProduct addProduct={addProduct} />
        </div>
    )
}
