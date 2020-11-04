let str = "can-enter-volunteer-organization";
function change(str) { 
        var newStr = '';
        var arr = str.split('-');//split是分隔字符串  使其每个部分变成一个数组
        for(var i = 0;i<arr.length;i++){
            var s = arr[i]; //
            if(i == 0){
                newStr += s;
            }else{
                newStr += s.substr(0,1).toLocaleUpperCase();
                newStr += s.substr(1,s.length-1);
            }
        }

        return newStr;
    }
str = change(str);
console.log(str);


let arr = ["myfirstactivity", "today activity", "yourActivity", "activitys"]
let newArr;
newArr = arr.join("");
newArr = newArr.substr("7", "8");

 console.log(newArr);