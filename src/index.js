import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skillist />
      </div>
    </div>
  );
}
function Intro() {
  return (
    <div>
      <h2>my name is mss karaama</h2>
      <p>
        full stack web developer and teacher at u demy when doing nothing i lkie
        cooking and playing chess. also i like enjoying somali sun at beach
      </p>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="kowad.JPG" alt="moha" />;
}
function Skillist() {
  return (
    <div className="skill-list">
      <Skill skill="react" emoji="👍" color="blue" />
      <Skill skill="html + css" emoji="👍" color="green" />
      <Skill skill="javascript" emoji="👍" color="red" />
      <Skill skill="php" emoji="👍" color="orange" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
