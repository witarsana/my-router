import React from 'react';
import MainLayout from '../layout/MainLayout';

const NotFound = () => {
    return (
        <div>
            <MainLayout>
                <div style={container}>
                    <h1>404 not found page</h1>
                </div>
            </MainLayout>
        </div>

    )
}

const container = {
    padding: "0 6rem"
}

export default NotFound;

