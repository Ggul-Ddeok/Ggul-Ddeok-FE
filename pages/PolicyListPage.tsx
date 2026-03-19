import React from "react";
import { PolicyCard } from "../components/PolicyCard";
import { HoneyDdukCharacter } from "../components/HoneyDdukCharacter";
import { Policy } from "../types";
import { MOCK_POLICIES, CATEGORIES } from "../data";
interface PolicyListPageProps {
  region: string;
  category: string;
  onPolicyClick: (id: number) => void;
  onSave: (id: number, e: React.MouseEvent) => void;
  savedPolicies: number[];
}
export function PolicyListPage({
  region,
  category,
  onPolicyClick,
  onSave,
  savedPolicies,
}: PolicyListPageProps) {
  // Filter mock data based on region and category
  const filteredPolicies = MOCK_POLICIES.filter((p) => {
    const matchRegion =
      region === "전국" || p.region === region || p.region === "전국";
    const matchCategory = category === "전체" || p.tags.includes(category);
    return matchRegion && matchCategory;
  });
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-warm-50 pb-16">
      <main className="max-w-6xl mx-auto px-6 pt-8">
        {/* AI Summary Banner */}
        <div className="bg-honey-100 rounded-2xl p-5 md:p-6 mb-8 flex items-center gap-4 shadow-sm animate-fade-in-up">
          <HoneyDdukCharacter size="md" animate />
          <p className="font-body text-warm-800 text-base md:text-lg leading-relaxed">
            <strong className="font-heading text-xl text-honey-600">
              {region}
            </strong>{" "}
            지역에는{" "}
            {category !== "전체" && (
              <strong className="text-honey-600">{category} 관련 </strong>
            )}
            정책이{" "}
            <strong className="font-heading text-xl text-honey-600">
              {filteredPolicies.length}개
            </strong>{" "}
            있어요! ✨
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-colors cursor-default ${category === cat ? "bg-warm-800 text-white shadow-md" : "bg-white text-warm-500 border border-warm-200 hover:bg-warm-50"}`}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Policy List Grid */}
        {filteredPolicies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPolicies.map((policy, index) => (
              <div
                key={policy.id}
                className={`animate-fade-in-up stagger-${(index % 5) + 1} h-full`}
              >
                <PolicyCard
                  policy={policy}
                  onClick={() => onPolicyClick(policy.id)}
                  onSave={(e) => onSave(policy.id, e)}
                  isSaved={savedPolicies.includes(policy.id)}
                  className="h-full flex flex-col"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 bg-white rounded-3xl shadow-sm animate-fade-in-up">
            <div className="opacity-50 grayscale mb-6">
              <HoneyDdukCharacter size="lg" />
            </div>
            <p className="font-heading text-2xl text-warm-400">
              아직 정책 정보가 없어요 😢
            </p>
            <p className="font-body text-base text-warm-400 mt-2">
              다른 지역이나 분야를 찾아볼까요?
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
