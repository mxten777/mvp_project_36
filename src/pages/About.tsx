
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <section
      className="container max-w-2xl mx-auto py-12 sm:py-20 px-2 sm:px-6 rounded-3xl shadow-2xl mt-8 mb-12 border-0 relative overflow-hidden focus-within:ring-2 focus-within:ring-point"
      style={{
        background: 'linear-gradient(135deg, var(--color-bg-section) 80%, var(--color-point-bg) 100%)',
        borderRadius: '1.5rem',
        boxShadow: '0 8px 32px 0 #0004',
        border: 0,
        marginTop: '2rem',
        marginBottom: '3rem',
        zIndex: 1
      }}
      aria-labelledby="about-heading"
      aria-live="polite"
      tabIndex={0}
    >
      <h2
        id="about-heading"
  className="text-2xl sm:text-3xl font-extrabold mb-8 text-center tracking-tight focus-visible:outline-point focus-visible:ring-2 focus-visible:ring-point"
  style={{color:'var(--color-point)'}}
        tabIndex={-1}
      >
        회사소개
      </h2>
      {/* 연혁 */}
      <section className="mb-10" aria-labelledby="about-history">
        <div className="rounded-2xl shadow-lg"
          style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', padding:'1.75rem'}} >
          <h3 id="about-history" className="text-2xl font-bold mb-3" style={{color:'var(--color-point)', lineHeight:'1.15'}}>
            연혁
          </h3>
          <ul className="list-disc pl-6 text-base sm:text-lg" style={{color:'var(--color-text-sub)', lineHeight:'1.5'}}>
            <li>2025 스마트시티 통합 플랫폼 출시</li>
            <li>2023 IoT 기반 주차 시스템 전국 100개소 도입</li>
            <li>2021 AI영상분석 솔루션 개발</li>
            <li>2018 엔엑스텐 설립</li>
          </ul>
        </div>
      </section>
      {/* 인증 */}
      <section className="mb-10" aria-labelledby="about-cert">
        <div className="rounded-2xl shadow-lg"
          style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', padding:'1.75rem'}} >
          <h3 id="about-cert" className="text-xl sm:text-2xl font-bold mb-4" style={{color:'var(--color-point)'}}>
            인증 및 수상
          </h3>
          <ul className="list-disc pl-6" style={{color:'var(--color-text-sub)'}}>
            <li>스마트시티 우수기업 인증 (2024)</li>
            <li>AI융합 혁신상 (2022)</li>
            <li>ISO 9001 품질경영 인증</li>
          </ul>
        </div>
      </section>
      {/* 파트너 */}
      <section className="mb-10" aria-labelledby="about-partner">
        <div className="rounded-2xl shadow-lg"
          style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', padding:'1.75rem'}} >
          <h3 id="about-partner" className="text-xl sm:text-2xl font-bold mb-4" style={{color:'var(--color-point)'}}>
            주요 파트너
          </h3>
          <div className="flex flex-wrap gap-3 sm:gap-5">
            <span className="px-6 py-3 rounded-full text-base font-semibold shadow-sm min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-point" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)'}} tabIndex={0} aria-label="삼성전자 파트너">삼성전자</span>
            <span className="px-6 py-3 rounded-full text-base font-semibold shadow-sm min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-point" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)'}} tabIndex={0} aria-label="LG CNS 파트너">LG CNS</span>
            <span className="px-6 py-3 rounded-full text-base font-semibold shadow-sm min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-point" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)'}} tabIndex={0} aria-label="네이버클라우드 파트너">네이버클라우드</span>
            <span className="px-6 py-3 rounded-full text-base font-semibold shadow-sm min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-point" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)'}} tabIndex={0} aria-label="KT 파트너">KT</span>
          </div>
        </div>
      </section>
      {/* 오시는 길 */}
      <section aria-labelledby="about-location">
        <div className="rounded-2xl shadow-lg"
          style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', padding:'1.75rem'}} >
          <h3 id="about-location" className="text-xl sm:text-2xl font-bold mb-4" style={{color:'var(--color-point)'}}>
            오시는 길
          </h3>
          <p className="text-base" style={{color:'var(--color-text-sub)'}}>
            서울특별시 강남구 역삼로 138, 5층
          </p>
        </div>
      </section>
    </section>
  );
}
