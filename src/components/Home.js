import React from 'react';
import './Home.css';

const text = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed pretium est. Vivamus purus dolor, sodales eget diam at, vehicula bibendum lacus. Quisque rhoncus imperdiet vehicula. Sed luctus ligula ac ultrices vehicula. Donec dapibus posuere orci, vel posuere nisi suscipit eu. Mauris eu augue nunc. Pellentesque dolor neque, eleifend eget erat id, posuere sodales nulla. Proin lacinia eros non elit semper, vel accumsan elit viverra. Sed finibus tincidunt tincidunt. Pellentesque lacus orci, vulputate at magna nec, pulvinar placerat ligula.'];
const Home = () => (
  <div className="homediv">
    <p className="title">Welcome to our page!</p>
    <p className="txt">{text}</p>
    <p className="txt">{text}</p>
  </div>
);

export default Home;
