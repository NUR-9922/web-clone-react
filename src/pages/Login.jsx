import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Login = () => {
     const [formData, setFormData] = useState({
          email: '',
          password: '',
     });

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prevData) => ({
               ...prevData,
               [name]: value,
          }));
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          // Add your login logic here
          console.log('Form submitted:', formData);
          // You can send the data to your backend for authentication
     };

     return (
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
               <div className="bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-semibold mb-6">Login</h2>
                    <form onSubmit={handleSubmit}>
                         <div className="mb-4">
                              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                   Email
                              </label>
                              <input
                                   type="email"
                                   id="email"
                                   name="email"
                                   value={formData.email}
                                   onChange={handleChange}
                                   className="mt-1 p-2 w-full border rounded"
                                   required
                              />
                         </div>
                         <div className="mb-4">
                              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                   Password
                              </label>
                              <input
                                   type="password"
                                   id="password"
                                   name="password"
                                   value={formData.password}
                                   onChange={handleChange}
                                   className="mt-1 p-2 w-full border rounded"
                                   required
                              />
                         </div>
                         <button
                              type="submit"
                              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                         >
                              Login
                         </button>
                    </form>
                    <h4 className="mt-6 text-sm text-gray-600">
                         If you don't have an account, please
                         <NavLink className={"text-blue-500 hover:text-blue-700 ml-2"} to="/signup">Signup</NavLink>.
                    </h4>
               </div>
          </div>
     );
};

export default Login;
