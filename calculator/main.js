stack=["0"];
function calc(arr)
{
    arr[0]=parseFloat(arr[0]);
    arr[2]=parseFloat(arr[2]);
    if(arr[1]=="+")
    {
        return arr[0]+arr[2];
    }
    else if(arr[1]=="-")
    {
        return arr[0]-arr[2];
    }
    else if(arr[1]=="x")
    {
        return arr[0]*arr[2];
    }
    else if(arr[1]=="÷"){
        if(arr[2]==0)
        {
            alert("Can't divide a number with 0!!!!");
            return 0;
        }
        else{
            return arr[0]/arr[2];
        }
    }
    return ((arr[0]/arr[2])*100);
}
function check(s)
{
    if(s=="+" || s=="-" || s=="x" || s=="÷")
    {
        return false;
    }
    for(let i=0;i<s.length;i++)
    {
        if(s[i]=='.')
        {
            return false;
        }
    }
    return true;
}
var p=document.querySelectorAll('button');
p.forEach(function(i){
    i.addEventListener('click',function(){
        var s=i.innerText.toString();   
        console.log(s);
        switch(s)
        {
            case "AC":
                stack.splice(0,stack.length);
                break;
            case "=":
                if(stack.length==2)
                {
                    alert("The operation in invalid!!!!");
                }
                else if(stack.length==3){
                    stack=[calc(stack).toString()];
                }
                break;
            // case "+" || "-" || "x" || "÷":
            case "+":
                if(stack.length==0 || stack[stack.length-1]=="+" || stack[stack.length-1]=="-" || stack[stack.length-1]=="x" || stack[stack.length-1]=="÷")
                {
                    alert("Invalid sequence of operations !!!!");
                }
                else{
                    stack.push(s);
                }
                break;
            case "-":
                if(stack.length==0 || stack[stack.length-1]=="+" || stack[stack.length-1]=="-" || stack[stack.length-1]=="x" || stack[stack.length-1]=="÷")
                {
                    alert("Invalid sequence of operations !!!!");
                }
                else{
                    stack.push(s);
                }
                break;
            case "x":
                if(stack.length==0 || stack[stack.length-1]=="+" || stack[stack.length-1]=="-" || stack[stack.length-1]=="x" || stack[stack.length-1]=="÷")
                {
                    alert("Invalid sequence of operations !!!!");
                }
                else{
                    stack.push(s);
                }
                break;
            case "÷":
                if(stack.length==0 || stack[stack.length-1]=="+" || stack[stack.length-1]=="-" || stack[stack.length-1]=="x" || stack[stack.length-1]=="÷")
                {
                    alert("Invalid sequence of operations !!!!");
                }
                else{
                    stack.push(s);
                }
                break;
            case ".":
                if(check(stack[stack.length-1]))
                {
                    stack[stack.length-1]+=".";
                }
                else{
                    alert("invalid Operation!!!");
                }
                break;
            case "Del":
                if(stack.length>0)
                {   
                    stack[stack.length-1]=stack[stack.length-1].substring(0, stack[stack.length-1].length - 1);
                    if(stack[stack.length-1].length==0)
                    {
                        stack.pop();
                    }
                }
                break;
            default:
                if(stack[stack.length-1]=="+" || stack[stack.length-1]=="-" || stack[stack.length-1]=="x" || stack[stack.length-1]=="÷")
                {
                    stack.push("0");
                }
                stack[stack.length-1]+=s;
                var p=parseFloat(stack[stack.length-1]);
                stack[stack.length-1]=p.toString();
                break;    
        }
        if(stack.length==0)
        {
            stack.push("0");
        }
        let l="";
        for(let j=0;j<stack.length;j++)
        {
            l+=stack[j];
        }
        let p1=document.getElementById('show');
        console.log(stack);
        p1.innerText=l.toString();
    });
});