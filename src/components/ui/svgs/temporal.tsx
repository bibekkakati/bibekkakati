import type { SVGProps } from "react";

const Temporal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
  <circle cx="64" cy="64" r="56" fill="#111827" />
  <path fill="none" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" d="M64 24a40 40 0 1 1-28.28 11.72" />
  <polyline points="40 24 35.72 35.72 47.44 40" fill="none" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
  <circle cx="64" cy="64" r="16" fill="#60A5FA" />
</svg>
);

export { Temporal };
