import type { SVGProps } from "react";

const Microservice = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
  <rect width="128" height="128" rx="24" fill="#0F172A" />
  <polygon points="64,24 96,42 96,78 64,96 32,78 32,42" fill="none" stroke="#6366F1" strokeWidth="6" />
  <circle cx="64" cy="24" r="8" fill="#A855F7" />
  <circle cx="96" cy="42" r="8" fill="#EC4899" />
  <circle cx="96" cy="78" r="8" fill="#3B82F6" />
  <circle cx="64" cy="96" r="8" fill="#10B981" />
  <circle cx="32" cy="78" r="8" fill="#F59E0B" />
  <circle cx="32" cy="42" r="8" fill="#EF4444" />
</svg>
);

export { Microservice };
