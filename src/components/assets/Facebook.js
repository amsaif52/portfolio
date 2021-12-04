function Facebook({ fill }) {
  return (
    <svg
      width="25"
      height="45"
      viewBox="0 0 25 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.9371 25.1214L24.2092 17.0388H16.2516V11.7961C16.2516 9.58439 17.3611 7.42719 20.9253 7.42719H24.5455V0.546117C24.5455 0.546117 21.2615 0 18.1233 0C11.5667 0 7.28522 3.87192 7.28522 10.8786V17.0388H0V25.1214H7.28522V44.6614C8.74781 44.8854 10.2441 45 11.7684 45C13.2927 45 14.789 44.8854 16.2516 44.6614V25.1214H22.9371Z"
        fill={fill}
      />
    </svg>
  );
}

Facebook.defaultProps = {
  fill: "#FFF8E8",
};
export default Facebook;
