N=input()
for i in range (len(N)):
  if i%2==0:
    c=(ord(N[i]))+1
    h=chr(c)
    print(h,end="")
  if i%2!=0:
    c=(ord(N[i]))-1
    h=chr(c)
    print(h,end="")
