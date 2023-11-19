f = open("input.csv", "r")

result = ""
max_width = 0

# States
# 0 = unavailable
# 1 = occupied
# 2 = open

#num_rows, num_cols
#row, col, name, state, student, time
#2, 3, "A1", 0, "A12345678", "12:00"
i = 0
for line in f:
    j = 0
    for desk in line.split(","):
        result += str(i) + "," + str(j) + "," + desk.strip()
        if desk == "":
            result += ",0,,\n"
        else:
            result += ",2,,\n"
        j+=1
        if j > max_width: max_width=j
    i+=1
result = str(i) + "," + str(max_width) + "\n" + result


output = open('output.csv', 'w')
output.write(result)
output.close()