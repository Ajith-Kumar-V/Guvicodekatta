S=input()
N=len(S)
D=S[::-1]
if 1<=N<=100000:
  if S==D:
    print("yes")
  else:
    print("no")
