import React, { useEffect, useRef } from 'react';
import "./Typing_animation.scss";

export const Typing_animation = () => {
  const typedTextSpan = useRef(null);
  const cursorSpan = useRef(null);

  const textArray = ["Cyberpunk Code: Creative Space and Depths of Games"];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000;
  let charIndex = 0;

  useEffect(() => {
    const typedText = typedTextSpan.current;
    const cursor = cursorSpan.current;

    function type() {
      if (charIndex < textArray[0].length) {
        if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
        typedText.textContent += textArray[0].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursor.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
        typedText.textContent = textArray[0].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursor.classList.remove("typing");
        charIndex = 0;
        if (textArray >= textArray[0].length) charIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }

    if (textArray.length) setTimeout(type, newTextDelay + 250);

    return () => clearTimeout();
  }, []);

  return (
    <div className='container'>
      <p>
        <span ref={typedTextSpan} className='container_typed-text'></span>
        <span ref={cursorSpan} className='container_cursor typing'>&nbsp;</span>
      </p>
    </div>
  );
};
