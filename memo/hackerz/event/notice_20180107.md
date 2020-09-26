# いまどきの web サイトの作り方

## 一般的にいうホームページとは

- <https://ja.wikipedia.org/wiki/%E3%83%9B%E3%83%BC%E3%83%A0%E3%83%9A%E3%83%BC%E3%82%B8> - 詳細は wekipedia

ざっくりいうと入力する項目がない web サイト

## どうやってホームページを作成しているのか

- 大昔はプログラマーやシステムエンジニアと呼ばれる人がホームページを作成していた
- 昨今はweb デザイナーと言われる人がホームページを作成している
- 現実の話、 web デザイナーと言われる人はどういう仕組みでホームページが構築されているかは知らない事が多い
- ざっくりいうと、web サーバーを準備しなくてはいけない
- <https://www.homepage-maker.jp/> - 参考記事

## 今の時代も意外と手がかかるホームページ

__ホームページ作成あるある話__

- いわゆるCMS(ワードプレス)でサクッとつくるも、しばらくしてメンテ不能になる
- ページの変更を繰り返すうちに、なにをどう変更したかわからなくなる
- どうやって作ったか忘れた
- 従って、だれにも引き継ぐことができずに亡霊のようにwebの世界に漂ってしまう
- シンプルに作るのが時間がかかってメンドくさい

## ではサクッとつくるにはどうすればいいのか

__事前に準備しておくもの__

- PC (できれば Mac)
- webブラウザ (今回は google chrome)
- 登録用メールアドレス (gmail が間違いない)
- github のアカウントを取得 (今回は説明省きます)
- テキストエディタ (今回は説明省きます)
- ホームページの原稿 (意外と準備しない人が多いですが、準備した方がいいです)

## 今回つかうホームページの原稿

__原稿のコツ、画像やロゴは置いておいて、文字だけで考える__

せっかくなので今回は HackerzLab にゆかりのあるものにします

```
タイトル: 雅なPerl入門
概要: 「雅なPerl入門」というプログラミングの入門書の紹介ページ
内容:
    書籍の写真
    書籍のタイトルと目次、ページ数、発売日
    書籍を読んだ感想
    著者の簡単なプロフィール

-----
書籍のタイトルと目次、ページ数、発売日

雅なPerl入門 第２版
189ページ
平松 和剛 著
目次
第1章 プロローグ
第2章 Perl を知ろう
第3章 Perl の開発環境を整えよう
第4章 スカラー
第5章 配列とリスト
第6章 ハッシュ
第7章 サブルーチン
第8章 コンテキスト
第9章 正規表現
第10章 リファレンス
第11章 CPAN
第12章 パッケージ
第13章 モジュール
第14章 オブジェクト指向
第15章 テスト
第16章 ファイル入出力
第17章 文字エンコーディング
第18章 CPAN モジュールガイド
-----
書籍を読んだ感想

現役プログラマーが書き下ろした、現役エンジニアになるための最短の入門書。
お堅いプログラミング学習書にありがちな過剰に詳細な説明は省き、
必要なポイントを最小限の説明にとどめている。
200ページ足らずのページ数が実にちょうどよく、リファレンスがわりに携帯することも苦にならない。
最新は第３版が発売されている。
-----
著者の簡単なプロフィール

平松 和剛 (@kaz_hiramatsu)
IT 企業にてWEB系システム開発に従事し、現在はフリーランスで活動を行っている。
過去に YAPC::ASIA のスピーカーや、「雅な Perl 入門」(初級者向けの Perl入門書) の執筆など、WEBエンジニア界隈において堅実な活動を行っている。
実務経験に裏打ちされた、現実的な指導に定評がある。
-----
```

## github でリポジトリを作成する

- <https://github.com/> - サイトにアクセス(ログイン済みの状態)
- 右上アイコン -> Your profile
- Repositories -> New(緑のボタン)
- Repository name -> miyabi (名前が重複する場合は違う名前で)
- Description -> 「雅な Perl 入門」紹介ページ
- Public -> チェック
- Initialize this repository with a README -> チェック
- Create repository -> クリック(リポジトリが出来る)
- Settings(歯車アイコン) -> クリック
- GitHub Pages -> Source -> master branch -> save
- GitHub Pages -> Your site is ready to be published at [アクセスするアドレス]

__アクセスすると README.md の内容が公開されている__

- <https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/> - 公式のヘルプ

## index.html を作成する

__慣例的に index.html というファイル名が自動的に表示される__

- お手元の環境に git clone する
- 例: git clone git@github.com:ykHakata/miyabi.git

__注意、お手元の環境で github との ssh 周りの設定が済んでない場合は https で clone__

- .gitignore をつくる -> .DS_Store
- index.html を作成し、先ほどの原稿を貼り付けて、保存
- git add. -> git commit -m 'add index' -> git push
- /index -> このようにアクセスすれば作った内容が公開されている

## ブランチ gh-pages を作成する

- Branch: master -> gh-pages を入力 -> create -> Branch: gh-pages になる
- GitHub Pages -> Source -> gh-pages branch になっていることの確認
- / -> index の内容が初めに表示されるようになる

## ブランチ gh-pages を標準にする

- Settings(歯車アイコン) -> クリック -> Branches -> Default branch -> gh-pages -> update
- ターミナルにて -> git checkout gh-pages

__以降は gh-pages のブランチで作業してゆく__

## デザインを充実させる

__ページのデザインとアクセスは比例しない__

- 経験上知っていることとして、ホームページのデザインの良し悪しとアクセスは比例しません
- アクセスの向上は記事の内容と更新頻度ですが、ホームページの作成を依頼する人はそのことが理解できない人が多いです
- そういう顧客の要望もあってクールなデザインを手早く用意することが大事になります
- 海外のテンプレートを活用する方法を紹介します

## 無料と有料のテンプレサイト

- <https://wrapbootstrap.com/> - 有料
- <http://www.templatewire.com/> - 無料

__この他にも海外を探すと色々存在する__

今回の利用

- <http://wrapbootstrap.com/preview/WB02G20TX>
- <https://wrapbootstrap.com/theme/atoom-responsive-blog-and-portfolio-WB02G20TX>

## テンプレをカスタムする

```
miyabi/
    doc/
        オリジナルのテンプレデータ(zip形式)
    org/
        オリジナルのテンプレデータ(解凍したもの)
```

あとは必要に応じてオリジナルからコピペで作成

## 作るときのコツ

オリジナルを表示するアドレスを確認

- <https://ykhakata.github.io/miyabi/org/atoom/index> - オリジナルのページ
- <https://ykhakata.github.io/miyabi/> - 作っているページ

## 独自ドメインを利用する方法

__時間がたりなそうなので、そのうちやります__

以上
