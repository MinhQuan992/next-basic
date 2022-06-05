import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
