N=input()
g=len(N)
h=0
k=1
for i in range(g):
  h=h+int(N[i])
for i in range(g):
  k=k*int(N[i])
l=h+k
if l==int(N):
  print("Great")
else:
  print("no")
