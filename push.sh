git init
git add .
git status
echo "Insert message "
read $dataMessage 
git commit -m " + $dataMessage + "
git push -f https://github.com/digitalprimeint/shoperiz-web.git master