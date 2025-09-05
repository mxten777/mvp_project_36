import ServiceCard, { ServiceIcons } from "../components/ServiceCard";

export default function Solutions() {
  return (
    <section
      className="container max-w-5xl mx-auto py-12 sm:py-20 px-2 sm:px-8"
      style={{background:'var(--color-bg-section)', borderRadius:'1.5rem', boxShadow:'0 8px 32px 0 #0004', marginTop:'2rem', marginBottom:'3rem', border:0}}
      aria-labelledby="solutions-heading"
    >
      <h2
        id="solutions-heading"
        className="text-3xl sm:text-4xl font-extrabold mb-12 text-center tracking-tight"
        style={{color:'var(--color-point)', textShadow:'0 2px 8px #0008'}}
        tabIndex={-1}
      >
        스마트한 주요 솔루션
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        role="list"
        aria-label="스마트한 솔루션 카드"
      >
        <div className="group flex flex-col gap-3 p-7 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 min-h-[180px] cursor-pointer"
          style={{background:'var(--color-bg-card)', color:'var(--color-text-main)', border:'2px solid var(--color-border)', boxShadow:'0 2px 8px #0002'}}>
          <div className="font-extrabold text-2xl truncate group-hover:underline" style={{color:'var(--color-point)', lineHeight:'1.15'}}>
            통합 주차 보안 시스템
          </div>
          <div className="text-lg mb-1 min-h-[36px]" style={{color:'var(--color-text-sub)', lineHeight:'1.35'}}>
            ANPR, 정산, 차단기, 민원 대시보드 등 IoT 기반 주차 관제 솔루션
          </div>
          <div className="flex flex-wrap gap-2 text-base">
            <span className="rounded-full px-4 py-1 font-semibold shadow-sm" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)', fontSize:'1.08rem', lineHeight:'1.1'}}>주차</span>
              <span className="rounded-full px-4 py-1 font-semibold shadow-sm" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)', lineHeight:'1.1'}}>IoT</span>
          </div>
        </div>
        <div className="group flex flex-col gap-3 p-7 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 min-h-[180px] cursor-pointer"
          style={{background:'var(--color-bg-card)', color:'var(--color-text-main)', border:'2px solid var(--color-border)', boxShadow:'0 2px 8px #0002'}}>
          <div className="font-extrabold text-2xl truncate group-hover:underline" style={{color:'var(--color-point)', lineHeight:'1.15'}}>
            IoT 모니터링 시스템
          </div>
          <div className="text-lg mb-1 min-h-[36px]" style={{color:'var(--color-text-sub)', lineHeight:'1.35'}}>
            센서, 알림, 리포트 등 실시간 원격 감시와 통계 분석 제공
          </div>
          <div className="flex flex-wrap gap-2 text-base">
            <span className="rounded-full px-4 py-1 font-semibold shadow-sm" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)', fontSize:'1.08rem', lineHeight:'1.1'}}>IoT</span>
              <span className="rounded-full px-4 py-1 font-semibold shadow-sm" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)', lineHeight:'1.1'}}>모니터링</span>
          </div>
        </div>
        <div className="group flex flex-col gap-3 p-7 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 min-h-[180px] cursor-pointer"
          style={{background:'var(--color-bg-card)', color:'var(--color-text-main)', border:'2px solid var(--color-border)', boxShadow:'0 2px 8px #0002'}}>
          <div className="font-extrabold text-2xl truncate group-hover:underline" style={{color:'var(--color-point)', lineHeight:'1.15'}}>
            영상 통합 시스템
          </div>
          <div className="text-lg mb-1 min-h-[36px]" style={{color:'var(--color-text-sub)', lineHeight:'1.35'}}>
            CCTV, VMS, 관제 등 영상 보안 및 통합 모니터링 솔루션
          </div>
          <div className="flex flex-wrap gap-2 text-base">
            <span className="rounded-full px-4 py-1 font-semibold shadow-sm" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)', fontSize:'1.08rem', lineHeight:'1.1'}}>CCTV</span>
              <span className="rounded-full px-4 py-1 font-semibold shadow-sm" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)', lineHeight:'1.1'}}>통합</span>
          </div>
        </div>
      </div>
    </section>
  );
}
