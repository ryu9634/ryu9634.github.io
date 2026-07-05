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
    id: "seongdong-main",
    title: "성동구청 대표홈페이지 운영·고도화",
    period: "2025년 9월 ~ 현재",
    stack: "Java, Spring MVC, 전자정부프레임워크(eGov) 3.9.0, iBatis, Tibero, JSP/FreeMarker, jQuery, Apache POI",
    description: [
      "서울 성동구청 대표홈페이지(www.sd.go.kr) 및 산하 서비스의 개발·운영 담당",
      "신규 업무 시스템 구축 및 사이트 전반의 안정성·보안 운영"
    ],
    roles: [
      "성동원플러스원(기부·나눔 관리 시스템) 신규 개발: 공개 신청 화면부터 관리자 CRUD, 통계, 엑셀 출력까지 전 구간 설계·구현",
      "지역 상점의 기부금을 적립해 취약계층 나눔으로 매칭·집행하는 업무 시스템 구축",
      "참여업체 기부 등록(업체코드 검증·일련번호 자동채번), 기부/나눔 내역 관리 개발",
      "동별·업체별·기간별 다차원 통계 및 차트, Apache POI 기반 엑셀 다운로드 개발",
      "로그인 사용자의 소속 행정동 데이터만 접근하도록 강제하는 데이터 접근제어 로직 구현"
    ],
    maintenance: [
      "외부 웹취약점 점검(NileSOFT WebSCAN) 지적 16개 항목을 전수 검토·조치",
      "실제 위험 항목(XSS·HTTP 파라미터 오염 등)은 입력값 검증으로 차단, 오탐은 코드 구조 분석으로 근거와 함께 소명하여 불필요한 수정 없이 점검 종료",
      "특정 조건에서만 재현되는 조회·트랜잭션 장애의 근본 원인을 추적·해결하여 서비스 안정성 개선"
    ],
    results: [
      "신규 업무 시스템을 기획부터 구현·운영까지 단독으로 완성한 경험 확보",
      "웹 보안 점검 대응 및 근본 원인 기반 장애 해결 역량 강화",
      "전자정부프레임워크·iBatis·Tibero 기반 공공 시스템 개발 역량 확보"
    ]
  },
  {
    id: "seongdong-reserve",
    title: "성동구청 신속예약 서비스",
    period: "2025년 9월 ~ 현재",
    stack: "Java, Spring MVC, 전자정부프레임워크(eGov) 3.9.0, iBatis, Tibero, JSP, jQuery",
    description: [
      "복지·교육 온라인 예약 서비스 개발·운영",
      "생활서비스·교육강좌 예약의 신청/자격검증/대기자 관리 로직 담당"
    ],
    roles: [
      "임산부 가사돌봄 등 복지사업의 신청 자격을 서버단에서 자동 검증하는 로직을 구축하여 부적격·중복 신청을 사전 차단하고 담당 부서의 수기 확인 부담 경감",
      "다인원(가족) 신청 확대에 대응해 대기자 자동승계 방식을 개선, 예약 취소·승계 과정의 누락과 오류를 해소"
    ],
    maintenance: [],
    results: [
      "자격검증 자동화로 담당 부서 운영 부담 경감 및 예약 서비스 신뢰성 향상"
    ]
  },
  {
    id: "seongdong-news",
    title: "성동뉴스(전자 소식지) 모듈 개발",
    period: "2025년 9월 ~ 현재",
    stack: "Java, Spring MVC, 전자정부프레임워크(eGov) 3.9.0, iBatis, Tibero, JSP/FreeMarker, jQuery",
    description: [
      "전자 소식지(뉴스레터) 모듈 신규 개발",
      "기존 게시판 기반 소식지를 대체하는 웹 발행형 전자 소식지 전용 모듈 신규 구축"
    ],
    roles: [
      "호수(VOL)별로 다수 기사 블록(이미지·설명·링크)을 담아 발행하고, 사용자 화면에서 최신호 자동 노출 및 이전/다음호 열람이 가능하도록 구현",
      "표출일자 기반 예약 노출, 표시여부/논리삭제, 호수 중복 검증, 관리자 미리보기 등 운영 편의 기능을 갖춘 관리자 콘텐츠 관리 기능 개발"
    ],
    maintenance: [],
    results: [
      "콘텐츠 담당자가 개발 없이 운영 가능한 발행형 콘텐츠 관리 모듈 구축 경험 확보"
    ]
  },
  {
    id: "seongdong-mayor",
    title: "성동구청 구청장실 사이트 전면 리뉴얼",
    period: "2025년 9월 ~ 현재",
    stack: "Java, Spring MVC, 전자정부프레임워크(eGov) 3.9.0, iBatis, Tibero, JSP/FreeMarker, jQuery",
    description: [
      "구청장실 사이트를 신규 디자인으로 전면 개편",
      "정적 시안을 CMS 기반 동적 사이트로 이관 구축"
    ],
    roles: [
      "CMS 동적 메뉴·게시판을 신규 UI에 연동하여 콘텐츠 담당자가 별도 개발 없이 운영 가능하도록 구성",
      "IE 등 구형 브라우저 호환성까지 확보하여 공공사이트 접근성 요건 충족"
    ],
    maintenance: [],
    results: [
      "정적 시안의 CMS 기반 동적 사이트 이관 및 접근성 준수 리뉴얼 경험 확보"
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
    title: "포트폴리오 웹사이트 개발",
    period: "2025년 (개인 사이드 프로젝트)",
    stack: "HTML, CSS, Vanilla JS, Quill.js, Java, Spring Boot, REST API, AWS (EC2)",
    description: [
      "전시 작업을 위주로 활동하는 친구의 개인 포트폴리오 웹사이트 기획 및 개발",
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
  },
  {
    id: "damso-match",
    title: "담소혼술바 호감도 매칭 시스템(바이브코딩)",
    period: "2026년 (개인 사이드 프로젝트)",
    stack: "Java 21, Spring Boot, JPA(Hibernate), H2, React 18, TypeScript, Vite, Tailwind CSS",
    summary: "오프라인 소개팅 이벤트의 좌석 배치를 <b>이분 그래프 최대 가중치 매칭 문제로 정형화</b>하고, MBTI 궁합·가치관 유사도를 결합한 100점 스코어링 엔진으로 최적 좌석을 자동 산출. 소규모 데이터 특성을 활용한 완전탐색으로 <b>최적해를 보장</b>하고, 상호 지목 우선순위를 지수 가중치로 표현한 1인 풀스택 프로젝트.",
    description: [
      "매장 내 소규모(최대 18명, 9남 9여) 호감도 기반 매칭 이벤트를 운영하는 실전 서비스",
      "‘사람을 어떻게 최적으로 짝지을 것인가’를 실제 알고리즘으로 풀어낸 것이 핵심",
      "관리자는 PC로 단계를 진행하고, 손님은 휴대폰으로 자리 확인·호감도 지목·메시지 전송을 진행하는 실시간 연동 구조"
    ],
    roles: [
      "백엔드·프론트·DB·배포 전 영역을 1인 개발 (Spring Boot + React + H2 → 단일 JAR 배포)",
      "등록 → 자리 배치(3라운드) → 호감도 지목 → 메시지 → 종료의 7단계 이벤트 운영 흐름 구현",
      "관리자(PC)·손님(모바일) 화면 분리 및 자리 배치도 UI(수동 보정 포함) 구현"
    ],
    extra: [
      {
        title: "핵심 알고리즘 · 최적 좌석 배치 (이분 그래프 최대 가중치 매칭)",
        items: [
          "‘남녀를 궁합 좋은 순으로 옆자리에 앉힌다’는 요구사항을 고전적 할당 문제(Assignment Problem)로 정형화 — 남성 N명 × 여성 M명을 노드, 쌍별 궁합 점수를 간선 가중치로 하는 이분 그래프 최대 가중치 완전 매칭",
          "좌석이 최대 9석(n ≤ 9)인 소규모 특성을 활용해 순열 완전탐색으로 근사가 아닌 정확한 최적해(exact optimum)를 보장 — 헝가리안 알고리즘(O(n³))의 구현 복잡도 대신 문제 규모에 맞는 실용적 도구 선택",
          "제약을 ‘점수 하나’로 표현: 이전 라운드 좌석 회피는 -1e15 소프트 페널티, 동점 무한 편향 방지는 미세 노이즈 타이브레이킹, 자리별 성별 슬롯 반전은 로직에 흡수"
        ]
      },
      {
        title: "3단계 라운드 전략 에스컬레이션",
        items: [
          "1차 — 손님이 입력한 좌석 그대로 초기 배치",
          "2차 — 여성 위치 고정 + 남성만 궁합 점수 최대화로 재배치(이전 자리 회피)",
          "3차 — 상호 지목 관계를 4개 티어로 나눠 1000^(tier-1) 지수 가중치 부여 (쌍방 1순위 → 1·2순위 교차/쌍방 2순위 → 단방 지목 → 미지목)",
          "지수 간격으로 ‘상위 티어 1쌍이 하위 티어 몇 쌍을 합쳐도 무조건 우선’되는 사전식 순서(lexicographic ordering)를 단일 점수 하나로 표현",
          "점수 행렬 구성만 라운드별로 바꾸고 완전탐색 코어는 공유 — 하나의 엔진을 재사용하는 설계"
        ]
      },
      {
        title: "도메인 점수 엔진 · MBTI × 가치관 (100점 만점)",
        items: [
          "MBTI 궁합(20점): 직접 설계한 16×16 매트릭스로 조합별 점수 산정",
          "가치관 일치(80점): 설문 응답을 비트열로 저장하고 문자 단위 일치율을 활성 문항 수에 비례해 정규화",
          "매칭 불가·미입력 시 fallback 처리 등 방어적 설계"
        ]
      },
      {
        title: "아키텍처 & 운영 관점 의사결정",
        items: [
          "풀스택 단일 배포: 백엔드가 React 빌드 결과물 정적 서빙 → 단일 JAR 배포",
          "DB 선택: H2 파일 모드 + AUTO_SERVER + PostgreSQL 호환 모드로 별도 DB 서버 없이 현장 운영하되, 추후 PostgreSQL 이전이 쉬운 마이그레이션 경로 확보",
          "경량 실시간 동기화: WebSocket 없이 localStorage 세션 + 4초 폴링으로 좌석/상태 반영, 이벤트 교체 시 세션 자동 무효화",
          "현장 UX 디테일: QR 온보딩(qrcode.react), 좌석 셀 폭에 맞춘 닉네임 가변 폰트 스케일링"
        ]
      }
    ],
    results: [
      "이분 매칭·완전탐색 등 알고리즘을 실제 도메인 문제에 적용해 최적해를 보장하는 설계 경험 확보",
      "제약·동점·우선순위를 단일 스코어로 표현하는 모델링 역량(페널티 · 미세 노이즈 · 지수 가중치) 강화",
      "기획부터 배포까지 1인 풀스택으로 실서비스를 완성하고, 기술적 의사결정을 근거와 함께 설명할 수 있는 경험 축적"
    ]
  }
];

// ===== Popup =====
function openPopup(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const section = (title, items) =>
    (items && items.length)
      ? `<h4>${title}</h4><ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`
      : "";

  const summary = project.summary
    ? `<p class="popup-summary">${project.summary}</p>`
    : "";

  const extra = (project.extra || []).map(s => section(s.title, s.items)).join("");

  const body = document.getElementById("popupBody");
  body.innerHTML = `
    <h3>${project.title}</h3>
    <p><span class="popup-meta">${project.period}</span></p>
    <p><span class="popup-meta">${project.stack}</span></p>
    ${summary}

    ${section("프로젝트 설명", project.description)}
    ${section("담당 역할", project.roles)}
    ${extra}
    ${section("유지보수", project.maintenance)}
    ${section("프로젝트 수행결과", project.results)}
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
