# 🏆 STAR LCK Template
Next.js / Zustand / Framer Motion 기반으로 제작한 김별이의 덕심이 담긴 LCK 템플릿 페이지입니다. 컴포넌트는 UI 역할 단위로 분리하여 재사용성과 관리 효율을 높이려고 고민했습니다. 동일한 레이아웃에 4개의 팀 색깔이 잘 보이도록 랜딩 페이지를 만들었습니다.

## ✨ Features
### **메인**
- 저의 프로젝트답게 제 이름을 반복해서 메인 페이지를 만들었습니다.<br/>
~~KIMSTAR 라서 반복하니까 뭔가 간지나네요~~<br/>
- RepeatedOutlineText 는 지나가다가 디자인 배너를 보고 감명받아 만들게 되었는데요.<br/>
- 메인이랑 플레이어 카드쪽 백그라운드로 사용될 거라서 재사용 컴포넌트로 만들었습니다.<br/>
     중앙 캐릭터는 리그오브레전드 누누와 윌럼프입니다. (저의 주챔)

### **헤더 & 푸터**
- 헤더쪽 별모양은 SVG 로 제작하여 넣었습니다. hover 하면 빙글빙글   돌아갑니다.<br/>
- GNB 는 심플하게 티 안 나게 넣고 싶어서 따로 포인트를 준 건 없습니다.<br/>
- 푸터는 ShinyText 를 활용하여 넣었습니다.

### **🎮 T1 / GEN / KT / HLE**
- JSON 스키마 설계를 통해 4팀으로 구성하여 데이터를 넣었습니다.
- Zustand 를 활용하여 각 팀의 기본 디폴트 화면은 황족 미드로 설정했습니다.
- 팀 선택 시 대표 컬러 기반으로 동적 UI를 적용했어요.
- 좌측 롤 포지션 아이콘 탭을 클릭하면 애니메이션과 함께 해당 포지션의 플레이어가 나타납니다.
- 메인에서 봤던 텍스트 반복되는 백그라운드 UI (RepeatedOutlineText) 가 여기서 재사용됩니다.
- 각 팀의 슬로건 문구가 교차로 움직이는 모션 텍스트를 넣었어요. (사실 여기도 zustand로 속도 제어 넣었어요.)
- Legends Never Die 마무리 텍스트에 다시 팀 메인 칼라를 가져와 그라디언트 효과를 줬습니다.

### **🥇 MOST PICKED CHAMPIONS**
- 2025 월즈 기준으로 플레이어의 주 챔피언 3개를 노출시켰어요.
- (틀린 정보는 더미 데이터라고 생각해 주세요.)
- (스토브리그 기간 전 데이터라 틀릴 수도 있습니다.)
- 승률 카운트 애니메이션도 넣었어요 (0 → N% Motion animate)
- 뭔가 카드 뽑는 느낌을 주고 싶었습니다.

### **💖 FAVORITE (관심 플레이어)**
- 플레이어 카드 좌측 하단의 FAVORITE 버튼으로 토글합니다.
- Zustand + LocalStorage persist 로 전역 상태로 저장했어요.
- 관심 플레이어들은 zustand 전역 상태로 관리되고 있어요.
- 실시간으로 우측 하단 FAVORITE 버튼 사이드바가 업데이트 돼요.
- FAVORITE 미니 팝업창에서는 관심 플레이어 리스트를 볼 수 있어요.
- FAVORITE 미니 팝업창에서는 관심 플레이어의 주력 챔피언이 하나만 노출돼요.
- 관심 해제 버튼을 누르면 FAVORITE 리스트에서 사라집니다.
- 자세히 보기를 누르면 FAVORITE 페이지로 이동됩니다.
- FAVORITE 페이지에 진입하면 관심 플레이어 카드들이 쭈르륵 모션되어 노출됩니다.


## 🧠 기술 스택 (Tech Stack)

| Category | Tech |
|---------|------|
| Frontend Framework | **Next.js 15 / App Router** |
| CSS | **Tailwind CSS v4** |
| Animation | **Motion / Framer Motion** |
| State Management | **Zustand + persist** |
| Assets & Images | Next/Image 최적화 |
| TypeScript | full 적용 |

---

## 🧱 프로젝트 구조
```bash
src/
 ├── app/
 │   ├── teams/[slug]/page.tsx        # 개별 팀 상세 페이지
 │   └── favorites/page.tsx           # 찜한 플레이어 목록 페이지
 │
 ├── components/
 │   ├── TeamView.tsx                 # 팀 상세 페이지 핵심 뷰
 │   ├── PlayerCard.tsx               # 플레이어 카드 메인 UI
 │   ├── RepeatedOutlineText.tsx      # 반복 외곽선 텍스트 배경
 │   ├── PlayerMostChamps.tsx         # 모스트 챔피언 3개 + 승률 UI
 │   ├── GradientText.tsx             # 그라디언트 텍스트
 │   ├── ScrollVelocity.tsx           # 스크롤 속도 기반 텍스트 효과
 │   ├── ShinyText.tsx                # 반짝 텍스트 애니메이션
 │   ├── StarIcon.tsx                 # 헤더 별 아이콘
 │   └── WinRateCounter.tsx           # 승률 숫자 카운팅 애니메이션
 │
 ├── components/layout/
 │   ├── FloatingFavoritesToggle.tsx  # 관심 사이드바 열기 토글 버튼
 │   ├── Footer.tsx                   # 전역 푸터
 │   ├── Header.tsx                   # 전역 헤더
 │   └── SideBar.tsx                  # 관심 플레이어 사이드바
 │
 ├── lib/
 │   ├── config/
 │   │   └── teams.ts                 # 팀 / 플레이어 / 모스트챔피언 정의
 │   └── store/
 │       └── lckStore.ts              # Zustand 전역 상태 (포지션/관심/스크롤속도)
 │
 └── public/
     ├── positions/                   # 포지션 아이콘 이미지
     ├── teams/                       # 팀 로고 / 플레이어 사진
     └── champs/                      # 챔피언 이미지