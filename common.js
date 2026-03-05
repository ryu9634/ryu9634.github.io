// ===== Project Data =====
const projects = [
  {
    id: "stat",
    title: "통계자료시스템 구축 및 통합유지관리",
    period: "2022년 5월 ~ 2025년 9월",
    stack: "Java, Spring Framework, Cubrid, Linux, JavaScript, jQuery",
    description: [
      "기존 MIS 프로그램 기반으로 운영되던 도서관 통계관리 시스템을 웹 기반으로 전환",
      "연간/월간/분기별 통계 데이터를 보다 직관적이고 효율적으로 입력·관리할 수 있도록 웹 UI 구축",
      "관리자 페이지 및 대시보드 기능 포함"
    ],
    roles: [
      "업무일지, 월간·분기 통계 입력 화면 개발",
      "입력된 통계 데이터를 조건별로 조회하는 통계 조회 화면 개발",
      "시각화 기반 대시보드 페이지 구현 (차트/테이블 혼합)"
    ],
    maintenance: [
      "요구사항 변경에 따른 입력 필드 및 통계 집계 로직 지속 개선",
      "오류 대응 및 UI 개선 요청 반영"
    ],
    results: [
      "고객(실무자)와의 지속적인 피드백을 통해 원활한 커뮤니케이션 능력을 키움",
      "운영 중 발생하는 갑작스러운 문제에 대해 신속하게 파악하고 해결하는 대응 역량 강화",
      "복잡한 raw data로부터 실무용 통계 지표를 정확히 추출·정제할 수 있는 데이터 처리 능력 향상"
    ]
  },
  {
    id: "dlib",
    title: "국가전자도서관 통합유지관리",
    period: "2022년 5월 ~ 2025년 9월",
    stack: "Java, Spring Framework, Cubrid, Linux, Solr, JavaScript, jQuery",
    description: [
      "국가전자도서관 시스템의 통합 운영 및 웹 기반 환경 유지보수",
      "전자자료 검색, 원문보기, 다운로드 등 핵심 서비스 안정성 확보 및 기능 개선",
      "Solr 기반 통합 검색 기능 유지보수 및 메타데이터 처리 로직 대응"
    ],
    roles: [
      "전자자료 상세조회/원문보기 화면 기능 개선 및 오류 대응",
      "Solr 색인 처리 자동화 및 검수 업무 지원",
      "전자도서관 메인 UI 일부 개편 및 코드 정리",
      "Spring Security 기반으로 SecurityFilterChain 설정을 통해 로그인 구현"
    ],
    maintenance: [
      "Solr 필드 맵핑, 색인 누락, 검색 정확도 이슈 지속 대응",
      "자료 상태에 따른 표시 조건 변경(온라인/오프라인 등)",
      "연계 기관 서비스 요청에 따라 API 개선 및 예외 처리"
    ],
    results: [
      "공공 전자정보 서비스의 실서비스 운영환경에서 발생하는 다양한 요구사항에 안정적으로 대응",
      "검색 품질 개선을 위해 콘텐츠 구조를 분석하고 메타데이터 처리 흐름을 정확히 파악하는 역량 강화"
    ]
  },
  {
    id: "nlcy",
    title: "국립어린이청소년도서관 통합유지관리",
    period: "2024년 1월 ~ 2025년 6월",
    stack: "Java, Spring Framework, JavaScript, jQuery, Cubrid",
    description: [
      "어린이청소년도서관 홈페이지의 UI/UX 개선 및 각종 신청 기능 유지보수",
      "방문 신청, 프로그램 참여 신청 등 사용자 중심의 기능 개선과 안정성 확보",
      "메인 페이지 개편 및 공지사항/행사 배너 영역 개선"
    ],
    roles: [
      "프로그램 신청 로직 개선 및 백엔드 검증 처리 추가",
      "관리자 승인/취소/완료 상태 흐름 정비 및 상태값 로직 단순화",
      "메인 페이지 콘텐츠 영역 리디자인 및 공지/배너 연동 구조 개선",
      "신청 이력 페이지 개발 및 사용자 조회 편의성 강화"
    ],
    maintenance: [
      "운영 중 발생하는 오류 수정 및 예외 상황 대응",
      "프로그램/교육일정 변경에 따른 신청 조건·UI 동적 반영",
      "사용자 요청 기반 기능 추가 및 유지보수 작업 상시 대응"
    ],
    results: [
      "신청 과정의 오류율 감소 및 관리자 업무 편의성 향상",
      "서비스 이용자 피드백을 기반으로 실사용 중심 기능 개선 경험 축적",
      "기존 구조를 유지하면서도 유연하게 기능을 추가하고 안정적으로 운영한 경험 확보"
    ]
  },
  {
    id: "nlnk",
    title: "국가지식자원공유서비스 통합유지관리",
    period: "2022년 5월 ~ 2025년 9월",
    stack: "Java, Spring Framework, JavaScript, jQuery, Cubrid",
    description: [
      "국가지식자원공유서비스 시스템의 통합 유지보수 및 협약기관 관리 기능 운영",
      "통합뷰어 서비스와 관련된 사용자 민원 대응 및 오류 분석 지원",
      "협약 도서관 정보 등록/수정, 서비스 권한 관리 기능 유지보수"
    ],
    roles: [
      "협약 도서관 관리 화면 및 권한 설정 기능 유지보수",
      "통합뷰어 관련 이슈 대응: 사용자 문의 접수 → 로그 분석 및 원인 파악 → 담당 부서 전달 또는 수정",
      "서비스 상태 점검 및 일일 운영 대응 업무 지원"
    ],
    maintenance: [
      "협약기관의 정보 변경 및 추가 요청 반영",
      "정기 점검 및 패치 이후 정상 동작 여부 확인"
    ],
    results: [
      "기관 간 협력 기반의 지식정보 서비스 운영에 대한 이해도 확보",
      "실시간 사용자 문의 및 장애 이슈에 대한 빠른 분석·대응 역량 강화",
      "현업·운영자와의 커뮤니케이션을 통한 안정적인 공공서비스 운영 경험 축적"
    ]
  },
  {
    id: "nl",
    title: "국립중앙도서관 서비스운영 통합유지관리",
    period: "2022년 5월 ~ 2025년 9월",
    stack: "Java, Spring Framework, JavaScript, jQuery, Cubrid",
    description: [
      "국립중앙도서관 포털 및 서비스 시스템 전반에 대한 운영 유지보수 수행",
      "자료 검색, 통합 로그인, 기관 정보 관리 등 사용자 접근이 많은 주요 기능 대응"
    ],
    roles: [
      "기관 정보 수정, 로그인 오류, 검색 결과 노출 등 실시간 문의 대응 및 기능 점검 보조",
      "관리자 페이지 UI 개선 및 상태 설정 기능 정비",
      "접근성 지적 사항 및 보안 이슈 패치 대응",
      "검색 성능 개선을 위한 Solr 설정 및 인덱싱 이슈 대응 보조"
    ],
    maintenance: [
      "협약기관의 정보 변경 및 추가 요청 반영",
      "정기 점검 및 패치 이후 정상 동작 여부 확인"
    ],
    results: [
      "국가 기반 대국민 지식정보 서비스의 안정적 운영 경험 확보",
      "민원 대응과 장애 분석 프로세스를 실시간으로 경험하며 문제 해결 역량 강화",
      "기관·실무자와의 협업을 통해 정책성 시스템의 운영 프로세스를 이해하고 참여"
    ]
  },
 {
    id: "seongdong",
    title: "성동구청 시스템 유지보수",
    period: "2025년 9월 ~ ",
    stack: "Java, Spring MVC, Tibero, MySQL, JSP, MyBatis, eGovFramework",
    description: [
      "성동구청 홈페이지 및 관련 시스템 운영·유지보수 수행",
      "기부·나눔 관리, 뉴스레터, 예약 캘린더 등 구민 대상 서비스 기능 개발 및 개선"
    ],
    roles: [
      "성동원플러스원 기부·나눔 관리 시스템 개발: 모바일 QR 기반 기부 등록, 관리자 CRUD, 통계 대시보드 및 Excel 출력 기능 구현",
      "뉴스레터 관리 시스템 개발: 오디오 파일 연동, 커스텀 오디오 플레이어 UI 구현 및 JSP 코드 리팩토링",
      "예약 캘린더 시스템 유지보수: 공휴일 표시·비활성화 로직, JSP/JSTL 조건 필터링, Google Translate 다국어 지원 연동",
      "IE 호환 컬러피커 구현 및 크로스브라우저 오디오 재생 처리"
    ],
    maintenance: [
      "운영 중 발생하는 오류 수정 및 민원 기반 기능 개선 대응",
      "구청 요구사항 변경에 따른 UI·로직 수정 및 배포 대응"
    ],
    results: [
      "구민 대상 서비스의 안정적 운영 및 실사용 중심 기능 개선 경험 축적",
      "레거시 환경(JSP, MyBatis, Tibero)에서 신규 기능을 안정적으로 개발·통합하는 역량 강화",
      "공공기관 시스템 특성에 맞는 요구사항 분석 및 빠른 대응 능력 향상"
    ]
  },
  {
    id: "surge-predictor",
    title: "주식 급등 예측 자동화 시스템(바이브코딩)",
    period: "2026년 2월 (개인 사이드 프로젝트)",
    stack: "Python, GitHub Actions, Telegram Bot API, Financial Modeling Prep API, yfinance",
    description: [
      "한국·미국 시장의 급등 예상 종목을 자동으로 분석하여 매일 아침 텔레그램으로 알림을 보내는 개인 투자 보조 시스템",
      "기술적 분석, 재무 분석, 거래량 이상 감지 등 다각도 스코어링으로 급등 신호 포착",
      "서버 없이 GitHub Actions 크론잡으로 완전 자동화 운영"
    ],
    roles: [
      "OBV 다이버전스, Chaikin Money Flow 기반 매집 감지 알고리즘 설계 및 구현",
      "기술적 분석 / 재무 분석 / 패턴 분석 항목별 스코어링 엔진 개발",
      "텔레그램 봇 연동 및 종목별 분석 리포트 메시지 포맷 구현",
      "GitHub Actions 크론잡 설정으로 매일 자동 실행 환경 구성",
      "한국·미국 시장 종목 동시 분석 지원 (yfinance, FMP API 활용)"
    ],
    maintenance: [
      "스코어링 기준 및 종목 리스트 지속 개선",
      "API 응답 예외처리 및 텔레그램 메시지 분할 전송 안정화"
    ],
    results: [
      "서버 비용 없이 완전 자동화된 개인 투자 알림 시스템 구축",
      "Python 기반 데이터 분석 및 외부 API 연동 역량 확보",
      "GitHub Actions를 활용한 CI/CD 및 자동화 워크플로우 경험"
    ]
  },
  {
    id: "printPP",
    title: "예술인 포트폴리오 웹사이트 개발",
    period: "2025년 (개인 사이드 프로젝트)",
    stack: "HTML, CSS, Vanilla JS, Quill.js, Java, Spring Boot, REST API, AWS (EC2)",
    description: [
      "전시 작업을 위주로 활동하는 예술인 친구의 개인 포트폴리오 웹사이트 기획 및 개발",
      "작품 갤러리 및 프로젝트 소개 기능을 중심으로 예술 작품을 효과적으로 전시할 수 있는 UI 구성",
      "Spring Boot 기반 백엔드와 REST API로 연동하여 콘텐츠 관리 기능 구현"
    ],
    roles: [
      "HTML/CSS/Vanilla JS 기반 프론트엔드 전체 개발",
      "작품 갤러리 페이지 구성 및 이미지 전시 UI 구현",
      "프로젝트 소개 페이지 개발 및 콘텐츠 레이아웃 설계",
      "Quill.js 리치 텍스트 에디터 연동으로 콘텐츠 작성·편집 기능 구현",
      "fetch() API를 활용한 Spring Boot 백엔드와 REST API 통신 처리",
      "AWS EC2 인스턴스에 서비스 배포 및 운영 환경 구성"
    ],
    maintenance: [
      "친구 피드백 기반으로 UI/UX 지속 개선",
      "콘텐츠 추가·수정 요청에 따른 기능 보완 대응"
    ],
    results: [
      "백엔드(Spring Boot) · 프론트엔드(Vanilla JS) 간 REST API 연동 경험 확보",
      "Quill.js 등 외부 라이브러리 커스터마이징 및 실무 적용 역량 강화",
      "프레임워크 없이 순수 JS만으로 동적 UI를 구현하는 기초 역량 재확인",
      "실사용자(친구)와 직접 소통하며 요구사항을 반영하는 협업 경험",
      "AWS EC2 기반 서버 배포 및 클라우드 인프라 운영 경험 확보"
    ]
  },
  {
    id: "upbit-auto",
    title: "업비트 알고리즘 자동매매 시스템",
    period: "2026년 (개인 사이드 프로젝트)",
    stack: "Python, Upbit API, Google Cloud Functions, Google Cloud Scheduler",
    description: [
      "업비트 거래소 API를 활용한 암호화폐 알고리즘 자동매매 프로그램 개발",
      "기술적 분석 지표 기반 매수/매도 전략을 자동으로 실행하는 트레이딩 봇 구현",
      "Google Cloud에 배포하여 24시간 무중단 자동 운영"
    ],
    roles: [
      "업비트 REST API 연동 및 주문/잔고 조회 로직 구현",
      "기술적 분석 기반 자동 매수/매도 알고리즘 설계 및 개발",
      "Google Cloud Functions + Cloud Scheduler를 활용한 자동 실행 환경 구성",
      "실시간 시세 모니터링 및 조건 충족 시 자동 주문 처리"
    ],
    maintenance: [
      "매매 전략 파라미터 튜닝 및 수익률 분석을 통한 지속 개선",
      "API 응답 예외처리 및 장애 상황 대응 로직 보완"
    ],
    results: [
      "Google Cloud 기반 서버리스 아키텍처 배포 및 운영 경험 확보",
      "외부 금융 API 연동 및 실시간 데이터 처리 역량 강화",
      "자동화 시스템의 안정성 확보를 위한 예외처리 및 로깅 설계 경험"
    ]
  }
];

// ===== Popup =====
function openPopup(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const body = document.getElementById("popupBody");
  body.innerHTML = `
    <h3>${project.title}</h3>
    <p><span class="popup-meta">${project.period}</span></p>
    <p><span class="popup-meta">${project.stack}</span></p>

    <h4>프로젝트 설명</h4>
    <ul>${project.description.map(item => `<li>${item}</li>`).join("")}</ul>

    <h4>담당 역할</h4>
    <ul>${project.roles.map(item => `<li>${item}</li>`).join("")}</ul>

    <h4>유지보수</h4>
    <ul>${project.maintenance.map(item => `<li>${item}</li>`).join("")}</ul>

    <h4>프로젝트 수행결과</h4>
    <ul>${project.results.map(item => `<li>${item}</li>`).join("")}</ul>
  `;

  document.getElementById("popupLayer").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closePopup() {
  document.getElementById("popupLayer").style.display = "none";
  document.getElementById("popupBody").innerHTML = "";
  document.body.style.overflow = "";
}

// ===== DOM Ready =====
document.addEventListener("DOMContentLoaded", function () {
  // Close popup on backdrop click
  const popup = document.getElementById("popupLayer");
  popup.addEventListener("click", function () {
    closePopup();
  });

  // Close popup on ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closePopup();
  });

  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    // Close mobile nav on link click
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  // Header scroll effect
  var header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Scroll reveal (Intersection Observer)
  var reveals = document.querySelectorAll(".reveal, .fade-up");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
  });

  reveals.forEach(function (el) {
    observer.observe(el);
  });

  // Hero fade-up on load
  setTimeout(function () {
    document.querySelectorAll(".hero .fade-up").forEach(function (el) {
      el.classList.add("visible");
    });
  }, 200);

  // Active nav highlight on scroll
  var sections = document.querySelectorAll(".section[id]");
  var navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", function () {
    var scrollPos = window.scrollY + 120;
    sections.forEach(function (section) {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        var currentId = section.getAttribute("id");
        navLinks.forEach(function (link) {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + currentId) {
            link.classList.add("active");
          }
        });
      }
    });
  });
});
