l=[]
n,m=input().split()
n=int(n)
m=int(m)
for i in range(n):
        h=[int(x) for x in input().split()][:m]
        l.append(h)
k=0
for i in range(len(l)):
        for j in range(len(l[i])):
                if i==j:
                        k=k+l[i][j]
print(k)
