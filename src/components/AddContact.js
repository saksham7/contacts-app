import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    mobile: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name == "" || this.state.mobile == "") {
      alert("Please fill all fields!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", mobile: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui container">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Mobile No</label>
            <input
              type="text"
              name="mob"
              placeholder="Enter Mobile No."
              value={this.state.mobile}
              onChange={(e) => this.setState({ mobile: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
