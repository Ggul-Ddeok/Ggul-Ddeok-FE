import React from "react";
import { HoneyDdukCharacter } from "./HoneyDdukCharacter";
export function Footer() {
  return (
    <footer className="bg-warm-800 text-warm-200 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <HoneyDdukCharacter size="sm" />
              <span className="font-heading text-2xl text-honey-400">꿀떡</span>
            </div>
            <p className="font-body text-sm text-warm-300 leading-relaxed">
              고졸 청년의 더 나은 내일을 위해
              <br />
              꿀떡이 함께합니다. 🍯
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-heading text-lg text-white mb-4">서비스</h4>
            <ul className="space-y-2.5 font-body text-sm text-warm-300">
              <li className="hover:text-honey-400 cursor-pointer transition-colors">
                정책 찾기
              </li>
              <li className="hover:text-honey-400 cursor-pointer transition-colors">
                AI 정책 요약
              </li>
              <li className="hover:text-honey-400 cursor-pointer transition-colors">
                맞춤 추천
              </li>
              <li className="hover:text-honey-400 cursor-pointer transition-colors">
                정책 저장함
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-heading text-lg text-white mb-4">꿀떡협회</h4>
            <ul className="space-y-2.5 font-body text-sm text-warm-300">
              <li className="hover:text-honey-400 cursor-pointer transition-colors">
                협회 소개
              </li>
              <li className="hover:text-honey-400 cursor-pointer transition-colors">
                이용약관
              </li>
              <li className="hover:text-honey-400 cursor-pointer transition-colors">
                개인정보처리방침
              </li>
              <li className="hover:text-honey-400 cursor-pointer transition-colors">
                문의하기
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-white mb-4">연락처</h4>
            <ul className="space-y-2.5 font-body text-sm text-warm-300">
              <li>📧 hello@gguldduk.kr</li>
              <li>📞 02-1234-5678</li>
              <li>📍 서울특별시 영등포구 여의대로 24</li>
              <li className="pt-1">
                <span className="text-xs bg-warm-700 px-2 py-1 rounded">
                  평일 09:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-warm-400">
            © 2025 (사)한국꿀떡협회. All rights reserved. 본 서비스는 고졸 청년
            정책 정보 제공을 목적으로 운영됩니다.
          </p>
          <div className="flex items-center gap-4 text-xs text-warm-400">
            <span className="hover:text-honey-400 cursor-pointer transition-colors">
              이용약관
            </span>
            <span className="text-warm-600">|</span>
            <span className="hover:text-honey-400 cursor-pointer transition-colors">
              개인정보처리방침
            </span>
            <span className="text-warm-600">|</span>
            <span className="hover:text-honey-400 cursor-pointer transition-colors">
              사이트맵
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
