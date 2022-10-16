# # pip3 install dbfread
# from dbfread import DBF
# f = open('mariupol.csv', 'w')
# for record in DBF('dataset/mariupol.dbf'):
#     f.write('[' + record['bounds'] + ']' + "," + record['status'] + '\n')

# f.close()

import fiona
shape = fiona.open("/Users/parth/kuromi-scaleai/dataset/mariupol.shp")
print(shape.next())
