import React from 'react'

type Props = {
    title: string,
    type?: 'submit' | 'reset' | 'button' | undefined,
    className?: string;
    iTagClassName?: string,
    navigateAddProduct?: React.MouseEventHandler<HTMLButtonElement>,
    filterToggle?: React.MouseEventHandler<HTMLButtonElement>,
    backToProducts?: React.MouseEventHandler<HTMLButtonElement>,
    pageback?: React.MouseEventHandler<HTMLButtonElement>,
    pageForward?: React.MouseEventHandler<HTMLButtonElement>,
    deleteproductHanculer?: React.MouseEventHandler<HTMLButtonElement>,
    editProduct?: React.MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean,

}
export const Button: React.FC<Props> = ({ title, type, className, iTagClassName, navigateAddProduct, filterToggle, backToProducts, pageback, pageForward, deleteproductHanculer, editProduct, disabled }) => {
    const clickEvent = navigateAddProduct || filterToggle || backToProducts || pageback || pageForward || deleteproductHanculer || editProduct;
    return (
        <button type={type} className={className} onClick={clickEvent} disabled={disabled}>
            {title} {
                iTagClassName && <i className={iTagClassName}></i>
            }
        </button>
    )
}
