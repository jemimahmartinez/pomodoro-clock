import React, { Component } from "react";
// import Sound from "react-sound";
// import soundfile from "../assets/w0w.mp3";

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
    // audio = url = { soundfile };
  };
  render() {
    return (
      <button
        className="sound-button"
        onClick={e => {
          this.toggleSound(e);
        }}
      >
        <img src={process.env.PUBLIC_URL + "/assets/sound_on.png"} />
      </button>
    );
  }
}
