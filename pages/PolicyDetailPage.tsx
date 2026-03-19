import React from "react";
import {
  UsersIcon,
  CoinsIcon,
  CalendarIcon,
  FileTextIcon,
  ExternalLinkIcon,
  BookmarkIcon,
} from "lucide-react";
import { HoneyDdukCharacter } from "../components/HoneyDdukCharacter";
import { Policy } from "../types";
interface PolicyDetailPageProps {
  policy: Policy;
  onSave: (id: number, e: React.MouseEvent) => void;
  isSaved: boolean;
}
export function PolicyDetailPage({
  policy,
  onSave,
  isSaved,
}: PolicyDetailPageProps) {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-warm-50 pb-24">
      <main className="max-w-3xl mx-auto px-6 pt-10">
        {/* Title & Tags */}
        <div className="mb-8 animate-fade-in-up">
          <div className="flex flex-wrap gap-2 mb-4">
            {policy.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm font-medium px-3 py-1.5 rounded-full bg-white border border-warm-200 text-warm-600 shadow-sm"
              >
                {tag}
              </span>
            ))}
            <span className="text-sm font-medium px-3 py-1.5 rounded-full bg-honey-100 border border-honey-200 text-honey-800 shadow-sm">
              {policy.region}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-warm-900 leading-tight">
            {policy.name}
          </h1>
        </div>

        {/* AI Summary Card */}
        <div className="bg-honey-100 rounded-3xl p-6 md:p-8 mb-10 shadow-sm relative animate-fade-in-up stagger-1">
          <div className="absolute -top-6 -right-4 md:-right-6">
            <HoneyDdukCharacter size="md" animate />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-honey-400 text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-sm">
              AI 요약
            </span>
            <h3 className="font-heading text-honey-800 text-xl md:text-2xl">
              꿀떡이의 한줄 요약 ✨
            </h3>
          </div>
          <p className="font-body text-warm-800 font-medium text-lg leading-relaxed md:pr-16">
            {policy.summary}
          </p>
        </div>

        {/* Detail Sections */}
        <div className="space-y-6 animate-fade-in-up stagger-2 mb-12">
          <SectionCard
            icon={<UsersIcon size={24} className="text-blue-500" />}
            title="지원 대상"
            content={policy.details.split("대상")[0] + "대상"}
          />
          <SectionCard
            icon={<CoinsIcon size={24} className="text-honey-500" />}
            title="지원 내용"
            content={policy.details.split("대상으로")[1] || policy.details}
          />
          <SectionCard
            icon={<CalendarIcon size={24} className="text-green-500" />}
            title="신청 기간"
            content="상시 접수 (예산 소진 시 조기 마감될 수 있습니다)"
          />
          <SectionCard
            icon={<FileTextIcon size={24} className="text-purple-500" />}
            title="신청 방법"
            content="온라인 신청 (청년몽땅정보통 또는 해당 지자체 홈페이지)"
          />
        </div>

        {/* Inline Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3 border-t border-warm-200 pt-10">
          <button
            onClick={(e) => onSave(policy.id, e)}
            className={`w-full sm:w-64 py-4 rounded-2xl font-heading text-xl flex items-center justify-center gap-2 transition-all duration-300 ${isSaved ? "bg-warm-100 text-warm-600 border border-warm-200" : "bg-honey-400 text-white shadow-soft hover:bg-honey-500 hover:-translate-y-1"}`}
          >
            <BookmarkIcon
              size={24}
              className={isSaved ? "fill-warm-400 text-warm-400" : ""}
            />
            {isSaved ? "저장됨 ✅" : "저장하기 💾"}
          </button>
          <button className="w-full sm:w-64 py-4 rounded-2xl font-heading text-xl flex items-center justify-center gap-2 border-2 border-warm-800 text-warm-800 hover:bg-warm-50 transition-colors hover:-translate-y-1">
            신청하러 가기
            <ExternalLinkIcon size={22} />
          </button>
        </div>
      </main>
    </div>
  );
}
function SectionCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card border border-warm-50">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-warm-50 rounded-xl">{icon}</div>
        <h3 className="font-heading text-2xl text-warm-800">{title}</h3>
      </div>
      <p className="font-body text-warm-600 leading-relaxed text-base md:text-lg">
        {content}
      </p>
    </div>
  );
}
