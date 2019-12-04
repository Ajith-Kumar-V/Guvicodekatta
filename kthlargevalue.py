n,k=input().split()
N=int(n)
K=int(k)
d=[int(x) for x in input().split()]
for i in range(K-1):
        d.remove(max(d))
print(max(d))
