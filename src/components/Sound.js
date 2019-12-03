import React, { Component } from "react";
import Sound from "react-sound";

export default class Sound extends Component {
  toggleSound = e => {
    this.props.sound === "on"
      ? this.changeSoundAttributes(
          "off",
          process.env.PUBLIC_URL + "/assets/mute_icon.png",
          e
        )
      : this.changeSoundAttributes(
          "on",
          process.env.PUBLIC_URL + "/assets/sound_on.png",
          e
        );
  };
  changeSoundAttributes = (toggle, src, e) => {
    this.props.setSound(toggle);
    e.target.src = src;
  };
  render() {
    return (
      <button
        onClick={e => {
          this.toggleSound(e);
        }}
      >
        <img src={process.env.PUBLIC_URL + "/assets/sound_on.png"} />
      </button>
    );
  }
}
