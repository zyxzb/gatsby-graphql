import React from 'react';
import Layout from '../components/Layout';

const NotFound = () => {
    return (
        <Layout>
        <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
           <h2>404 - NOT FOUND</h2> 
           <br />
           <p>Sorry, page doesn't exist 🙁</p>
        </div>
        </Layout>
    );
}

export default NotFound;
