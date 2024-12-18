import React from "react";
import axios from "axios";

class Smal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mydata: [] };
  }

  componentDidMount() {
    axios
      .get("https://dummyjson.com/quotes")
      .then((res) => {
        if (res.status === 200) {
          this.setState({ mydata: res.data.quotes });
        } else {
          alert("Status Issue");
        }
      })
      .catch((err) => alert(err.message));
  }

  render() {
    return (
      <>
        {this.state.mydata.map((value, index) => (
          <div key={index}>
            <h1>{value.id}</h1>
            <h2>{value.quote}</h2>
            <p>{value.author}</p>
            <br />
          </div>
        ))}
      </>
    );
  }
}

export default Smal;
