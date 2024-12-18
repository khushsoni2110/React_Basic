import React from "react";
class Sumfunction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    onChangeData(e) {
        this.setState({ [e.target.name]: e.target.value })
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
                <input type='text' name='txt1' onChange={this.onChangeData.bind(this)} />
                <input type='text' name='txt2' onChange={this.onChangeData.bind(this)} />
                <input type='button' value="+" onClick={this.getSum.bind(this)} />
                {this.state.msg}
            </div>

        );
    }
}
export default Sumfunction;