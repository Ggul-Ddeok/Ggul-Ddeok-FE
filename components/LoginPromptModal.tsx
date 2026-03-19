import React from "react";
import { MessageCircleIcon } from "lucide-react";
import { HoneyDdukCharacter } from "./HoneyDdukCharacter";
interface LoginPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onKakaoLogin: () => void;
}
export function LoginPromptModal({
  isOpen,
  onClose,
  onKakaoLogin,
}: LoginPromptModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-900/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-sm rounded-3xl p-8 shadow-2xl animate-scale-in text-center relative">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <HoneyDdukCharacter size="lg" animate />
            <div className="absolute -top-4 -right-12 bg-white px-4 py-2 rounded-2xl rounded-bl-none shadow-md border border-honey-100 font-heading text-warm-800 text-sm whitespace-nowrap animate-fade-in-up">
              저장하려면 로그인이
              <br />
              필요해요! 🍯
            </div>
          </div>
        </div>

        <h2 className="font-heading text-2xl text-warm-800 mb-2 mt-6">
          3초만에 로그인하기
        </h2>
        <p className="font-body text-warm-500 text-sm mb-8">
          로그인하고 나에게 맞는 정책을
          <br />
          편하게 모아보세요.
        </p>

        <button
          onClick={onKakaoLogin}
          className="w-full py-4 bg-[#FEE500] hover:bg-[#FDD800] text-black font-bold rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2 mb-4"
        >
          <MessageCircleIcon size={20} className="fill-black" />
          카카오로 시작하기
        </button>

        <button
          onClick={onClose}
          className="text-warm-400 hover:text-warm-600 font-medium text-sm underline underline-offset-4 transition-colors"
        >
          나중에 할게요
        </button>
      </div>
    </div>
  );
}
