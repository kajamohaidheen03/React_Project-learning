import React from 'react';
import './style2.css';

const HomeNew = () => {
  const items = [
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D', title: 'Shoe', description: 'Rs:300 Product:InStock  Offer: 10%' },
    { src: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D', title: 'Smart Watch', description: 'Rs:1300 Product:InStock  Offer: 10%' },
    { src: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D', title: 'Head Phone', description: 'Rs:1500 Product:InStock  Offer: 10%' },
    { src: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D', title: 'Lip Stick', description: 'Rs:500 Product:InStock  Offer: 10%' },
    { src: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D', title: 'Camera', description: 'Rs:13000 Product:InStock  Offer: 10%' },
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D', title: 'Smart Watch', description: 'Rs:1200 Product:InStock  Offer: 10%' },
    { src: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D', title: 'Bottle', description: 'Rs:300 Product:InStock  Offer: 10%' },
    { src: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D', title: 'Plant', description: 'Rs:500 Product:InStock  Offer: 10%' },
    { src: 'https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D', title: 'Pepsi', description: 'Rs:100 Product:InStock  Offer: 10%' },
    { src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D', title: 'Sun Glass', description: 'Rs:500 Product:InStock  Offer: 10%' },
  ];

  return (
    <div>
      <h1 className="titlebar">Product Gallery</h1>
      <div className="container">
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.src} alt={item.title} style={{ width: '200px', height: '200px' }} /> {/* Apply inline styles for width and height */}
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeNew;
