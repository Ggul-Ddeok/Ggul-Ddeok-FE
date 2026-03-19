import React from "react";
import { ArrowLeftIcon } from "lucide-react";
import { HoneyDdukCharacter } from "./HoneyDdukCharacter";
import { PageState } from "../types";
interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  currentPage: PageState;
  onNavigate: (page: PageState) => void;
  onSearchClick: () => void;
}
export function Header({
  title,
  showBack = false,
  onBack,
  currentPage,
  onNavigate,
  onSearchClick,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-honey-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Logo & Back */}
        <div className="flex items-center gap-4">
          {showBack && (
            <button
              onClick={onBack}
              className="p-2 -ml-2 text-warm-600 hover:text-warm-800 transition-colors rounded-full hover:bg-warm-50"
              aria-label="뒤로 가기"
            >
              <ArrowLeftIcon size={24} />
            </button>
          )}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate("main")}
          >
            <HoneyDdukCharacter size="sm" />
            <h1 className="font-heading text-2xl text-honey-500 tracking-wide mt-1">
              꿀떡
            </h1>
          </div>
          {title && showBack && (
            <span className="hidden sm:inline-block ml-4 pl-4 border-l border-warm-200 font-heading text-lg text-warm-600 mt-1">
              {title}
            </span>
          )}
        </div>

        {/* Right: Web Navigation */}
        <nav className="hidden sm:flex items-center gap-8">
          <button
            onClick={() => onNavigate("main")}
            className={`font-heading text-lg relative transition-colors ${currentPage === "main" ? "text-honey-500" : "text-warm-400 hover:text-warm-600"}`}
          >
            홈
            {currentPage === "main" && (
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-honey-500 rounded-full" />
            )}
          </button>
          <button
            onClick={onSearchClick}
            className={`font-heading text-lg relative transition-colors ${currentPage === "policyList" ? "text-honey-500" : "text-warm-400 hover:text-warm-600"}`}
          >
            정책찾기
            {currentPage === "policyList" && (
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-honey-500 rounded-full" />
            )}
          </button>
          <button
            onClick={() => onNavigate("myPage")}
            className={`font-heading text-lg relative transition-colors ${currentPage === "myPage" ? "text-honey-500" : "text-warm-400 hover:text-warm-600"}`}
          >
            마이페이지
            {currentPage === "myPage" && (
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-honey-500 rounded-full" />
            )}
          </button>
        </nav>

        {/* Mobile Nav Toggle (Simplified for this scope, relying on buttons in pages if needed, but we assume web-first now) */}
        <div className="sm:hidden flex items-center gap-4">
          <button
            onClick={onSearchClick}
            className="text-warm-500 font-heading"
          >
            찾기
          </button>
          <button
            onClick={() => onNavigate("myPage")}
            className="text-warm-500 font-heading"
          >
            마이
          </button>
        </div>
      </div>
    </header>
  );
}
