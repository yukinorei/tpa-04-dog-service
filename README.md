# ドッグ・サービス

サーバサイドが完成していないので実行してもTimばっか出てきます。クライアントはとりあえず動くので、クライアントからAPIを叩いて確認しながら実装するのもOK.

IDを入力したらドッグデータが表示されるクライアントです。

サーバサイドのAPIの処理を完成しよう。

アプリケーションを実行するには：

```
npm i
npm start
```

テストを実行するには：

```
npm test
```

[アプリの動画](https://youtu.be/y00CL_6i3X8)

## 本日のキーワード：

* [Express Middleware](https://expressjs.com/ja/guide/using-middleware.html)
* [JEST Testing](https://jestjs.io/ja/)
* [HTTP Status Codes](https://ja.wikipedia.org/wiki/HTTP%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89)

役に立つリンク：

* [Express res.status](http://expressjs.com/ja/api.html#res.status)
* [Express res.json](http://expressjs.com/ja/api.html#res.json)

## タスク1：utils.parsePathForParameters のユニットテストを書こう (`server/utils.test.js`)

* `utils.test.js` で複数の入力・出力を試してみよう。

## タスク2：utils.parsePathForParameters を実装しよう　(`server/utils.js`)

**注意**： この課題では Express route parameters を使わないように。(https://expressjs.com/ja/guide/routing.html#route-parameters)

## タスク3：サーバサイドのリクエストハンドラーを完成する

`server/controller.js` の中でティムのデータを返すばっかではなく、本物の犬のデータを返しましょう。

**注意**: もしクライアントが渡すIDが dogs.json に無かった場合、HTTP ステータスを 404 にして、空のJSONを返そう。

返すデータ型：

```
{
  id:       NUMBER
  name:     STRING
  quote:    STRING
  imageUrl: STRING
}
```
