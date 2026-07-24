import type { SVGProps } from "react";

const RAG = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
  <rect width="128" height="128" rx="24" fill="#0284C7" />
  <ellipse cx="52" cy="36" rx="28" ry="10" fill="#7DD3FC" />
  <path fill="#38BDF8" d="M24 36v18c0 5.5 12.5 10 28 10s28-4.5 28-10V36z" />
  <path fill="#0284C7" stroke="#7DD3FC" strokeWidth="4" d="M24 54v18c0 5.5 12.5 10 28 10s28-4.5 28-10V54z" />
  <circle cx="88" cy="84" r="16" fill="#F43F5E" />
  <path stroke="#FFF" strokeWidth="4" strokeLinecap="round" d="M99 95l12 12" />
</svg>
);

export { RAG };
