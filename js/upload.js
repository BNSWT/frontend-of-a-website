async function GetInformation(){
  let id=document.getElementById("ID");
  let username=document.getElementById("NAME");
  let email=document.getElementById("EMAIL");
  let avator=document.getElementById("AVATOR"); 
  let previewAvator=document.getElementById("preview_img"); 
  let phone=document.getElementById("PHONE"); 
  let qq=document.getElementById("QQ"); 
  let gender=document.getElementById("GENDER");
  let url_hasUser="https://www.truemogician.com:817/api/user/getInformation"
  let info=await axios.get(url_hasUser,{
      paramaters:{
          avator: true,//s
          phone: true,//n
          qq: true,//s
          gender: true
      },
  })
  if(response_account.status==200){
      id.innerHTML=info.id;
      username.innerHTML=info.username;
      email.innerHTML=info.email;
      avator.setAttribute("src", info.avator);
      previewAvator.setAttribute("src", info.avator);
      phone.innerHTML=info.phone;  
      qq.innerHTML=info.qq;
      gender.innerHTML=info.gender;
  }
}

//<button type="button" onclick="myFunction()">点击这里</button>

async function PutModify() {
  let tusername=document.getElementById("username");
  let tpassword=toString(document.getElementById("newPassword"));
  let tphone=toString(document.getElementById("phone"));
  let tqq=toString(document.getElementById("qq"));
  let tgender=document.getElementById("gender");
  let url_hasUser="https://www.truemogician.com:1992/api/user/modify"
  let putM=await axios.put(url_hasUser,{
      paramaters:{
        username: tusername,
        password: tpassword,
        phone: tphone,
        qq: tqq,
        gender: tgender
      },
  })
}
