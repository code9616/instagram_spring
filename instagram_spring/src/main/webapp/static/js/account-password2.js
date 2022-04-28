const profileUsername = document.querySelector(".profile-username");
const orginPasswordHidden = document.querySelector(".orgin-password")
const passwordInputs = document.querySelectorAll(".password-input");
const submitBtn = document.querySelector(".submit-btn");

let usercode = 0;
let principal = getPrincipal();

load();

function load(){
	profileUsername.textContent = principal.username;
}

function isEmpty(str){
	return typeof str =="undefined" || str == "" || str == null;
}

submitBtn.onclick = () => {
	let orginPasswordInput = itemInputs[0].value;
	let newPasswordInput = itemInputs[1].value;
	let newRePasswordInput = itemInputs[2].value;
	
	if(isEmpty(orginPasswordInput)){
		alert("이전 비밀번호를 입력해주세요.");
	}else if(isEmpty(orginPasswordInput)){
		alert("새 비밀번호를 입력해주세요.");
	}else if(newPasswordInput != newRePasswordInput){
		alert("새 비밀번호가 일치하지 않습니다.");
	}else if(originPasswordInput != originPasswordHidden.value){
		alert("이전 비밀번호를 확인해주세요.");
	}else if(originPasswordInput == newPasswordInput){
		alert("이전 비밀번호와 동일한 비밀번호는 사용하실 수 없습니다.");
	}else{
		document.querySelector("form").submit();
	}
	
	

/*	$.ajax({
		type: "put",
		url: "/app/profile/account/update",
		data: JSON.stringify(account),
		contentType: "application/json;charset=utf-8",
		dataType: "text",
		success: function(data){
			if(data == "true"){
				alert("회원정보 수정 완료");
				location.replace("/app/profile/account");
			}else{
				alert("이미 존재하는 사용자 이름입니다.");
			}
		},
		error: function(){
			alert("비동기 처리 오류");
		}
		
	});	*/
}
