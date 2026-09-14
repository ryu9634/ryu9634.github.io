# ryu9634.github.io

개인 포트폴리오 사이트입니다. → **https://ryu9634.github.io**

빌드 도구 없는 정적 사이트입니다. HTML/CSS/JS 파일을 직접 수정하고 `main`에 푸시하면 됩니다.

## 구성

```
index.html            메인 페이지 (About / Projects / Stacks / Profile)
common.js             프로젝트 상세 데이터 + 팝업·경력 계산·스크롤 스크립트
style.css             스타일
portfolio.html        구버전 상세 페이지 → index.html#projects 로 리다이렉트
profile.jpg           프로필 사진
og-image.png / .svg   링크 공유 시 표시되는 미리보기 이미지
Develope_skill_icon/  Tech Stacks 섹션에서 쓰는 기술 아이콘 모음
```

## 콘텐츠 수정 가이드

### 프로젝트 추가·수정

**두 파일을 함께 고쳐야 합니다.**

1. `common.js` 상단 `projects` 배열에 상세 내용을 넣고
2. `index.html` 타임라인에 `<button class="ct-item" onclick="openPopup('<id>')">` 를 추가합니다.

`onclick`의 id와 `projects[].id`가 **정확히 일치해야** 팝업이 열립니다. 한쪽만 고치면 버튼을 눌러도 아무 일도 일어나지 않습니다.

`projects` 항목에서 쓸 수 있는 필드:

| 필드 | 설명 |
|---|---|
| `title` `period` `stack` | 팝업 상단 기본 정보 |
| `links` | `[{ label, url }]` — 실서비스·저장소 링크를 버튼으로 노출 |
| `summary` | 강조 박스 (HTML 태그 사용 가능) |
| `description` `roles` `maintenance` `results` | 목록 섹션 |
| `extra` | `[{ title, items }]` — 직접 정의하는 추가 섹션 |

비어 있는 섹션은 자동으로 생략되므로, 필요 없는 필드는 넣지 않아도 됩니다.

### 경력 연수 — 직접 고치지 마세요

Profile의 경력 항목은 **매 방문 시 자동 계산**됩니다. `index.html`에 적힌 텍스트는 JS가 실패했을 때만 보이는 폴백이고, 실제 화면에는 `common.js`의 `renderCareerLength()` 결과가 표시됩니다.

```html
<span class="profile-value" id="careerLength" data-career-start="2022-04">…</span>
```

바꿔야 할 값은 텍스트가 아니라 `data-career-start`(YYYY-MM)입니다. 시작한 달을 1개월째로 세므로 이력서 표기와 동일하게 나옵니다.

### 타임라인 / 기술 스택

- **Projects 타임라인** — `index.html`의 `.career-timeline`. 회사 안에서 일의 성격별로 묶을 때는 `<p class="ct-group">` 레이블을 씁니다.
- **Profile 타임라인** — `index.html`의 `.timeline`. 시간순으로 정렬합니다.
- **Tech Stacks** — `index.html`의 `.skills-grid`. 아이콘은 `Develope_skill_icon/`에 있는 파일명을 그대로 참조하고, 아이콘이 없는 기술은 텍스트만 넣으면 됩니다.

## 배포

`main` 브랜치에 푸시하면 `.github/workflows/jekyll-gh-pages.yml`이 GitHub Pages로 자동 배포합니다. 보통 1분 내외 걸리고, 반영 후에도 브라우저 캐시가 남아 있으면 강력 새로고침(Ctrl+F5)이 필요할 수 있습니다.

## 로컬 확인

```bash
python3 -m http.server 8000
```

`file://`로 직접 열면 일부 브라우저에서 로컬 리소스가 차단되므로 위처럼 서버로 띄우는 편이 확실합니다.

## 알아두면 좋은 것

- **`style.css`는 CRLF 줄바꿈입니다.** 편집기나 스크립트가 LF로 바꿔 저장하면 실제로는 몇 줄만 고쳤어도 diff가 파일 전체로 잡힙니다. 커밋 전에 `git diff --stat`으로 변경 규모를 확인하세요.
- 외부 폰트(Google Fonts) 외에 의존성이 없습니다. 폰트 로딩이 막힌 환경에서도 시스템 폰트로 정상 동작합니다.
- 화면에 노출하지 않지만 남겨둘 정보(예: 정확한 자격 취득일)는 HTML 주석으로 적어두고 있습니다.
