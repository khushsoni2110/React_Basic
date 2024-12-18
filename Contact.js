import React from 'react'
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {myerr:{} };
    }
    doValidation = ()=>{
        const {txt1,txt2} = this.state;
        var isValid = true;
        var temperr = {}
        if(!txt1){
            isValid = false
            temperr.txt1 = "Enter No1"
        }
        if(!txt1>5){
            isValid = false
            temperr.txt1="Enter No1 <5"
        }
        if(!txt2){
            isValid = false
            temperr.txt1 = "Enter No1"
        }
        this.setState({myerr:temperr})
        return isValid
    }
    onClickdata(){
        const ans = this.doValidation();
        this.setState();
        if(ans){
            alert("Welcome")
        }
    }
    render() { 
        return ( <>
        <br/>
        No:1<input type='text' onChange={(e)=>this.setState({txt1:e.target.value})}/>
        <p style={{color: 'red'}}>{this.state.myerr.txt1}</p>
        <br/>
        No:2<input type='text' onChange={(e)=>this.setState({txt2:e.target.value})}/>
        <p style={{color: 'red'}}>{this.state.myerr.txt2}</p>
        <input type='button' onClick={this.onClickdata.bind(this)} value="Click Me"/>
        </> );
    }
}
 
export default Contact;