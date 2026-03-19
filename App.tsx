import React, { useState } from "react";
import { PageState } from "./types";
import { MOCK_POLICIES } from "./data";
import { MainPage } from "./pages/MainPage";
import { PolicyListPage } from "./pages/PolicyListPage";
import { PolicyDetailPage } from "./pages/PolicyDetailPage";
import { MyPage } from "./pages/MyPage";
import { SearchModal } from "./components/SearchModal";
import { LoginPromptModal } from "./components/LoginPromptModal";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
export function App() {
  // Routing State
  const [currentPage, setCurrentPage] = useState<PageState>("main");
  // App State
  const [selectedRegion, setSelectedRegion] = useState("전국");
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedPolicyId, setSelectedPolicyId] = useState<number | null>(null);
  const [savedPolicies, setSavedPolicies] = useState<number[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Modal State
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [pendingSaveId, setPendingSaveId] = useState<number | null>(null);
  // Handlers
  const handleSearch = (region: string, category: string) => {
    setSelectedRegion(region);
    setSelectedCategory(category);
    setShowSearchModal(false);
    setCurrentPage("policyList");
  };
  const handlePolicyClick = (id: number) => {
    setSelectedPolicyId(id);
    setCurrentPage("policyDetail");
  };
  const handleSaveToggle = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      setPendingSaveId(id);
      setShowLoginPrompt(true);
      return;
    }
    setSavedPolicies((prev) =>
      prev.includes(id) ? prev.filter((pId) => pId !== id) : [...prev, id],
    );
  };
  const handleKakaoLogin = () => {
    setIsLoggedIn(true);
    setShowLoginPrompt(false);
    if (pendingSaveId !== null) {
      setSavedPolicies((prev) => [...prev, pendingSaveId]);
      setPendingSaveId(null);
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setSavedPolicies([]);
    setCurrentPage("main");
  };
  // Render Current Page
  const renderPage = () => {
    switch (currentPage) {
      case "main":
        return <MainPage onSearchClick={() => setShowSearchModal(true)} />;
      case "policyList":
        return (
          <PolicyListPage
            region={selectedRegion}
            category={selectedCategory}
            onPolicyClick={handlePolicyClick}
            onSave={handleSaveToggle}
            savedPolicies={savedPolicies}
          />
        );
      case "policyDetail":
        const policy = MOCK_POLICIES.find((p) => p.id === selectedPolicyId);
        if (!policy)
          return (
            <div className="p-8 text-center">정책을 찾을 수 없습니다.</div>
          );
        return (
          <PolicyDetailPage
            policy={policy}
            onSave={handleSaveToggle}
            isSaved={savedPolicies.includes(policy.id)}
          />
        );
      case "myPage":
        return (
          <MyPage
            isLoggedIn={isLoggedIn}
            savedPolicies={savedPolicies}
            allPolicies={MOCK_POLICIES}
            onPolicyClick={handlePolicyClick}
            onSave={handleSaveToggle}
            onLogout={handleLogout}
            onLoginClick={() => setShowLoginPrompt(true)}
          />
        );
    }
  };
  return (
    <div className="min-h-screen bg-honey-50 font-body text-warm-800">
      {/* Web Navigation Header */}
      <Header
        title={
          currentPage === "policyList"
            ? `${selectedRegion} 정책`
            : currentPage === "policyDetail"
              ? "정책 상세"
              : currentPage === "myPage"
                ? "마이페이지"
                : undefined
        }
        showBack={
          currentPage === "policyDetail" || currentPage === "policyList"
        }
        onBack={() =>
          setCurrentPage(currentPage === "policyDetail" ? "policyList" : "main")
        }
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onSearchClick={() => setShowSearchModal(true)}
      />

      {/* Main Content Area (Full Width) */}
      {renderPage()}

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <SearchModal
        isOpen={showSearchModal}
        onClose={() => setShowSearchModal(false)}
        onSearch={handleSearch}
      />

      <LoginPromptModal
        isOpen={showLoginPrompt}
        onClose={() => {
          setShowLoginPrompt(false);
          setPendingSaveId(null);
        }}
        onKakaoLogin={handleKakaoLogin}
      />
    </div>
  );
}
