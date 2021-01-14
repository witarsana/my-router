import React from 'react';
import MainLayout from '../layout/MainLayout';
const About = () => {
    return (
        <div>
            <MainLayout>
                <div style={container}>
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut inventore distinctio voluptates, neque quidem iusto odio voluptas et nostrum dolor rem provident fuga nobis error doloribus, vitae reprehenderit tempore?</p>
                </div>
            </MainLayout>
        </div>

    )
}

const container = {
    padding: "0 6rem"
}

export default About;