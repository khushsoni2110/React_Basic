import React from 'react'
import axios from 'axios'
class Valuesget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mydata: []};
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
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
        <h1>{value.name}</h1>
        <h2>{value.username}</h2>
        <h3>{value.email}</h3>
        <p>{value.phone}</p>
        <p>{value.website}</p>
        <p>{value.address.street}</p>
        <br/>
      </>)
    } )}
      </>

     );
  }
  
}
 

export default Valuesget;
