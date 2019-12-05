N=int(input())
d=[int(x) for x in input().split()]
u,v=input().split()
U=int(u)
V=int(v)
if N<=100000:
        a=(d.index(U))+1
        b=(d.index(V))+1
print(abs(b-a))
