# 열린명조, 열린고딕

[서울경제진흥원](전 서울산업진흥원)에서 제작 및 배포한 무료 폰트입니다.

[서울경제진흥원]: https://www.sba.seoul.kr/

<!-- https://yoondesign.com/portfolio_government/?bmode=view&idx=157127395 -->
<!-- https://archive.is/mPUXR -->

> 필력의 느낌을 살린 자연스럽고 단단한 ‘열린명조’와 세련된 공간감으로 모던하고 깔끔한 ‘열린고딕’으로 구성. 본문용 서체로써 심미성과 활용성이 높은 서체로 제작하였다.

<!-- https://font.co.kr/collection/sub?family_idx=10288 -->
<!-- https://archive.is/UEib2 -->

> **열린명조**: 명조의 기본을 지키되 맺음에 힘을 주어 표현한 덕분에 인상적인 명조체가 탄생할 수 있었습니다. 영문, 한글, 한자를 섞어 짜도 이질감 없이, 조화롭게 어울리지요. 어디에나 가볍게 매치하는 스카프, 모자, 선글라스처럼 편안하면서도 개성적인 명조체가 필요하다면, 열린명조체를 선택해보세요.

<!-- https://font.co.kr/collection/sub?family_idx=10287 -->
<!-- https://archive.is/fOfug -->

> **열린고딕**: 영문, 한글, 한자를 섞어 짰을 때, 조화로운 어울림을 고려하여 제작한 폰트입니다. 곡선의 느낌을 최소화한 덕분에 모던하고 깔끔한 표현이 가능해졌지요. 사도 사도 부족한 흰 운동화, 흰 셔츠, 검정 볼펜처럼 깔끔하고 세련된 고딕체 또한 다다익선 아니겠어요?

## 서체 저작권

> 해당 폰트의 제작사인 윤디자인 확인 결과, 해당 폰트의 경우 오픈소스형 폰트 개발 프로젝트로 라이선스에 제약이 없는 폰트로 확인하였습니다.

| 항목     | 내용                                                |
| -------- | --------------------------------------------------- |
| 신청번호 | 국민신문고 1AA-2505-0517144                         |
| 처리기관 | 서울특별시 (투자출연기관 서울경제진흥원 윤리경영실) |

## 사용 방법

```html
<link href="https://cdn.jsdelivr.net/gh/hyunbinseo/yeolrin@1/index.css" rel="stylesheet" />

<style>
  body {
    font-family: 'Yeolrin Gothic', sans-serif;
    font-family: 'Yeolrin Myeongjo', serif;
  }
</style>
```

<details>
  <summary>GitHub 패키지 설치</summary>

```shell
pnpm i github:hyunbinseo/yeolrin
```

CSS 파일을 불러옵니다.

```
node_modules/yeolrin/index.css
```

```css
@import 'yeolrin'; /* Vite CSS */
```

```ts
import 'yeolrin'; // Vite JavaScript, TypeScript
```

폰트 패밀리를 지정합니다.

```css
body {
  font-family: 'Yeolrin Gothic', sans-serif;
  font-family: 'Yeolrin Myeongjo', serif;
}
```

</details>
