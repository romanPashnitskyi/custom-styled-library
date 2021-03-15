import * as React from 'react';

interface PropTypes extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const ArrowRight: React.FC<PropTypes> = ({ color, ...rest }) => (
  <svg width={18} height={14.828} viewBox="0 0 18 14.828" {...rest}>
    <g
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d="M1 7.414h16" />
      <path data-name="Shape" d="M11 1.414l6 6-6 6" />
    </g>
  </svg>
);

ArrowRight.defaultProps = {
  color: 'currentcolor',
};

export default ArrowRight;
