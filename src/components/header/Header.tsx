import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../button/Button'

export const Header: React.FC = () => {
    const [searchData, setSearchData] = useState<string>("")

    const navigate = useNavigate();

    const searchEvent = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchData) {
            navigate('/products/search');
            sessionStorage.setItem("searchData", searchData);
        }

        if (searchData == "") {
            navigate('/products');
        }
    }

    const backToProducts = () => {
        navigate(`/products`);
    }

    const navigateAddProduct = () => {
        navigate(`/products/add`)
    }



    return (
        <div>
            <div className='dupicate-head flex items-center justify-center hidden sm:block gap-3 mb-2'>
                <i className="fa-regular fa-shop font-semibold text-[#fff]  cursor-pointer" onClick={() => backToProducts()}></i>
                <a className='project_title font-semibold text-[#fff] cursor-pointer' onClick={() => backToProducts()}>MY SHOPE</a>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center title' style={{ gap: "10px" }}>
                    <i className="fa-regular fa-shop font-semibold text-[#fff]  cursor-pointer" onClick={() => backToProducts()}></i>
                    <a className='project_title font-semibold text-[#fff]  cursor-pointer' onClick={() => backToProducts()}>MY SHOPE</a>
                </div>
                <form action="" onSubmit={searchEvent}>
                    <div className='search_btn'>
                        <input type="text w-4/12 border-none" value={searchData} onChange={(e) => setSearchData(e.target.value)} name="" id="" placeholder='search product' />
                        <span>
                            {/* <button type='submit'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button> */}
                            <Button type="submit" title='' className='border-none' iTagClassName='fa-solid fa-magnifying-glass relative text-[#2a978b] right-4' />
                        </span>
                    </div>
                </form>

                <div className='flex items-center sm:flex-col'>
                    <div className='flex items-center gap-2'> 
                        <button className='Catgories_btn border-none text-[#fff] bg-[#2a978b] text-base py-0.5 px-2.5' onClick={() => navigate(`/products/categories`)}>Catgories</button>
                        {/* <button className='flex items-center cart_button'>
                        <div><i className="fa-solid fa-cart-shopping"></i></div>
                        <div className='cartItems'></div>
                    </button> */}
                        <Button type="button" title='Add' className='addProduct py-0.5 px-2.5 border-none text-[#fff] bg-[#2a978b]' iTagClassName="fa-brands fa-product-hunt" navigateAddProduct={() => navigateAddProduct()} />
                        {/* <button className='addProduct' onClick={() => navigate(`/products/add`)}>Add <i className="fa-brands fa-product-hunt"></i></button> */}
                    </div>

                </div>
            </div>
        </div>
    )
}
