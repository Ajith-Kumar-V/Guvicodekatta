N=int(input())
l=[int(x) for x in input().split()][:N]
d=sum(l)
if d%2==0 and d%3==0 and d%5==0:
  print(1)
else:print(0)
