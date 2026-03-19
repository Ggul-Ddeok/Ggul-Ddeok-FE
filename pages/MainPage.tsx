import React from "react";
import { SparklesIcon, TargetIcon, BookmarkIcon } from "lucide-react";
import { HoneyDdukCharacter } from "../components/HoneyDdukCharacter";
interface MainPageProps {
  onSearchClick: () => void;
}
export function MainPage({ onSearchClick }: MainPageProps) {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-honey-50 via-white to-honey-50/30 flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-12 md:psy-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.4rem] text-warm-800 mb-6 leading-tight animate-fade-in-up stagger-1">
              고졸 청년을 위한
              <br />
              <span className="whitespace-nowrap">
                <span className="text-honey-500 relative inline-block mt-2">
                  맞춤 정책
                  <svg
                    className="absolute w-full h-3 md:h-4 -bottom-1 md:-bottom-2 left-0 text-honey-200 -z-10"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                을 찾아봐요!
              </span>
            </h2>

            <p className="font-body text-warm-500 text-lg md:text-xl mb-10 animate-fade-in-up stagger-2 max-w-md">
              마이스터고·특성화고 졸업생을 위한
              <br className="hidden md:block" />
              정책을 AI가 쉽게 정리해줄게요.
            </p>

            <button
              onClick={onSearchClick}
              className="w-full max-w-xs py-4 md:py-5 bg-honey-400 hover:bg-honey-500 text-white font-heading text-2xl rounded-full shadow-soft transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 animate-fade-in-up stagger-3 mb-10"
            >
              정책 찾아보기 🔍
            </button>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 animate-fade-in-up stagger-4">
              <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-warm-100 text-warm-600 text-sm font-medium">
                <SparklesIcon size={18} className="text-honey-500" />
                <span>AI 요약</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-warm-100 text-warm-600 text-sm font-medium">
                <TargetIcon size={18} className="text-blue-400" />
                <span>맞춤 추천</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-warm-100 text-warm-600 text-sm font-medium">
                <BookmarkIcon size={18} className="text-green-400" />
                <span>저장 기능</span>
              </div>
            </div>
          </div>

          {/* Right Column: Character */}
          <div className="flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative">
              {/* Decorative background glow */}
              <div className="absolute inset-0 bg-honey-100 rounded-full blur-3xl opacity-60 scale-150 animate-pulse" />
              <HoneyDdukCharacter
                size="xl"
                animate
                className="drop-shadow-2xl relative z-10 w-64 h-64 md:w-80 md:h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
