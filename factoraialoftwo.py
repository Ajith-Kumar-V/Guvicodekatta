n,k=input().split()
N=int(n)
K=int(k)
value=1
sums=1
if N<=10000 and K<=10000 or (N-K)<5:
        while(N>0):
            value=value*N
            N=N-1
        l=value
        while(K>0):
            sums=sums*K
            K=K-1
        m=sums
        c=int(l/m)
        print(c)
