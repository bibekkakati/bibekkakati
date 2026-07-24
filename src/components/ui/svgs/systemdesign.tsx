import type { SVGProps } from "react";

const SystemDesign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
  <rect width="128" height="128" rx="24" fill="#1E293B" />
  <circle cx="64" cy="36" r="14" fill="#38BDF8" />
  <circle cx="36" cy="92" r="14" fill="#818CF8" />
  <circle cx="92" cy="92" r="14" fill="#34D399" />
  <path stroke="#94A3B8" strokeWidth="4" d="M64 50L36 78M64 50l28 28M36 92h56" />
</svg>
);

export { SystemDesign };
