
export default function Support() {
  return (
    <section
      className="container max-w-2xl mx-auto py-12 sm:py-20 px-2 sm:px-6 rounded-3xl shadow-2xl mt-8 mb-12 border-0"
      style={{background:'var(--color-bg-section)', borderRadius:'1.5rem', boxShadow:'0 8px 32px 0 #0004', border:0, marginTop:'2rem', marginBottom:'3rem'}}
      aria-labelledby="support-heading"
    >
      <h2
        id="support-heading"
  className="text-2xl sm:text-3xl font-extrabold mb-8 text-center tracking-tight"
  style={{color:'var(--color-point)'}}
        tabIndex={-1}
      >
        고객지원
      </h2>
      {/* 1:1 문의 */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-3" style={{color:'var(--color-point)', lineHeight:'1.15'}}>1:1 문의</h3>
        <form
          className="flex flex-col gap-4 rounded-2xl shadow-lg border p-7"
          style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)'}}
          aria-label="1:1 문의 폼"
        >
          <label htmlFor="support-name" className="sr-only">이름</label>
          <input
            id="support-name"
            className="w-full border-0 rounded-lg px-5 py-4 text-lg font-bold focus-visible:ring-2 shadow min-h-[44px]"
            style={{background:'var(--color-bg-section)', color:'var(--color-point)', lineHeight:'1.35'}}
            placeholder="이름"
            required
            aria-label="이름"
          />
          <label htmlFor="support-email" className="sr-only">이메일</label>
          <input
            id="support-email"
            className="w-full border-0 rounded-lg px-5 py-4 text-lg font-bold focus-visible:ring-2 shadow min-h-[44px]"
            style={{background:'var(--color-bg-section)', color:'var(--color-point)', lineHeight:'1.35'}}
            placeholder="이메일"
            type="email"
            required
            aria-label="이메일"
          />
          <label htmlFor="support-message" className="sr-only">문의 내용</label>
          <textarea
            id="support-message"
            className="w-full border-0 rounded-lg px-5 py-4 text-lg font-bold focus-visible:ring-2 shadow min-h-[120px]"
            style={{background:'var(--color-bg-section)', color:'var(--color-point)', lineHeight:'1.35'}}
            placeholder="문의 내용"
            rows={4}
            required
            aria-label="문의 내용"
          />
          <button
            type="submit"
            className="px-7 py-4 rounded-lg font-bold text-lg shadow transition-colors min-h-[44px] min-w-[44px]"
            style={{background:'var(--color-point)', color:'var(--color-btn-dark)', lineHeight:'1.1'}}
            aria-label="문의하기"
          >
            문의하기
          </button>
        </form>
      </div>
      {/* 유지보수 신청 */}
      <div className="mb-12">
        <div className="rounded-2xl shadow-lg border p-7 flex flex-col gap-2"
          style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)'}}>
          <h3 className="text-2xl font-bold mb-2" style={{color:'var(--color-point)', lineHeight:'1.15'}}>유지보수 신청</h3>
          <p className="text-lg" style={{color:'var(--color-text-sub)', lineHeight:'1.35'}}>
            유지보수 및 기술지원이 필요하신 경우<br />
            <a href="mailto:esmarthan@esmarthan.com" style={{color:'var(--color-point)'}} className="underline font-semibold ml-1" aria-label="이메일 문의">esmarthan@esmarthan.com</a>
            <span className="mx-2">또는</span>
            <span className="font-bold" style={{color:'var(--color-point)'}}>031-216-9492</span>로 연락해 주세요.
          </p>
        </div>
      </div>
      {/* 원격지원 안내 */}
      <div>
        <div className="rounded-2xl shadow-lg border p-7 flex flex-col gap-2"
          style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)'}}>
          <h3 className="text-2xl font-bold mb-2" style={{color:'var(--color-point)', lineHeight:'1.15'}}>원격지원 안내</h3>
          <p className="text-lg" style={{color:'var(--color-text-sub)', lineHeight:'1.35'}}>
            원격지원이 필요하신 경우 담당자 안내에 따라<br />
            원격 프로그램(TeamViewer 등)을 실행해 주세요.
          </p>
        </div>
      </div>
    </section>
  );
}
