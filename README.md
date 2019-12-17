構築  

---------------  
事前設定  
1. env.exampleをコピーして.envファイルを作成し、環境変数を設定する
2. ./etc/nginx/conf.d/default.conf のserver_nameを、  
・ローカルマシンの/etc/hosts  
・laravel/webpack.mix.jsのbrowsersync  
にも設定しておく
---------------  
$ docker-compose up -d  
$ docker-compose exec app ash  
$ composer update  
$ exit  
$ cd laravel  
$ npm install  
$ npm run watch
