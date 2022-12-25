import React from 'react'
import { ProductArray } from '../../models/product.model'
import { ProductView } from './ProductView'

type Props = {
    productData: ProductArray | undefined
}

export const ProductViewList: React.FC<Props> = ({ productData }) => {
    return (
        <div className='product_view w-full'>
            <ProductView productData={productData} />
        </div>
    )
}
