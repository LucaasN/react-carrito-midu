import { useState, useEffect } from "react";

export const useData = () => {
  
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
  
  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const { products } = data;
    setProducts(products);
  };

  const getAllCategories = async () => {
    const response = await fetch("https://dummyjson.com/products/category-list");
    const data = await response.json();
    const allCategories = ['all', ...data];
    setCategories(allCategories);
  };

  const getProductsByCategory = async (event) => {
    const category = event.target.value;
    //console.log(category);
    
    if(category === 'all') {
       getProducts();
       return;
    }

    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await response.json();
    const { products } = data;
    setProducts(products);
}

  useEffect(() => {
    getProducts();
    //  getAllCategories();
  }, []);

  return { products };
};
