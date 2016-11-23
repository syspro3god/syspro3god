#!/usr/bin/python

import os
print "<html><head><title>"+os.path.split(os.getcwd())[-1]+"</title></head><body>"
print "<h1>Folder "+os.path.split(os.getcwd())[-1]+" </h1><hr>"
for i in sorted(os.listdir(os.getcwd())):
	if i!=__file__ and i[0]!='.' and i!="index.html":
		print "<a href='"+i+"'>"+i+"</a><br />\n"
print "</body></html>"
