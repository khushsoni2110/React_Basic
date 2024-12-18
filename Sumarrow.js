import React from "react";
class Sumarrow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    getSum() {
        var a = parseInt(this.state.txt1)
        var b = parseInt(this.state.txt2)
        var c = a + b
        this.setState({ msg: "Sum is " + c })
    }
    render() {
        return (
            <div>
                <h1>Sumfunction</h1>
                <input type='text' name='txt1' onChange={(e)=>this.setState({txt1:e.target.value})} />
                <input type='text' name='txt2' onChange={(e)=>this.setState({txt2:e.target.value})} />
                <input type='button' value="+" onClick={this.getSum.bind(this)} />
                {this.state.msg}
            </div>

        );
    }
}
export default Sumarrow;