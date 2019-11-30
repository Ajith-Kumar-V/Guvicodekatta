n,k=input().split()
N=int(n)
m=[x for x in input().split()]
f=m.count(k)
if k in m:
	print(int(f)-1)
else:
	print("-1")
