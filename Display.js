import axios from 'axios';

import React from 'react';

class Display extends React.Component {

constructor (props) {

super (props);

this.state = { mydata: [] };

}

componentDidMount() {

axios.get("https://akashsir.in/myapi/crud/todo-list-api.php")

.then(res=>{

this.setState({mydata:res.data.todo_list})

})

}

render() {

return (

<>

<h1>Display</h1>

{this.state.mydata.map((value, index)=>{

return (<>

<p>{value.todo_title}</p>

</>
)
})}

</>

);
}
}

export default Display;