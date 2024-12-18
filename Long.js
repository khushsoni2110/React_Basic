import React from 'react';
import axios from 'axios';

class Long extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mydata: [] };
  }

  componentDidMount() {
    axios
      .get("https://reqres.in/api/users")
      .then(res => {
        if (res.status === 200) {
          this.setState({ mydata: res.data.data });
        } else {
          alert("Status Issue");
        }
      })
      .catch(err => alert(err.message));
  }

  render() {
    return (
      <>
        {this.state.mydata.map((value, index) => {
          return (
            <div key={value.id}>
              <h1>{value.id}</h1>
              <h2>{value.email}</h2>
              <h3>{value.first_name}</h3>
              <p>{value.last_name}</p>
              <img width={100} src={value.avatar} alt="avatar" />
              <br />
            </div>
          );
        })}
      </>
    );
  }
}

export default Long;
