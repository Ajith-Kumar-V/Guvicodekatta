N=input()
n=len(N)
l=0
for i in range(n):
        g=int(N[i])
        if (g%2)!=0:
                l=l+g
h=l
if (h%2)==0:
        print("E")
else:
        print("O")
