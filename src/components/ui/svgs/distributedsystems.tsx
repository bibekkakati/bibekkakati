import type { SVGProps } from "react";

const DistributedSystems = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
  <rect width="128" height="128" rx="24" fill="#1E1E38" />
  <circle cx="64" cy="64" r="18" fill="#6366F1" />
  <circle cx="30" cy="36" r="12" fill="#06B6D4" />
  <circle cx="98" cy="36" r="12" fill="#10B981" />
  <circle cx="30" cy="92" r="12" fill="#F59E0B" />
  <circle cx="98" cy="92" r="12" fill="#EC4899" />
  <path stroke="#818CF8" strokeWidth="4" d="M40 44l16 12M88 44L72 56M40 84l16-12M88 84L72 72" />
</svg>
);

export { DistributedSystems };
