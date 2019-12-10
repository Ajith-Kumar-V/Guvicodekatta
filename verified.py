try:
  x,y=input().split()
  x=int(x)
  y=int(y)
  z=x+y
  if(z%2==0):
    print("even")
  else:
    print("odd")
except ValueError:
        print("ValueError")
