async function get_record(){
    let pos = getElementById("record");
    let ac1=0, ac1 = 0, ce1 = 0;
    let ac2=0, wa2 = 0, ce2 = 0;
    let today = new Date();
    let mon = today.getMonth();
    let trans = {
        1 : "一月", 
        2 : "二月", 
        3 : "三月", 
        4 : "四月", 
        5 : "五月", 
        6 : "六月", 
        7 : "七月", 
        8 : "八月", 
        9 : "九月", 
        10 : "十月", 
        11 : "十一月", 
        12 : "十二月"
    };
    let x = [];
    let y = [];
    for (i = mon - 11; i < mon; i++) {
        x.push(trans[i]);
        y.push(0);
    }
        

    let limit = 10;
    let date = new Date("0/0/0");
    let url_hasUser="https://www.truemogician.com:817/api/user/hasUser";

    for (i = 1; i < limit; i++) {
        let record=await axios.get(url_hasUser,{
            paramaters:{
                limit: number,
                date: date
            }
        })
        let rec = document.createElement('div');
        rec.setAttribute("class", "timeline-item clearfix");

        let left = document.createElement('left-part');
        left.setAttribute("class", "left-part");
        rec.appendChild(left);
        let right = document.createElement('div');
        right.setAttribute("class", "right-part");
        rec.appendChild(right);
    
        let day = document.createElement('h5');
        day.setAttribute("class", "item-period");
        day.innerText = record.date;
        left.appendChild(day);
        if (day < date) {
            break;
        }
        let item = day.getMonth();
        y[item] = y[item]+1;
    
        let opt = document.createElement('span');
        opt.setAttribute("class", "item-company");
        if (record.problemId == null) {
            opt.innerText = "自测";
        }
        else {
            opt.innerText = "对拍";
            let num = document.createElement('h4');
            num.setAttribute("class", "item-title");
            num.innerText=`Pro ${record.problemId} ${record.problemTitle}`;
            right.appendChild(num);
        }
        left.appendChild(opt);
    
        let res = document.createElement('ul');
        res.setAttribute("class", "knowleges");

        if (record.result =="Passed") {
            res.innerHTML = <ac>Accepted</ac>;
            if (record.problemId != NULL)
                ac1 = ac1+1;
            else
                ac2 = ac2+1;
        }
        else if (record.result == "Found") {
            res.innerHTML = <wa>Wrong Answer</wa>;
            if (record.problemId != NULL)
                wa1 = wa1+1;
            else
                wa2 = wa2+1;
        }
        else if (record.result == "CompilationError") {
            res.innerHTML = <ce>Compilation Error</ce>;
            if (record.problemId != NULL)
                ce1 = ce1+1;
            else
                ce2 = ce2+1;
        }
        right.appendChild(res);
        pos.appendChild(rec);
    }
    let ret = {ac1, wa1, ce1, ac2, wa2, ce2, x, y};
    return ret;
}

