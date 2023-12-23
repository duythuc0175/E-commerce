import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [userInfo, setUserInfo] = useState({
    _id: "",
    title: "",
    isNew: false,
    oldPrice: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3500/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo), // Corrected variable name
      });

      if (response.ok) {
        console.log('New product added successfully');
        // Clear the form fields after adding the product
        setUserInfo({
          _id: "",
          title: "",
          isNew: false,
          oldPrice: "",
          price: "",
          description: "",
          category: "",
          image: "",
          rating: 0
        });
      } else {
        console.error('Failed to add a new product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
          Product ID:
          <input
            type="text"
            name="_id"
            value={userInfo._id}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={userInfo.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Is New:
          <input
            type="checkbox"
            name="isNew"
            checked={userInfo.isNew}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Old Price:
          <input
            type="text"
            name="oldPrice"
            value={userInfo.oldPrice}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={userInfo.price}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={userInfo.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={userInfo.category}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={userInfo.image}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            value={userInfo.rating}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
      <Link to="/">Go Shopping</Link>
    </div>
  );
};

export default AddProduct;
