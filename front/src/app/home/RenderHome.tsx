"use client"

import { IProduct } from "@/interfaces/IProduct";
import style from "./Home.module.css";
import Card from "@/components/card/Card";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";


export default function RenderHome ({ fetchData } : { fetchData: IProduct[] }) {
    const [selected, setSelected] = useState<string>("");
    const [search, setSearch] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearch("");
        setSelected(e.target.value);
    };
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected("");
        setSearch(e.target.value);
        };
    const filteredProduct = fetchData.filter((product) => {
        const matchesCategory =
          selected.length === 0 || product.categoryId === parseInt(selected);
        const matchesSearch =
          search.length === 0 || product.name.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
      });
    
    return (
        <div>
            <div className={style.containerTitle}>
            <h1 className={style.titleContent}>The Best Apple Products</h1>
            
            </div>
            
            <div className={style.selectContainer}>
                <label htmlFor="input" className={style.label}><FaSearch size={20} /></label>
                <input type="text" className={style.inputContent} placeholder="Search..." onChange={handleSearch} />
                <label htmlFor="select" className={style.label}><FaFilter size={20} /></label>
                <select className={style.selectContent}
                onChange={handleChange}
                value={selected}>
                    <option value="">Show all categories</option>
                    <option value="1">Smartphones</option>
                    <option value="2">Laptops</option>
                    <option value="3">Tablets</option>
                    <option value="4">Headphones</option>
                    <option value="5">Accessories</option>
                    <option value="6">Computers</option>
                </select>
            </div>
            <div className={style.cardsContainer}>
            {filteredProduct.length > 0 ? (
          filteredProduct.map(({ id, name, price, description, image, stock }) => (
            <Card
              key={id}
              name={name}
              price={price}
              description={description}
              image={image}
              stock={stock}
              id={id}
            />
          ))
        ) : (
        <div className={style.noProductsContainer}>
        <p className={style.noProducts}>No products found</p>
        </div>
        )}
        </div>
        </div>
    )
}