import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
import "./pageProduct.css";
import ShowCard from "../ShowCard/showCard";
export default function PageProduct() {
  const [productData, setProductData] = useState([]); //the response data from api
  const [showCard, setShowCard] = useState(false); //to show the card
  const [dataProduct, setDataProduct] = useState('hassan'); //to get the data from the card we want to show

  useEffect(() => {
    axios
      .get("https://api.manoapp.com/api/v1/users/products/whats_new", {
        headers: {
          Authorization: "f44a4aabfc5992514d262d7f517327e7",
          UserAddressID: 60877,
          StoreID: 4,
        },
      })
      .then((response) => {
        let dataProduct = response.data.data.items;
        setProductData(dataProduct);
        console.log(dataProduct[0].images[0].thumbnail);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  ///function allow you to change the value of the showCard and of the dataProduct
  const handelClick = (element) => {
    
    console.log(element.title);
    try{

      setDataProduct(element.title);
    }catch(error){
     console.log(error)
    }
    console.log(dataProduct);
    setShowCard(true);
  };

  return (
    <div className="product-cards">
      {productData.map((element, index) => (
        <Card
          image={element.images[0].thumbnail}
          name={element.title}
          price={element.price}
          key={element.id}
         onClick={ () => handelClick(element)}
        ></Card>
      ))}

      {showCard ? (
        <ShowCard
          name={dataProduct.name}
          price={dataProduct.price}
          quanity={dataProduct.quality}
          categories={dataProduct.categories}
          image={dataProduct.images[0].thumbnail}
        />
      ) : null}
    </div>
  );
}
