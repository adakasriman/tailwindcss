import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { ProductArray } from '../../models/product.model';
import { Button } from '../button/Button';

type Props = {
    products: ProductArray[] | undefined,
    setPerPage: React.Dispatch<React.SetStateAction<number>>,
    PerPage: number
}

export const Paginations: React.FC<Props> = ({ products, setPerPage, PerPage }) => {
    // const [productsLength, setProductsLength] = useState<ProductArray[]>(products); 
    const [productsLength, setProductsLength] = useState<any>(products);
    const [pageNumber, setPageNumber] = useState<number[]>();

    const prev = "<<";
    const next = ">>"

    useEffect(() => {
        if (products?.length) {
            setProductsLength(products?.length);
        }
    }, [products])


    useEffect(() => {


        let arr = []
        if (productsLength) {
            for (let index = 1; index < Math.ceil(productsLength / 8) + 1; index++) {
                arr.push(index);
            }
            setPageNumber(arr);
        }

    }, [productsLength])


    const pageback = () => {
        setPerPage(PerPage - 1);
    }

    const pageForward = () => {
        setPerPage(PerPage + 1);
    }


    return (
        <div>
            <div className='page_btns flex items-center justify-center gap-2.5'>

                {/* <button onClick={() => setPerPage(PerPage - 1)} disabled={PerPage == 1}> {prev}Prev </button> */}
                <Button type="button" className='border-none' title='<<Prev' pageback={() => pageback()} disabled={PerPage == 1} />

                {
                    pageNumber &&
                    pageNumber?.map((page: any, index) => <div className={page == PerPage ? 'active-page' : "page_btn"} key={index} onClick={() => setPerPage(page)}>{page}</div>)
                }
                {/* <button onClick={() => setPerPage(PerPage + 1)} disabled={pageNumber?.length == PerPage}>Next{next}</button> */}
                <Button type="button" className='border-none' title='Next>>' pageForward={() => pageForward()} disabled={pageNumber?.length == PerPage} />

            </div>
        </div>
    );
}
