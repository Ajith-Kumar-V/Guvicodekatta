n,k=input().split()
n=int(n)
k=int(k)
N=[int(x) for x in input().split()][:n]
K=[int(y) for y in input().split()][:k]
if k<=n<=10000:
        for i in range(len(K)):
                N.append(K[i])
                print(max(N),end=" ")
