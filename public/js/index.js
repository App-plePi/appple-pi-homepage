/* 2022 버전부터 사용되는 코드 시작*/
const dataJSON = JSON.parse(JSON.stringify(Params))


window.onload = function() {
	//지원 버튼 설정
	document.querySelector("button#applicationBtn").innerHTML = dataJSON.applicationTxt
	//단체사진 업데이트
	document.querySelector(".group_photo").style.background = "url('resource/"+dataJSON.groupPic+"') 100%/cover no-repeat"
	document.querySelector("main.helptxt > p.text").innerHTML = dataJSON.groupPicTxt
	//수상실적 업데이트
	//키목록 추출
	const awardsYearList = Object.keys(dataJSON.awards)
	awardsYearList.sort()
	//각 년도별 수상 가져와서 웹에 올려줌.
	let finalAwardsHTML = "";
	for(let i = awardsYearList.length-1; i>=0; i--) {
		const yearAwardCategory = Object.keys(dataJSON.awards[awardsYearList[i]])
		let awardsHTML = '<li><input type="radio" id="radio-'+i.toString()+'" name="radio-accordion"'+((i==awardsYearList.length-1)?'checked="checked':'')+'" /><label for="radio-'+i.toString()+'">'+awardsYearList[i]+'</label><div class="content">'
		for(let j = 0; j < yearAwardCategory.length; j++) {
			awardsHTML += "<h4>"+yearAwardCategory[j]+"</h4>"
			awardsHTML += "<p>" + dataJSON.awards[awardsYearList[i]][yearAwardCategory[j]].join("</p><p>") + "</p>" 
		}
		awardsHTML += "</div></li>"
		finalAwardsHTML += awardsHTML
		
	}
	document.querySelector("ul.award-box").innerHTML=finalAwardsHTML
    
	//동아리 포폴 업데이트
	const portfolioList = dataJSON.portfolio
	let indicatorHTML = "";
	let caInnerHTML = "";
	for(let i = 0; i < portfolioList.length; i++) {
		if(i==0) {
            indicatorHTML +='<button type="button" data-bs-target="#outputSlideCaptions" data-bs-slide-to="'+i+'" class="active" aria-current="true" aria-label="Slide 1"></button>'
            caInnerHTML += '<div class="carousel-item active"><img src="resource/'+portfolioList[i]+'" class="d-block w-100" alt="포트폴리오 사진"></div>'
		} else {
            indicatorHTML += '<button type="button" data-bs-target="#outputSlideCaptions" data-bs-slide-to="'+i+'" aria-label="Slide '+(i+1)+'"></button>'
            

		caInnerHTML += '<div class="carousel-item"><img src="resource/'+portfolioList[i]+'" class="d-block w-100" alt="포트폴리오 사진"></div>'
		}
		
		document.querySelector('.carousel-indicators').innerHTML =  indicatorHTML
		document.querySelector('.carousel-inner').innerHTML = caInnerHTML
	}

}

function goFB() {
	window.open(dataJSON.facebook)
}
function goGH() {
	window.open(dataJSON.github)
}

//신청
function goApplyForm() {
	const curDate = new Date()
	const befDate = new Date(dataJSON.applicationStartDate)
	const aftDate = new Date(dataJSON.applicationExpiredDate)
	if(curDate > befDate && curDate <aftDate ) window.open(dataJSON.applicationLink)
	else alert("지원 가능한 시간이 아닙니다.")
	
}
/* 2022 버전부터 사용되는 코드 끝 */


$(document).ready(function() {

	var delay = 2000; //milliseconds
	var isSlide = false;
	var sevent = undefined; 

	// $.get("/getawards", function(res) {
	// 	var i = 0;
	// 	for (var data in res) {
	// 		i++;
	// 		var people = res[data].people.replace(/(?<=.{1})./, "🍎");
	// 		$('.awardtable').append('<tr><td><strong>'+i+'</strong></td><td>'+res[data].name+'</td><td>'+people+'</td><td>'+res[data].type+'</td><td>'+res[data].date+'</td></tr>');
	// 	}
	// });

	refreshAwardList();

	

	var contents;
$(".badge").click(function(event) {
	$('#exampleViewBody').html(`
   <div class="spinner-border text-danger" role="status">
      <span class="sr-only">Loading...</span>
     </div>
   `);
   $('#exampleView').modal('show');
   $('#exampleViewLabel').text(event.target.text);
   
   if("배열" == event.target.text){
      contents='int numArr[3] = { 11, 22, 33 }; // 배열을 생성, 값 지정<br>printf("%d", numArr[0]);    // 출력 : 11<br>printf("%d", numArr[1]);    // 출력 : 22<br>printf("%d", numArr[2]);    // 출력 : 33'
   }
   if("포인터" == event.target.text){
	   contents='int a = 5;<br> int *b;<br> b = &a;<br>b = 10;printf("%d", a); // a 출력 : 10'
   }
   if("함수" == event.target.text){
	   contents = 'public int add(int a, int b) {<br>return a + b; // a+b 반환<br>}<br>printf("%d", add(2,3)); // 출력 : 5'
   }
   if("구조체"==event.target.text){
	   contents='struct Person {   <br>char name[20]; <br>	int age;    <br>char address[100];   <br>};<br><br>Person p;<br>p.age = 25;<br>printf("%d", p.age); // 출력 : 25'
   }
   if("메소드와 클래스"==event.target.text){
	   contents='public class Main { //클래스 선언<br>// 메소드 선언<br>	public void add(int a, int b) {<br>	return a + b;<br>}<br>}<br>'
   }
   if("상속과 인터페이스"==event.target.text){
	   contents='public class Main <br> extends JavaPlugin implements Listener {<br> //extends : 상속 , implements : 인터페이스<br> }<br>'
   }
   if("반복문 심화" == event.target.text){
	   contents='int arr[] = { 3, 5, 7, 9 };<br> for(int data : arr) {<br>   System.out.println(data);<br>  }<br> // 출력<br> //    3<br>//    5<br>//    7<br>//    9   '
   }
   if("쓰레드" == event.target.text){
	   contents='Thread t = new Thread(<br>new Runnable() {<br>}); // 쓰레드 선언'
   }
   if("XML"==event.target.text){
	   contents='<info><br> <school>선린인터넷고등학교</school><br><platoon>애플파이</platoon><br> </info> <br> <!- XML의 구조 -->'
   }
   if("레이아웃"==event.target.text){
	   contents='<img src ="img/AS_layout.png" width="450"/>'
   }
   if("XML과 Java"==event.target.text){
	   contents='XML<br>  <Button<br>android:layout_width="10dp"<br> android:layout_height="10dp"<br>android:id="@+id/Btn"/><br>  cs<br>Java<br>   Button btn = findViewbyId(R.id.Btn);<br>btn.setOnClickListener(new Button.OnClickListener() {<br> System.out.println("버튼이 눌렸습니다.");<br> System.out.println("버튼 아팡 >.<");<br>});<br>'
   }
   if("Fragment"==event.target.text){
	   contents='<img src ="img/AS_Fragment.png" width="450"/>'
   }
   if("ViewPager"==event.target.text){
	   contents='<img src ="img/AS_ViewPager.png" width="450"/>'
   }
   if("Firebase"==event.target.text){
	   contents='<img src ="img/database.png" width="450"/><br>Firebase 기능 중 일부 (데이터베이스)'
   }
   if("외부 API"==event.target.text){
	   contents='자신에게 필요한 기능을 구현하기 위해 외부 API를 사용하는 방법을 배웁니다.'
   }
   if("Adobe Xd"==event.target.text){
	   contents='<a href="https://www.adobe.com/kr/products/xd.html">공식 사이트로 이동하기</a>'
   }
   if("Adobe Photoshop"==event.target.text){
	   contents='<a href="https://www.adobe.com/kr/products/photoshop.html">공식 사이트로 이동하기</a>'
   }
   if("Adobe illustrator"==event.target.text){
	contents='<a href="https://www.adobe.com/kr/products/illustrator.html">공식 사이트로 이동하기</a>'
  }
  if("Zeplin"==event.target.text){
	contents='<a href="https://zeplin.io/">공식 사이트로 이동하기</a>'
}
   $('#exampleViewBody').html(contents);
 });
//
	$('#add_upload').click(function(){
		var token = $("#award_token").val();
		var people = $("#award_people").val();
		var name = $("#award_name").val();
		var type = $("#award_type").val();
		var date = $("#award_date").val();
		$("#award_token").css('borderColor', '#ced4da');
		$("#award_people").css('borderColor', '#ced4da');
		$("#award_name").css('borderColor', '#ced4da');
		$("#award_type").css('borderColor', '#ced4da');
		$("#award_date").css('borderColor', '#ced4da');
		if(token == "") {
			$("#award_token").css('borderColor', 'red');
			return;
		} 
		if(people == "") {
			$("#award_people").css('borderColor', 'red');
			return;
		} 
		if(name == "") {
			$("#award_name").css('borderColor', 'red');
			return;
		} 
		if(type == "") {
			$("#award_type").css('borderColor', 'red');
			return;
		} 
		if(date == "") {
			$("#award_date").css('borderColor', 'red');
			return;
		}
		
		

		$("#addAwardForm").modal('hide');
		$.get("/Addaward?token="+token+"&people="+people+"&name="+name+"&type="+type+"&date="+date, function(response) {
			$("#award_token").val('');
			$("#award_people").val('');
			$("#award_name").val('');
			$("#award_type").val('');
			$("#award_date").val('');
			if(response == "올ㅋ") {
				addPOPUP("등록 성공했습니다.");
				refreshAwardList();
			} else {
				addPOPUP("등록 실패했습니다.");
			}
		});
	});

	$('#add_upload').click(function(){
		var token = $("#award_token").val();
		var people = $("#award_people").val();
		var name = $("#award_name").val();
		var type = $("#award_type").val();
		var date = $("#award_date").val();
		$("#award_token").css('borderColor', '#ced4da');
		$("#award_people").css('borderColor', '#ced4da');
		$("#award_name").css('borderColor', '#ced4da');
		$("#award_type").css('borderColor', '#ced4da');
		$("#award_date").css('borderColor', '#ced4da');
		if(token == "") {
			$("#award_token").css('borderColor', 'red');
			return;
		} 
		if(people == "") {
			$("#award_people").css('borderColor', 'red');
			return;
		} 
		if(name == "") {
			$("#award_name").css('borderColor', 'red');
			return;
		} 
		if(type == "") {
			$("#award_type").css('borderColor', 'red');
			return;
		} 
		if(date == "") {
			$("#award_date").css('borderColor', 'red');
			return;
		}
		
		

		$("#addAwardForm").modal('hide');
		$.get("/Addaward?token="+token+"&people="+people+"&name="+name+"&type="+type+"&date="+date, function(response) {
			$("#award_token").val('');
			$("#award_people").val('');
			$("#award_name").val('');
			$("#award_type").val('');
			$("#award_date").val('');
			if(response == "올ㅋ") {
				addPOPUP("등록 성공했습니다.");
				refreshAwardList();
			} else {
				addPOPUP("등록 실패했습니다.");
			}
		});
	});

	// $.get("/post", function(response) {
	// 	$(".post1").html(response[0].message.replace(/\n/g,"<br>"));
	// 	$(".post2").html(response[1].message.replace(/\n/g,"<br>"));
	// 	$(".post3").html(response[2].message.replace(/\n/g,"<br>"));
	// 	$(".post1date").text(formatDate(response[0].created_time));
	// 	$(".post2date").text(formatDate(response[1].created_time));
	// 	$(".post3date").text(formatDate(response[2].created_time));
	// })
	// $.get("/postIMGURI", function(response) {
	// 	$(".post1img").attr('src', response[0].full_picture);
	// 	$(".post2img").attr('src', response[1].full_picture);
	// 	$(".post3img").attr('src', response[2].full_picture);
	// })

	

	$('#fullpage').fullpage({
		//options here
		autoScrolling:true, 	
		scrollOverflow: true,
		scrollBar: false,
		keyboardScrolling: false,
		recordHistory: false, 
		

		anchors: ['main','introduce', 'software','media', 'record', 'outputs'],
		menu: '#menu',	
		// normalScrollElements: '.curriculem-box, .modal, .aw, .poster',
		normalScrollElements: '.modal, .aw, .poster',

		navigation: true,
        navigationPosition: 'right',
		navigationTooltips: ['App:ple PI','Introduce', "개발 커리큘럼",'디자인 커리큘럼', '수상실적', '작품']
				
		
	});

	function addPOPUP(message) {
		var ranid = makeid(6);
		$(".popup").append(`
				<div class="toast" role="alert" aria-live="polite" aria-atomic="true" id="AR`+ranid+`" data-delay="5000">
					<div class="toast-header">
					  <strong class="mr-auto">애플파이</strong>
					  <small class="text-muted">방금</small>
					  <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					  </button>
					</div>
					<div class="toast-body">
					`+message+`
					</div>
				  </div>
				</div>`);
		$("#AR"+ranid).toast('show');
	}

	function makeid(length) {
		var result           = '';
		var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for ( var i = 0; i < length; i++ ) {
		   result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	 }

	 function refreshAwardList() {
		 $(".awardtable").append(`
			 <tr>
			 <td><div class="spinner-border text-primary text-center" role="status"></div></td>
			 <td><div class="spinner-border text-primary text-center" role="status"></div></td>
			 <td><div class="spinner-border text-primary text-center" role="status"></div></td>
			 <td><div class="spinner-border text-primary text-center" role="status"></div></td>
			 <td><div class="spinner-border text-primary text-center" role="status"></div></td>
			 </tr>
		   `);
		$(".awardtable").empty();
		$.get("/Getawards", function(response) {
			var i = 0;
			var data;
			var keys = new Array();
			for (data in response) {
				// var people = response[data].people.replace(/(?<=.{1})./, "🍎"); Safari에서 정규표현식 사용 불가
				keys[i] = data;
				i++;
			}
			for (data of keys.reverse()) {
				var peoples = '';
				for(p of response[data].people.split(',')) {
					peoples += '<span class="people_index badge badge-info" >'+p.trim()+'</span>';
				}
				$('.awardtable').append('<tr><td><strong style="color:#888888; font-weight:550; font-size:12px;">'+i+'</strong></td><td style="font-weight:550; font-size:14px;">'+response[data].name+'</td><td>'+peoples+'</td><td style="font-size:14px;">'+response[data].type+'</td><td style="color:#888888; font-size:14px;">'+response[data].date+'</td></tr><hr>');		
				i--;
			}
		});
	 }


});
