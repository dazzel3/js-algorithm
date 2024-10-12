function solution(prices) {
    return prices.map((price, index) => {
        for (let i = index + 1; i < prices.length; i++) {
            if (prices[i] < price) return i - index
        }
        return (prices.length - 1) - index
    })
}