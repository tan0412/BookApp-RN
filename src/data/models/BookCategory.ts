export interface BookCategory  {
    id?: number;
    name: string,
    img: any,
    price: string,
    category?:string,  
}

export interface BookState {
            title: string,
            subtitle: string,
            isbn13: string,
            price: string,
            image: string,
            url: string
}

export interface BookArrayState {
    bookData: BookState[]
}