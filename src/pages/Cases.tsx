import React from "react";

const CASES = [
  { title: "S-oil 주유소", region: "수원", industry: "주유소", solution: "주차관제", desc: "대형 주유소의 효율적 주차관제 시스템 구축" },
  { title: "아르누보호텔", region: "강남", industry: "호텔", solution: "주차관제", desc: "호텔 고객을 위한 스마트 주차 솔루션 적용" },
  { title: "제주공항 IOT", region: "제주", industry: "공항", solution: "IoT", desc: "공항 내 IoT 기반 통합 관제 시스템" },
  { title: "성복스퀘어", region: "용인", industry: "상가", solution: "CCTV", desc: "상가 보안 강화를 위한 CCTV 설치 및 운영" },
];

export default function Cases() {
  return (
    <section
      className="container max-w-5xl mx-auto py-12 sm:py-20 px-2 sm:px-8 rounded-3xl shadow-2xl mt-8 mb-12 border-0 relative overflow-hidden focus-within:ring-2 focus-within:ring-point"
      style={{
        background: 'linear-gradient(135deg, var(--color-bg-section) 80%, var(--color-point-bg) 100%)',
        borderRadius: '1.5rem',
        boxShadow: '0 8px 32px 0 #0004',
        marginTop: '2rem',
        marginBottom: '3rem',
        border: 0,
        zIndex: 1
      }}
      aria-labelledby="cases-heading"
      aria-live="polite"
      tabIndex={0}
    >
      <h2
        id="cases-heading"
  className="text-2xl sm:text-3xl font-extrabold mb-8 text-center tracking-tight focus-visible:outline-point focus-visible:ring-2 focus-visible:ring-point"
  style={{color:'var(--color-point)'}}
        tabIndex={-1}
      >
        구축사례
      </h2>
      <section
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        role="list"
        aria-label="구축사례 목록"
      >
        {CASES.map((c) => (
          <div
            key={c.title}
            className="group flex flex-col gap-4 p-7 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 min-h-[200px] cursor-pointer focus-visible:ring-2 focus-visible:ring-point"
            style={{background:'var(--color-bg-card)', color:'var(--color-text-main)', border:'2px solid var(--color-border)', boxShadow:'0 2px 8px #0002'}} 
            tabIndex={0}
            aria-label={`${c.title} 사례 카드`}
          >
            <div className="font-extrabold text-2xl truncate group-hover:underline" style={{color:'var(--color-point)', lineHeight:'1.15'}}>{c.title}</div>
            <div className="text-base sm:text-lg mb-1 min-h-[36px]" style={{color:'var(--color-text-sub)', lineHeight:'1.5'}}>{c.desc}</div>
            <div className="flex flex-wrap gap-2 text-base">
              <span className="rounded-full px-5 py-2 font-semibold shadow-sm min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-point" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)', lineHeight:'1.1'}} tabIndex={0} aria-label={c.region}>{c.region}</span>
              <span className="rounded-full px-5 py-2 font-semibold shadow-sm min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-point" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)', lineHeight:'1.1'}} tabIndex={0} aria-label={c.industry}>{c.industry}</span>
              <span className="rounded-full px-5 py-2 font-semibold shadow-sm min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-point" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)', lineHeight:'1.1'}} tabIndex={0} aria-label={c.solution}>{c.solution}</span>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
