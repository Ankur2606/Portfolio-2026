import { useState, useEffect, useCallback } from "react";

export function useTypingEffect(
  texts: string[],
  typingSpeed = 80,
  deleteSpeed = 40,
  pauseTime = 2000
) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = texts[textIndex];

    if (!isDeleting) {
      setDisplayText(current.slice(0, charIndex + 1));
      setCharIndex((c) => c + 1);
      if (charIndex + 1 >= current.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      setDisplayText(current.slice(0, charIndex - 1));
      setCharIndex((c) => c - 1);
      if (charIndex <= 1) {
        setIsDeleting(false);
        setTextIndex((i) => (i + 1) % texts.length);
        return;
      }
    }
  }, [charIndex, isDeleting, textIndex, texts, pauseTime]);

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : typingSpeed;
    const timeout = setTimeout(tick, speed);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting, deleteSpeed, typingSpeed]);

  return displayText;
}
