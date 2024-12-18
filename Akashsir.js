import axios from 'axios';
import React from 'react';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sendData() {
    var myformdata = new FormData();
    myformdata.append("todo_title", this.state.txt1);
    myformdata.append("todo_details", this.state.txt2);

    axios
      .post("https://akashsir.in/myapi/crud/todo-add-api.php", myformdata)
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
        Title: <input type="text" onChange={(e) => this.setState({ txt1: e.target.value })} />
        Details: <input type="text" onChange={(e) => this.setState({ txt2: e.target.value })} />
        <input type="button" value="Submit Data" onClick={this.sendData.bind(this)} />
        <Display />
      </>
    );
  }
}

export default App;
