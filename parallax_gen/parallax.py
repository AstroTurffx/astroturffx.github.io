thing = input("Enter thingymabob: ")

final_path = "../public/parallax/"

file1 = open(thing + "s.svg", 'r')
lines = file1.readlines()

start_line = lines[0]
end_line = lines[-1]

for i, line in enumerate(lines[1:-1]):
    file2 = open(final_path+thing+str(i)+".svg", 'w')
    file2.writelines([start_line, line, end_line])
    file2.close()