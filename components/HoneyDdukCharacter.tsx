import React from "react";
interface HoneyDdukCharacterProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animate?: boolean;
}
export function HoneyDdukCharacter({
  size = "md",
  className = "",
  animate = false,
}: HoneyDdukCharacterProps) {
  const sizeMap = {
    sm: "w-12 h-12",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  };
  return (
    <div
      className={`${sizeMap[size]} ${animate ? "animate-float" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 140 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Plate / Dish */}
        <ellipse cx="70" cy="95" rx="65" ry="18" fill="#C4A882" />
        <ellipse cx="70" cy="92" rx="60" ry="15" fill="#D4B896" />
        <ellipse cx="70" cy="89" rx="55" ry="12" fill="#E0C9A8" />

        {/* === Dduk 1 (Back Left) - Warm Amber === */}
        <circle cx="45" cy="58" r="26" fill="#FFBC42" />
        {/* Shine */}
        <ellipse cx="36" cy="47" rx="5" ry="4" fill="#FFFFFF" opacity="0.45" />
        <ellipse cx="33" cy="52" rx="2.5" ry="2" fill="#FFFFFF" opacity="0.3" />
        {/* Cheeks */}
        <circle cx="33" cy="64" r="3.5" fill="#F5A623" opacity="0.5" />
        <circle cx="57" cy="64" r="3.5" fill="#F5A623" opacity="0.5" />
        {/* Eyes */}
        <circle cx="38" cy="58" r="2.5" fill="#3D2B1F" />
        <circle cx="52" cy="58" r="2.5" fill="#3D2B1F" />
        {/* Smile */}
        <path
          d="M43 63C43 63 45 66 45 66C45 66 47 63 47 63"
          stroke="#3D2B1F"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* === Dduk 2 (Back Right) - Light Cream === */}
        <circle cx="95" cy="55" r="26" fill="#FFE8A0" />
        {/* Shine */}
        <ellipse cx="86" cy="44" rx="5" ry="4" fill="#FFFFFF" opacity="0.5" />
        <ellipse
          cx="83"
          cy="49"
          rx="2.5"
          ry="2"
          fill="#FFFFFF"
          opacity="0.35"
        />
        {/* Cheeks */}
        <circle cx="83" cy="61" r="3.5" fill="#FFB74D" opacity="0.5" />
        <circle cx="107" cy="61" r="3.5" fill="#FFB74D" opacity="0.5" />
        {/* Eyes */}
        <circle cx="88" cy="55" r="2.5" fill="#3D2B1F" />
        <circle cx="102" cy="55" r="2.5" fill="#3D2B1F" />
        {/* Smile */}
        <path
          d="M93 60C93 60 95 63 95 63C95 63 97 60 97 60"
          stroke="#3D2B1F"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* === Dduk 3 (Front Center) - Bright Yellow === */}
        <circle cx="70" cy="72" r="28" fill="#FFD54F" />
        {/* Shine */}
        <ellipse cx="60" cy="60" rx="6" ry="4.5" fill="#FFFFFF" opacity="0.5" />
        <ellipse cx="56" cy="65" rx="3" ry="2" fill="#FFFFFF" opacity="0.35" />
        {/* Cheeks */}
        <circle cx="57" cy="78" r="4" fill="#FFB74D" opacity="0.55" />
        <circle cx="83" cy="78" r="4" fill="#FFB74D" opacity="0.55" />
        {/* Eyes */}
        <circle cx="62" cy="72" r="2.8" fill="#3D2B1F" />
        <circle cx="78" cy="72" r="2.8" fill="#3D2B1F" />
        {/* Smile */}
        <path
          d="M67 77C67 77 70 81 70 81C70 81 73 77 73 77"
          stroke="#3D2B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
