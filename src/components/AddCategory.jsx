import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({setCategories, categories}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length === 0){
            alert("Error, no puedes no enviar nada");
        }else if(categories.find(category => category === inputValue)){
            alert("Error, no puedes duplicar una categoria");
        }else{
            setCategories(categories => [inputValue,...categories ]);
            setInputValue("");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Buscar Categoria'
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}