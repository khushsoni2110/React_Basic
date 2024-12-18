import React from 'react'
class Getvalues extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <h1>Get Values From User</h1>
                <input type='text' onChange={(e) =>this.setState({ txt1: e.target.value })} />
                {this.state.txt1}
            </>
        );
    }
}

export default Getvalues;