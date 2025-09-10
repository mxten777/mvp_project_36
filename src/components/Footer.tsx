export default function Footer() {
  return (
    <footer className="bg-[#18181b] py-10 px-4 text-center text-[#f4f4f5] shadow-inner mt-16 rounded-t-3xl border-t border-[#38bdf8]" style={{ lineHeight: '1' }}>
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto gap-8 pb-2 border-b border-[#38bdf8]">
        <div className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#ff9800" />
            <text x="16" y="22" textAnchor="middle" fontSize="18" fill="#fff" fontWeight="bold">M</text>
          </svg>
          <span className="font-extrabold text-lg tracking-wide drop-shadow-sm text-[#a78bfa]">주식회사 엠엑스텐</span>
        </div>
        <nav className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8 text-base font-medium" style={{ lineHeight: '1' }} role="navigation" aria-label="푸터 메뉴">
          <a href="/about" className="hover:text-[#a3e635] focus-visible:ring-2 focus-visible:ring-[#38bdf8] rounded transition-colors px-2" aria-label="회사소개" aria-current={window.location.pathname === '/about' ? 'page' : undefined} tabIndex={0} role="link">회사소개</a>
          <a href="/support" className="hover:text-[#a3e635] focus-visible:ring-2 focus-visible:ring-[#38bdf8] rounded transition-colors px-2" aria-label="고객지원" aria-current={window.location.pathname === '/support' ? 'page' : undefined} tabIndex={0} role="link">고객지원</a>
          <a href="mailto:info@smart.co.kr" className="hover:text-[#a3e635] focus-visible:ring-2 focus-visible:ring-[#38bdf8] rounded transition-colors px-2" aria-label="문의메일" tabIndex={0} role="link">문의메일</a>
        </nav>
        <div className="flex gap-4 mt-3 sm:mt-0">
          <a href="#" aria-label="카카오톡 바로가기" className="hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#a3e635] rounded transition-transform" tabIndex={0} role="link">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="#a3e635"><ellipse cx="16" cy="16" rx="16" ry="13" /></svg>
          </a>
          <a href="#" aria-label="페이스북 바로가기" className="hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#a3e635] rounded transition-transform" tabIndex={0} role="link">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="#38bdf8"><circle cx="16" cy="16" r="16" /></svg>
          </a>
        </div>
      </div>
      <div className="mt-5 text-xs sm:text-sm text-[#888] tracking-wide" style={{ lineHeight: '1' }}>© 2025 <span className="font-semibold text-[#a78bfa]">주식회사 엠엑스텐</span>. All rights reserved.</div>
    </footer>
  );
}
