import React from "react";
import ReactDOM from "react-dom";
import ReactAnimatedWeather from "react-animated-weather";
import "./App.css";

function App() {
  const sunny = {
    icon: "CLEAR_DAY",
    color: "goldenrod",
    size: 100,
    animate: false
  };
  const RAIN = {
    icon: "RAIN",
    color: "lightblue",
    size: 150,
    animate: true
  };
  const SNOW = {
    icon: "SNOW",
    color: "grey",
    size: 200,
    animate: true
  };

  return (
    <div className="App">
      <h1>React External Components</h1>
      <h3>Challenge 1</h3>
      <p>
        Import and render this component{" "}
        <a href="https://www.npmjs.com/package/react-animated-weather">
          https://www.npmjs.com/package/react-animated-weather
        </a>
      </p>
      <br />
      <h3>Challenge 2</h3>
      <p>
        Display 3 different icons and change the properties for each of them{" "}
      </p>
      <ReactAnimatedWeather
        icon={sunny.icon}
        color={sunny.color}
        size={sunny.size}
        animate={sunny.animate}
      />
      <ReactAnimatedWeather
        icon={RAIN.icon}
        color={RAIN.color}
        size={RAIN.size}
        animate={RAIN.animate}
      />
      <ReactAnimatedWeather
        icon={SNOW.icon}
        color={SNOW.color}
        size={SNOW.size}
        animate={SNOW.animate}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
