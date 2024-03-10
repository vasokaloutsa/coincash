export default function AirplaneTickets({ width, height }) {
  return (
    <svg
      width={width ? width : "81"}
      height={height ? height : "80"}
      maxWidth="81"
      maxHeight="80px"
      viewBox="0 0 81 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.8333 52.1667L59.5 44.3333C60.3333 44.1111 60.9589 43.5967 61.3767 42.79C61.7944 41.9833 61.8911 41.1644 61.6667 40.3333C61.4444 39.5 60.9589 38.8755 60.21 38.46C59.4611 38.0444 58.6689 37.9467 57.8333 38.1667L49.6667 40.3333L36.3333 27.8333L31.6667 29L39.6667 43L31.6667 45L27.5 41.8333L24.3333 42.6667L29.8333 52.1667ZM67 66.6667H13.6667C11.8333 66.6667 10.2633 66.0133 8.95667 64.7067C7.65001 63.4 6.99778 61.8311 7.00001 60V46.6667C8.83334 46.6667 10.4033 46.0133 11.71 44.7067C13.0167 43.4 13.6689 41.8311 13.6667 40C13.6667 38.1667 13.0133 36.5967 11.7067 35.29C10.4 33.9833 8.83112 33.3311 7.00001 33.3333V20C7.00001 18.1667 7.65334 16.5967 8.96001 15.29C10.2667 13.9833 11.8356 13.3311 13.6667 13.3333H67C68.8333 13.3333 70.4033 13.9867 71.71 15.2933C73.0167 16.6 73.6689 18.1689 73.6667 20V60C73.6667 61.8333 73.0133 63.4033 71.7067 64.71C70.4 66.0167 68.8311 66.6689 67 66.6667Z"
        fill="#0066FF"
      />
    </svg>
  );
}
