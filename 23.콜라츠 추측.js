function solution(num) {
    
    var answer = 0;
    
    for(i=0; i<500; i++){
        if(num!==1){
          num = num % 2 == 0 ? num/2 : num*3+1;
        }else{
            return answer = i;
        }
    }
    return answer -1;
}

console.log(solution(6))