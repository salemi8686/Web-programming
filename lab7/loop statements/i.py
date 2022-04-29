x = int(input())
k=0
if x==1:
    print(1)
else:
    for i in range(1,int((x/2) + 1)):
        if x%i==0:
            k+=1
    print(k+1)
        