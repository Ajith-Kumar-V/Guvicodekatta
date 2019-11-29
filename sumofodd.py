L,R=input().split()
l=int(L)
r=int(R)
h=0
for i in range(l,r):
        if (i%2)!=0:
                h=h+i
print(h)
