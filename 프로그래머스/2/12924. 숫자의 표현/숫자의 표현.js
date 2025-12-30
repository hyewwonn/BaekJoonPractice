function solution(n) {
    // 연속된 자연수의 합은 항상 “홀수 × 어떤 수” 꼴이 되기 때문에 n의 홀수 약수 개수와 같다
    // n의 홀수 약수 개수 = 연속된 자연수 표현 개수
    
    return Array.from({ length: n }, (_, i) => i + 1).filter(i => n % i === 0 && i % 2 === 1).length;
}