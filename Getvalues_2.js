import React from 'react'
class Getvalues_2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onChangeData(e){
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <>
                <h1>Get Values From User</h1>
                <input type='text' name='txt1' onChange={this.onChangeData.bind(this)}/>
                <input type='text' name='txt2' onChange={this.onChangeData.bind(this)}/>
              <br/>  {this.state.txt1}<br/>
                {this.state.txt2}
            </>
        );
    }
}

export default Getvalues_2;