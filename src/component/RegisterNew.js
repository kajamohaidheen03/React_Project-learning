import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterNew() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    addr: '',
    country: '',
    gender: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, addr, country, gender } = formData;

    if (!name) {
      setMessage('Please enter your name.');
    } else if (!email) {
      setMessage('Please enter your email.');
    } else if (!email.includes('@gmail.com')) {
      setMessage('Please enter a valid email.');
    } else if (!addr) {
      setMessage('Please enter your address.');
    } else if (!country) {
      setMessage('Please select your country.');
    } else if (!gender) {
      setMessage('Please select your gender.');
    } else {
      setMessage('Data is submitted.');
      navigate('/');
    }
  };

  return (
    <div className="container mt-5">
      
      <form name="f1" onSubmit={handleSubmit}>
        <fieldset>
          <center>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Name<span className="text-primary">*</span></td>
                  <td>
                    <input 
                      type="text" 
                      name="name" 
                      className="form-control" 
                      value={formData.name} 
                      onChange={handleChange} 
                    />
                  </td>
                </tr>
                <tr>
                  <td>E-mail<span className="text-primary">*</span></td>
                  <td>
                    <input 
                      type="text" 
                      name="email" 
                      className="form-control" 
                      value={formData.email} 
                      onChange={handleChange} 
                    />
                  </td>
                </tr>
                <tr>
                  <td>Address<span className="text-primary">*</span></td>
                  <td>
                    <textarea 
                      name="addr" 
                      rows="5" 
                      cols="23" 
                      className="form-control"
                      value={formData.addr}
                      onChange={handleChange}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>Country<span className="text-primary">*</span></td>
                  <td>
                    <select 
                      name="country" 
                      className="form-control" 
                      value={formData.country} 
                      onChange={handleChange}
                    >
                      <option value="">---select your country---</option>
                      <option value="India">India</option>
                      <option value="UK">UK</option>
                      <option value="Singapore">Singapore</option>
                      <option value="USA">USA</option>
                      <option value="Japan">Japan</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Gender<span className="text-primary">*</span></td>
                  <td>
                    <input 
                      type="radio" 
                      name="gender" 
                      value="Male"
                      checked={formData.gender === 'Male'}
                      onChange={handleChange}
                    /> Male
                    <input 
                      type="radio" 
                      name="gender" 
                      value="Female"
                      checked={formData.gender === 'Female'}
                      onChange={handleChange}
                    /> Female
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <input type="submit" value="REGISTER" className="btn btn-primary" />
          </center>
        </fieldset>
      </form>
      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </div>
  );
}

export default RegisterNew;
