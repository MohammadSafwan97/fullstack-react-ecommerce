import React from "react";

const MyLogo = () => {
  return (
    <div class="logo-wrap">
      <svg
        class="grocery-icon"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39A2 2 0 0 0 9.62 16h8.76a2 2 0 0 0 1.94-1.61L23 6H6" />
      </svg>

      <div class="safwan-logo">
        <span class="main">Safwan</span>
        <span class="accent">Express</span>
      </div>
    </div>
  );
};

export default MyLogo;
