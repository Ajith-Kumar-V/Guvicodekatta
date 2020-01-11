N=int(input())
s=0
for i in range(1,N):
  for j in range(1,N):
    if i+j==N:
      s=s+1
print(s)
