

function rateLimiter(requests, n, x){
    let map = new Map(); // "/user": [timestamp1, timestamp2]
    let ans = []

    requests.forEach(r => {
        console.log("map: ", map)

        if(map.has(r.apiEndpoint)){
            let arr = map.get(r.apiEndpoint)
            if(arr.length <= n){
                if(arr[0]+x < r.timestamp){
                    ans.push(false)
                } else {
                    const newArr = arr.filter(i => i > r.timestamp-10)
                    newArr.push(r.timestamp)
                    map.set(r.apiEndpoint,newArr );
                    ans.push(true);
                }
            }
        } else {
            map.set(r.apiEndpoint, [r.timestamp])
            ans.push(true)
        }
    })
    return ans;
}

const requests = [
    { timestamp: 1617984000, apiEndpoint: '/users' },
    { timestamp: 1617984005, apiEndpoint: '/products' },
    { timestamp: 1617984010, apiEndpoint: '/users' },
    { timestamp: 1617984015, apiEndpoint: '/users' },
    { timestamp: 1617984020, apiEndpoint: '/products' }
];

const n = 2; // Maximum 2 requests per x seconds
const x = 10; // Time window of 10 seconds

console.log(rateLimiter(requests, n, x));