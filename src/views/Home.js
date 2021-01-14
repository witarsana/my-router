import React from 'react';
import MainLayout from '../layout/MainLayout';
import { Link } from 'react-router-dom';
class Home extends React.Component {
    state = {
        skills: [
            {
                id: 1,
                name: 'Javascript',
                description: 'Javascript Description',
                image: require("../images/js.png")
            },
            {
                id: 2,
                name: 'Vue JS',
                description: 'Vue JS Description',
                image: require("../images/vue.png")
            },
            {
                id: 3,
                name: 'React',
                description: 'React Description',
                image: require('../images/react.png')
            },
            {
                id: 4,
                name: 'Svelte',
                description: 'Svelte Description',
                image: require("../images/svelte.png")
            }
        ]
    }
    render() {
        const { skills } = this.state;
        return (
            <div>
                <MainLayout>
                    <h1 style={{ paddingLeft: "6rem" }}>Homepage</h1>
                    <div style={container}>
                        {
                            skills.map(sk =>
                                <div key={sk.id} style={card}>
                                    <Link to={`/detail/${sk.id}`}>
                                        <img style={img} alt={sk.name} src={sk.image.default} />
                                        <h3>{sk.name}</h3>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </MainLayout>


            </div >
        )
    }
}

export default Home;

const container = {
    display: "flex",
    padding: "0 6rem",
    justifyContent: "space-between"
}

const card = {
    width: "20%",
    height: "15rem"
}

const img = {
    width: "100%",
    height: "100%"
}