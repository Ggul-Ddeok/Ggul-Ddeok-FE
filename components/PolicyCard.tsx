import React from "react";
import { BookmarkIcon } from "lucide-react";
import { Policy } from "../types";
interface PolicyCardProps {
  policy: Policy;
  onClick: () => void;
  onSave: (e: React.MouseEvent) => void;
  isSaved: boolean;
  className?: string;
}
const getTagColor = (tag: string) => {
  switch (tag) {
    case "취업":
      return "bg-honey-100 text-honey-800 border-honey-200";
    case "교육":
      return "bg-blue-50 text-blue-600 border-blue-200";
    case "주거":
      return "bg-green-50 text-green-600 border-green-200";
    case "금융":
      return "bg-purple-50 text-purple-600 border-purple-200";
    case "창업":
      return "bg-orange-50 text-orange-600 border-orange-200";
    case "복지":
      return "bg-pink-50 text-pink-600 border-pink-200";
    default:
      return "bg-warm-100 text-warm-700 border-warm-200";
  }
};
export function PolicyCard({
  policy,
  onClick,
  onSave,
  isSaved,
  className = "",
}: PolicyCardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-honey-50 relative ${className}`}
    >
      <button
        onClick={onSave}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-warm-50 transition-colors z-10"
        aria-label={isSaved ? "저장 취소" : "정책 저장"}
      >
        <BookmarkIcon
          size={22}
          className={`transition-colors duration-300 ${isSaved ? "fill-honey-400 text-honey-400" : "text-warm-300"}`}
        />
      </button>

      <div className="pr-10">
        <h3 className="font-heading text-xl text-warm-800 mb-2 leading-tight">
          {policy.name}
        </h3>
        <p className="font-body text-sm text-warm-500 italic mb-4 line-clamp-2">
          "{policy.summary}"
        </p>

        <div className="flex flex-wrap gap-2">
          {policy.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-medium px-2.5 py-1 rounded-full border ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
          <span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-warm-50 text-warm-500 border-warm-200">
            {policy.region}
          </span>
        </div>
      </div>
    </div>
  );
}
