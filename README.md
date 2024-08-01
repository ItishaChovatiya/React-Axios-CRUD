# React Axios CRUD

## Overview

`React Axios CRUD` is a React application that demonstrates how to perform Create, Read, Update, and Delete (CRUD) operations using Axios for API requests. Axios is a promise-based HTTP client for the browser and Node.js, and it simplifies making HTTP requests in React applications.

## Features

- **CRUD Operations**: Perform Create, Read, Update, and Delete operations with an API.
- **Axios Integration**: Use Axios for making HTTP requests.
- **Dynamic Data Handling**: Manage and display data dynamically within the React application.
- **Error Handling**: Basic error handling for API requests.

## Installation

To set up and run this application, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/react-axios-crud.git
   cd react-axios-crud
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   npm start
   ```

   Navigate to `http://localhost:3000` in your web browser to see the application in action.

4. **Axios Installation**

   If Axios is not installed, you can add it to your project with:

   ```bash
   npm install axios
   ```

## Basic Usage

### Setting Up Axios

1. **Create an Axios Instance**: Configure Axios with a base URL for your API.

   ```jsx
   // src/axios.js
   import axios from 'axios';

   const instance = axios.create({
     baseURL: 'https://api.example.com',
   });

   export default instance;
   ```

### CRUD Operations

1. **Read Data**

   ```jsx
   import React, { useEffect, useState } from 'react';
   import axios from './axios';

   function App() {
     const [data, setData] = useState([]);

     useEffect(() => {
       axios.get('/items')
         .then(response => setData(response.data))
         .catch(error => console.error('Error fetching data:', error));
     }, []);

     return (
       <div>
         <h1>Items</h1>
         <ul>
           {data.map(item => (
             <li key={item.id}>{item.name}</li>
           ))}
         </ul>
       </div>
     );
   }

   export default App;
   ```

2. **Create Data**

   ```jsx
   import React, { useState } from 'react';
   import axios from './axios';

   function CreateItem() {
     const [name, setName] = useState('');

     const handleSubmit = () => {
       axios.post('/items', { name })
         .then(response => console.log('Item created:', response.data))
         .catch(error => console.error('Error creating item:', error));
     };

     return (
       <div>
         <input
           type="text"
           value={name}
           onChange={(e) => setName(e.target.value)}
         />
         <button onClick={handleSubmit}>Create Item</button>
       </div>
     );
   }

   export default CreateItem;
   ```

3. **Update Data**

   ```jsx
   import React, { useState } from 'react';
   import axios from './axios';

   function UpdateItem({ id }) {
     const [name, setName] = useState('');

     const handleUpdate = () => {
       axios.put(`/items/${id}`, { name })
         .then(response => console.log('Item updated:', response.data))
         .catch(error => console.error('Error updating item:', error));
     };

     return (
       <div>
         <input
           type="text"
           value={name}
           onChange={(e) => setName(e.target.value)}
         />
         <button onClick={handleUpdate}>Update Item</button>
       </div>
     );
   }

   export default UpdateItem;
   ```

4. **Delete Data**

   ```jsx
   import React from 'react';
   import axios from './axios';

   function DeleteItem({ id }) {
     const handleDelete = () => {
       axios.delete(`/items/${id}`)
         .then(response => console.log('Item deleted:', response.data))
         .catch(error => console.error('Error deleting item:', error));
     };

     return (
       <button onClick={handleDelete}>Delete Item</button>
     );
   }

   export default DeleteItem;
   ```

## License

This React Axios CRUD documentation is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For questions or suggestions, please contact [Itisha Chovatiya](mailto:itishachovatiya7096@gmail.com).

---

Thank you for using `React Axios CRUD`!
