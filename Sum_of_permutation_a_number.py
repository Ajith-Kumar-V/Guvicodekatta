def factorial(n): 
    f = 1
    if (n == 0 or n == 1): 
        return 1
    for i in range(2, n + 1): 
        f = f * i 
    return f 
def getSum(N, n):  
    fact = factorial(n)
    digitsum = 0
    for i in range(n): 
        digitsum += int(N[i]) 
    digitsum *= (fact // n) 
    res = 0
    i = 1
    k = 1
    while i <= n : 
        res += (k * digitsum) 
        k = k * 10
        i += 1
    return res 
N = input() 
n = len(N) 
print(getSum(N, n)) 
