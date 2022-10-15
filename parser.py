from dbfread import DBF
i = 0
for record in DBF('dataset/mariupol.dbf'):
    print(record)
    i += 1
print(i)