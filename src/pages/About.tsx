
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>회사소개 | 스마트한</title>
        <meta name="description" content="스마트한의 연혁, 인증, 파트너, 오시는 길 등 기업 정보 안내" />
      </Helmet>
      <section
        className="container max-w-4xl mx-auto py-12 sm:py-20 px-2 sm:px-6"
        style={{background:'var(--color-bg-section)', borderRadius:'1.5rem', boxShadow:'0 8px 32px 0 #0004', marginTop:'2rem', marginBottom:'3rem', border:0}}
        aria-labelledby="about-heading"
      >
        <h2
          id="about-heading"
          className="text-3xl sm:text-4xl font-extrabold mb-12 text-center tracking-tight"
          style={{color:'var(--color-point)', textShadow:'0 2px 8px #0008'}}
          tabIndex={-1}
        >
          회사소개
        </h2>
        {/* 연혁 */}
        <div className="mb-10" aria-labelledby="about-history">
          <div className="rounded-2xl shadow-lg"
            style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', padding:'1.75rem'}} >
            <h3 id="about-history" className="text-xl sm:text-2xl font-bold mb-4" style={{color:'var(--color-point)'}}>연혁</h3>
            <ul className="list-disc pl-6" style={{color:'var(--color-text-sub)'}}>
              <li>2025 스마트시티 통합 플랫폼 출시</li>
              <li>2023 IoT 기반 주차 시스템 전국 100개소 도입</li>
              <li>2021 AI영상분석 솔루션 개발</li>
              <li>2018 스마트한 설립</li>
            </ul>
          </div>
        </div>
        {/* 인증 */}
        <div className="mb-10" aria-labelledby="about-cert">
          <div className="rounded-2xl shadow-lg"
            style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', padding:'1.75rem'}} >
            <h3 id="about-cert" className="text-xl sm:text-2xl font-bold mb-4" style={{color:'var(--color-point)'}}>인증 및 수상</h3>
            <ul className="list-disc pl-6" style={{color:'var(--color-text-sub)'}}>
              <li>스마트시티 우수기업 인증 (2024)</li>
              <li>AI융합 혁신상 (2022)</li>
              <li>ISO 9001 품질경영 인증</li>
            </ul>
          </div>
        </div>
        {/* 파트너 */}
        <div className="mb-10" aria-labelledby="about-partner">
          <div className="rounded-2xl shadow-lg"
            style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', padding:'1.75rem'}} >
            <h3 id="about-partner" className="text-xl sm:text-2xl font-bold mb-4" style={{color:'var(--color-point)'}}>주요 파트너</h3>
            <div className="flex flex-wrap gap-3 sm:gap-5">
              <span className="px-5 py-2 rounded-full text-base font-semibold shadow-sm" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)'}}>삼성전자</span>
              <span className="px-5 py-2 rounded-full text-base font-semibold shadow-sm" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)'}}>LG CNS</span>
              <span className="px-5 py-2 rounded-full text-base font-semibold shadow-sm" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)'}}>네이버클라우드</span>
              <span className="px-5 py-2 rounded-full text-base font-semibold shadow-sm" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)'}}>KT</span>
            </div>
          </div>
        </div>
        {/* 오시는 길 */}
        <div aria-labelledby="about-location">
          <div className="rounded-2xl shadow-lg"
            style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', padding:'1.75rem'}} >
            <h3 id="about-location" className="text-xl sm:text-2xl font-bold mb-4" style={{color:'var(--color-point)'}}>오시는 길</h3>
            <p className="text-base" style={{color:'var(--color-text-sub)'}}>서울특별시 강남구 테헤란로 123, 10층</p>
          </div>
        </div>
      </section>
    </>
  );
}
