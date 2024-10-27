import React, { useContext } from 'react'
import {ShopContext} from "../Context/ShopContext.jsx"
import {useParams} from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum.jsx';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';
function Product() {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();

    const product = all_product.find((e) => e.id === Number(productId))

    return (
        <div>
            <Breadcrum product={product}></Breadcrum>
            <ProductDisplay product={product}></ProductDisplay>
        </div>
    )
}

export default Product
