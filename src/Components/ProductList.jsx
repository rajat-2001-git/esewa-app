import React, { useState } from 'react';
import products from '../dummy';
import Product from './Product';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'

const ProductList = () => {
  const [productsData, setProductsData] = useState(products);

  const handleBuy = async (product) => {
    const uniqueId = uuidv4();
    const url = import.meta.env.VITE_ORDER_URL
    const data = {
      amount: product.price,
      products: [{
        product: product.name,
        amount: product.price,
        uid: uniqueId,
        quantity: 1
      }]
    };
    try {
      const response = await axios.post(url, data);

      if (response) {
        const formData = response.data.formData;
        esewaCall(formData);
      }
    } catch (error) {
      console.log("Error posting data:", error);
    }
  }

  const esewaCall = async (formData) => {
    var path = import.meta.env.VITE_ESEWA_URL;

    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (var key in formData) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute('type', 'hidden');
      hiddenField.setAttribute('name', key);
      hiddenField.setAttribute('id',key);
      hiddenField.setAttribute('value', formData[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  }

  return (
    <div className="flex flex-col items-center gap-5">
      {productsData.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          imageUrl={product.imageURL}
          price={product.price}
          handleBuy={() => handleBuy(product)}
        />
      ))}
    </div>
  )
}

export default ProductList