import type { SVGProps } from "react";

const GRPC = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
  <rect width="128" height="128" rx="24" fill="#244c5a" />
  <path fill="#24b5a6" d="M38 32h52v20H38zM38 76h52v20H38z" />
  <circle cx="48" cy="42" r="4" fill="#fff" />
  <circle cx="48" cy="86" r="4" fill="#fff" />
  <path stroke="#fff" strokeWidth="4" strokeDasharray="4 4" d="M64 52v24" />
</svg>
);

export { GRPC };
