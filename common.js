  // 프로젝트 데이터 배열
  const projects = [
    {
      id: "stat",
      title: "통계자료시스템 구축 및 통합유지관리",
      period: "2022년 5월 ~",
      stack: "Java, Spring Framework, Cubrid, Linux, JavaScript, JQuery,",
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
      period: "2022년 5월 ~",
      stack: "Java, Spring Framework, Cubrid, Linux, Solr, JavaScript, JQuery,",
      description : [
        "국가전자도서관 시스템의 통합 운영 및 웹 기반 환경 유지보수",
        "전자자료 검색, 원문보기, 다운로드 등 핵심 서비스 안정성 확보 및 기능 개선",
        "Solr 기반 통합 검색 기능 유지보수 및 메타데이터 처리 로직 대응"
      ],
      roles : [
        "전자자료 상세조회/원문보기 화면 기능 개선 및 오류 대응",
        "Solr 색인 처리 자동화 및 검수 업무 지원",
        "전자도서관 메인 UI 일부 개편 및 코드 정리",
        "Spring Security 기반으로 SecurityFilterChain 설정을 통해 로그인 구현"
      ],
      maintenance : [
        "Solr 필드 맵핑, 색인 누락, 검색 정확도 이슈 지속 대응",
        "자료 상태에 따른 표시 조건 변경(온라인/오프라인 등)",
        "연계 기관 서비스 요청에 따라 API 개선 및 예외 처리"
      ],
      results : [
        "공공 전자정보 서비스의 실서비스 운영환경에서 발생하는 다양한 요구사항에 안정적으로 대응",
        "검색 품질 개선을 위해 콘텐츠 구조를 분석하고 메타데이터 처리 흐름을 정확히 파악하는 역량 강화"
      ]
    },
    {
      id : "nlcy",
      title: "국립어린이청소년도서관 통합유지관리",
      period: "2024년 1월 ~",
      stack: "Java, Spring Framework, JavaScript, JQuery, Cubrid",
      description : [
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
      results : [
        "신청 과정의 오류율 감소 및 관리자 업무 편의성 향상",
        "서비스 이용자 피드백을 기반으로 실사용 중심 기능 개선 경험 축적",
        "기존 구조를 유지하면서도 유연하게 기능을 추가하고 안정적으로 운영한 경험 확보"
      ]
    },
    {
      id : "nlnk",
      title: "국가지식자원공유서비스 통합유지관리",
      period: "2022년 5월 ~",
      stack: "Java, Spring Framework, JavaScript, JQuery, Cubrid",
      description : [
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
      results : [
        "기관 간 협력 기반의 지식정보 서비스 운영에 대한 이해도 확보",
        "실시간 사용자 문의 및 장애 이슈에 대한 빠른 분석·대응 역량 강화",
        "현업·운영자와의 커뮤니케이션을 통한 안정적인 공공서비스 운영 경험 축적"
      ]
    },
    {
      id : "nl",
      title: "국립중앙도서관 서비스운영 통합유지관리",
      period: "2022년 5월 ~",
      stack: "Java, Spring Framework, JavaScript, JQuery, Cubrid",
      description : [
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
      results : [
        "국가 기반 대국민 지식정보 서비스의 안정적 운영 경험 확보",
        "민원 대응과 장애 분석 프로세스를 실시간으로 경험하며 문제 해결 역량 강화",
        "기관·실무자와의 협업을 통해 정책성 시스템의 운영 프로세스를 이해하고 참여"
      ]
    }



    // 여기에 다른 프로젝트 추가 (id는 고유하게 지정)
  ];

  // 팝업 열기
  function openPopup(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const body = document.getElementById("popupBody");
    body.innerHTML = `
      <h3>${project.title}</h3>
      <p><strong>📅 프로젝트 기간:</strong> ${project.period}</p>
      <p><strong>🧰 스택:</strong> ${project.stack}</p>

      <h4>📌 프로젝트 설명</h4>
      <ul>${project.description.map(item => `<li>${item}</li>`).join("")}</ul>

      <h4>🧩 역할</h4>
      <ul>${project.roles.map(item => `<li>${item}</li>`).join("")}</ul>

      <h4>🔧 유지보수</h4>
      <ul>${project.maintenance.map(item => `<li>${item}</li>`).join("")}</ul>

      <h4>💡 프로젝트 수행결과</h4>
      <ul>${project.results.map(item => `<li>${item}</li>`).join("")}</ul>
    `;

    document.getElementById("popupLayer").style.display = "flex";
  }

  // 팝업 닫기
  function closePopup() {
    document.getElementById("popupLayer").style.display = "none";
    document.getElementById("popupBody").innerHTML = "";
  }

  
