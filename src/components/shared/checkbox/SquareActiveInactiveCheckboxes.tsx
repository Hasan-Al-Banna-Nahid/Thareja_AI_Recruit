type PropsType = {
  active: boolean;
};
const SquareActiveInactiveCheckboxes = ({ active }: PropsType) => {
  return active ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="22"
        height="22"
        rx="3"
        stroke="url(#paint0_linear_5877_31545)"
        stroke-width="2"
      />
      <rect x="3.5" y="4" width="17" height="16" rx="1" fill="#005AFF" />
      <path
        d="M7.53225 11.4823L7.53227 11.4823L10.3466 14.5526L16.4678 7.87503C16.7383 7.57992 17.1817 7.57996 17.4523 7.87501L17.4523 7.87505C17.7159 8.16272 17.7159 8.62287 17.4523 8.91056L17.4523 8.91059L10.8391 16.125C10.7757 16.1943 10.6997 16.25 10.6151 16.2882C10.5304 16.3265 10.439 16.3464 10.3465 16.3463M7.53225 11.4823L10.3466 16.1963M7.53225 11.4823C7.26167 11.1873 6.81834 11.1872 6.54782 11.4823M7.53225 11.4823L6.65837 11.5837M10.3465 16.3463L10.3466 16.1963M10.3465 16.3463C10.3465 16.3463 10.3466 16.3463 10.3466 16.3463V16.1963M10.3465 16.3463C10.1657 16.3462 9.98767 16.2705 9.85439 16.1251L6.54782 12.5178L6.65835 12.4164L6.54779 12.5178C6.28406 12.2302 6.28407 11.7699 6.54782 11.4823M10.3466 16.1963C10.2084 16.1963 10.0702 16.1386 9.96497 16.0237L6.65837 12.4164C6.44721 12.1862 6.44721 11.8139 6.65837 11.5837M6.54782 11.4823C6.54781 11.4823 6.5478 11.4823 6.54779 11.4823L6.65837 11.5837M6.54782 11.4823L6.65837 11.5837"
        fill="white"
        stroke="white"
        stroke-width="0.3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5877_31545"
          x1="-1.54078e-07"
          y1="0.800001"
          x2="26.8373"
          y2="5.23636"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#01D18F" />
          <stop offset="1" stop-color="#005AFF" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="22"
        height="22"
        rx="3"
        stroke="url(#paint0_linear_5877_31648)"
        stroke-width="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5877_31648"
          x1="-1.54078e-07"
          y1="0.800001"
          x2="26.8373"
          y2="5.23636"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#01D18F" />
          <stop offset="1" stop-color="#005AFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SquareActiveInactiveCheckboxes;
