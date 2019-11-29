a,b,c=input().split()
A=int(a)
B=int(b)
C=int(c)
if A<=1000000000 or B<=1000000000 or C<=1000000000:
        v=A**B
        j=v%C
        print(j)
