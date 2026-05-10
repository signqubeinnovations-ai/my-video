import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";

const COUNTDOWN_FROM = 5;

export const Countdown: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const framesPerNumber = durationInFrames / (COUNTDOWN_FROM + 1);
  const currentNumber = COUNTDOWN_FROM - Math.floor(frame / framesPerNumber);
  const frameWithinNumber = frame % framesPerNumber;

  const scale = spring({
    fps,
    frame: frameWithinNumber,
    config: { damping: 10, stiffness: 100, mass: 0.5 },
    from: 1.4,
    to: 1,
  });

  const opacity = spring({
    fps,
    frame: frameWithinNumber,
    config: { damping: 20, stiffness: 200 },
    from: 0,
    to: 1,
  });

  const number = Math.max(0, currentNumber);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0f0f0f",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontSize: 400,
          fontWeight: "bold",
          fontFamily: "sans-serif",
          color: "#1E90FF",
          transform: `scale(${scale})`,
          opacity,
          lineHeight: 1,
        }}
      >
        {number}
      </span>
    </AbsoluteFill>
  );
};
