
class Math{
    sumA(a,b, callback) {
        setTimeout( ()=>{
            callback(a+b)
        }, 5 )
    }

    sum(a,b){
        return a + b
    }

    multiply(a, b) {
        return a*b
    }
    
    printSum(req, res, a, b){
        res.load('index', a + b);
    }
}
module.exports = Math
