N=int(input())
M=[int(x) for x in input().split()][:N]
for i in range(N):
        c=M.count(M[i])
        if c>=2:
                print(M[i])
                break
