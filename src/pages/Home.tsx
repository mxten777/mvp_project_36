import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import ServiceCard, { ServiceIcons } from "../components/ServiceCard";
import React, { useState } from "react";
import Modal from "../components/Modal";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>스마트한 | Total Solution for Smart City</title>
        <meta name="description" content="스마트한의 주차, IoT, 영상 통합 스마트시티 솔루션" />
        <meta property="og:title" content="스마트한 | Total Solution for Smart City" />
        <meta property="og:description" content="스마트한의 주차, IoT, 영상 통합 스마트시티 솔루션" />
      </Helmet>
      <section
        className="container max-w-5xl mx-auto py-12 sm:py-20 px-4 sm:px-8 text-center rounded-3xl shadow-xl mt-6 mb-10 border-0 relative overflow-hidden"
        aria-labelledby="main-heading"
        role="region"
      >
        {/* Hero 배경 그라데이션 */}
        <div aria-hidden="true" className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--color-point)]/30 via-[var(--color-bg-section)]/80 to-[var(--color-bg-main)]/90 blur-2xl scale-110" />
        <h1
          id="main-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight drop-shadow relative z-10"
          tabIndex={-1}
        >
          <span className="inline-block bg-gradient-to-r from-[var(--color-point)] to-[var(--color-success)] bg-clip-text text-transparent">Total Solution for Smart City</span>
        </h1>
        <p className="mb-8 text-lg sm:text-xl max-w-2xl mx-auto font-medium text-[var(--color-text-sub)] relative z-10" id="main-desc">
          스마트한의 주차, IoT, 영상 통합 솔루션
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 my-12 max-w-6xl mx-auto relative z-10"
          role="list"
          aria-label="스마트한 주요 서비스"
        >
          <div className="bg-[var(--color-bg-card)] rounded-xl shadow-sm border-0 outline-none p-4 flex flex-col items-center min-h-[280px] card-effect" tabIndex={0} role="listitem" aria-label="통합 주차 보안 시스템">
            <ServiceCard
              icon={ServiceIcons.parking}
              title="통합 주차 보안 시스템"
              description="IoT 기반 입·출차, 민원 제로, 통합 관리 지원"
            >
              <a
                href="/solutions/parking"
                className="mt-4 inline-block px-5 py-2 rounded-full bg-[var(--color-point)] text-[var(--color-bg-main)] font-bold shadow-sm hover:bg-[var(--color-success)] transition-base text-sm sm:text-base no-underline focus-ring border-0"
                aria-label="통합 주차 보안 시스템 상세보기"
                tabIndex={0}
              >
                상세보기
              </a>
            </ServiceCard>
          </div>
          <div className="bg-[var(--color-bg-card)] rounded-xl shadow-sm border-0 outline-none p-4 flex flex-col items-center min-h-[280px] card-effect" tabIndex={0} role="listitem" aria-label="IoT 모니터링 시스템">
            <ServiceCard
              icon={ServiceIcons.iot}
              title="IoT 모니터링 시스템"
              description="실시간 원격 감시, 통계 분석, 최적 모니터링 제공"
            >
              <a
                href="/solutions/iot"
                className="mt-4 inline-block px-5 py-2 rounded-full bg-[var(--color-point)] text-[var(--color-bg-main)] font-bold shadow-sm hover:bg-[var(--color-success)] transition-base text-sm sm:text-base no-underline focus-ring border-0"
                aria-label="IoT 모니터링 시스템 상세보기"
                tabIndex={0}
              >
                상세보기
              </a>
            </ServiceCard>
          </div>
          <div className="bg-[var(--color-bg-card)] rounded-xl shadow-sm border-0 outline-none p-4 flex flex-col items-center min-h-[280px] card-effect" tabIndex={0} role="listitem" aria-label="영상 시스템 (CCTV 통합)">
            <ServiceCard
              icon={ServiceIcons.cctv}
              title="영상 시스템 (CCTV 통합)"
              description="CCTV 및 IoT 영상 통합, 영상 보안 시스템 제공"
            >
              <a
                href="/solutions/cctv"
                className="mt-4 inline-block px-5 py-2 rounded-full bg-[var(--color-point)] text-[var(--color-bg-main)] font-bold shadow-sm hover:bg-[var(--color-success)] transition-base text-sm sm:text-base no-underline focus-ring border-0"
                aria-label="영상 시스템 상세보기"
                tabIndex={0}
              >
                상세보기
              </a>
            </ServiceCard>
          </div>
        </div>
        <div className="flex flex-col items-center my-10">
          <Button
            className="px-6 py-2 text-base font-medium rounded-full border border-[var(--color-point)] bg-[var(--color-point)] text-[var(--color-bg-main)] shadow-sm hover:bg-[var(--color-success)] hover:text-[var(--color-bg-main)] transition-base flex items-center gap-2 focus-ring"
            aria-label="상담 문의하기"
            onClick={() => setModalOpen(true)}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fffde7"/><path d="M8 12h8M12 8v8" stroke="#ff9800" strokeWidth="2" strokeLinecap="round"/></svg>
            상담 문의하기
          </Button>
        </div>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <h2 className="text-xl font-bold mb-4 text-[#ff9800]" id="contact-modal-title">상담 문의하기</h2>
          <form className="flex flex-col gap-4" aria-labelledby="contact-modal-title">
            <input className="border rounded px-3 py-2" type="text" placeholder="이름" required aria-label="이름" />
            <input className="border rounded px-3 py-2" type="tel" placeholder="연락처" required aria-label="연락처" />
            <textarea className="border rounded px-3 py-2" placeholder="문의 내용" rows={4} required aria-label="문의 내용" />
            <button type="submit" className="bg-[#ff9800] text-white font-semibold rounded py-2 mt-2 hover:bg-[#ffb74d] transition focus-ring">문의 보내기</button>
          </form>
        </Modal>
      </section>
    </>
  );
}

export default Home;
