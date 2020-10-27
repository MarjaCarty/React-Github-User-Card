import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="cardContainer">
        <img
          className="avatar"
          src={this.props.userData.avatar_url}
          alt="avatar"
        />
        <div className="info">
          <h3 className="username">{this.props.userData.login}</h3>
          <a href={this.props.userData.url} className="github-link">
            Github Page
          </a>
          <p>Bio: {this.props.userData.bio}</p>
          <p>Location: {this.props.userData.location}</p>
          <hr />
          <h4>Followers</h4>
          {this.props.followerData.map((follower) => {
            return <li>{follower.login}</li>;
          })}
        </div>
      </div>
    );
  }
}

export default Card;
