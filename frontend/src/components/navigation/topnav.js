import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";

import selectionSound from "../../assets/sounds/selection.wav";
import tickSound from "../../assets/sounds/tick.wav";
import { navLinks } from "./navItems";

import Button from "../Button/button";

import "./styles.css";

export default function Topnav() {
  const [selected, setSelected] = useState("");
  const [playSound] = useSound(selectionSound, { volume: 0.9 });
  const [hover, setHover] = useState(false);
  const [hoverSound, stopSound] = useSound(tickSound, { volume: 0.9 });

  function handleClick(item, event) {
    setSelected(item);
    playSound();
  }

  function onMouseEnter(e) {
    setHover(true);
    hoverSound(e);
  }

  function onMouseLeave(e) {
    setHover(false);
    stopSound.stop(e);
  }

  return (
    <div className='wrapper z-50'>
      <div className={`border-primaryPurple border-2 main-container`}>
        <div className='items-container'>
          <div className='movable-container'>
            {navLinks.map((item, id) => {
              return selected === item ? (
                <Link
                  className={`selected`}
                  onClick={handleClick}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  key={id}
                >
                  {<div to={item.path} className={`ripple`}></div>}
                  {item.label}
                </Link>
              ) : (
                <Link
                  to={item.path}
                  key={id}
                  onClick={handleClick}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Link
            to='/upload'
            onClick={handleClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Button
              text='Upload'
              type='button'
              buttonStyle='navButton'
              onClick={handleClick}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              Upload
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
