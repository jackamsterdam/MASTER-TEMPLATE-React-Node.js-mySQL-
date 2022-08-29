// import axios from 'axios'
// import ProductModel from '../Models/ProductModel'
// import config from '../Utils/Config'
// import store from '../Redux/Store'
// import { addProductAction, deleteProductAction, fetchProductsAction, updateProductAction } from '../Redux/ProductsState'

class ProductsService {

    // async getAllProducts(): Promise<ProductModel[]> {
    //     if (store.getState().productsState.products.length === 0) {
    //         const response = await axios.get<ProductModel[]>(config.productsUrl)
    //         const products = response.data

    //         store.dispatch(fetchProductsAction(products))
    //     }

    //     return store.getState().productsState.products
    // }

    // async getOneProduct(id: number): Promise<ProductModel> {
    //     // either get product from store or get product from axios 
    //     let product = store.getState().productsState.products.find(p => p.id === id)
    //     if (!product) {
    //         const response = await axios.get<ProductModel>(config.productsUrl + id)
    //         product = response.data
    //     }

    //     return product
    // }

    // async addNewProduct(product: ProductModel): Promise<ProductModel> {
    //     // Convert our product to FormData:
    //     const formData = new FormData()

    //     formData.append("name", product.name)
    //     formData.append("price", product.price.toString())
    //     formData.append("stock", product.stock.toString())
    //     formData.append("image", product.image.item(0))

    //     const response = await axios.post<ProductModel>(config.productsUrl, formData)
    //     const addedProduct = response.data
    //     store.dispatch(addProductAction(addedProduct))
    //     return addedProduct

    // }

    // async updateProduct(product: ProductModel): Promise<ProductModel> {
    //     const formData = new FormData()

    //     formData.append('name', product.name)
    //     formData.append('price', product.price.toString())
    //     formData.append('stock', product.stock.toString())
    //     formData.append('image', product.image.item(0))

    //     const response = await axios.put<ProductModel>(config.productsUrl + product.id, formData)
    //     const updatedProduct = response.data
    //     store.dispatch(updateProductAction(updatedProduct))
    //     return updatedProduct

    // }

    // async deleteOneProduct(id: number): Promise<void> {

    //     await axios.delete(config.productsUrl + id)
    //     store.dispatch(deleteProductAction(id))
    // }

}


const productsService = new ProductsService()

export default productsService
