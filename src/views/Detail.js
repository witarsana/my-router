import React from 'react';
import MainLayout from '../layout/MainLayout';
import { Link } from 'react-router-dom';

class Detail extends React.Component {
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
        ],
        data: {
            id: '',
            name: '',
            description: '',
            image: require("../images/svelte.png")
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const data = this.state.skills.find(sk => sk.id === parseInt(id));
        this.setState({
            data: data
        })
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <MainLayout>
                    <div style={container}>
                        <h1>{data.name}</h1>
                        <div style={box}>
                            <img style={image} src={data.image.default} alt={data.name} />
                            <div >
                                <p>{data.description}</p>
                                <Link to={`/`} >Back</Link>
                            </div>

                        </div>
                    </div>
                </MainLayout>
            </div >
        )
    }
}

const container = {
    padding: "0 6rem"
}

const image = {
    width: "15rem",
    height: "20rem",
    marginRight: "2rem"
}

const box = {
    display: "flex"
}

export default Detail;