

export interface ProductArray {
    isDeleted: any
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}




export interface ApiDataObject {
    "products": ProductArray[],
    "total": number,
    "skip": number,
    "limit": number
}
