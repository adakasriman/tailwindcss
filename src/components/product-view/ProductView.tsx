import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { useNavigate } from 'react-router-dom'
import { Button } from '../button/Button';
import { ProductArray } from '../../models/product.model';

type Props = {
    productData: ProductArray | undefined
}
export const ProductView: React.FC<Props> = ({ productData }) => {

    const navigate = useNavigate();

    const backToProducts = () => {
        navigate(`/products`);
    }

    return (
        <div>

            {
                productData &&
                <div className='flex bg-[3f2f2f2]'>
                    <div>
                        <SimpleImageSlider
                            width={500}
                            height={529}
                            images={productData?.images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                    <div className='p-4 product_content'>
                        <div className='p-2 pt-0'>
                            <div className='product_title text-lg font-medium'>
                                {productData?.title}
                            </div>
                            <div className='flex justify-between items-center pt_20 '>
                                <div className='rating my-1.5 bg-[#26a541] py-px px-2.5 text-[#fff]'>{productData?.rating} <span>
                                    <i className="fa-sharp fa-solid fa-star text-[#fff] mt-1"></i>
                                </span></div>
                                <div className='stock_count text-lg font-medium'>stocks <span className='text-sm bg-[#ff6666]  text-[#fff] py-0.5 px-1'> {productData?.stock}</span></div>
                            </div>
                            <div className='mt_10'>
                                <div className='mt_10 fw_6'>Special Price</div>
                                <div className='flex items-center price text-lg font-medium gap-4 price mt-2.5'>

                                    <div>
                                        <i className="fa-solid fa-indian-rupee-sign"></i>{productData?.price}
                                    </div>
                                    <span className='line-through text-sm'>{productData?.price + 100}</span>
                                    <div className='discountPercentage text-[#26a541] text-sm'>{productData?.discountPercentage}% off</div>
                                </div>
                            </div>

                            <div>
                                <div className='mt-2.5 font-medium'>description</div>
                                <div className='mt-2.5'>{productData?.description}</div>
                            </div>

                        </div>
                        {/* <div className='cartAndAdd_btn'>
                                <button  disabled>Add To Cart</button>
                                <button disabled>Buy Now</button>
                            </div> */}
                        <div className='cartAndAdd_btn mt-20 w-full gap-14 flex items-center justify-center'>
                            {/* <button onClick={() => backToProducts()}>Back to Products</button> */}
                            <Button type='button' className='p-3.5' title="Back to Products" backToProducts={() => backToProducts()} />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
