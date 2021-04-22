import React from "react";
import "./Home.css";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
function Home() {
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";
    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOverImg = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="home">
      <div className="home__leftSection">
        <span> Back </span>
        <strong>Logic</strong>
      </div>
      <div className="home__middleSection">
        <p>
          Joseph, Kevin, and Nicholas are 3 brothers, and the following
          statements about them are all true:
        </p>
        <ul className="midSectionList">
          <li>Joseph is not the youngest.</li>
          <li>Kevin is the oldest.</li>
          <li>Nicholas is not the oldest.</li>
        </ul>
        <div className="dragSectionHeading">
          <span>Drag the characters into the dotted boxes.</span>
          <div className="resetIcon">
            <RotateLeftIcon fontSize="medium" />
            <p>Reset</p>
          </div>
        </div>
        <div className="dragSection">
          <div id="div1" onDrop={drop} onDragOver={dragOver} />
          <div id="div2" onDrop={drop} onDragOver={dragOver} />
          <div id="div3" onDrop={drop} onDragOver={dragOver} />
        </div>
        <img
          id="drag1"
          src="https://cdn.pixabay.com/photo/2020/06/04/13/22/square-5258734_1280.png"
          draggable="true"
          className="image"
          onDragStart={dragStart}
          onDragOver={dragOverImg}
          alt="img"
        />
        <div className="home__sectionButtons">
          <button className="btn_expln">Show Explanation</button>
          <button className="btn_ans">Show Answer</button>
        </div>
      </div>
      <div className="home__rightSection">
        <span>Lesson 1</span>
        <h2>Warmup Puzzles</h2>
      </div>
    </div>
  );
}

export default Home;
