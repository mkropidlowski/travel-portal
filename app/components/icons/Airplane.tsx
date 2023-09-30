import * as React from "react";
import { SVGProps } from "react";
const SvgAirplane = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="#323232"
    width="1em"
    height="1em"
    viewBox="-2.5 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
    className="airplane_svg__cf-icon-svg"
    stroke="#323232"
    {...props}
  >
    <path d="M12.382 5.304 10.096 7.59l.006.02L11.838 14a.908.908 0 0 1-.211.794l-.573.573a.339.339 0 0 1-.566-.08l-2.348-4.25-.745-.746-1.97 1.97a3.311 3.311 0 0 1-.75.504l.44 1.447a.875.875 0 0 1-.199.79l-.175.176a.477.477 0 0 1-.672 0l-1.04-1.039-.018-.02-.788-.786-.02-.02-1.038-1.039a.477.477 0 0 1 0-.672l.176-.176a.875.875 0 0 1 .79-.197l1.447.438a3.322 3.322 0 0 1 .504-.75l1.97-1.97-.746-.744-4.25-2.348a.339.339 0 0 1-.08-.566l.573-.573a.909.909 0 0 1 .794-.211l6.39 1.736.02.006 2.286-2.286c.37-.372 1.621-1.02 1.993-.65.37.372-.279 1.622-.65 1.993z" />
  </svg>
);
export default SvgAirplane;
