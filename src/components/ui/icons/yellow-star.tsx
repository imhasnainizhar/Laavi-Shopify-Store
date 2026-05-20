import { SVGProps } from "react";

interface YellowStarIconProps extends SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export default function YellowStarIcon({
  width = 20,
  height = 19,
  ...props
}: YellowStarIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Star"
      role="img"
      {...props}
    >
      <path
        d="M9.96064 0L12.7308 6.66036L19.9213 7.23681L14.4429 11.9296L16.1166 18.9462L9.96064 15.1862L3.80464 18.9462L5.47836 11.9296L2.19345e-05 7.23681L7.19044 6.66036L9.96064 0Z"
        fill="#FE9D44"
      />
    </svg>
  );
}