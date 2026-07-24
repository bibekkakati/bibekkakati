import type { SVGProps } from "react";

const LangChain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
  <rect width="128" height="128" rx="24" fill="#15803D" />
  <path fill="#4ADE80" d="M44 32h24a16 16 0 0 1 16 16v0a16 16 0 0 1-16 16H44a16 16 0 0 1-16-16v0a16 16 0 0 1 16-16z" />
  <path fill="#22C55E" d="M60 64h24a16 16 0 0 1 16 16v0a16 16 0 0 1-16 16H60a16 16 0 0 1-16-16v0a16 16 0 0 1 16-16z" />
  <circle cx="48" cy="48" r="6" fill="#15803D" />
  <circle cx="80" cy="80" r="6" fill="#15803D" />
</svg>
);

export { LangChain };
