import React, { useState } from "react";
import { XIcon } from "lucide-react";
import { HoneyDdukCharacter } from "./HoneyDdukCharacter";
import { REGIONS, CATEGORIES } from "../data";
interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (region: string, category: string) => void;
}
export function SearchModal({ isOpen, onClose, onSearch }: SearchModalProps) {
  const [selectedRegion, setSelectedRegion] = useState("전국");
  const [selectedCategory, setSelectedCategory] = useState("전체");
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-900/40 backdrop-blur-sm animate-fade-in-up sm:animate-none">
      <div className="bg-white w-full max-w-2xl rounded-3xl p-8 shadow-2xl animate-scale-in relative max-h-[90vh] overflow-y-auto hide-scrollbar">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-warm-400 hover:text-warm-700 bg-warm-50 rounded-full transition-colors"
        >
          <XIcon size={24} />
        </button>

        <div className="flex items-center gap-4 mb-8 mt-2">
          <HoneyDdukCharacter size="sm" animate />
          <h2 className="font-heading text-3xl text-warm-800">
            어디 지역의 정책을 찾아볼까? 🍯
          </h2>
        </div>

        <div className="mb-8">
          <h3 className="font-body font-bold text-warm-700 mb-4 text-base">
            지역 선택
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3">
            {REGIONS.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-200 ${selectedRegion === region ? "bg-honey-400 text-white shadow-md transform scale-105" : "bg-warm-50 text-warm-600 hover:bg-honey-50"}`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="font-body font-bold text-warm-700 mb-4 text-base">
            관심 분야 (선택)
          </h3>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-200 ${selectedCategory === category ? "bg-warm-800 text-white shadow-md" : "bg-warm-50 text-warm-600 hover:bg-warm-100"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => onSearch(selectedRegion, selectedCategory)}
          className="w-full py-5 bg-honey-400 hover:bg-honey-500 text-white font-heading text-2xl rounded-2xl shadow-soft transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
        >
          정책 찾기 🔍
        </button>
      </div>
    </div>
  );
}
