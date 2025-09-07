import ServiceCard, { ServiceIcons } from "../components/ServiceCard";

export default function Solutions() {
  return (
    <section
      className="solutions-section container max-w-5xl mx-auto py-12 sm:py-20 px-2 sm:px-8"
      style={{background:'var(--color-bg-section)', borderRadius:'1.5rem', marginTop:'2rem', marginBottom:'3rem'}}
      aria-labelledby="solutions-heading"
    >
      <h2
        id="solutions-heading"
        className="text-2xl sm:text-3xl font-extrabold mb-8 text-center tracking-tight"
        style={{color:'var(--color-point)', textShadow:'0 2px 8px #0008', letterSpacing:'-0.01em'}}
        tabIndex={-1}
      >
        스마트한 주요 솔루션
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        role="list"
        aria-label="스마트한 솔루션 카드"
      >
        <div className="solutions-card flex flex-col gap-3 p-6 rounded-2xl min-h-[160px] bg-[#434c5e]"
          style={{ color: 'var(--color-text-main)' }}>
          <div className="font-extrabold text-xl truncate" style={{color:'var(--color-point)', lineHeight:'1.13'}}>
            통합 주차 보안 시스템
          </div>
          <div className="text-base mb-1 min-h-[32px]" style={{color:'var(--color-text-sub)', lineHeight:'1.32'}}>
            ANPR, 정산, 차단기, 민원 대시보드 등 IoT 기반 주차 관제 솔루션
          </div>
          <div className="flex flex-wrap gap-2 text-base">
            <span className="rounded-full px-4 py-1 font-semibold" style={{background:'var(--color-bg-section)', color:'var(--color-point)', fontSize:'1.08rem', lineHeight:'1.1'}}>주차</span>
            <span className="rounded-full px-4 py-1 font-semibold" style={{background:'var(--color-bg-section)', color:'var(--color-point)', lineHeight:'1.1'}}>IoT</span>
          </div>
        </div>
        <div className="solutions-card flex flex-col gap-3 p-6 rounded-2xl min-h-[160px] bg-[#434c5e]"
          style={{ color: 'var(--color-text-main)' }}>
          <div className="font-extrabold text-xl truncate" style={{color:'var(--color-point)', lineHeight:'1.13'}}>
            영상 통합 시스템
          </div>
          <div className="text-base mb-1 min-h-[32px]" style={{color:'var(--color-text-sub)', lineHeight:'1.32'}}>
            CCTV, VMS, 관제 등 영상 보안 및 통합 모니터링 솔루션
          </div>
          <div className="flex flex-wrap gap-2 text-base">
            <span className="rounded-full px-4 py-1 font-semibold" style={{background:'var(--color-bg-section)', color:'var(--color-point)', fontSize:'1.08rem', lineHeight:'1.1'}}>CCTV</span>
            <span className="rounded-full px-4 py-1 font-semibold" style={{background:'var(--color-bg-section)', color:'var(--color-point)', lineHeight:'1.1'}}>통합</span>
          </div>
        </div>
        <div className="solutions-card flex flex-col gap-3 p-6 rounded-2xl min-h-[160px] bg-[#434c5e]"
          style={{ color: 'var(--color-text-main)' }}>
          <div className="font-extrabold text-xl truncate" style={{color:'var(--color-point)', lineHeight:'1.13'}}>
            IoT 모니터링 시스템
          </div>
          <div className="text-base mb-1 min-h-[32px]" style={{color:'var(--color-text-sub)', lineHeight:'1.32'}}>
            실시간 원격 감시, 통계 분석, 최적 모니터링 제공
          </div>
          <div className="flex flex-wrap gap-2 text-base">
            <span className="rounded-full px-4 py-1 font-semibold" style={{background:'var(--color-bg-section)', color:'var(--color-point)', fontSize:'1.08rem', lineHeight:'1.1'}}>IoT</span>
            <span className="rounded-full px-4 py-1 font-semibold" style={{background:'var(--color-bg-section)', color:'var(--color-point)', lineHeight:'1.1'}}>모니터링</span>
          </div>
        </div>
      </div>
    </section>
  );
}
