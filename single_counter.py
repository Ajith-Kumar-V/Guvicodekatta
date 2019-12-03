N=int(input())
d=[int(x) for x in input().split()]
if N<=100000:
        for i in range(N):
                if d.count(d[i])<=1:
                        print(d[i])
