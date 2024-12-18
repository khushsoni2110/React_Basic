import axios from 'axios';
import React from 'react';
import Display from './Display';

class Akashsir_update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sendData() {
    var myformdata = new FormData();
    myformdata.append("todo_id", this.state.txt1);
    myformdata.append("todo_title", this.state.txt2);

    axios
      .post("https://akashsir.in/myapi/crud/todo-update-api.php", myformdata)
      .then((res) => {
        console.log(res);
        if (res.data.flag === '1') {
          alert(res.data.message);
        } else {
          alert('Error');
        }
      })
      .catch((err) => alert(err));
  }

  render() {
    return (
      <>
        Id: <input type="text" onChange={(e) => this.setState({ txt1: e.target.value })} />
        Title: <input type="text" onChange={(e) => this.setState({ txt2: e.target.value })} />
        <input type="button" value="Submit Data" onClick={this.sendData.bind(this)} />
      
      </>
      
    );
  }
}

export default Akashsir_update;
