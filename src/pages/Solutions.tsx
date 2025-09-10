import ServiceCard, { ServiceIcons } from "../components/ServiceCard";

export default function Solutions() {
  return (
    <section
      className="solutions-section container max-w-5xl mx-auto py-12 sm:py-20 px-2 sm:px-8 rounded-3xl shadow-2xl mt-8 mb-12 border-0 relative overflow-hidden focus-within:ring-2 focus-within:ring-point"
      style={{
        background: 'linear-gradient(135deg, var(--color-bg-section) 80%, var(--color-point-bg) 100%)',
        borderRadius: '1.5rem',
        boxShadow: '0 8px 32px 0 #0004',
        border: 0,
        marginTop: '2rem',
        marginBottom: '3rem',
        zIndex: 1
      }}
      aria-labelledby="solutions-heading"
      aria-live="polite"
      tabIndex={0}
    >
      <h2
        id="solutions-heading"
  className="text-2xl sm:text-3xl font-extrabold mb-8 text-center tracking-tight focus-visible:outline-point focus-visible:ring-2 focus-visible:ring-point"
  style={{color:'var(--color-point)', letterSpacing:'-0.01em'}}
        tabIndex={-1}
      >
        스마트한 주요 솔루션
      </h2>
      <section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        role="list"
        aria-label="스마트한 솔루션 카드"
      >
        {/* 카드 1 */}
        <div
          className="solutions-card flex flex-col gap-3 sm:gap-4 p-5 sm:p-7 rounded-2xl min-h-[180px] bg-[var(--color-bg-card)] shadow-lg border border-[var(--color-border)] focus-visible:ring-2 focus-visible:ring-point transition-all duration-200 hover:shadow-2xl hover:-translate-y-1"
          style={{ color: 'var(--color-text-main)' }}
          tabIndex={0}
          aria-label="통합 주차 보안 시스템 카드"
        >
          <div className="font-extrabold text-2xl truncate" style={{color:'var(--color-point)', lineHeight:'1.15'}}>
            통합 주차 보안 시스템
          </div>
          <div className="text-base sm:text-lg mb-1 min-h-[32px]" style={{color:'var(--color-text-main)', opacity:0.85, lineHeight:'1.5'}}>
            ANPR, 정산, 차단기, 민원 대시보드 등 IoT 기반 주차 관제 솔루션
          </div>
          <div className="flex flex-wrap gap-2 text-base sm:text-lg mt-2">
            <span className="rounded-full px-5 py-2 font-semibold min-h-[40px] min-w-[40px] flex items-center justify-center bg-white border border-[var(--color-point)] text-[var(--color-point)] shadow-sm focus-visible:ring-2 focus-visible:ring-point" tabIndex={0} aria-label="주차">주차</span>
            <span className="rounded-full px-5 py-2 font-semibold min-h-[40px] min-w-[40px] flex items-center justify-center bg-white border border-[var(--color-point)] text-[var(--color-point)] shadow-sm focus-visible:ring-2 focus-visible:ring-point" tabIndex={0} aria-label="IoT">IoT</span>
          </div>
        </div>
        {/* 카드 2 */}
        <div
          className="solutions-card flex flex-col gap-3 sm:gap-4 p-5 sm:p-7 rounded-2xl min-h-[180px] bg-[var(--color-bg-card)] shadow-lg border border-[var(--color-border)] focus-visible:ring-2 focus-visible:ring-point transition-all duration-200 hover:shadow-2xl hover:-translate-y-1"
          style={{ color: 'var(--color-text-main)' }}
          tabIndex={0}
          aria-label="영상 통합 시스템 카드"
        >
          <div className="font-extrabold text-xl sm:text-2xl truncate" style={{color:'var(--color-point)', lineHeight:'1.15'}}>
            영상 통합 시스템
          </div>
          <div className="text-base sm:text-lg mb-1 min-h-[32px]" style={{color:'var(--color-text-main)', opacity:0.85, lineHeight:'1.5'}}>
            CCTV, VMS, 관제 등 영상 보안 및 통합 모니터링 솔루션
          </div>
          <div className="flex flex-wrap gap-2 text-base sm:text-lg mt-2">
            <span className="rounded-full px-5 py-2 font-semibold min-h-[40px] min-w-[40px] flex items-center justify-center bg-white border border-[var(--color-point)] text-[var(--color-point)] shadow-sm focus-visible:ring-2 focus-visible:ring-point" tabIndex={0} aria-label="CCTV">CCTV</span>
            <span className="rounded-full px-5 py-2 font-semibold min-h-[40px] min-w-[40px] flex items-center justify-center bg-white border border-[var(--color-point)] text-[var(--color-point)] shadow-sm focus-visible:ring-2 focus-visible:ring-point" tabIndex={0} aria-label="통합">통합</span>
          </div>
        </div>
        {/* 카드 3 */}
        <div
          className="solutions-card flex flex-col gap-3 sm:gap-4 p-5 sm:p-7 rounded-2xl min-h-[180px] bg-[var(--color-bg-card)] shadow-lg border border-[var(--color-border)] focus-visible:ring-2 focus-visible:ring-point transition-all duration-200 hover:shadow-2xl hover:-translate-y-1"
          style={{ color: 'var(--color-text-main)' }}
          tabIndex={0}
          aria-label="IoT 모니터링 시스템 카드"
        >
          <div className="font-extrabold text-xl sm:text-2xl truncate" style={{color:'var(--color-point)', lineHeight:'1.15'}}>
            IoT 모니터링 시스템
          </div>
          <div className="text-base sm:text-lg mb-1 min-h-[32px]" style={{color:'var(--color-text-main)', opacity:0.85, lineHeight:'1.5'}}>
            실시간 원격 감시, 통계 분석, 최적 모니터링 제공
          </div>
          <div className="flex flex-wrap gap-2 text-base sm:text-lg mt-2">
            <span className="rounded-full px-5 py-2 font-semibold min-h-[40px] min-w-[40px] flex items-center justify-center bg-white border border-[var(--color-point)] text-[var(--color-point)] shadow-sm focus-visible:ring-2 focus-visible:ring-point" tabIndex={0} aria-label="IoT">IoT</span>
            <span className="rounded-full px-5 py-2 font-semibold min-h-[40px] min-w-[40px] flex items-center justify-center bg-white border border-[var(--color-point)] text-[var(--color-point)] shadow-sm focus-visible:ring-2 focus-visible:ring-point" tabIndex={0} aria-label="모니터링">모니터링</span>
          </div>
        </div>
      </section>
    </section>
  );
}
