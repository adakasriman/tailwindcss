import React from 'react'
import { ApiDataObject, ProductArray } from '../../../models/product.model';
import { Product } from '../../products/Product';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, MutationDefinition } from '@reduxjs/toolkit/dist/query';

type Props = {
    productData: ApiDataObject,
    deletePost: MutationTrigger<MutationDefinition<number, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, "product", ProductArray, "productsApi">>,
    updateProduct: MutationTrigger<MutationDefinition<any, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, "product", ProductArray, "productsApi">>
}

export const Category: React.FC<Props> = ({ productData, deletePost, updateProduct }) => {

    return (

        <div>
            {/* <div className="filters">
                    <Filters getFilterData={(filtersData: any) => getFilterData(filtersData)} />
                </div> */}
            <div className='products bg_color-f2f2f2'>
                {productData &&
                    productData?.products.map(product => {
                        return <div key={product.id} className='product'>
                            <Product singleProduct={product} apiData={productData} deletePost={deletePost} updateProduct={updateProduct} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}
