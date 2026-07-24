import type { SVGProps } from "react";

const LangGraph = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
  <rect width="128" height="128" rx="24" fill="#0F766E" />
  <circle cx="40" cy="40" r="14" fill="#2DD4BF" />
  <circle cx="88" cy="40" r="14" fill="#2DD4BF" />
  <circle cx="64" cy="88" r="14" fill="#F43F5E" />
  <path stroke="#99F6E4" strokeWidth="4" fill="none" d="M40 40h48L64 88z" />
</svg>
);

export { LangGraph };
