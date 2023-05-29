## 開始使用
1. 安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 透過終端機進入資料夾，輸入：
```
npm install -y
```
4. 設定資料庫
資料需要與 config/config.json 一致
```
create database forum; // 建立MySQL資料庫
```
5. 輸入以下程式碼以啟動專案：
npm run start
6. 輸入以下程式碼以建立資料模型並執行種子資料：
```
npx sequelize db:migrate
npx sequelize db:seed:all
```
7. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址
Express is running on http://localhost:3000
8. 欲停止伺服器請輸入：
ctrl + c

## 開發工具
* Node.js 16.12.0
* Express 4.17.1
* Express-Handlebars 4.0.2
* Bootstrap 5.0.1
* mysql2 2.3.0
* sequelize 6.6.5
* sequelize-cli 6.2.0