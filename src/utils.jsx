/* eslint-disable react/prop-types */

export const JobIcon = ({
  fillColor1 = "#04009a",
  fillColor2 = "#77acf1",
  width = 32,
  height = 32,
}) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
    width={width}
    height={height}
  >
    <defs>
      <style>
        {`
          .cls-1 { fill: ${fillColor1}; }
          .cls-2 { fill: ${fillColor2}; }
        `}
      </style>
    </defs>
    <g data-name="34. Job" id="_34._Job">
      <path
        className="cls-1"
        d="M21,25H13a1,1,0,0,1,0-2h7a2,2,0,0,0-2-2h-.928a4.524,4.524,0,0,1-2.518-.763,7.37,7.37,0,0,0-9.3.921L1.707,24.707A1,1,0,0,1,.293,23.293l3.549-3.549a9.369,9.369,0,0,1,11.821-1.171A2.524,2.524,0,0,0,17.072,19H18a4,4,0,0,1,4,4v1A1,1,0,0,1,21,25Z"
      ></path>
      <path
        className="cls-2"
        d="M25,10H13a2,2,0,0,1-2-2V5a1,1,0,0,1,1-1H26a1,1,0,0,1,1,1V8A2,2,0,0,1,25,10ZM13,6V8H25V6Z"
      ></path>
      <path
        className="cls-2"
        d="M23,16H15a3,3,0,0,1-3-3V9a1,1,0,0,1,1-1H25a1,1,0,0,1,1,1v4A3,3,0,0,1,23,16Zm-9-6v3a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V10Z"
      ></path>
      <path
        className="cls-2"
        d="M23,6H15a1,1,0,0,1-1-1V3a3,3,0,0,1,3-3h4a3,3,0,0,1,3,3V5A1,1,0,0,1,23,6ZM16,4h6V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1Z"
      ></path>
      <path
        className="cls-1"
        d="M9,32a1,1,0,0,1-.707-1.707A4.384,4.384,0,0,1,11.414,29H20a3.014,3.014,0,0,0,2.4-1.2l7.069-9.425a3.015,3.015,0,0,0-3.027.924l-4.689,5.359a1,1,0,1,1-1.506-1.316l4.69-5.36a5.016,5.016,0,0,1,6.537-.868,1.117,1.117,0,0,1,.471.691,1.046,1.046,0,0,1-.145.8L24,29a5.024,5.024,0,0,1-4,2H11.414a2.4,2.4,0,0,0-1.707.707A1,1,0,0,1,9,32Z"
      ></path>
    </g>
  </svg>
);
