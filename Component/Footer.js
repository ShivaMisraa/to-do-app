import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 Shivam Mishra</p>

      <style jsx>{`
        .footer {
          background-color: #3498db;
          display: flex;
          justify-content: space-around;
          padding: 10px;
          margin-bottom: 10px;
        }

        p {
          font-size: 16px;
          margin: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
