import * as React from 'react'

const SvgClose = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#212121"
      fillRule="evenodd"
      d="M22.648 1.351a1.2 1.2 0 010 1.698L13.698 12l8.95 8.951a1.2 1.2 0 11-1.697 1.697L12 13.698l-8.951 8.95a1.2 1.2 0 11-1.698-1.697L10.303 12 1.35 3.049A1.2 1.2 0 013.05 1.35L12 10.303l8.951-8.952a1.2 1.2 0 011.697 0z"
      clipRule="evenodd"
    />
  </svg>
))
export default SvgClose
