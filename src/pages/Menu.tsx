import React from 'react';
import { Rnd } from 'react-rnd';
import { State } from '../models/dataTypes'
import Menubg from '../components/Menubg';
import Menucontent from '../components/Menucontent';

class Menu extends React.Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            width: window.innerWidth * 0.8,
            height: window.innerHeight * 0.7,
            x: 60,
            y: 90
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState(prevState => ({
            width: Math.min(window.innerWidth * 0.8, prevState.width),
            height: Math.min(window.innerHeight * 0.6, prevState.height)
        }));
    }

    render() {
        return (
            <Rnd
                size={{ width: this.state.width, height: this.state.height }}
                position={{ x: this.state.x, y: this.state.y }}
                onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    this.setState({
                        width: parseInt(ref.style.width),
                        height: parseInt(ref.style.height),
                    });
                }}
                bounds="parent"
            >
                <div className="about_me main-sec-cont">
                    <Menubg/>
                    <Menucontent/>
                </div>
            </Rnd>
        );
    }
}

export default Menu;
