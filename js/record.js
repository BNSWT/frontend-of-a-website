function get_record(){
    let limit = 10;
    let date = new Date("0/0/0");
    let url_hasUser="https://www.truemogician.com:817/api/user/hasUser";
    let pos = document.getElementById("record");
    let child = document.createElement("div");
    child.className += " knowledges";
    child.innerHTML = "<ac>hhh</ac>";
    pos.appendChild(child);
    let left = document.createElement("div");
    left.className += " knowledges";
    left.innerHTML = "<ac>aaa</ac>";
    child.appendChild(left);

    let rec = document.createElement("div");
    rec.className += " timeline-item clearfix";
    pos.appendChild(rec);
    let left = document.createElement("div");
    left.className += " left-part";
    rec.appendChild(left);
    let div = document.createElement("div");
    div.className += " divider";
    rec.appendChild(div);
    let right = document.createElement("div");
    right.className += "right-part";
    rec.appendChild(right);
    
    let state= {
        0: "CompilationError",
        1: "Passed",
        2: "Found"
    };

    /*
    for (i = 0; i < limit; i=i+1) {
        
        let record=await axios.get(url_hasUser,{
            paramaters:{
                limit: number,
                date: date
            }
        })
        
        let record=[Math.random(), Math.random()%100, Math.random().toString(36).slice(-8), sta[Math.random()%3], Date(Math.random())];
        let rec = document.createElement('div');
        rec.setAttribute("class", "timeline-item clearfix");
    
        let left = document.createElement('left-part');
        left.setAttribute("class", "left-part");
        rec.appendChild(left);
        let right = document.createElement('div');
        right.setAttribute("class", "right-part");
        rec.appendChild(right);
    
        let date = document.createElement('h5');
        date.setAttribute("class", "item-period");
        date.innerText = record.date;
        left.appendChild(date);
    
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
        }
        else if (record.result == "Found") {
            res.innerHTML = <wa>Wrong Answer</wa>;
        }
        else if (record.result == "CompilationError") {
            res.innerHTML = <ce>Compilation Error</ce>;
        }
        right.appendChild(res);
        pos.appendChild(rec);
    }
    */
}

