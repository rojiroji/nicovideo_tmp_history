# 中身の説明とか使い方とか
詳しくはここ→https://www.nicovideo.jp/watch/sm43889235

## FireFoxを使ってる人へ
以下のような感じで使えるみたいです（作者は試していないので上手く動かなかったら調べてください）

### ソースコードのダウンロード
緑のボタンの 「<> Code」→「Download Zip」

### manifest.json の差し替え
manifest(FireFox用).json というファイルを、manifest.json にリネームして packageディレクトリの下にある同じ名前のファイルに上書き

### アドオンを読み込む
FireFoxで以下を開く。

about:debugging#/runtime/this-firefox

一時的な拡張機能 → 一時的なアドオンを読み込む → 先ほど上書きした「manifest.json」を開く

これでアドオン欄に追加されるので、開いてみてください。

