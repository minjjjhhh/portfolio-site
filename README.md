# Day48 · Jihye Min Portfolio

Figma의 Day48_이미지자산얹기 페이지에 있는 day48_Landing, day48_work, day48_MOVA_Visual_Gallery, day48_Case Study_work_MOVERA를 구현한 정적 웹사이트입니다.

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

Figma의 최신 Hero 및 Landing·Work 프로젝트 이미지를 적용했습니다. MOVA의 소개·역할·기간·연도는 최신 내용을 반영하고, 상세 결과물의 비어 있는 이미지 영역과 작성용 본문은 유지했습니다. 프로젝트 3·4는 상세 화면이 없어 준비 중으로 표시합니다. 프로젝트명은 Landing·Work·상세에서 MOVA로 통일했습니다.

## 확인

Landing → Work → 두 Case Work 이동, 카테고리 필터, 모바일 메뉴, 문의 필수값 검증, 로컬 이미지 로딩, Paperlogy 로딩, 콘솔 오류와 화면 넘침을 브라우저에서 확인했습니다. 원본 Framer 사이트와 모든 프레임 단위 타이밍의 100% 동일성을 보증하지 않습니다.

About me의 제목과 본문은 Figma 색상(#6F6F6D / #B8B8B6)으로 고정하며, 해당 섹션에는 스크롤 글자 색상 변경을 적용하지 않습니다.

## Day48 변경

Landing에는 MOVA·MOVERA 2개 프로젝트를 표시하고, 두 카드 모두 Work로 이동합니다. Work에서는 각 프로젝트의 상세 화면으로 이동합니다. MOVA 상세는 원본 자산 27장, 브랜드 컬러, 무드 이미지, 로고·패턴·목업, 캠페인 산출물과 드래그 가능한 6장 슬라이드로 구성됩니다. `dist/gallery.js`와 `dist/day48.css`에 해당 구성과 반응형 스타일이 있습니다.

슬라이드는 마우스 드래그, 터치의 가로 스크롤, 이전·다음 버튼, 방향키·Home·End를 지원합니다. 모바일은 갤러리를 한 열로 배치하고 이미지 프레임을 비율에 맞게 축소합니다. 320px와 390px 브라우저 프레임에서 메뉴, Landing → Work → 각 상세 이동, 필터, 슬라이드 이동, 문서의 가로 넘침과 이미지 로딩을 확인했습니다. 실제 휴대폰 기기에서의 검수는 별도입니다.
