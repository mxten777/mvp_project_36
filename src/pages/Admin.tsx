
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";

export default function Admin() {
  return (
    <>
      <Helmet>
        <title>Admin | 스마트한</title>
        <meta name="description" content="콘텐츠, 배너, 사용자권한 등 관리자 기능" />
      </Helmet>
      <section
        className="container max-w-4xl mx-auto py-12 sm:py-20 px-2 sm:px-6 rounded-3xl shadow-2xl mt-8 mb-12 border-0"
  style={{background:'var(--color-bg-section)', borderRadius:'1.5rem', boxShadow:'0 8px 32px 0 rgba(0,0,0,0.25)', border:0, marginTop:'2rem', marginBottom:'3rem'}} 
        aria-labelledby="admin-heading"
      >
        {/* 샘플 알림/경고 메시지 */}
        <div className="mb-6">
          <div className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm shadow-sm"
            style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', color:'var(--color-point)'}}>
            <svg className="w-5 h-5" style={{color:'var(--color-point)'}} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
            <span>임시저장된 게시글은 관리자만 볼 수 있습니다. 삭제 시 복구가 불가하니 주의하세요.</span>
          </div>
        </div>
        <div className="mb-10 p-5 rounded-xl shadow text-base leading-relaxed"
          style={{background:'var(--color-bg-card)', color:'var(--color-text-main)'}}>
          <strong className="block text-lg font-bold mb-2" style={{color:'var(--color-point)'}}>관리자페이지 안내</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li><b>콘텐츠 관리</b>: 게시글 등록/수정/삭제, 카테고리 관리, 게시 상태 변경, 미리보기, 검색/필터, 다중 선택 삭제 등</li>
            <li><b>배너/팝업 관리</b>: 메인/이벤트 배너 등록, 노출/비노출 설정, 이미지 업로드, 우선순위 조정</li>
            <li><b>사용자 권한 관리</b>: 관리자/일반관리자 등 권한별 사용자 등록 및 변경, 계정 활성/비활성, 비밀번호 초기화, 접속 이력 확인</li>
            <li><b>통계 및 로그</b>: 방문자/이용현황 통계, 주요 활동 로그 확인</li>
            <li><b>시스템 설정</b>: 사이트 기본 정보, 연락처, 회사소개, 보안 설정(2차 인증, 접근제어 등)</li>
          </ul>
            <span className="block mt-3 text-xs" style={{color:'var(--color-text-sub)'}}>※ 실제 운영환경에서는 각 기능별 상세 권한 제어, 데이터 연동, 접근성/보안 강화 등이 추가 구현됩니다.</span>
        </div>
        <h2
          id="admin-heading"
          className="text-3xl sm:text-4xl font-extrabold mb-12 text-center tracking-tight drop-shadow leading-tight"
          style={{color:'var(--color-point)', textShadow:'0 2px 8px rgba(0,0,0,0.5)'}}
          tabIndex={-1}
        >
          관리자(Admin)
        </h2>
        {/* 콘텐츠 관리 */}
        <section className="mb-10" aria-labelledby="admin-content">
          <div className="rounded-2xl shadow-md border p-7 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 group"
            style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', color:'var(--color-text-main)'}}>
            <h3 id="admin-content" className="text-xl sm:text-2xl font-bold mb-4" style={{color:'var(--color-point)'}}>콘텐츠 관리</h3>
            <p className="mb-3 text-sm leading-relaxed" style={{color:'var(--color-text-sub)'}}>게시글 등록, 수정, 삭제 및 카테고리 관리가 가능합니다. 여러 게시글을 선택해 일괄 삭제할 수 있습니다.</p>
            <div className="flex gap-3 mb-4">
              <Button size="sm" className="font-bold" style={{background:'var(--color-point)', color:'var(--color-bg-section)', border:'none'}} aria-label="새 글 작성" title="새로운 게시글을 등록합니다.">새 글 작성</Button>
              <Button size="sm" variant="secondary" className="font-bold" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)'}} aria-label="삭제" title="선택한 게시글을 삭제합니다.">삭제</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[500px] w-full border text-sm rounded-xl overflow-hidden leading-relaxed">
                <thead>
                  <tr style={{background:'var(--color-bg-section)'}}>
                    <th className="p-3 border" style={{color:'var(--color-point)'}} title="게시글 제목">제목</th>
                    <th className="p-3 border" style={{color:'var(--color-point)'}} title="게시글 작성자">작성자</th>
                    <th className="p-3 border" style={{color:'var(--color-point)'}} title="게시글 등록일">등록일</th>
                    <th className="p-3 border" style={{color:'var(--color-point)'}} title="게시 상태(게시중/임시저장)">상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr tabIndex={0} aria-label="스마트시티 소개 행" style={{background:'var(--color-bg-section)', color:'var(--color-text-main)', cursor:'pointer'}}>
                    <td className="p-3 border">스마트시티 소개</td>
                    <td className="p-3 border">admin</td>
                    <td className="p-3 border">2025-09-01</td>
                    <td className="p-3 border">게시중</td>
                  </tr>
                  <tr tabIndex={0} aria-label="IoT 시스템 안내 행" style={{background:'var(--color-bg-section)', color:'var(--color-text-main)', cursor:'pointer'}}>
                    <td className="p-3 border">IoT 시스템 안내</td>
                    <td className="p-3 border">manager</td>
                    <td className="p-3 border">2025-08-20</td>
                    <td className="p-3 border">임시저장</td>
                  </tr>
                  <tr tabIndex={0} aria-label="CCTV 통합 구축사례 행" style={{background:'var(--color-bg-section)', color:'var(--color-text-main)', cursor:'pointer'}}>
                    <td className="p-3 border">CCTV 통합 구축사례</td>
                    <td className="p-3 border">admin</td>
                    <td className="p-3 border">2025-07-15</td>
                    <td className="p-3 border">게시중</td>
                  </tr>
                  <tr tabIndex={0} aria-label="고객지원 안내 행" style={{background:'var(--color-bg-section)', color:'var(--color-text-main)', cursor:'pointer'}}>
                    <td className="p-3 border">고객지원 안내</td>
                    <td className="p-3 border">supporter</td>
                    <td className="p-3 border">2025-06-30</td>
                    <td className="p-3 border">임시저장</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      {/* 시스템 사용자 활동/접속 통계 샘플 */}
      <section className="mb-10" aria-labelledby="admin-user-stats">
  <div className="rounded-2xl shadow-md border p-7 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 group" style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', color:'var(--color-text-main)'}}>
          <h3 id="admin-user-stats" className="text-xl sm:text-2xl font-bold mb-4" style={{color:'var(--color-point)'}}>사용자 활동 및 접속 통계</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="rounded-lg p-4 text-center" style={{background:'var(--color-bg-section)', color:'var(--color-point)'}}>
              <div className="text-2xl font-bold" style={{color:'var(--color-point)'}}>1,245</div>
              <div className="text-xs" style={{color:'var(--color-text-sub)'}}>총 가입자</div>
            </div>
            <div className="rounded-lg p-4 text-center" style={{background:'var(--color-bg-section)', color:'var(--color-point)'}}>
              <div className="text-2xl font-bold" style={{color:'var(--color-point)'}}>87</div>
              <div className="text-xs" style={{color:'var(--color-text-sub)'}}>금일 접속자</div>
            </div>
            <div className="rounded-lg p-4 text-center" style={{background:'var(--color-bg-section)', color:'var(--color-point)'}}>
              <div className="text-2xl font-bold" style={{color:'var(--color-point)'}}>12</div>
              <div className="text-xs" style={{color:'var(--color-text-sub)'}}>신규 가입자(금일)</div>
            </div>
            <div className="rounded-lg p-4 text-center" style={{background:'var(--color-bg-section)', color:'var(--color-point)'}}>
              <div className="text-2xl font-bold" style={{color:'var(--color-point)'}}>3</div>
              <div className="text-xs" style={{color:'var(--color-text-sub)'}}>비정상 접속 시도</div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[400px] w-full text-sm border rounded">
              <thead>
                <tr style={{background:'var(--color-bg-section)'}}>
                  <th className="px-3 py-2 font-semibold text-left" style={{color:'var(--color-point)'}}>활동 유형</th>
                  <th className="px-3 py-2 font-semibold text-left" style={{color:'var(--color-point)'}}>사용자</th>
                  <th className="px-3 py-2 font-semibold text-left" style={{color:'var(--color-point)'}}>시각</th>
                  <th className="px-3 py-2 font-semibold text-left" style={{color:'var(--color-point)'}}>상태</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-3 py-2">로그인</td>
                  <td className="px-3 py-2">홍길동</td>
                  <td className="px-3 py-2">2025-09-04 09:10</td>
                  <td className="px-3 py-2" style={{color:'var(--color-point)'}}>성공</td>
                </tr>
                <tr className="border-b">
                  <td className="px-3 py-2">비밀번호 변경</td>
                  <td className="px-3 py-2">김철수</td>
                  <td className="px-3 py-2">2025-09-04 08:55</td>
                  <td className="px-3 py-2" style={{color:'var(--color-point)'}}>성공</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">비정상 접속</td>
                  <td className="px-3 py-2">이영희</td>
                  <td className="px-3 py-2">2025-09-04 08:50</td>
                  <td className="px-3 py-2" style={{color:'#f87171'}}>실패</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 text-xs" style={{color:'var(--color-text-sub)'}}>※ 실제 운영환경에서는 상세 활동 로그, 접속 이력, 통계 차트 등 고급 기능이 제공됩니다.</div>
        </div>
      </section>
      {/* 시스템 공지사항/배너 관리 샘플 */}
      <section className="mb-10" aria-labelledby="admin-banner">
        <div className="rounded-2xl shadow-lg border p-7"
          style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', color:'var(--color-text-main)'}}>
          <h3 id="admin-banner" className="text-xl sm:text-2xl font-bold mb-4" style={{color:'var(--color-point)'}}>공지사항 및 배너 관리</h3>
          <div className="mb-4 flex flex-col sm:flex-row gap-4">
            <button className="font-semibold px-4 py-2 rounded shadow" style={{background:'var(--color-point)', color:'var(--color-bg-section)'}} title="공지사항 등록">공지 등록</button>
            <button className="font-semibold px-4 py-2 rounded shadow" style={{background:'var(--color-point)', color:'var(--color-bg-section)'}} title="배너 추가">배너 추가</button>
            <button className="font-semibold px-4 py-2 rounded shadow" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)'}} title="배너 목록">배너 목록</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[400px] w-full text-sm border rounded">
              <thead>
                <tr style={{background:'var(--color-bg-section)'}}>
                  <th className="px-3 py-2 font-semibold text-left" style={{color:'var(--color-point) !important'}}>알림 유형</th>
                  <th className="px-3 py-2 font-semibold text-left" style={{color:'var(--color-point) !important'}}>내용</th>
                  <th className="px-3 py-2 font-semibold text-left" style={{color:'var(--color-point) !important'}}>발생 시각</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-3 py-2">서버</td>
                  <td className="px-3 py-2">서버가 정상적으로 작동 중입니다.</td>
                  <td className="px-3 py-2">2025-09-04 09:00</td>
                </tr>
                <tr className="border-b">
                  <td className="px-3 py-2">디스크</td>
                  <td className="px-3 py-2">디스크 사용량이 80%를 초과했습니다.</td>
                  <td className="px-3 py-2">2025-09-04 08:55</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">사용자</td>
                  <td className="px-3 py-2">신규 사용자가 가입했습니다.</td>
                  <td className="px-3 py-2">2025-09-04 08:50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 text-xs" style={{color:'var(--color-text-sub)'}}>※ 실제 운영환경에서는 공지/배너 등록, 수정, 상태 관리 등 고급 기능이 제공됩니다.</div>
        </div>
      </section>
      {/* 시스템 유지보수/원격지원 안내 샘플 */}
      <section className="mb-10" aria-labelledby="admin-support">
        <div className="rounded-2xl shadow-lg border p-7"
          style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', color:'var(--color-text-main)'}}>
          <h3 id="admin-support" className="text-xl sm:text-2xl font-bold mb-4 text-sky-700">시스템 유지보수 및 원격지원 안내</h3>
          <div className="mb-4 text-sky-700 text-sm">
            시스템 장애, 업데이트, 원격지원 요청 시 아래 연락처로 문의해 주세요.<br />
            <span className="font-semibold">대표 이메일:</span> info@mxten.co.kr<br />
            <span className="font-semibold">대표 전화:</span> 031-216-9492<br />
            <span className="font-semibold">원격지원 툴:</span> TeamViewer, AnyDesk 등 지원
          </div>
          <div className="flex gap-4">
            <button className="font-semibold px-4 py-2 rounded shadow" style={{background:'var(--color-point)', color:'var(--color-bg-section)'}} title="원격지원 요청">원격지원 요청</button>
            <button className="font-semibold px-4 py-2 rounded shadow" style={{background:'var(--color-point)', color:'var(--color-bg-section)'}} title="장애 신고">장애 신고</button>
            <button className="font-semibold px-4 py-2 rounded shadow" style={{background:'var(--color-point)', color:'var(--color-bg-section)'}} title="업데이트 문의">업데이트 문의</button>
          </div>
          <div className="mt-3 text-xs text-sky-400">※ 실제 운영환경에서는 실시간 원격지원, 장애 접수, 유지보수 이력 관리 등 고급 기능이 제공됩니다.</div>
        </div>
      </section>
      {/* 시스템 환경설정 샘플 */}
      <section className="mb-10" aria-labelledby="admin-preferences">
        <div className="rounded-2xl shadow-lg border p-7"
          style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', color:'var(--color-text-main)'}}>
          <h3 id="admin-preferences" className="text-xl sm:text-2xl font-bold mb-4" style={{color:'var(--color-point)'}}>시스템 환경설정</h3>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1" style={{color:'var(--color-point)'}} htmlFor="theme-select">테마 선택</label>
              <select id="theme-select" className="w-full border rounded px-3 py-2 text-sm" defaultValue="light"
                style={{background:'var(--color-bg-card)', color:'var(--color-text-main)', border:'1px solid var(--color-border)'}}>
                <option value="light">라이트</option>
                <option value="dark">다크</option>
                <option value="system">시스템 기본값</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1" style={{color:'var(--color-point)'}} htmlFor="lang-select">언어 설정</label>
              <select id="lang-select" className="w-full border rounded px-3 py-2 text-sm" defaultValue="ko"
                style={{background:'var(--color-bg-card)', color:'var(--color-text-main)', border:'1px solid var(--color-border)'}}>
                <option value="ko">한국어</option>
                <option value="en">영어</option>
                <option value="jp">일본어</option>
              </select>
            </div>
            <div className="col-span-1 sm:col-span-2 mt-4">
              <label className="block text-sm font-semibold mb-1" style={{color:'var(--color-point)'}} htmlFor="notify-toggle">알림 설정</label>
              <div className="flex items-center gap-3">
                <input id="notify-toggle" type="checkbox" className="w-4 h-4" defaultChecked />
                <span className="text-sm" style={{color:'var(--color-point)'}}>시스템 알림 수신</span>
              </div>
                <span className="block mt-1 text-xs" style={{color:'var(--color-text-sub)'}}>※ 실제 운영환경에서는 사용자별 환경설정 및 알림 커스터마이즈가 가능합니다.</span>
            </div>
          </form>
        </div>
      </section>
      {/* 시스템 알림/모니터링 샘플 */}
      <section className="mb-10" aria-labelledby="admin-monitoring">
        <div className="rounded-2xl shadow-lg border p-7"
          style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', color:'var(--color-text-main)'}}>
          <h3 id="admin-monitoring" className="text-xl sm:text-2xl font-bold mb-4" style={{color:'var(--color-point)'}}>시스템 알림 및 모니터링</h3>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-1 rounded-lg p-4 flex items-center gap-3" style={{background:'var(--color-bg-section)'}}>
              <span className="inline-block w-3 h-3 rounded-full" style={{background:'var(--color-point)'}} title="정상"></span>
              <span className="font-semibold" style={{color:'var(--color-point)'}}>서버 상태:</span>
              <span className="font-bold" style={{color:'var(--color-text-main)'}}>정상</span>
            </div>
            <div className="flex-1 rounded-lg p-4 flex items-center gap-3" style={{background:'var(--color-bg-section)'}}>
              <span className="inline-block w-3 h-3 rounded-full" style={{background:'#FFD600'}} title="주의"></span>
                <span className="font-semibold" style={{color:'var(--color-point)'}}>디스크 용량:</span>
                <span className="font-bold" style={{color:'var(--color-warning'}}>80% 사용</span>
            </div>
            <div className="flex-1 rounded-lg p-4 flex items-center gap-3" style={{background:'var(--color-bg-section)'}}>
              <span className="inline-block w-3 h-3 rounded-full" style={{background:'var(--color-point)'}} title="정보"></span>
              <span className="font-semibold" style={{color:'var(--color-point)'}}>최근 알림:</span>
              <span className="font-bold" style={{color:'var(--color-point)'}}>신규 사용자 가입</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[400px] w-full text-sm border rounded">
                <thead>
                  <tr style={{ background: 'var(--color-bg-card)' }}>
                    <th className="px-3 py-2 font-semibold text-left" style={{ color: 'var(--color-text-main)' }}>알림 유형</th>
                    <th className="px-3 py-2 font-semibold text-left" style={{ color: 'var(--color-text-main)' }}>내용</th>
                    <th className="px-3 py-2 font-semibold text-left" style={{ color: 'var(--color-text-main)' }}>발생 시각</th>
                  </tr>
                </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-3 py-2">서버</td>
                  <td className="px-3 py-2">서버가 정상적으로 작동 중입니다.</td>
                  <td className="px-3 py-2">2025-09-04 09:00</td>
                </tr>
                <tr className="border-b">
                  <td className="px-3 py-2">디스크</td>
                  <td className="px-3 py-2">디스크 사용량이 80%를 초과했습니다.</td>
                  <td className="px-3 py-2">2025-09-04 08:55</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">사용자</td>
                  <td className="px-3 py-2">신규 사용자가 가입했습니다.</td>
                  <td className="px-3 py-2">2025-09-04 08:50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 text-xs" style={{color:'var(--color-text-sub)'}}>※ 실제 운영환경에서는 실시간 모니터링, 알림 설정, 장애 대응 등 고급 기능이 제공됩니다.</div>
        </div>
      </section>
      {/* 시스템 로그/백업 관리 샘플 */}
      <section className="mb-10" aria-labelledby="admin-log-backup">
        <div className="rounded-2xl shadow-lg border p-7"
          style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', color:'var(--color-text-main)'}}>
          <h3 id="admin-log-backup" className="text-xl sm:text-2xl font-bold mb-4" style={{color:'var(--color-point)'}}>시스템 로그 및 백업 관리</h3>
          <div className="mb-4 flex flex-col sm:flex-row gap-4">
            <button className="font-semibold px-4 py-2 rounded shadow" style={{background:'var(--color-point)', color:'var(--color-bg-section)'}} title="시스템 로그 다운로드">로그 다운로드</button>
            <button className="font-semibold px-4 py-2 rounded shadow" style={{background:'var(--color-point)', color:'var(--color-bg-card)'}} title="DB 백업 파일 생성">DB 백업 생성</button>
            <button className="font-semibold px-4 py-2 rounded shadow" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)'}} title="백업 목록">백업 목록</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[400px] w-full text-sm border rounded">
              <thead>
                <tr style={{background:'var(--color-bg-section)', color:'var(--color-point)'}}>
                  <th className="px-3 py-2 font-semibold text-left">백업 파일명</th>
                  <th className="px-3 py-2 font-semibold text-left">생성일시</th>
                  <th className="px-3 py-2 font-semibold text-left">크기</th>
                  <th className="px-3 py-2 font-semibold text-left">다운로드</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-3 py-2">backup_2025-09-01.sql</td>
                  <td className="px-3 py-2">2025-09-01 03:12</td>
                  <td className="px-3 py-2">2.1MB</td>
                  <td className="px-3 py-2"><button className="underline" style={{color:'var(--color-point)'}} title="다운로드">다운로드</button></td>
                </tr>
                <tr className="border-b">
                  <td className="px-3 py-2">backup_2025-08-25.sql</td>
                  <td className="px-3 py-2">2025-08-25 22:41</td>
                  <td className="px-3 py-2">2.0MB</td>
                  <td className="px-3 py-2"><button className="text-sky-600 underline" title="다운로드">다운로드</button></td>
                </tr>
                <tr>
                  <td className="px-3 py-2">backup_2025-08-18.sql</td>
                  <td className="px-3 py-2">2025-08-18 09:17</td>
                  <td className="px-3 py-2">1.9MB</td>
                  <td className="px-3 py-2"><button className="text-sky-600 underline" title="다운로드">다운로드</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 text-xs" style={{color:'var(--color-text-sub)'}}>※ 실제 운영환경에서는 자동 백업, 복원, 로그 모니터링 등 고급 기능이 제공됩니다.</div>
        </div>
      </section>
      {/* 시스템 설정 샘플 */}
      <section className="mb-10" aria-labelledby="admin-settings">
        <div className="rounded-2xl shadow-lg border p-7"
          style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', color:'var(--color-text-main)'}}>
          <h3 id="admin-settings" className="text-xl sm:text-2xl font-bold mb-4" style={{color:'var(--color-point)'}}>시스템 설정</h3>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1" style={{color:'var(--color-point)'}} htmlFor="site-title">사이트명</label>
              <input id="site-title" className="w-full border rounded px-3 py-2 text-sm" type="text" value="엠엑스텐 Total Solution" readOnly
                style={{background:'var(--color-bg-card)', color:'var(--color-text-main)', border:'1px solid var(--color-border)'}} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-sky-700" htmlFor="site-email">대표 이메일</label>
              <input id="site-email" className="w-full border rounded px-3 py-2 text-sm" type="email" value="info@mxten.co.kr" readOnly
                style={{background:'var(--color-bg-card)', color:'var(--color-text-main)', border:'1px solid var(--color-border)'}} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-sky-700" htmlFor="site-phone">대표 전화번호</label>
              <input id="site-phone" className="w-full border rounded px-3 py-2 text-sm" type="tel" value="031-216-9492" readOnly
                style={{background:'var(--color-bg-card)', color:'var(--color-text-main)', border:'1px solid var(--color-border)'}} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-sky-700" htmlFor="site-address">회사 주소</label>
              <input id="site-address" className="w-full border rounded px-3 py-2 text-sm" type="text" value="경기도 수원시 영통구 대학4로 17, 419호" readOnly
                style={{background:'var(--color-bg-card)', color:'var(--color-text-main)', border:'1px solid var(--color-border)'}} />
            </div>
            <div className="col-span-1 sm:col-span-2 mt-4">
              <label className="block text-sm font-semibold mb-1 text-sky-700" htmlFor="site-security">보안 설정</label>
              <select id="site-security" className="w-full border rounded px-3 py-2 text-sm" defaultValue="2fa"
                style={{background:'var(--color-bg-card)', color:'var(--color-text-main)', border:'1px solid var(--color-border)'}}>
                <option value="none">보안설정 없음</option>
                <option value="2fa">2단계 인증(권장)</option>
                <option value="ip">IP 접근제어</option>
              </select>
                <span className="block mt-1 text-xs text-sky-400">※ 실제 운영환경에서는 정보 수정 및 고급 보안설정이 가능합니다.</span>
            </div>
          </form>
        </div>
      </section>
      {/* 통계 및 로그 샘플 */}
      <section className="mb-10" aria-labelledby="admin-stats">
        <div className="rounded-2xl shadow-lg border p-7" style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', color:'var(--color-text-main)'}}>
          <h3 id="admin-stats" className="text-xl sm:text-2xl font-bold mb-4" style={{color:'var(--color-point)'}}>통계 및 활동 로그</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="rounded-lg p-4 text-center" style={{background:'var(--color-bg-section)', color:'var(--color-point)'}}>
              <div className="text-2xl font-extrabold" style={{color:'var(--color-point)'}}>1,245</div>
              <div className="text-xs mt-1" style={{color:'var(--color-text-sub)'}}>일간 방문자</div>
            </div>
            <div className="rounded-lg p-4 text-center" style={{background:'var(--color-bg-section)', color:'var(--color-point)'}}>
              <div className="text-2xl font-extrabold" style={{color:'var(--color-point)'}}>87</div>
              <div className="text-xs mt-1" style={{color:'var(--color-text-sub)'}}>게시글 총수</div>
            </div>
            <div className="rounded-lg p-4 text-center" style={{background:'var(--color-bg-section)', color:'var(--color-point)'}}>
              <div className="text-2xl font-extrabold" style={{color:'var(--color-point)'}}>5</div>
              <div className="text-xs mt-1" style={{color:'var(--color-text-sub)'}}>활성 관리자</div>
            </div>
            <div className="rounded-lg p-4 text-center" style={{background:'var(--color-bg-section)', color:'var(--color-point)'}}>
              <div className="text-2xl font-extrabold" style={{color:'var(--color-point)'}}>12</div>
              <div className="text-xs mt-1" style={{color:'var(--color-text-sub)'}}>금일 문의</div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[400px] w-full border text-sm rounded-xl overflow-hidden">
              <thead>
                <tr style={{background:'var(--color-bg-section)', color:'var(--color-point)'}}>
                  <th className="p-3 border">시간</th>
                  <th className="p-3 border">이벤트</th>
                  <th className="p-3 border">담당자</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{background:'var(--color-bg-section)', color:'var(--color-text-main)', cursor:'pointer'}}>
                  <td className="p-3 border">09:12</td>
                  <td className="p-3 border">게시글 삭제</td>
                  <td className="p-3 border">admin</td>
                </tr>
                <tr style={{background:'var(--color-bg-section)', color:'var(--color-text-main)', cursor:'pointer'}}>
                  <td className="p-3 border">10:03</td>
                  <td className="p-3 border">배너 추가</td>
                  <td className="p-3 border">manager</td>
                </tr>
                <tr style={{background:'var(--color-bg-section)', color:'var(--color-text-main)', cursor:'pointer'}}>
                  <td className="p-3 border">11:27</td>
                  <td className="p-3 border">사용자 비밀번호 초기화</td>
                  <td className="p-3 border">supporter</td>
                </tr>
                <tr style={{background:'var(--color-bg-section)', color:'var(--color-text-main)', cursor:'pointer'}}>
                  <td className="p-3 border">12:41</td>
                  <td className="p-3 border">임시저장 게시글 복구</td>
                  <td className="p-3 border">admin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
        {/* 배너/팝업 관리 */}
        <section className="mb-10" aria-labelledby="admin-banner">
          <div className="rounded-2xl shadow-lg border p-7" style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', color:'var(--color-text-main)'}}>
            <h3 id="admin-banner" className="text-xl sm:text-2xl font-bold mb-4" style={{color:'var(--color-point)'}}>배너/팝업 관리</h3>
            <p className="mb-3 text-sm" style={{color:'var(--color-text-sub)'}}>메인/이벤트 배너 및 팝업을 등록·관리하고, 노출 여부와 우선순위를 설정할 수 있습니다.</p>
            <div className="flex gap-3 mb-4">
              <Button size="sm" className="font-bold" style={{background:'var(--color-point)', color:'var(--color-bg-section)', border:'none'}} aria-label="배너 추가" title="새로운 배너를 등록합니다.">배너 추가</Button>
              <Button size="sm" variant="secondary" className="font-bold" style={{background:'var(--color-bg-section)', color:'var(--color-point)', border:'1px solid var(--color-border)'}} aria-label="삭제" title="선택한 배너/팝업을 삭제합니다.">삭제</Button>
            </div>
            <ul className="list-disc pl-6 space-y-1 text-base" style={{color:'var(--color-text-main)'}}>
              <li>메인 상단 배너 (노출중)</li>
              <li>이벤트 팝업 (비노출)</li>
              <li>신규 서비스 안내 배너 (노출대기)</li>
              <li>시스템 점검 알림 팝업 (비노출)</li>
            </ul>
          </div>
        </section>
        {/* 사용자 권한 관리 */}
        <section aria-labelledby="admin-user">
          <div className="rounded-2xl shadow-lg border p-7" style={{background:'var(--color-bg-card)', border:'1px solid var(--color-border)', color:'var(--color-text-main)'}}>
            <h3 id="admin-user" className="text-xl sm:text-2xl font-bold mb-4" style={{color:'var(--color-point)'}}>사용자 권한 관리</h3>
            <p className="mb-3 text-sm" style={{color:'var(--color-text-sub)'}}>관리자/일반관리자 등 권한별로 사용자를 등록·관리하고, 계정 활성화/비활성화, 비밀번호 초기화가 가능합니다.</p>
            <ul className="mb-4 text-xs list-disc pl-5" style={{color:'var(--color-text-sub)'}}>
              <li><b>최고관리자</b>: 모든 관리 기능 사용 가능</li>
              <li><b>일반관리자</b>: 콘텐츠/배너 관리, 일부 사용자 관리</li>
              <li><b>고객지원담당</b>: 게시글/댓글 관리, 문의 답변</li>
              <li><b>열람전용</b>: 데이터 조회만 가능, 수정 불가</li>
            </ul>
            <div className="overflow-x-auto">
              <table className="min-w-[400px] w-full border text-sm rounded-xl overflow-hidden">
                <thead>
                  <tr style={{background:'var(--color-bg-section)', color:'var(--color-point)'}}>
                    <th className="p-3 border" title="사용자 이름">이름</th>
                    <th className="p-3 border" title="관리자 권한 등급">권한</th>
                    <th className="p-3 border" title="계정 활성/비활성 상태">상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr tabIndex={0} aria-label="admin 사용자 행" style={{background:'var(--color-bg-section)', color:'var(--color-text-main)', cursor:'pointer'}}>
                    <td className="p-3 border">admin</td>
                    <td className="p-3 border">최고관리자</td>
                    <td className="p-3 border">활성</td>
                  </tr>
                  <tr tabIndex={0} aria-label="manager 사용자 행" style={{background:'var(--color-bg-section)', color:'var(--color-text-main)', cursor:'pointer'}}>
                    <td className="p-3 border">manager</td>
                    <td className="p-3 border">일반관리자</td>
                    <td className="p-3 border">비활성</td>
                  </tr>
                  <tr tabIndex={0} aria-label="supporter 사용자 행" style={{background:'var(--color-bg-section)', color:'var(--color-text-main)', cursor:'pointer'}}>
                    <td className="p-3 border">supporter</td>
                    <td className="p-3 border">고객지원담당</td>
                    <td className="p-3 border">활성</td>
                  </tr>
                  <tr tabIndex={0} aria-label="guest 사용자 행" style={{background:'var(--color-bg-section)', color:'var(--color-text-main)', cursor:'pointer'}}>
                    <td className="p-3 border">guest</td>
                    <td className="p-3 border">열람전용</td>
                    <td className="p-3 border">비활성</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
