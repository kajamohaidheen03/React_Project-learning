import React from 'react';
import logo from "../asserts/Capture.PNG";

function Header() {
    const mainStyle = {
        backgroundColor: "#13274F",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
    };

    const logoStyle = {
        display: "flex",
        alignItems: "center",
    };

    const headerStyle = {
        color: "white",
        fontFamily: "Arial Black",
        fontSize: "24px",
        margin: "10px",
        paddingLeft: "10px",
    };

    const searchStyle = {
        display: "flex",
        flexGrow: 1,
        marginLeft: "50px",
        marginRight: "50px",
    };

    const searchInputStyle = {
        width: "100%",
        padding: "10px",
        fontSize: "16px",
    };

    const searchButtonStyle = {
        padding: "10px 20px",
        backgroundColor: "#febd69",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
    };

    return (
        <div style={mainStyle}>
            <div style={logoStyle}>
                <img src={logo} alt="Logo" height="50px" />
                <h1 style={headerStyle}>Amazon.in</h1>
            </div>
            <div style={searchStyle}>
                <input
                    type="text"
                    placeholder="Search..."
                    style={searchInputStyle}
                />
                <button style={searchButtonStyle}>Search</button>
            </div>
        </div>
    );
}

export default Header;
