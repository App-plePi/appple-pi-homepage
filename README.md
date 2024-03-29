# App:ple pi 홈페이지

## ☝ Description
애플파이 홈페이지입니다. 현재 제작중입니다

## 접속방법
접속 링크는 [App:ple Pi Web](https://appplepi.com/) 입니다.<br>
학교 예산으로 appplepi.com 도메인을 구입하여 서비스중입니다.

## 사용방법
### 페이스북 및 깃허브 링크 수정
1. resource/data.json 에서 키`facebook` 와 `github`를 수정해주시면 됩니다.
### 단체사진 업로드 방법
1. 단체사진을 resource 디렉터리에 올려주세요. 가능하다면 `년도.확장자` 형식으로 올려주세요.
2. 업로드 한 후 resource/data.json 에서 키`groupPic` 에 대한 값을 업로드한 파일 이름으로 해주세요.
### 단체사진 및 설명 수정 방법
1. resource/data.json 에서 키`groupPicTxt` 에 대한 값을 수정하시면 됩니다.
### 실적 업데이트 방법
1. resource/data.json 에서 키`awards` 를 수정하면 됩니다.
2. 다음 예시와 같이 `카테고리:["수상내역","수상내역",...]` 형식으로 수정해주세요.
```
"awards":{
        "2021":{ 
            "모바일콘텐츠개발대회":["생활 디자인 금상","생활 디자인 은상","생활 디자인 동상","생활 디자인 동상","생활 비디자인 동상"],
            "선린해커톤":["생활분야 은상","생활분야 동상"],
            "디지털콘텐츠개발대회":["앱 디자인 대상"],
            "기타":["2021 소프트웨어 나눔축제 부스 운영","2021 창업경진대회 장려상"]
        },
        "2020": {
            "모바일콘텐츠개발대회":["게임 에셋 대상","생활 디자인 대상","생활 비디자인 대상"],
            "디지털콘텐츠개발대회":["앱 금상"],
            "기타":["선린해커톤 생활 금상","2020 소프트웨어 나눔축제 부스 운영","2020 창업동아리 우수사례 나눔전 금상","KBSC 특별상","STA-C 가작","KAC 고등창업 우수상"]
        }
    }
```
### 디자이너 포트폴리오 수정 방법
1. 디자이너의 포트폴리오 이미지를 resource 디렉터리에 올려주세요.
2. resource/data.json 에 portfolio 리스트에 업로드한 이미지 파일명을 추가해주세요.
### 애플파이 지원하기 수정 & 사용 방법
1. 지원 구글폼을 준비해주세요.
2. resource/data.json에 applicationLink에 구글폼 주소를 넣어주세요.
3. resource/data.json에 applicationTxt에 다음과 같이 입력해주세요 (모집할 기수)기 지원하기 ex) 13기 지원하기
4. resource/data.json에 applicationStartDate에 지원 시작 시간을 입력하고, applicationExpiredDate에 지원 마감 시간을 입력해주세요. 이때 시간은 다음과 같이 입력해주세요.<br>
입력하고 싶은 시간이 `2022년 1월 14일 15시 30분 15초` 라면 `Jan 14, 2022 15:30:15 +0900` <br>
이때 +0900은 대한민국 시간대를 의미합니다.

## 배포방법
Firebase Hosting 과 Github를 이용하여 자동 배포되도록 설정하였습니다.
1. 푸시가 되거나 PR이 되면 위 Actions 탭에서 배포과정을 확인하실 수 있습니다.
