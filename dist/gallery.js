'use strict';
const MOVA_GALLERY = {
  "imgMoodImage01": {
    "key": "imgMoodImage01",
    "fit": "cover",
    "file": "fc453.png",
    "width": 1024,
    "height": 1024,
    "title": "01 / 절제된 데일리웨어",
    "alt": "절제된 데일리웨어",
    "description": "차분한 컬러와 담백한 스타일링으로 일상적인 브랜드 인상을 만듭니다."
  },
  "imgMoodImage02": {
    "key": "imgMoodImage02",
    "fit": "cover",
    "file": "40516.png",
    "width": 1122,
    "height": 1402,
    "title": "02 / 편안한 소재",
    "alt": "편안한 소재",
    "description": "부드러운 원단의 결과 따뜻한 색감으로 편안한 착용 경험을 전달합니다."
  },
  "imgMoodImage03": {
    "key": "imgMoodImage03",
    "fit": "cover",
    "file": "de31a.png",
    "width": 1024,
    "height": 1024,
    "title": "03 / 자연스러운 실루엣",
    "alt": "자연스러운 실루엣",
    "description": "여유로운 형태와 유니섹스 스타일로 자연스럽고 편안한 분위기를 표현합니다."
  },
  "imgHero01": {
    "key": "imgHero01",
    "fit": "cover",
    "file": "a087d.png",
    "width": 1920,
    "height": 1080,
    "title": "01 / 웹 히어로 배너",
    "alt": "벽돌 건물 앞의 MOVA 의류를 입은 두 모델과 브랜드 문구가 있는 웹 히어로 배너",
    "description": "두 모델의 착장과 브랜드 메시지를 결합해 웹 랜딩의 첫인상을 구성했습니다."
  },
  "imgWatermark01": {
    "key": "imgWatermark01",
    "fit": "contain",
    "file": "f7fda.png",
    "width": 3072,
    "height": 2047,
    "title": "02 / 워드마크",
    "alt": "흰 배경 가운데 남색 소문자 mova 워드마크",
    "description": "부드러운 소문자 형태로 일상적인 브랜드 인상을 표현했습니다."
  },
  "imgPatternNavy": {
    "key": "imgPatternNavy",
    "fit": "cover",
    "file": "f2856.jpg",
    "width": 1536,
    "height": 1024,
    "title": "03 / 모노그램 패턴",
    "alt": "남색 배경 위에 크림색 MOVA 모노그램과 작은 점이 반복되는 패턴",
    "description": "로고를 반복 패턴으로 확장해 여러 매체에 적용할 수 있도록 했습니다."
  },
  "imgMockupTshirt": {
    "key": "imgMockupTshirt",
    "fit": "cover",
    "file": "c36fb.jpg",
    "width": 1536,
    "height": 1024,
    "title": "04 / 의류 목업",
    "alt": "아이보리, 베이지, 파란색, 남색 맨투맨 네 벌에 MOVA 워드마크가 적용된 의류 목업",
    "description": "서로 다른 색상의 맨투맨에 로고를 적용해 활용 범위를 보여줍니다."
  },
  "imgMockupGift": {
    "key": "imgMockupGift",
    "fit": "cover",
    "file": "9c69f.png",
    "width": 2896,
    "height": 2172,
    "title": "05 / 패키지 목업",
    "alt": "MOVA 모노그램과 모자 그림이 반복된 포장지로 감싼 선물 상자와 브랜드 행택 목업",
    "description": "모노그램과 모자 심볼을 포장지와 행택에 적용했습니다."
  },
  "imgMockupLabel": {
    "key": "imgMockupLabel",
    "fit": "cover",
    "file": "73911.jpg",
    "width": 883,
    "height": 1103,
    "title": "06 / 브랜드 라벨",
    "alt": "아이보리색 브랜드 라벨에 파란 모자 심볼과 MOVA 모노그램이 인쇄된 목업",
    "description": "심볼과 모노그램을 작은 라벨 크기에서도 읽히도록 배치했습니다."
  },
  "imgSymbol01": {
    "key": "imgSymbol01",
    "fit": "contain",
    "file": "7bee6.png",
    "width": 1000,
    "height": 1000,
    "title": "07 / 모자 심볼",
    "alt": "파란 모자와 남색 M이 결합된 MOVA 브랜드 심볼",
    "description": "브랜드의 M과 모자 형태를 결합한 핵심 심볼입니다."
  },
  "imgLogo01": {
    "key": "imgLogo01",
    "fit": "contain",
    "file": "453f3.jpg",
    "width": 1254,
    "height": 1254,
    "title": "08 / 음각 모노그램",
    "alt": "남색 표면에 크림색 MOVA 모노그램이 음각으로 표현된 이미지",
    "description": "다른 소재와 마감에서도 사용할 수 있는 모노그램 표현입니다."
  },
  "imgPatternBasic": {
    "key": "imgPatternBasic",
    "fit": "cover",
    "file": "0ee2e.jpg",
    "width": 3072,
    "height": 2047,
    "title": "09 / 베이지 패턴",
    "alt": "베이지 바탕에 남색 MOVA 모노그램과 파란 점이 반복된 패턴",
    "description": "밝은 바탕에서 모노그램을 반복 패턴으로 활용했습니다."
  },
  "imgPatternBallcap": {
    "key": "imgPatternBallcap",
    "fit": "cover",
    "file": "e4739.jpg",
    "width": 1536,
    "height": 1024,
    "title": "10 / 모자 패턴",
    "alt": "베이지 바탕에 MOVA 모노그램과 여러 색의 모자 심볼이 반복된 패턴",
    "description": "심볼을 더해 브랜드의 특징을 패턴으로 확장했습니다."
  },
  "imgIconApp": {
    "key": "imgIconApp",
    "fit": "contain",
    "file": "ac929.png",
    "width": 851,
    "height": 889,
    "title": "11 / 앱 아이콘",
    "alt": "남색 바탕에 흰색 M과 파란 모자 심볼이 있는 MOVA 앱 아이콘",
    "description": "작은 디지털 접점에서도 심볼을 알아볼 수 있도록 구성했습니다."
  },
  "imgSticker": {
    "key": "imgSticker",
    "fit": "contain",
    "file": "0f3df.png",
    "width": 1005,
    "height": 566,
    "title": "12 / 스티커 로고",
    "alt": "MOVA 모자 심볼과 소문자 mova 워드마크를 결합한 스티커 이미지",
    "description": "워드마크와 심볼을 하나의 그래픽으로 결합했습니다."
  },
  "imgKeyVisual01": {
    "key": "imgKeyVisual01",
    "fit": "cover",
    "file": "c25a4.png",
    "width": 1536,
    "height": 1024,
    "title": "01 / 데일리웨어 컬렉션",
    "alt": "데일리웨어 컬렉션",
    "description": ""
  },
  "imgKeyVisual02": {
    "key": "imgKeyVisual02",
    "fit": "cover",
    "file": "3ef7a.png",
    "width": 1672,
    "height": 941,
    "title": "02 / 브랜드 스타일링",
    "alt": "브랜드 스타일링",
    "description": ""
  },
  "imgKeyVisual03": {
    "key": "imgKeyVisual03",
    "fit": "cover",
    "file": "a1364.png",
    "width": 1024,
    "height": 1024,
    "title": "03 / 유니섹스 데일리웨어",
    "alt": "유니섹스 데일리웨어",
    "description": ""
  },
  "imgKeyVisual04": {
    "key": "imgKeyVisual04",
    "fit": "cover",
    "file": "44a0c.png",
    "width": 1672,
    "height": 941,
    "title": "04 / 소재와 컬러 디테일",
    "alt": "소재와 컬러 디테일",
    "description": ""
  },
  "imgKeyVisual05": {
    "key": "imgKeyVisual05",
    "fit": "cover",
    "file": "e26ae.png",
    "width": 1672,
    "height": 941,
    "title": "05 / 카페 공간과 브랜드 무드",
    "alt": "카페 공간과 브랜드 무드",
    "description": ""
  },
  "imgKeyVisual06": {
    "key": "imgKeyVisual06",
    "fit": "cover",
    "file": "4b5c7.png",
    "width": 1024,
    "height": 1024,
    "title": "06 / 내추럴 룩북",
    "alt": "내추럴 룩북",
    "description": ""
  },
  "img11Detail": {
    "key": "img11Detail",
    "fit": "cover",
    "file": "e36ac.png",
    "width": 2160,
    "height": 2160,
    "title": "13 / 원단 디테일",
    "alt": "베이지와 파란 원단 위에 MOVA 모노그램이 보이는 이미지",
    "description": "컬러와 소재의 질감 위에 모노그램을 배치한 비주얼입니다."
  },
  "img11Sns": {
    "key": "img11Sns",
    "fit": "cover",
    "file": "9b759.png",
    "width": 2160,
    "height": 2160,
    "title": "14 / SNS 비주얼",
    "alt": "카페 앞에서 MOVA 모자를 쓴 모델의 SNS용 비주얼",
    "description": "제품 착용 장면을 일상적인 분위기의 콘텐츠로 확장했습니다."
  },
  "img114Poster": {
    "key": "img114Poster",
    "fit": "cover",
    "file": "48017.png",
    "width": 1891,
    "height": 2648,
    "title": "15 / 브랜드 포스터",
    "alt": "MOVA 로고와 모자 심볼이 적용된 매장 외관 포스터",
    "description": "매장 공간에 로고와 심볼을 적용한 포스터 시안입니다."
  },
  "imgImage16": {
    "key": "imgImage16",
    "fit": "cover",
    "file": "5096e.png",
    "width": 3840,
    "height": 2160,
    "title": "16 / 웹 배너",
    "alt": "카페 앞 옷더미와 MOVA 모노그램이 배치된 가로형 웹 배너",
    "description": "브랜드 이미지와 쇼핑 메시지를 결합한 웹용 배너입니다."
  },
  "img169Web02": {
    "key": "img169Web02",
    "fit": "cover",
    "file": "4213c.png",
    "width": 4096,
    "height": 2304,
    "title": "17 / 프로모션 배너",
    "alt": "푸른 원단 위에 MOVA 여름 세일 문구가 배치된 가로 배너",
    "description": "소재 이미지에 프로모션 정보를 더한 배너 시안입니다."
  },
  "imgHero02": {
    "key": "imgHero02",
    "fit": "cover",
    "file": "b961c.png",
    "width": 1024,
    "height": 577,
    "title": "18 / 캠페인 키비주얼",
    "alt": "베이지색 벽 앞에 나란히 서 있는 두 모델이 MOVA 의류를 착용한 모습",
    "description": "두 모델의 착장으로 브랜드의 일상적인 스타일을 보여줍니다."
  }
};

function galleryFigure(key,extra='') {
  const d=MOVA_GALLERY[key];
  return `<figure class="gallery-figure reveal ${extra}" data-asset="${key}"><div class="gallery-media" style="--fit:${d.fit}"><img src="assets/mova/${d.file}" width="${d.width}" height="${d.height}" loading="lazy" decoding="async" draggable="false" alt="${escapeHTML(d.alt)}"></div><figcaption><h3>${escapeHTML(d.title)}</h3>${d.description?`<p>${escapeHTML(d.description)}</p>`:''}</figcaption></figure>`;
}
function galleryHeading(label,title,description='') {
  return `<div class="gallery-heading reveal"><p class="eyebrow">${label}</p><h2>${title}</h2>${description?`<p>${description}</p>`:''}</div>`;
}
function renderMovaGallery() {
  return `<article class="mova-gallery" data-design="day48_MOVA_Visual_Gallery">
    <section class="gallery-section gallery-intro"><p class="eyebrow reveal">MOVA / BRAND IDENTITY & VISUAL OUTPUTS</p><h1 class="work-title reveal">MOVA</h1><p class="gallery-lead reveal">로고와 패턴을 만들고, 의류와 패키지 목업까지 적용한<br> 브랜드 비주얼 모음</p></section>
    <section class="gallery-section mood-section">${galleryHeading('MOVA / BRAND MOOD','일상에 자연스럽게 스며드는 브랜드','절제된 유니섹스 데일리웨어 · 자연스러운 실루엣 · 편안한 소재와 색감')}
      <div class="color-palette reveal">${[['웜 아이보리','#E8E3D9'],['웜 베이지','#CEBCAE'],['뮤트 블루','#5984AA'],['딥 네이비','#132F45']].map(([name,color])=>`<div class="color-swatch" style="--swatch:${color}"><span aria-hidden="true"></span><p>${name}<br>${color}</p></div>`).join('')}</div>
      <div class="gallery-row three">${['imgMoodImage01','imgMoodImage02','imgMoodImage03'].map(k=>galleryFigure(k)).join('')}</div>
    </section>
    <section class="gallery-section">${galleryFigure('imgHero01','gallery-hero')}</section>
    <section class="gallery-section">${galleryHeading('SELECTED VISUALS','브랜드에서 적용까지')}
      <div class="gallery-row">${galleryFigure('imgWatermark01')}${galleryFigure('imgPatternNavy')}</div>
      <div class="gallery-row">${galleryFigure('imgMockupTshirt')}${galleryFigure('imgMockupGift')}</div>
      ${galleryFigure('imgMockupLabel','gallery-label')}
    </section>
    <section class="gallery-section">${galleryHeading('BRAND SYSTEM','로고와 패턴의 확장')}
      <div class="gallery-row">${galleryFigure('imgSymbol01')}${galleryFigure('imgLogo01')}</div>
      <div class="gallery-row">${galleryFigure('imgPatternBasic')}${galleryFigure('imgPatternBallcap')}</div>
      <div class="gallery-row">${galleryFigure('imgIconApp')}${galleryFigure('imgSticker')}</div>
    </section>
    <section class="gallery-section slideshow-section">${galleryHeading('VISUAL OUTPUTS / 06 SELECTED IMAGES','MOVA의 무드를 이미지로 펼치다','가로로 드래그해 산출물 6장을 살펴보세요. →')}
      <div class="slideshow reveal" role="region" aria-roledescription="이미지 슬라이드" aria-label="MOVA 비주얼 산출물 6장" tabindex="0">${[1,2,3,4,5,6].map(i=>galleryFigure('imgKeyVisual0'+i)).join('')}</div>
      <div class="slideshow-nav"><span class="slide-status" aria-live="polite">01 / 06</span><span class="drag-hint">← DRAG TO EXPLORE →</span><div class="slide-actions"><button type="button" data-slide="-1" aria-label="이전 이미지">←</button><button type="button" data-slide="1" aria-label="다음 이미지">→</button></div></div>
    </section>
    <section class="gallery-section">${galleryHeading('APPLICATIONS','콘텐츠와 디지털 접점')}
      <div class="gallery-row">${galleryFigure('img11Detail','gallery-square')}${galleryFigure('img11Sns','gallery-square')}</div>
      <div class="gallery-row">${galleryFigure('img114Poster','gallery-poster')}<div class="gallery-stack">${galleryFigure('imgImage16')}${galleryFigure('img169Web02')}</div></div>
      ${galleryFigure('imgHero02','gallery-end')}
    </section>
  </article>`;
}

function initGallery() {
  if(initGallery.cleanup)initGallery.cleanup();
  const track=document.querySelector('.slideshow');
  if(!track)return;
  const section=track.closest('section'),slides=[...track.querySelectorAll('.gallery-figure')];
  const prev=section.querySelector('[data-slide="-1"]'),next=section.querySelector('[data-slide="1"]');
  let down=false,start=0,origin=0,moved=false;
  const index=()=>Math.max(0,Math.min(slides.length-1,Math.round(track.scrollLeft/(slides[0].getBoundingClientRect().width+parseFloat(getComputedStyle(track).gap)))));
  const update=()=>{section.querySelector('.slide-status').textContent=String(index()+1).padStart(2,'0')+' / 06';prev.disabled=track.scrollLeft<2;next.disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-2;};
  const move=step=>{const i=Math.max(0,Math.min(slides.length-1,index()+step));track.scrollTo({left:slides[i].offsetLeft-slides[0].offsetLeft,behavior:reduceMotion.matches?'instant':'smooth'});};
  prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
  track.addEventListener('scroll',update,{passive:true});
  track.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowLeft'?-1:1);}if(e.key==='Home'){e.preventDefault();track.scrollTo({left:0,behavior:'smooth'});}if(e.key==='End'){e.preventDefault();track.scrollTo({left:track.scrollWidth,behavior:'smooth'});}});
  track.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'||e.button!==0)return;down=true;moved=false;start=e.clientX;origin=track.scrollLeft;track.setPointerCapture(e.pointerId);track.classList.add('is-dragging');});
  track.addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-start;if(Math.abs(dx)>4)moved=true;track.scrollLeft=origin-dx;});
  const end=()=>{if(!down)return;down=false;track.classList.remove('is-dragging');if(moved)move(0);update();};
  track.addEventListener('pointerup',end);track.addEventListener('pointercancel',end);track.addEventListener('lostpointercapture',end);
  const preload=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){track.querySelectorAll('img').forEach(img=>img.loading='eager');preload.disconnect();}},{rootMargin:'600px'});preload.observe(track);
  const resize=new ResizeObserver(update);resize.observe(track);initGallery.cleanup=()=>{resize.disconnect();preload.disconnect();};update();
}
