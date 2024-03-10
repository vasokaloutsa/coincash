export default function ShopAnywhere({ width, height }) {
  return (
    <svg
      width={width ? width : "540"}
      height={height ? height : "360"}
      viewBox="0 0 540 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="540" height="360" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_14_206"
            transform="scale(0.00040016 0.00060024)"
          />
        </pattern>
        <image
          id="image0_14_206"
          width="2500"
          height="1666"
        />
      </defs>
    </svg>
  );
}