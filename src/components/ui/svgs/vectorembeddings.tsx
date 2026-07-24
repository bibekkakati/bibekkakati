import type { SVGProps } from "react";

const VectorEmbeddings = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
  <rect width="128" height="128" rx="24" fill="#8B5CF6" />
  <circle cx="36" cy="36" r="6" fill="#DDD6FE" />
  <circle cx="64" cy="36" r="6" fill="#DDD6FE" />
  <circle cx="92" cy="36" r="6" fill="#DDD6FE" />
  <circle cx="36" cy="64" r="6" fill="#DDD6FE" />
  <circle cx="64" cy="64" r="10" fill="#C084FC" />
  <circle cx="92" cy="64" r="6" fill="#DDD6FE" />
  <circle cx="36" cy="92" r="6" fill="#DDD6FE" />
  <circle cx="64" cy="92" r="6" fill="#DDD6FE" />
  <circle cx="92" cy="92" r="6" fill="#DDD6FE" />
  <path stroke="#E9D5FF" strokeWidth="3" d="M36 36l28 28 28-28M36 92l28-28 28 28" />
</svg>
);

export { VectorEmbeddings };
