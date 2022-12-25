import React, { useEffect, useState } from 'react'
import { ApiDataObject, ProductArray } from '../../models/product.model';
import { useDeleteMutation, useEditMutation } from '../../services/productsApi';
import { useNavigate } from 'react-router-dom';

import { Popup } from '../popup-component/Popup';
import { Button } from '../button/Button';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, MutationDefinition } from '@reduxjs/toolkit/dist/query';


interface Props {
    singleProduct: ProductArray,
    apiData: ApiDataObject,
    deletePost: MutationTrigger<MutationDefinition<number, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, "product", ProductArray, "productsApi">>,
    updateProduct: MutationTrigger<MutationDefinition<any, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, "product", ProductArray, "productsApi">>

}

// close:  edit type

export const Product: React.FC<Props> = ({ singleProduct, apiData, deletePost, updateProduct }) => {
    const navigate = useNavigate();

    // edit 
    const [updateItem, setUpdateItem] = useState<string>();
    const [product, setProduct] = useState<any>();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function editProduct(id: number, product: ProductArray) {
        let editData = {
            id: product?.id,
            title: product?.title
        }
        setProduct(editData);
        setUpdateItem(product?.title);
        setIsOpen(!isOpen);
    }
    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        let editProduct = {
            id: product?.id,
            title: updateItem
        };
        updateProduct(editProduct);
        setIsOpen(!isOpen);
        // await addProduct(product);
    };


    const viewProduct = (id: number) => {
        navigate(`/products/product/${id}`);
    }

    return (
        <div>
            <div onClick={() => viewProduct(singleProduct.id)}>
                <img src={singleProduct.thumbnail} alt="product Img" />
                <div className='p-2 pt-0'>
                    <div className='product_title text-lg font-medium'>
                        {singleProduct.title}
                    </div>

                    {/* margin: 5px 0;
      background: #26a541;
      width: 25%;
      padding: 1px 5px;
      border-radius: 7px;
      color: #fff; */}
                    <div className='flex justify-between items-center'>
                        <div className='rating bg-[#26a541] w-3/12 text-[#fff] my-1'>{singleProduct.rating} <span>
                            <i className="fa-sharp fa-solid fa-star text-[#fff]"></i>
                        </span></div>
                        <div className='stock_count font-medium text-lg'>stocks <span className='relative bg-[#ff6666] py-0.5 px-1 text-sm text-[#fff]'> {singleProduct.stock}</span></div>
                    </div>
                    <div className='flex items-center gap-4 price font-medium text-lg'>
                        <div>
                            <i className="fa-solid fa-indian-rupee-sign text-sm"></i>{singleProduct.price}
                        </div>
                        <span className='line-through text-sm font-light'>{singleProduct.price + 100}</span>
                        <div className='discountPercentage text-[#26a541] text-sm'>{singleProduct.discountPercentage}% off</div>
                    </div>
                </div>
            </div >
            <div className='flex justify-between items-center gap-4 mt_10'>

                {/* <Button type="button" title='Delete' className='delete' deleteproductHanculer={() => deleteproductHanculer(singleProduct?.id)} /> */}

                <div className="delete cursor-pointer w-6/12 bg-[#ff3333] text-center text-[#fff] py-0.5" onClick={() => deletePost(singleProduct?.id)}> Delete</div>
                <div className="edit cursor-pointer w-6/12 bg-[#4d4dff] text-center text-[#fff] py-0.5" onClick={() => editProduct(singleProduct?.id, singleProduct)}>Edit</div>

                {/* <Button type="button" title='Edit' className='edit' editProduct={() => editProduct(singleProduct?.id, singleProduct)} /> */}

            </div>
            {
                isOpen && <Popup content={
                    <div className='w-full'>
                        <h3 className='text-center text-[#2a978b] mb-2'>Update product</h3>
                        <hr />
                        <div className='cartView'>
                            <form onSubmit={onSubmit} className="w-full">
                                <div className='item flex items-center text-left w-full justify-center gap-5 mt-2.5 mb-2'>
                                    <label>Title</label>
                                    <input type="text" className='py-2.5 px-5' value={updateItem} onChange={(e) => setUpdateItem((e.target.value))} name="title" />
                                </div>

                                {/* <button type='submit'>Update</button> */}
                                <Button type="submit" title='Update' className='py-2.5 px-5 bg-[#4d4dff] text-[#f2f2f2] float-right' />
                            </form>
                        </div>
                    </div>} handleClose={editProduct} />
            }
        </div>
    )
}



