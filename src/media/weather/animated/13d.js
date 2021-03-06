import React from "react";

function Weather13d(props) {
  return (
    <svg viewBox={props.viewbox} {...props}>
      <defs>
        <filter id="prefix__blur" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation={3} />
          <feOffset dy={4} result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope={0.05} />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <style>
          {
            "@keyframes am-weather-cloud-2{0%,to{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}50%{-webkit-transform:translate(2px,0);-moz-transform:translate(2px,0);-ms-transform:translate(2px,0);transform:translate(2px,0)}}@keyframes am-weather-snow{0%{-webkit-transform:translateX(0) translateY(0);-moz-transform:translateX(0) translateY(0);-ms-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}33.33%{-webkit-transform:translateX(-1.2px) translateY(2px);-moz-transform:translateX(-1.2px) translateY(2px);-ms-transform:translateX(-1.2px) translateY(2px);transform:translateX(-1.2px) translateY(2px)}66.66%{-webkit-transform:translateX(1.4px) translateY(4px);-moz-transform:translateX(1.4px) translateY(4px);-ms-transform:translateX(1.4px) translateY(4px);transform:translateX(1.4px) translateY(4px);opacity:1}to{-webkit-transform:translateX(-1.6px) translateY(6px);-moz-transform:translateX(-1.6px) translateY(6px);-ms-transform:translateX(-1.6px) translateY(6px);transform:translateX(-1.6px) translateY(6px);opacity:0}}@keyframes am-weather-snow-reverse{0%{-webkit-transform:translateX(0) translateY(0);-moz-transform:translateX(0) translateY(0);-ms-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}33.33%{-webkit-transform:translateX(1.2px) translateY(2px);-moz-transform:translateX(1.2px) translateY(2px);-ms-transform:translateX(1.2px) translateY(2px);transform:translateX(1.2px) translateY(2px)}66.66%{-webkit-transform:translateX(-1.4px) translateY(4px);-moz-transform:translateX(-1.4px) translateY(4px);-ms-transform:translateX(-1.4px) translateY(4px);transform:translateX(-1.4px) translateY(4px);opacity:1}to{-webkit-transform:translateX(1.6px) translateY(6px);-moz-transform:translateX(1.6px) translateY(6px);-ms-transform:translateX(1.6px) translateY(6px);transform:translateX(1.6px) translateY(6px);opacity:0}}"
          }
        </style>
      </defs>
      <g filter="url(#prefix__blur)" id="prefix__snowy-6">
        <path
          d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth={1.2}
        />
        <g fill="none" stroke="#57A0EE" strokeLinecap="round">
          <path strokeWidth={1.2} d="M23 44.5v5" />
          <path transform="rotate(45 -45.234 51.263)" d="M0-2.5v5" />
          <path transform="rotate(90 -12 35)" d="M0-2.5v5" />
          <path transform="rotate(135 1.766 28.263)" d="M0-2.5v5" />
        </g>
        <g fill="none" stroke="#57A0EE" strokeLinecap="round">
          <path strokeWidth={1.2} d="M31 44.5v5" />
          <path transform="rotate(45 -41.234 60.92)" d="M0-2.5v5" />
          <path transform="rotate(90 -8 39)" d="M0-2.5v5" />
          <path transform="rotate(135 5.766 29.92)" d="M0-2.5v5" />
        </g>
        <g fill="none" stroke="#57A0EE" strokeLinecap="round">
          <path strokeWidth={1.2} d="M40 44.5v5" />
          <path transform="rotate(45 -36.734 71.784)" d="M0-2.5v5" />
          <path transform="rotate(90 -3.5 43.5)" d="M0-2.5v5" />
          <path transform="rotate(135 10.266 31.784)" d="M0-2.5v5" />
        </g>
      </g>
    </svg>
  );
}

export default Weather13d;
