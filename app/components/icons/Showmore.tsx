import * as React from "react";
import { SVGProps } from "react";
const SvgShowmore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    fill="#32323"
    stroke="#32323"
    {...props}
  >
    <g id="showmore_svg__SVGRepo_iconCarrier">
      <defs>
        <style>
          {
            ".showmore_svg__a{fill:none;stroke:#323232;stroke-linecap:round;stroke-linejoin:round}"
          }
        </style>
      </defs>
      <circle className="showmore_svg__a" cx={10.693} cy={11.106} r={5.194} />
      <path
        className="showmore_svg__a"
        d="M15.241 8.507h24.37c3.032 0 3.386 5.745.334 5.745H14.972"
      />
      <circle className="showmore_svg__a" cx={11.127} cy={36.894} r={5.194} />
      <path
        className="showmore_svg__a"
        d="M15.675 34.294h24.37c3.031 0 3.385 5.745.333 5.745H15.405"
      />
      <circle className="showmore_svg__a" cx={20.355} cy={24.306} r={4.985} />
      <path
        className="showmore_svg__a"
        d="M24.61 21.28h15.562c3.025 0 3.037 6.092 0 6.092h-15.56"
      />
    </g>
  </svg>
);
export default SvgShowmore;
