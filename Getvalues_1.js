import React from 'react'
class Getvalues_1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onChangeData(e){
        this.setState({txt1:e.target.value})
    }
    render() {
        return (
            <>
                <h1>Get Values From User</h1>
                <input type='text' onChange={this.onChangeData.bind(this)}/>
                {this.state.txt1}
            </>
        );
    }
}

export default Getvalues_1;