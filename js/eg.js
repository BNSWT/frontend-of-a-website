async function check_input_account(){
    let account=document.getElementById("email");
    let password_local=document.getElementById("password");
    let url_hasUser="https://www.truemogician.com:817/api/user/hasUser"
    let response_account=await axios.get(url_hasUser,{
        paramaters:{
            email:data
        },
    })
    if(response_account.status==200){
        if(response_account.data.exist){
            change_input_style("email","false");
            return;
        }
        else    change_input_style("email","correct");
    }
    let url_login="https://www.truemogician.com:817/api/user/login"
    let response=await axios.get(url_login,{
        parameters:{
            email:account,
            password:password_local
        }
    })
    if(response.status==403){
        change_input_style("password","false");
    }
    else   window.location.href = "./index.html";
}