# ryu9634.github.io

개인 포트폴리오 사이트입니다. → **https://ryu9634.github.io**

## 구성

```
index.html      메인 페이지 (About / Projects / Stacks / Profile)
common.js       프로젝트 상세 데이터 + 팝업·스크롤 스크립트
style.css       스타일
portfolio.html  구버전 상세 페이지 → index.html#projects 로 리다이렉트
```

## 배포

`main` 브랜치에 푸시하면 `.github/workflows/jekyll-gh-pages.yml`이 GitHub Pages로 자동 배포합니다.

## 로컬 확인

정적 파일이라 별도 빌드 없이 바로 열어보면 됩니다.
프로젝트 내용을 고칠 때는 `common.js` 상단의 `projects` 배열과 `index.html`의 타임라인 버튼을 함께 맞춰주세요.

```bash
python3 -m http.server 8000
```
