S=input()
t=[]
for i in range(len(S)):
        if S.count(S[i])<=1:
                t.append(S[i])
print("".join(t))
