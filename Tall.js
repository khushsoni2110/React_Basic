import React from "react";
import axios from "axios";

class Tall extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] }; // Initialize `products` in state
  }

  componentDidMount() {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        if (res.status === 200) {
          // Update the state with the `products` array
          this.setState({ products: res.data.products });
        } else {
          alert("Status Issue");
        }
      })
      .catch((err) => alert(err.message));
  }

  render() {
    return (
      <>
        {this.state.products.map((value, index) => (
          <div key={index}>
            <h1>{value.category}</h1>
            <p>{value.price * 84}</p>
            <p>{value.discountPercentage * 84}</p>
            <img width={100} src={value.thumbnail} alt="Product" />
            <br />
          </div>
        ))}
      </>
    );
  }
}

export default Tall;
