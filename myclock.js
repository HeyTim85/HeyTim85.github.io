// JavaScript source code
<!-- myclockscript -->
dy = new Date()
month = dy.getMonth()
month = (month * 1) + 1
day = dy.getDate()
year = dy.getFullYear()
document.write(" ",month,"/",day,"/",year," ")