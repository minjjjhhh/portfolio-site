# Day47 · Jihye Min Portfolio

수정한 Figma의 CO_Landing, CO_work, MOVA, MOVERA 화면을 구현한 정적 웹사이트입니다.

## 파일

- `dist/index.html`: 기본 HTML과 공통 메뉴
- `dist/app.js`: 네 화면의 콘텐츠, 페이지 이동, 필터, 문의 검증 및 인터랙션
- `dist/styles.css`: 기존 포트폴리오의 공통 스타일과 모션
- `dist/refinements.css`: 수정된 CO 화면과 반응형 스타일
- `dist/assets/`: Figma 원본 이미지, 아이콘 및 Paperlogy 글꼴

## 로컬 실행

프로젝트 폴더에서 `python3 -m http.server 4173 --directory dist`를 실행하고 `http://localhost:4173`을 엽니다.

## 페이지 흐름

1. Landing `#home`의 대표 프로젝트 → Work `#/work`
2. Work의 MOVA → `#/work/mova`
3. Work의 MOVERA → `#/work/movera`
4. 공통 메뉴 About → Landing의 소개, Contact → 현재 화면의 문의 영역
5. 상세 화면 하단에서 전체 작업 또는 다른 프로젝트로 이동

브라우저 뒤로/앞으로 이동과 상세 URL 새로고침을 지원합니다.

## 인터랙션

글자별 제목 등장, 글자별 롤링 호버, 페이지 전환, 스크롤 등장, 읽기 진행에 따른 텍스트 강조, 이미지 패럴랙스/확대, 프로젝트 마퀴와 커서, 카테고리 필터, 모바일 메뉴와 키보드 탐색, 푸터 글자별 포인터 반응을 적용했습니다. 시스템의 모션 줄이기 설정도 지원합니다.

문의 폼은 입력값을 검증한 후 `minjjjhhh@gmail.com`으로 메일 작성 창을 엽니다. 서버 전송은 하지 않으며 메일 앱에서 전송을 마쳐야 합니다. 실제 연락처가 없는 전화번호 예시와 연결되지 않은 SNS 외부 링크는 전송 대상으로 사용하지 않습니다.

Figma의 프로젝트 비주얼 자리표시자와 MOVA의 작성용 문구는 유지했습니다. 프로젝트 3·4는 상세 화면이 없어 준비 중으로 표시합니다. Landing의 첫 프로젝트는 Figma에 맞춰 MOBA, Work와 상세에서는 MOVA로 표기했습니다.

## 확인

Landing → Work → 두 Case Work 이동, 카테고리 필터, 모바일 메뉴, 문의 필수값 검증, 로컬 이미지 로딩, Paperlogy 로딩, 콘솔 오류와 화면 넘침을 브라우저에서 확인했습니다. 원본 Framer 사이트와 모든 프레임 단위 타이밍의 100% 동일성을 보증하지 않습니다.
