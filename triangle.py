A,B,C=input().split(" ")
a=int(A)
b=int(B)
c=int(C)
if a+b>c and a+c>b and c+b>a:
    print("yes")
else:
    print("no")
