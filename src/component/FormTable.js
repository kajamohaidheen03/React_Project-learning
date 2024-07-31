import React, { useState } from 'react';


function FormTable() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    addr: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, addr } = formData;

    if (!name || !email || !addr) {
      setMessage('All fields are required.');
    } else {
      setMessage('Data is submitted.');
    }
  };

  return (
    <div className="container mt-5">
      <center>
        <form onSubmit={handleSubmit}>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Name<span>*</span></td>
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
                <td>E-mail<span>*</span></td>
                <td>
                  <input 
                    type="email" 
                    name="email" 
                    className="form-control" 
                    value={formData.email} 
                    onChange={handleChange} 
                  />
                </td>
              </tr>
              <tr>
                <td>Message<span>*</span></td>
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
            </tbody>
          </table>
          <br />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {message && <div className="mt-3 alert alert-info">{message}</div>}
      </center>
    </div>
  );
}

export default FormTable;
