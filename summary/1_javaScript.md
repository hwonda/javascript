# Lesson 1. How to learn JavaScript?

1. 책으로 읽기(추천서)
   - 더글라스 크락포드 : 자바스크립트 핵심 가이드
   - 자바스크립트 완벽 가이드
   - John Resig : 자바스크립트 닌자비급
   - 자바스크립트 개론


2. 라이브러리 학습, 소스코드 읽기
   - jQuery, underscore, Backbone
 - 
3. 연습, 질문, 강의
   
4. 최신 버전 표준 문서 읽기, 언어의 최신 기능 도입
   
5. 다이제스트나 블로그를 한 주마다 읽거나 컨퍼런스나 교육 비디오를 보면서 여러 웹 리소스를 따라감<br><br>


# +) what can do with Javascript

1. 웹 요소 제어
   - html 문서내용 구성
   - css 웹 문서 레이아웃, 색상, 스타일 지정 
   - Javascript 웹 문서의 각 요소를 가져와서 필요에 따라 스타일 변경 혹은 움직임
2. 웹 어플리케이션 생성(React, Angular, Vue.js / D3.js, DOM)

3. 다양한 라이브러리 사용

4. 서버 개발 가능(가능은 하다... 정도)<br><br>


# Javascript in Web

1. 웹 문서 내 자바스크립트 작성하기
   : 
   ```Javascript
      <body>
         <h1 id="heading">자바스크립트</h1>
         <p id="text">위 텍스트를 클릭하세요.</p>
         <script>
         var heading = document.querySelector('#hedaing');
         heading.onclick = function(){
            heading.style.color = "red";
            }
         </script>
      </body>
   ```
   - 클릭하면 글자색이 바뀌는 스크립트
   - <script<z>>와 </script<z>>로 삽입
   - 어디든 script를 작성할 수 있고, 여러 개 삽입할 수 있으며, 삽입된 위치 그 자리에서 바로 실행됨
   - 영어 대소문자 구분

2. 외부 스크립트로 연결해서 자바스크립트 작성하기

   ```Javascript
   <script src="외부 스크립트 파일 경로"></script>
   ```

   1번 파일에 바로 적용해보면

   ```Javascript
      <body>
         <h1 id="heading">자바스크립트</h1>
         <p id="text">위 텍스트를 클릭하세요.</p>
         <script src="git/javascript/change-color.js"></script>
      </body>
   ```

      ```Javascript
         // 경로: git/javascript/change-color.js
         var heading = document.querySelector('#hedaing');
         heading.onclick = function(){
            heading.style.color = "red";
            }
    
   ```
3. 웹 브라우저에서 스크립트를 해석하는 과정<br> 

