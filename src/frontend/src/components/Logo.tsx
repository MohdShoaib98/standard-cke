interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Standard Commercial Kitchen Equipments logo"
      role="img"
    >
      <defs>
        {/* Yellow gradient for front face */}
        <linearGradient id="yellowGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5C518" />
          <stop offset="55%" stopColor="#E6A800" />
          <stop offset="100%" stopColor="#C88A00" />
        </linearGradient>
        {/* Silver gradient for bottom-right bevel */}
        <linearGradient id="silverGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#8a8a8a" />
        </linearGradient>
        {/* Shine overlay */}
        <linearGradient id="shineGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        {/* Depth shadow */}
        <linearGradient id="depthGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>

      {/* ===== 3D BEVEL EFFECT — depth offset layers ===== */}
      {/* Black depth shadow offset (bottom-right) */}
      <g transform="translate(6, 6)" opacity="0.7">
        {/* S shape in pure black for depth */}
        <path
          d="M62 14H38C30.3 14 24 20.3 24 28C24 35.7 30.3 42 38 42H62C69.7 42 76 48.3 76 56C76 63.7 69.7 70 62 70H38C30.3 70 24 63.7 24 56"
          stroke="#0a0a0a"
          strokeWidth="18"
          strokeLinecap="square"
          fill="none"
        />
      </g>

      {/* Silver bevel layer (offset bottom-right) */}
      <g transform="translate(3, 3)">
        <path
          d="M62 14H38C30.3 14 24 20.3 24 28C24 35.7 30.3 42 38 42H62C69.7 42 76 48.3 76 56C76 63.7 69.7 70 62 70H38C30.3 70 24 63.7 24 56"
          stroke="url(#silverGrad)"
          strokeWidth="18"
          strokeLinecap="square"
          fill="none"
        />
      </g>

      {/* ===== MAIN S SHAPE — yellow front face ===== */}
      <path
        d="M62 14H38C30.3 14 24 20.3 24 28C24 35.7 30.3 42 38 42H62C69.7 42 76 48.3 76 56C76 63.7 69.7 70 62 70H38C30.3 70 24 63.7 24 56"
        stroke="url(#yellowGrad)"
        strokeWidth="18"
        strokeLinecap="square"
        fill="none"
      />

      {/* Black outline on yellow for crisp definition */}
      <path
        d="M62 14H38C30.3 14 24 20.3 24 28C24 35.7 30.3 42 38 42H62C69.7 42 76 48.3 76 56C76 63.7 69.7 70 62 70H38C30.3 70 24 63.7 24 56"
        stroke="#0a0a0a"
        strokeWidth="19.5"
        strokeLinecap="square"
        fill="none"
        opacity="0"
      />

      {/* ===== SHINE / REFLECTION overlay ===== */}
      <path
        d="M62 14H38C30.3 14 24 20.3 24 28C24 35.7 30.3 42 38 42H62C69.7 42 76 48.3 76 56C76 63.7 69.7 70 62 70H38C30.3 70 24 63.7 24 56"
        stroke="url(#shineGrad)"
        strokeWidth="10"
        strokeLinecap="square"
        fill="none"
      />

      {/* ===== BORDER stroke for crisp edge definition ===== */}
      <path
        d="M62 14H38C30.3 14 24 20.3 24 28C24 35.7 30.3 42 38 42H62C69.7 42 76 48.3 76 56C76 63.7 69.7 70 62 70H38C30.3 70 24 63.7 24 56"
        stroke="#0a0a0a"
        strokeWidth="1.5"
        strokeLinecap="square"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
