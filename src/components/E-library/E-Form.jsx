import React, { useState} from 'react';
import { Button, TextField } from '@mui/material';

import axios from 'axios'; 
import { Link } from 'react-router-dom';



const Eform = () => {

  const initialState = {
    title: '',
    authorName: '',
    category: '',
    image: null,
    file: null,
  }
  const [formData, setFormData] = useState(initialState);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create a FormData object to send the file and other data
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('authorName', formData.authorName);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('image', formData.image);
    formDataToSend.append('file', formData.file);
  
    try {
      // Make a POST request to your Node.js backend API
      const response = await axios.post('http://localhost:3001/api/submit', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('Response from backend:', response.data);

      setFormData(initialState);
      // You should probably also update the books list here after submitting the form.
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
 

 
  return (
    <>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <TextField
        label="Title"
        name="title"
        variant="outlined"
        fullWidth
        value={formData.title}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        label="Author Name"
        name="authorName"
        variant="outlined"
        fullWidth
        value={formData.authorName}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        label="Category"
        name="category"
        variant="outlined"
        fullWidth
        value={formData.category}
        onChange={handleInputChange}
        margin="normal"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mt-4"
      />
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileUpload}
        className="mt-4"
      />
      <Link to={`/book`} >
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className="mt-4"
      >
        Submit
      </Button>
      </Link>
    
    </form>
   
    </>
  );
};

export default Eform;
