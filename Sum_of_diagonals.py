n=int(input())
l=[]
for i in range(n):
        h=[int(x) for x in input().split()][:n]
        l.append(h)
k=0
o=0
for i in range(n):
        for j in range(n):
                if (i==j):
                        k=k+l[i][j]
                if ((i+j)==(n-1)):
                        o=o+l[i][j]
print(k*o)
