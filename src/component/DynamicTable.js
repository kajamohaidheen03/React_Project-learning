import React, { useState } from "react";

export default function DynamicTable() {
    const [entries, setEntries] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setEntries([...entries, formData]);
        setFormData({
            name: "",
            email: "",
            phone: ""
        });
    };

    const handleRemove = (index) => {
        const newEntries = entries.filter((entry, i) => i !== index);
        setEntries(newEntries);
    };

    return (
        <div>
            <h2>Dynamic Table</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    placeholder="Enter Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <td>{entry.email}</td>
                            <td>{entry.phone}</td>
                            <td>
                                <button onClick={() => handleRemove(index)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
