import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Button } from '../button/Button';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, MutationDefinition } from '@reduxjs/toolkit/dist/query';


type Props = {
    addProduct: MutationTrigger<MutationDefinition<any, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, "product", any, "productsApi">>
}
export const AddProduct: React.FC<Props> = ({ addProduct }) => {
    const { register, handleSubmit } = useForm(); // form hoo

    const onSubmit = async (formData: FieldValues) => {
        await addProduct(formData);
    };

    return (
        <div className='add_products'>
            <h3 className='text_center'>Add Product</h3>

            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                <div className='fields'>
                    <div className='item'>
                        <label>Title</label>
                        <input type="text"{...register("title")} name="title" required />
                    </div>
                    <div className='item'>
                        <label>Price</label>
                        <input type="number" {...register("price")} name="price" required />
                    </div>
                    <div className='item'>
                        <label>brand</label>
                        <input type="text" {...register("brand")} name="brand" required />
                    </div>
                    <div className='item'>
                        <label>Stock</label>
                        <input type="number" {...register("stock")} name="stock" required />
                    </div>
                    <div className='item'>
                        <label>Rating</label>
                        <input type="number" {...register("rating")} name="rating" required />
                    </div>
                    <div className='item'>
                        <label>Category</label>
                        <input type="text" {...register("category")} name="category" required />
                    </div>
                    {/* <div className='item'>
                    <label>Thumbnail</label>
                    <input type="text" {...register("thumbnail")} />
                </div> */}
                    <div className='item'>
                        <label>Description</label>
                        <textarea {...register("description")} name="description" required />
                    </div>
                </div>
                <div className='add_button'>
                    {/* <button type="submit">Add product</button> */}
                    <Button type="submit" title='Add product' />
                </div>
            </form>
        </div>
    )
}

