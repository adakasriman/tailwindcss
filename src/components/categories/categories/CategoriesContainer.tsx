import React, { useEffect, useState } from 'react'
import { useCategoriesQuery } from '../../../services/productsApi';
import { CategoriesList } from './CategoriesList';

export const CategoriesContainer = () => {
    const [categoryTypes, setCategoryTypes] = useState<string[]>();

    const { data, isLoading } = useCategoriesQuery();


    useEffect(() => {
        if (data) {

            console.log(data);
            debugger
            setCategoryTypes(data);
        }
    }, [data])

    return (
        <div>
            {isLoading ? (
                <div className='loading'>Loading...</div>
            ) : categoryTypes &&
            <CategoriesList categoryTypes={categoryTypes} />
            }
        </div>
    )
}
