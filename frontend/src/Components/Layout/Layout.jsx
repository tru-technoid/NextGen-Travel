import React from 'react';
import Header from './../Header/Header';
import Routers from "../../Router/Routers";
import Footer from './../Footer/Footer';
// import Chat from '../Chat';
import Chatbot from '../Chatbot';

const Layout = () => {
    return (
        <>
            <Header />
            <Routers />
            <Footer />
            {/* <Chat/> */}
            <Chatbot />
        </>
    )
}

export default Layout
