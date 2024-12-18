import React from 'react'
import axios from 'axios'
class Khush extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mydata: []};
  }
  componentDidMount(){
    axios.get("https://fakestoreapi.com/products")
    .then(res=>{
      if(res.status === 200){
        this.setState({mydata:res.data})
      }else{
        alert("Status Issue")
      }
    })
    .catch(err=>alert(err))
  }
  render() { 
    return ( 
      <>
    {this.state.mydata.map((value,index) =>{
      return(<>
        <h1>{value.title}</h1>
        <p>{value.price * 84}</p>
        <img width={100} src={value.image} alt='#'/>
        <br/>
      </>)
    } )}
      </>

     );
  }
  
}
 

export default Khush;
