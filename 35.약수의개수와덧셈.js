/* 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요. */

function solution(left, right) {
    var answer = 0;
    var cnt = 0;

    for (var i = left; i <= right; i++) {
        cnt = 0;
        for (var j = 1; j <= i; j++) {
            if (i % j == 0) {
                cnt++;
            }
        }
        cnt % 2 == 0 ? (answer += i) : (answer -= i);
    }

    return answer;
}

console.log(solution(13, 17));
