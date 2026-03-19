import React from "react";
import { LogOutIcon, BookmarkIcon } from "lucide-react";
import { PolicyCard } from "../components/PolicyCard";
import { HoneyDdukCharacter } from "../components/HoneyDdukCharacter";
import { Policy } from "../types";
interface MyPageProps {
  isLoggedIn: boolean;
  savedPolicies: number[];
  allPolicies: Policy[];
  onPolicyClick: (id: number) => void;
  onSave: (id: number, e: React.MouseEvent) => void;
  onLogout: () => void;
  onLoginClick: () => void;
}
export function MyPage({
  isLoggedIn,
  savedPolicies,
  allPolicies,
  onPolicyClick,
  onSave,
  onLogout,
  onLoginClick,
}: MyPageProps) {
  const savedPolicyList = allPolicies.filter((p) =>
    savedPolicies.includes(p.id),
  );
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-warm-50 pb-24">
      <main className="max-w-6xl mx-auto px-6 pt-10">
        {/* Profile Section */}
        <div className="bg-white rounded-3xl p-8 shadow-card mb-12 animate-fade-in-up flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="w-24 h-24 rounded-full bg-honey-100 flex items-center justify-center shrink-0">
              <HoneyDdukCharacter size="md" />
            </div>
            <div>
              {isLoggedIn ? (
                <>
                  <h2 className="font-heading text-3xl text-warm-800 mb-2">
                    꿀떡 유저님 🍯
                  </h2>
                  <p className="font-body text-base text-warm-400">
                    카카오 계정으로 로그인됨
                  </p>
                </>
              ) : (
                <>
                  <h2 className="font-heading text-3xl text-warm-800 mb-2">
                    로그인이 필요해요
                  </h2>
                  <p className="font-body text-base text-warm-400">
                    로그인하고 정책을 저장해보세요
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="w-full md:w-auto">
            {isLoggedIn ? (
              <button
                onClick={onLogout}
                className="w-full md:w-auto px-8 py-4 rounded-xl border-2 border-warm-200 text-warm-500 font-medium hover:bg-warm-50 hover:border-warm-300 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <LogOutIcon size={20} />
                로그아웃
              </button>
            ) : (
              <button
                onClick={onLoginClick}
                className="w-full md:w-auto px-8 py-4 rounded-xl bg-[#FEE500] text-black font-bold hover:bg-[#FDD800] transition-all duration-200 flex items-center justify-center gap-2 text-lg shadow-sm"
              >
                카카오로 로그인하기
              </button>
            )}
          </div>
        </div>

        {/* Saved Policies Section */}
        <div className="animate-fade-in-up stagger-1">
          <div className="flex items-center gap-3 mb-8 border-b border-warm-200 pb-4">
            <BookmarkIcon size={28} className="text-honey-500" />
            <h3 className="font-heading text-3xl text-warm-800">저장한 정책</h3>
            <span className="bg-honey-100 text-honey-700 text-lg font-bold px-3 py-0.5 rounded-full ml-2">
              {savedPolicyList.length}
            </span>
          </div>

          {savedPolicyList.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedPolicyList.map((policy, index) => (
                <div
                  key={policy.id}
                  className={`animate-fade-in-up stagger-${(index % 5) + 1} h-full`}
                >
                  <PolicyCard
                    policy={policy}
                    onClick={() => onPolicyClick(policy.id)}
                    onSave={(e) => onSave(policy.id, e)}
                    isSaved={true}
                    className="h-full flex flex-col"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl shadow-sm">
              <div className="opacity-40 mb-6">
                <HoneyDdukCharacter size="xl" />
              </div>
              <p className="font-heading text-2xl text-warm-400 mb-3">
                아직 저장한 정책이 없어요
              </p>
              <p className="font-body text-lg text-warm-300">
                마음에 드는 정책을 북마크해보세요 💾
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
