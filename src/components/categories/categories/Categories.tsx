import React from 'react'

import { useNavigate } from 'react-router-dom';

type Props = {
    categoryTypes: string[]
}

export const Categories: React.FC<Props> = ({ categoryTypes }) => {

    const navigate = useNavigate();

    const viewProduct = (product: string) => {
        navigate(`/products/category/${product}`);
    }
    return (
        <div className='categories'>
            {
                categoryTypes?.map((product, index) => {
                    return <div key={index} className='item'>
                        <a onClick={() => viewProduct(product)}>
                            <div>{product}</div>
                        </a>
                    </div>
                })
            }
        </div>
    )
}
