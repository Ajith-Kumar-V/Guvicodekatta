n=input()
N=int(n)
if 1<=N<=100000:
        d=bin(N)
        d=d.replace("0b","")
        print(len(d))
