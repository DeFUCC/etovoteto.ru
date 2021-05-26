cd build

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:etovoteto/etovoteto.ru.git master:gh-pages

cd -