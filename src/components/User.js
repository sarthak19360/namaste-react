import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sarthak19360");
    const json = await data.json();
    this.setState({
      profile: json,
    });
  }
  render() {
    const { name, avatar_url } = this.state.profile;
    return (
      <div>
        <h2>Name: {name}</h2>
        <img src={avatar_url} alt="" />
      </div>
    );
  }
}

export default User;
