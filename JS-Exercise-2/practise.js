
let num="02533268";
let huh = String(num).split('');
let result="";
        for(i=0;i<num.length;i++){
            let a=parseInt(num[i]);
            let b=parseInt(num[i+1]);
            result+=a;
            if(a%2==0 && b%2==0){
                result+="-";
            }
        }
console.log(result);