import React, { Component } from "react";

class NewTweet extends Component {
  state = {
    text: ""
  };
  handleChange = e => {
    const text = e.target.value;

    this.setState(() => ({
      text
    }));
  };
  handleSubmit = e => {
    e.preventDefault();

    const { text } = this.state;

    console.log("New Tweet: ", text);

    this.setState(() => ({
      text: ""
    }));
  };
  render() {
    const { text } = this.state;
    const tweetLeft = 280 - text.length;
    return;
    <div>
      <h3 className="center">Compose New Tweet</h3>
      <form className="new-tweet" onSubmit={this.handleSubmit}>
        <textarea
          placeholder="What is happening?"
          value={text}
          onChange={this.handleChange}
          className="textarea"
          maxLength={280}
        />
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="button" type="submit" disabled={text === ""}>
          Submit
        </button>
      </form>
    </div>;
  }
}
