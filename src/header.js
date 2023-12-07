import React from 'react';

const Headerproj = () => {
  return (
    <div>
      <div className="container">
<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"  style={{ width: '100%', padding:0 }}>
  <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    
    <span className="fs-4 ">TelloBee</span>
  </a>

  <ul className="nav nav-pills">
    <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
    <li className="nav-item"><a href="../public/about.html" className="nav-link">About</a></li>
    <li className="nav-item"><a href="../public/contact.html" className="nav-link">Contact</a></li>
    <li className="nav-item"><a href="../public/wordoftheday.html" className="nav-link">WordOfTheDay</a></li>
    <li className="nav-item"><a href="../public/FAQs.html" className="nav-link">FAQs</a></li>
  </ul>
</header>
</div>
    </div>
  );
};

export default Headerproj;

