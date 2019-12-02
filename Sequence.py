N=int(input())
p=4
h=2
if 1<=N<=(10**18):
        for i in range(N-1):
                h=h+p
                p=p+1
        print(h)
