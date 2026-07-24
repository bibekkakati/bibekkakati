import type { SVGProps } from "react";

const LLM = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
  <rect width="128" height="128" rx="24" fill="#4338CA" />
  <path fill="#A5B4FC" d="M64 24l8 24 24 8-24 8-8 24-8-24-24-8 24-8zM32 80l4 12 12 4-12 4-4 12-4-12-12-4 12-4zM92 76l4 12 12 4-12 4-4 12-4-12-12-4 12-4z" />
</svg>
);

export { LLM };
