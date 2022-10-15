# pip3 install dbfread
from dbfread import DBF
for record in DBF('dataset/mariupol.dbf'):
    print(record)
