import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from '../../components/Product/Product';

export default function Converse() {
    const [dataCategory, setDataCategory] = useState([])
    const getCategoryApi = async () => {
      try {
        const result = await axios({
          url: "https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=VANS_CONVERSE",
          method: "GET",
        });
        // console.log(result.data.content);
        setDataCategory(result.data.content);
      } catch (err) {
        console.log(err)
      }
    };
    useEffect(() => {
      getCategoryApi();
    }, []);
    return <><Product arrProduct = {dataCategory}/></>;
}
