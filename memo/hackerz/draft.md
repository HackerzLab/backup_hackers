## 2015/12/29

    今日の議事録

    ・ハッキングサイト例
    http://www.hackerschool.jp/hack/

    ・ハッキングサイトのツイッター
    https://twitter.com/WhitehackerZ1

    ・類似のサイト
    http://chausson4.eng.kagawa-u.ac.jp/App/SecExrc/BeeCon/trial

・開発用のサーバー(暫定)
www13429ui.sakura.ne.jp - 133.242.185.203

    ・「ホワイトハッキング防衛軍」サイト
    暫定にてホワイトハッキング防衛軍、いい名前ができたら変更
    http://chausson4.eng.kagawa-u.ac.jp/App/SecExrc/BeeCon/trial
    のサイトをたたき台に１０問程度作っておく

    ヒントを用意しおく５段階のヒント
    ヒントなし     -> 10
    ヒント１       -> 8
    ヒント２       -> 6
    ヒント３       -> 4
    ヒント４       -> 2
    ヒント５(答え) -> 0

    10問とけたら、最後は点数とランキングを表示する画面

    問題のネタは平松さんが作り始める、都度、フェイスブックのスレッドに流す

    日下部、平松で製作をすすめます。

    目標、2016/1/19(火)までに一通り完成、完成後、コバさんレビューお願いします。

    ソースコードはgithubでやりとりを
    ykHakata ここにソースコードを置いておく

    ・告知はzusaarを利用する、告知内容は下記を参考にして、文面をやよいさんに考えてもらう
    http://www.zusaar.com/event/15297005

    ・告知用のHPについて(やよいさん)
    できればロゴを作っておく
    できれば、防衛軍サイトのデザインもできますか？
    できれば、やよいさんに告知用のページを作成していただく。
    全体のデザイン、HTML,CSS 静的なページを。
    できれば、1/4(月)に告知用のHPとzussar の告知を発表する。
    クイズの答えは会場の住所
    HTML のソースコードのコメントアウトに埋め込んでおく。
    ヒントはちゃんと告知HPに書いておく。

    ・集客(コバ、Do,)
    ホワイトハッキング防衛軍->いいネーミングを考えてください。
    10名目標に集客をおねがい。
    オンランプを会場にしておく、場所の手配もお願いします。

    github リポジトリ

    contributor

    TrainingHackers

    https://github.com/kazhiramatsu

github
git@github.com:ykHakata/TrainingHackers.git

## 2016/01/03

    告知用の記事と告知用のHPのたたき台を作る。

    ズサー告知用記事は前回のPerl6の時をたたき台

    告知用ホームページのソースは以前和田さんのレッスンで使ったやつを流用する

    HTML5デザインテンプレート
    http://www.coolwebwindow.com/html5/

    テンプレートパーティー
    http://template-party.com/temp_responsive_biz.html

    ロゴ (暫定にて)

## 2016/01/05

    さくらのレンタルサーバーに

hackers
http://www.hackers.jpn.org/index.html
http://yonabemt.sakura.ne.jp/

## 2016/01/05

    開発サーバーの準備をする、手順をきちんとまとめて、gitに保存しておく。

-----

開発サーバー

    [サーバ基本情報]
    IPアドレス: 133.242.185.203

システム再インストール

    OSインストールクリック -> 標準 OS インストール
    新しい root パスワード入力 (8文字以上、半角英数組合せ)

sentos 設定手順

    # はスーパーユーザー
    $ は一般ユーザー

    ターミナルでアクセス、パスワードで ssh 接続
    ( ~/.ssh/known_hosts に過去の接続情報がある場合は注意、履歴削除 )

    $ ssh root@133.242.185.203

    The authenticity of host '133.242.185.203 (133.242.185.203)' ...
    ...  (yes/no)?

    (接続続行を尋ねてくるので yes)

    Warning: Permanently added '133.242.185.203' (RSA) to the list of known hosts.

    (known_hosts に履歴が追加)

    root@133.242.185.203's password:

    (パスワードを入力)

    SAKURA Internet [Virtual Private Server SERVICE]

    [root@www13429ui ~]#

    (ログイン)

CentOS を最新の状態にしておく

    # yum update

CentOS バージョン確認

    # cat /etc/issue
    CentOS release 6.7 (Final)
    Kernel \r on an \m

日本語化について (とはいうものの、なぜか日本語にすでになっている)

    # vim /etc/sysconfig/i18n

    LANG="C"
    SYSFONT="latarcyrheb-sun16"

    これを...

    LANG="ja_JP.UTF-8"
    SYSFONT="latarcyrheb-sun16"

一般ユーザー (作業用ユーザー) の作成

    一般ユーザーを作るコマンド
    useradd

    マニュアル
    man useradd

    ユーザー名設定 -> hackers
    # useradd hackers

    パスワード設定 (passwd につづけてユーザー名を指定)
    # passwd hackers

    パスワード入力 (数字とアルファベットの組み合わせ)

    一般ユーザーでも管理者と同様のことをできるように設定 (sudo)
    usermod -G wheel hackers

    visudo

    検索する
    /wheel

    エイスケープ # を外して有効にする
    %wheel ALL=(ALL) ALL

    保存(esc 押して : )
    wq

    # exit
    (ログアウト)

一般ユーザーでアクセスできるか確認

    $ ssh hackers@133.242.185.203
    hackers@133.242.185.203's password:

    ( hackers のパスワード入力)

    SAKURA Internet [Virtual Private Server SERVICE]

    [hackers@www13429ui ~]$

    (ログイン完了)

    念のため今いる場所を確認

    $ pwd
    /home/hackers

パスワード認証から鍵認証に変更

    大まかな流れ

    ・鍵を準備
    ・ローカル側(mac)で鍵のペアを生成 -> (秘密鍵、公開鍵)
    ・公開鍵 -> さくらVPS側に転送
    ・秘密鍵 -> ローカル側 (mac) 保存

さくら VPS 側に公開鍵の保管場所を作成

    $ ssh hackers@133.242.185.203
    (ssh でパスワード認証で一旦アクセス)

    $ pwd
    /home/hackers
    (今いる場所)

    $ ls -a
    .  ..  .bash_logout  .bash_profile  .bashrc
    (現在のディレクトリ状況確認)

    $ mkdir ~/.ssh
    (鍵を保管するディレクトリを作成)

    $ chmod 700 ~/.ssh
    (パーミッションを変更)

鍵の準備

    ローカル側で鍵のペアを作る前に、すでに作られているかを確認

    ローカル側(mac)に移動
    $ ls -a ~/.ssh/
    .       config      id_rsa.pub
    ..      id_rsa      known_hosts

    すでに存在するので今回はそのまま流用

    id_rsa -> (秘密鍵)
    id_rsa.pub -> (公開鍵)

    $ chmod 600 ~/.ssh/id_rsa.pub
    (念の為にパーミッションを変更)

    $ scp ~/.ssh/id_rsa.pub hackers@133.242.185.203:~/.ssh/authorized_keys
    (ファイルをさくらVPS側に転送 scp コマンドを使い、同時にファイル名も変更)

    $ scp ~/.ssh/id_rsa.pub hackers@133.242.185.203:~/.ssh/authorized_keys

    hackers@133.242.185.203's password:
    (パスワード入力)

    id_rsa.pub                                              100%  401     0.4KB/s   00:00
    (転送完了)

さくら VPS でファイルが転送できているか確認

    $ ls -a ~/.ssh/
    .  ..  authorized_keys
    (authorized_keys のファイルの中に公開鍵が収められてる)

    $ exit
    (ログアウト)

鍵認証でログイン

    $ ssh -i ~/.ssh/id_rsa hackers@133.242.185.203
    (ローカル(mac)から鍵をつかってログイン)

    [hackers@www13429ui ~]$

    $ exit
    (ログアウト)

    $ ssh hackers@133.242.185.203
    (ローカル(mac)から鍵をつかってログイン -> 省略して入力)
    (デフォルトでは ~/.ssh/id_rsa を見るようになっている)

    [hackers@www13429ui ~]$

    $ exit
    (ログアウト)

    本来はセキュリティーを高めるために ssh や
    ファイアーウォールの設定を調整する必要があるが今回はここまで。

Github との鍵認証

    大まかな流れ

    ・開発サーバー (さくらvps側) で鍵のペアを生成 -> (秘密鍵、公開鍵)
    ・公開鍵 -> Github 側に転送
    ・秘密鍵 -> 開発サーバー (さくらvps側) 保存

    手順

    $ ssh hackers@133.242.185.203

    $ ls -a ~/.ssh/
    .  ..  authorized_keys

    (ローカル(mac)とさくらVPSで通信するための公開鍵 authorized_keys が存在)

    $ ssh-keygen -t rsa -C 'hackers'
    (さくら VPS 側で鍵の生成、いろいろ聞かれるがすべてリターン)

    $ ls -a ~/.ssh/
    .  ..  authorized_keys  id_rsa  id_rsa.pub

    (id_rsa -> 秘密鍵 id_rsa.pub -> 公開鍵)

Github に公開鍵を登録

    Github サイトの右上アイコン、プルダウン -> Settings
    Personal settings -> SSH keys
    Add SSH key クリック

    Title -> sakura_vps_hackers
    key -> 公開鍵の内容をコピペする

    $ cat ~/.ssh/id_rsa.pub
    (cat コマンドで標準出力し内容をコピペ)

    貼り付ける範囲は
    ssh-rsa ... から
    == '任意のコメント' 改行
    まで

    パスワードを聞かれるのでgithubのパスワード入力

接続の確認

    $ ssh -T git@github.com
    The authenticity of host 'github.com (192.30.252.128)' ...
    ... connecting (yes/no)? yes

    (yes と入力)

    Warning: Permanently added 'github.com,192.30.252.128' (RSA) to the list of known hosts.

    (known_hosts に履歴が追加)

    Hi ykHakata! You've successfully authenticated, but GitHub does not provide shell access.

    (Github と接続ができたメッセージ)

最新の Perl の準備

git の確認

    $ git --version
    git version 1.7.1

plenv インストール

    $ git clone git://github.com/tokuhirom/plenv.git ~/.plenv

    $ echo 'export PATH="$HOME/.plenv/bin:$PATH"' >> ~/.bash_profile
    $ echo 'eval "$(plenv init -)"' >> ~/.bash_profile
    $ exec $SHELL -l

    $ git clone git://github.com/tokuhirom/Perl-Build.git ~/.plenv/plugins/perl-build/

    $ plenv --version
    plenv 2.1.1-56-g626847c

Perl インストールと設定

    $ plenv install --list
    (現在の最新の安定版 5.22.1)

    $ plenv install 5.22.1
    $ plenv rehash

    $ plenv versions
    * system (set by /home/hackers/.plenv/version)
      5.22.1

    $ plenv global 5.22.1

    $ plenv versions
      system
    * 5.22.1 (set by /home/hackers/.plenv/version)

    cpanm インストール

    $ plenv install-cpanm

    carton インストール

    $ cpanm Carton
    $ carton -v
    carton v1.0.22

    git clone してみるまえに鍵の準備をする

    git cloneを開始する

    git clone git@github.com:ykHakata/PersonSearcher.git


    ~/.ssh/known_hosts ができている


    必要なPerlのモジュールを一式インストール

    carton install --deployment
    (--deploymentをつけるのをわすれずに)

    MOJO_MODE=development carton exec -- morbo script/person_searcher
    http://133.242.185.203:3000

    ともかく公開はできるが、実際はmorboは開発モードという事と
    サーバーの設定をもう少し調整したほうがいいので、動作が確認できたら
    いったんmorboを終了させておくこと

## 2016/01/09

    告知HPも Github 管理にしておく。

    yonabe サイトと同じサーバなので、鍵の設定などは終了している

    Github の準備から

    右上 + プルダウン -> New repository

    Repository name: hackers
    Description (optional): hackers 勉強会告知ページ
    Initialize this repository with a README -> チェック

    Create repository -> クリック

    サーバーに接続

    問題集をまとめる

# 出題問題原案

http://www.zusaar.com/event/10157003

Yu-ki Kobayashi
Kondo Satoshi

 kaz_hiramatsu

## 2016/01/24

    システム実装作業をすすめる

    git 最新に

    デザイン入れ込みチェック

    DB をイニシャライズする


    ヒント機能の実装を考えてみる


    画面側 (js)


    サーバー側 (Perl)

    サーバーへのリクエスト名を決める


    $app->route('/api/hint/:id',
        +{
            controller => 'TrainingHackers::Controller::Sessions',
            action     => 'index',
        }
    );

    req
    url: /api/hint
    method: post
    parameter:
        hint_id: クリックしたヒント

    res
    format: JSON
    parameter:

    ajax 路線をみなおして、

    答えを送信する時に、同時にヒントパラメーターも送信する

    answers pm の挙動を確認

    'Add views hint'

    'Add logic hint'

ヒント機能を実装しました

    questions/form.tx に hint1 - hint5 までのパラメータを hidden でもたせました。
    ヒント表示タブを横並び表示にし、ヒントをクリック毎に次のタブを表示
    ヒントタブをクリック毎に、hint1 - hint5 パラメータに 1 を挿入
    一連の動作は layout/head.tx に jquery で実装しました。 (ベタに書いてます)
    package TrainingHackers::Controller::Answers;
    では、回答と問題の正解を照合後に hint パラメータから合計点を算出しています。

    このロジックだと、 answer テーブルの hint カラムは利用しなくてもよいかもしれません。

    'Update index.tx'

    'Update rankings'

    'Update questions file.tx'

    'Update hint joke'

    'Bug fix'


    最後の問題

    問題: この問題の答えはなんでしょう？

    ヒント１
        コリャー難しいね！、次のヒントみるしかないかな！
    ヒント２
        ヒヤッフォー！、見当もつかないだろ？
    ヒント３
        告知HPの問題が解けた君ならできるはずだけどなぁ？
    ヒント４
        ソースコードを直接見るにはどうしたらいいんだっけ？
    ヒント５
        しょうがないなぁー、この辺を右クリックしたら、ソースコードがみれるだろ？

        ハッハハハハー！すべての答えはこのサイトに！


## 2016/01/30

    ハッカーズサイトの仕上げをやる、

    最新の状態にしておく。


    問題: ソフトバンクグループ株式会社の代表取締役社長は誰でしょう？
    1: 孫 正義
    2: 孫 泰蔵
    3: 孫 悟飯
    4: 孫 悟空

    ヒント
        高校生の頃に中退をして渡米を行っています
        若い頃、慢性肝炎で生死をさまよった経験があります
        坂本龍馬の大ファン
        東日本大震災復興において多額の寄付を行っています
        頭が薄いことをよくネタにします

    問題: プログラミング言語、Perl の開発者は誰でしょう？
    1: Matz
    2: Larry Wall
    3: Guido van Rossum
    4: kaz_hiramatsu

    ヒント
        言語学者でもあります
        プログラマの三大美徳というものを唱え始めました
        プログラミング Perl の共同著者です
        まつもとゆきひろ氏が尊敬をしている人物です
        とっても愛妻家

    問題: Facebook の創業者は誰でしょう？
    1: Mark Hunt
    2: Mark Wahlberg
    3: Mark Zuckerberg
    4: Mark Steven Johnson

    ヒント
        高校時代は友達が非常に少なかったらしいです
        大学時代に「Coursematch」というサービスを開発しています
        画像格付けサイト「Facemash.com」は女子学生の容姿を格付けする内容で大学から保護観察処分
        いつも同じ服装である理由は仕事以外の意思決定を少なくしたいとのこと
        名言「リスクを取らないことが一番のリスクだ」

    問題: この問題の答えはなんでしょう？

    ヒント
        次のヒントをみるしかない！
        見当もつかないだろ？
        告知HPの問題が解けた君ならできるはずだけどなぁ？
        ソースコードを直接見るにはどうしたらいいんだっけ？
        この辺を右クリックしたら、ソースコードがみれるだろ？

        最終問題！
        ハッハハハハー！すべての答えはこのサイトに！
        https://github.com/ykHakata/TrainingHackers/issues/9

本日はイベント参加お疲れさまでした。

    ここは Github という、最近のプログラマーがシステムの開発に好んで利用するサイトです。
    ここに公開されているソースコードをよめば、今日諸君たちが利用した
    Training Hackers システムの全てが記されています、
    問題や、ヒント、回答の全てがわかるというわけです。
    もっとも、ある程度のプログラミング言語を理解する力は必要になりますが...

    一つハッカーのコツを伝授しましょう。

    大抵私たちのようなシステム開発者はサーバーマシンとクライアントマシンを
    通信して制御する場合、 OpenSSH というもの利用して、鍵認証の仕組みで
    マシンにアクセスする事が多いです。

    SSH の鍵認証を破ることは私の知る限り現実的に無理です。

    もし、侵入したいサーバーマシンがあったとして、鍵認証で保護されていたら
    大抵は諦めるしかありません。正面から破ることは無理です。

    しかし、人間のやることは抜け道があるものです。

    SSH の接続はパスワード認証と鍵認証の両方が使えます、鍵認証を有効にしても、
    パスワード認証の許可を無効にするのを忘れている場合がありますね！

    もしくは、そのマシンは FTP でのアスセスを有効にしているかもしれません、
    正面突破が無理でも、実はどこかに抜け道というのが存在しているものなんですね！

    実を言うと本日利用した Training Hackers システムも抜け道が沢山存在していたわけですが...

    最後の抜け道がこの Github サイトというわけです。

    おっと！講釈はこのくらいにして、問題の答えですね。

問題の答え 「おつかれさまでした」

いったんコミットして、MacBookでセッチング

    'Update questions'
    'Update hint!!'
    'Add hint api!'
    'Update Bag'
    'Update Bag'
    'Update Bag Many!!'

1 -> 1
2 -> 3
3 -> 5
4 -> 7
5 -> 8
6 -> 9
7 -> 2
8 -> 4
9 -> 6
10 -> 10

1 -> 1
2 -> 7
3 -> 2
4 -> 8
5 -> 3
6 -> 9
7 -> 4
8 -> 5
9 -> 6
10 -> 10

1{1
2{7
3{2
4{8
5{3
6{9
7{4
8{5
9{6
10{10

## 2016/03/26

    明日のイベントのために、最低限度の準備をしておく。

    あすのイベントのスケジュールを確認、連絡しておく。


明日のイベントの説明の下書きを書いておく


# Hackerz Lab.博多 とは？

告知応募ページ (Zussar)

    http://www.zusaar.com/event/17417003

告知サイト (開催場所のお知らせ)

    http://hackers.jpn.org/

フェイスブックページ (Hackerz Lab.博多)

    https://www.facebook.com/TrainingHackers/

ツイッター (Hackerz Lab.博多)

    https://twitter.com/hackerz_hkt

本日チャレンジするトレーニングサイト

    http://www13429ui.sakura.ne.jp/

本日のスケジュール

    ＜開場＞
    14:00～15:00 ディスカッション・事前準備
    （自己紹介・Wifi接続・トレーニング用のサイト紹介を含む）
    ＜開始＞
    15:00 トレーニングスタート(前半)
    15:40 前半のトレーニング内容の解説
    16:00 トレーニングスタート(後半)
    16:40 後半のトレーニング内容の解説
    17:00 結果発表
    17:15 終わりの挨拶、片付け
    17:30 終了

    17:30〜18:00同会場にて簡単な懇親会を予定しています。

ここで一旦、手元の github を最新にしておく。

----

ローカルでの起動方法

    carton exec -- plackup --port 3000 -app app.psgi

## 2016/04/20

    次回のハッカーズイベントのまとめ
    前回の打ち合わせ議事録を...

    --- コバまとめ
    前回の話し合いまとめの連絡遅くなってすみません！！
    以下、こないだ話して決まった内容です！
    ①5/8　次回Hackerz Lab.開催（開場は暫定でOnRAMP）
    ・前回までのの内容と別に5問追加
    ※日下部さん担当お願いします<m(__)m>
    ※必要に応じて平松さんにも応援要請してください<m(__)m>
    ・さらにIRC・Torなどのネタを古林が詰めてきて実演解説します
    ・近藤イベントページ作成などよろしくです！
    ②女子向けプログラミングイベント
    ・6/26に仮日程（チサトさんの都合次第）
    ・Python3を使う
    ・簡単なプログラムを事前に組んでおいて、それをカスタマイズする形で行う
    ・カフェなどを会場として使う（仮）
    ③8月ごろをメドに会員制にする
    ・会員のランクを階層化する
    ④Hackerz Lab.小倉、など拠点を増やす
    こんな感じです！！
    ⑤経理はITeens Lab.と合同の事業として扱う（要は金銭と経費管理は古林がします、ということ）
    日下部さん、取り急ぎ、5/8でどんな問題を作れそうかざっくり考えてもらえませんかm(__)m？？
    イベントの概要がないと近藤が告知しにくいと思うので(>_<)
    TorとIRCのほうはオレが急ぎさわっときます！
    -----

    次回の doorkeeper 用の告知の下書き

    hackers

    KDFNHUV

    h -> k
    a -> d
    c -> f
    k -> n
    e -> h
    r -> u
    s -> v

53949
53799

## 2016/04/21

    8月寺田ソロイベント含め、それまでのイベントなどまとめておく

    5月あたまから航空券のチェックをしておく。

    'イベント更新'

## 2016/05/05

    ほしのコーヒーにて

    ハッカーズイベントの用意をする。

    前回の問題に5問追加する、どんな問題にするか打ち合わせのメモみてみる。

    > 5/8にHackerz Lab.やるのは決定でいきましょー☆
    > ということで、日下部さんと新しい問題を練っていたのですが、
    > 今のところ
    > ・URL から IP アドレスの検索の仕方とか？
    > ・webApi の呼び出し
    > （今のweb の世界のネットワークの基本的な部分の問題とか、基本的なプログラミングの考え方）
    > という案が出ております♪

    Q.1: IP アドレスを特定せよ！
     このURL http://www.hatena.ne.jp/ の IP アドレスを特定して入力してくれ！

        yk-no-MacBook-Air:~ yk$ nslookup hatena.ne.jp
        Server:     8.8.8.8
        Address:    8.8.8.8#53

        Non-authoritative answer:
        Name:   hatena.ne.jp
        Address: 59.106.194.19

        yk-no-MacBook-Air:~ yk$


    Q.2: WEB サーバーを特定せよ！
    このhackersLab.博多のwebアプリを配信している webサーバーを特定して入力してくれ！

curl (カール) コマンド
curl -I http://localhost
curl -I http://www13429ui.sakura.ne.jp

    Server:nginx/1.0.15

    Q.3: プログラミングコードを解明せよ！
    この Perl スクリプトを正しく実行するには **** になにを記述すればよいか！入力しくれ！

    Q.4: うるう年を特定せよ！
    紀元前1,900年はうるう年か？うるう年なら true うるう年でないなら false を入力せよ！

    import calendar
    calendar.isleap(-1900)

    'Update questions'

59.106.194.19
59.106.194.19

## 2016/06/06

    タイムテーブルざっくり決めてみました

    6/26(日)12:00～20:00

    仕事基地にて
    福岡県福岡市中央区天神3-15-1　にちりんビル3F

    IT スキル向上 女子大IT部(仮名)

    12:00 ～ 13:00 会場準備
    ＜開場＞
    13:00 受付、自己紹介、本日の流れの説明
        制作する WEB サイトのコンセプトの説明などをします

    ＜開始＞
    13:30 はじめての Bootstrap
        レスポンシブルデザインの WEB サイトを最速で構築します

    14:00 コンテンツを充実させる
        アイフレームを利用して、twitter や facebook のコンテンツを活用します

    14:30 cookie を利用した簡単なアプリを実装
        認証機能には欠かせない cookie の仕組みを解説しながら簡単なアプリを実装します

    15:00 質問、参加者同士のディスカッション
        参加者同士の親睦や情報交換をしましよう

    15:30 終わりの挨拶、片付け

    -----

    Hackerz Lab.博多

    ＜開始＞
    16:00 ～ 16:30 受付、自己紹介、本日の流れの説明

    ＜開始＞
    16:30 トレーニングクイズ
        Season 3 新作クイズに挑戦します

    17:00 トレーニングクイズ内容の解説
        クイズの回答の解説を通してスキル向上を目指します

    17:30 ハッカーズトーク
        IT 界隈のホットな話題の紹介をします
        現役エンジニアからの貴重なここだけの話が聞けます

    19:00 ハッカーズミーティング
        参加者との意見交流
        参加者や運営者、現役のエンジニアと貴重な親睦、交流の機会が作れます

    19:30 終わりの挨拶、片付け
    19:45 終了

    20:00 完全撤収

## 2016/06/13

    ハッカーズイベントの準備

    告知文の下書きを作成する

    前回のドアキーパーをみてみる


    ・開催予定
        〒810-0001　福岡県福岡市中央区天神3-15-1 にちりんビル3F
        http://shigoto-kichi.com/tenjin/
        https://hackers.doorkeeper.jp/events/47202

## 2016/06/25

    明日の予定の確認

    場所:
    〒810-0001 福岡県福岡市中央区天神3-15-1 にちりんビル3F

    6/26(日)12:00～20:00

    12:00 仕事基地集合

    13:00 - ハッカーズ女子開始

    16:00 - ハッカーズ開始

    20:00 - 終了

## 2016/09/17

    明日のハッカーズイベント内容を確認しておく

    サイトのトップページを変更しておく

    ローカルの環境を最新に
    ローカルを起動するには

    トップページは？
    'update index'

    web サーバーログイン、git pull

    unix コマンド資料をつくる

## 2016/11/19

    明日のハッカーズイベントの準備

    告知内容の把握、告知の若干修正

    notice_20161120.md

    コピペしてテキストを整形しなおし

    ハッカーズ実習？となっている。

    念のため、トークのネタも用意しておく。

    手元のソースコードを最新にして、ローカル実行

    順番に問題を追加してみる。

    新作問題を追加、ソースコード更新

    コミットしておく
    'update for season4'


    本番環境への反映をひらまつさんにおねがいしておく。

    ハッカーズトークのネタ、資料作成

    明日の予定をスレッドになげて、集合時間など再度確認

## 2016/11/20

    本番環境を確認する。
    まだ反映されていない。

## 2016/12/04

    開発会議

    今後やりたいこと

    現状の spica フレームワークから
    Mojolicious へweb アプリを移植する

    perl のスキルも向上する

    -----

    具体的にどういうやり方で開発の進捗を確認するのか。

    github 上で開発をすすめる。

    理想は gitフロー でやりたいが、それはやりすぎなので
    簡易的な gitフローで開発をすすめたい。

    github のアカウントもハッカーズアカウントをとりたいところだが。
    私の github 上のリポジトリを作って、ここで管理をすすめる

    開発規模が5人以上の独自に github アカウント取りたい。

    月に1回は直接集まって開発ミーティング
        できれば一般公開もして、開発者を募るような活動にもしたい。

    週に1回程度はネットミーティングで、進捗を管理したい。

    -----

    データベース mysql -> sqlite3

    プログラミング言語 Perl (わりと新しめの安定板 5.24 )
        perl 自体のインストール plenv を使う

    web フレームワーク spica -> Mojolicious にします。 7.11 をつかう
        Mojolicious -> 互換性がなくなるときがあるので注意が必要

    Mojo の機能でできることはなるだけ Mojo を利用する
    cpan モジュールをつかいたいときは carton というモジュールでモジュール管理

    homebrew はもしないのなら念のためにインストールしておく。

    -----

    システムの名前を決める

    現行: TrainingHackers
    新名称: HackerzLab

    新名称案:
        tonosama / 殿様 (とのさま)
        oiran / 花魁 (おいらん)
        wabisabi / 佗寂 (わびさび)
        gekokuzyo / 下剋上 (げこくじょう)
        hackmemore / ハックミーモア
        hackhodo / ハックホードー
        HackerzLand / ハッカーズランド
        hack shon / ハックション
        HackerzLab / ハッカーズラボ

    ------

    ・github にあたらしいリポジトリを作成

    ・リポジトリをローカル環境に git clone する

    ・ためしに、ローカルでファイルを更新して、git push する

    ・ローカル環境の構築を行う (perl, mojo のインストール作業)

    ・github のイシューを作成する (今後の課題)

    ・次回の予定をきめて終了

    ------

    ・リポジトリをローカル環境に git clone する

    git リポジトリを復元する任意のディレクトリにて git clone コマンドを実行してください。

    https://github.com/ykHakata/HackerzLab
    の明るい緑のボタンで、 [clone or download] のボタンをクリックすると
    url が出現するので任意のディレクトリで実行
    git clone git@github.com:ykHakata/HackerzLab.git

    HackerzLab というディレクトリが作成されるので、ディレクトリの中へ移動
    cd HackerzLab

    ここで、mojo の generater コマンドを実行してひな形をつくります
    手順は下記の記事の Mojoliciousを導入 #1 のところを参考にしてください。
    PersonSearcher のところを HackerzLab に置き換えると意味はわかると思います。

    https://github.com/ykHakata/PersonSearcher/issues/1

    -----

    ・ためしに、ローカルでファイルを更新して、git push する

    ドキュメントを保存するためのディレクトリをつくりましょう。

    HackerzLab ディレクトリを / として。

    ```bash
    # /doc ディレクトリを作成します。
    $ mkdir doc
    ```

    github への push の第一弾として、環境構築のドキュメントをつくります。
    ファイル名は install.md ということにしましょう。

    マークダウン形式で slack に私が書いたメモをとりあえずコピペしてファイル保存します。

    ```bash
    # 3ステップで
    git add .
    git commit -m 'install.md 追加 #1'
    git push origin master
    # コミットの文に #1 をくわえるとイシューの番号にひもづきます。
    ```

    https://github.com/ykHakata/HackerzLab/issues/1
    で確認してみます。


    github へのコミットがおわったらこれをやってみてください。

    -----

    ・github のイシューを作成する (今後の課題)

    作業はイシューを立てて、こなしていきます。

    https://github.com/ykHakata/HackerzLab/issues

    緑のボタン New issue をクリック

    kii さんへの課題

    title: 管理画面の機能項目
    write: 現在ハッカーズシステムには問題の追加や削除などの管理機能が存在しない、
    今後どのような機能が必要なるか、項目を洗い出す。

    を作ってもらい Assignees をクリックして、私と、kii さん,
    ヒラマツさんをひもづけてください。

    -----

    ・次回の予定をきめて終了

    次回はネットミーティングで行いましょう。
    日程は 12/10(土) の午後どこかで時間あうときにやりましょう。
    私とひらまつさんは YAPC イベントで札幌にいる予定なので。

## 2016/12/25

    ハッカーズシステム開発用のメルアドを取得しておく

    mail: hackerz.lab.system@gmail.com
    name: king hacker
    pass: kinghacker009

## 2017/01/01

    年始のシステム開発合宿においての課題をリストアップする

    ~~- ハッカーズドキュメントフォルダの中身を整理~~

    - 今年一回目のイベント日程と告知内容の確認

    - 告知発表のタイミングをすり合わせておく

    - 2017年ざくっと年間、どういう風にやりたいかある程度目標っぽいことを立てておく

    - 旧、ハッカーズシステムのローカル環境構築の手順をまとめ

        このまえに各共通の手順をまとめる Summary を最新に更新

        brew について記事をまとめておく



        perl 自体のインストール
        github からの git clone の手順
        データベースの設定 mysql
            mysql インストール -> homebrew での手順
            データベースの作成
            データーの復元

        環境変数の設定
        アプリ自体の起動方法



    - 旧、ハッカーズシステムのローカル環境構築する (新システム開発のため)

    - 新、ハッカーズシステムのローカル環境構築の手順をまとめ

    - 新、ハッカーズシステムのローカル環境構築する

    - 新ハッカーズシステムの公開する web サーバーを選定する

    - 新ハッカーズシステムの web サーバーの環境構築の手順まとめ

    - 新ハッカーズシステムの web サーバーへのデプロイ手順まとめ

    ここまでは必ず。

    イベント
    event

## 2017/01/02

    ハッカーズシステム開発合宿

    -----
    1日目

    今は、こういうことを打ち合わせしています。

    次回のハッカーズイベントの日程とおおよその内容確認

    2017-01-22 (日) 14:00 - 18:00
    場所: 一般財団法人 サイバーセキュリティ財団事務所
        新作の問題 -> 問題はできてる(ヒントは一部まだ)
        ハッカーズトーク -> コバさん喋るらしい
        ハッカーズトーク -> キイさんもなんか 30分くらい喋ります
            テーマは来週中に考えておきます。(パケット通信についてな)


    現状のシステムの状況まとめとリニューアル後の理想形

    -----

    旧式のイベント用のシステム -> (TrainingHackers)

    webブラウザ: http://www13429ui.sakura.ne.jp/
    ソースコード: https://github.com/ykHakata/TrainingHackers
    webサーバー: さくらのVPS(v3) 1G IK01 [133.242.185.203]
        VPS: www13429ui.sakura.ne.jp - 133.242.185.203
        web サーバーは日下部個人で借りているもの

    結論: HackerzLab (新システム) に機能を強化して完全に移植

    -----

    旧式の告知用のサイト -> (hackers)

    最初につくった告知用
    webブラウザ: http://hackers.jpn.org/
    ソースコード: https://github.com/ykHakata/hackers
    webサーバー: さくらのレンタルサーバ スタンダード [yonabemt.sakura.ne.jp]

    途中でデザインを一新した
    webブラウザ: http://hackers.jpn.org/support/index.html
    (サーバー、ソースコードは同じ)

    実は二つ存在する

    結論: とりあえず、放置しておく。

    -----

    散乱している状況を整理する -> どういう形にするのがいいのかまとめる
    まとめ

    リニューアルのシステム -> (HackerzLab)

    webブラウザ: URL の案
    http://hackerzlab.com/ (告知サイト) -> 当面今の告知サイトにリダイレクト
    http://hackerzlab.com/training/ (トレーニングサイト)
    http://hackerzlab.com/admin/ (管理画面)

    ソースコード: https://github.com/ykHakata/HackerzLab
    webサーバー: 暫定 “https://hackerz-lab.herokuapp.com"

    -----

    開発環境の構築

        HackerzLab のローカル環境構築
            出来るだけ、環境構築が楽な形にしたい

        TrainingHackers のローカル環境構築
            mysql の準備
                もろもろの準備が必要
            Perl の準備
            環境変数の設定

    HackerzLab, 旧 TrainingHackers ローカル環境構築 完了しました。

        ヘロクで暫定で公開用のサーバーを準備している

        公開サーバーをどのような形にするのが運用しやすいのか
            デプロイの手順などまとめた

    最低限度のコーディングルールブック的なものを作っておきたい。

    - コードに対して最低限度のドキュメントを必ず書く。

    -


    - 具体的な Mojo の実装のやり方を一緒にコーディングする (ペアプログラミングっぽいこと)

        テストコードを書きながら実装していく方式をやっています。

    -----
    2日目

        具体的な開発 (移植) 箇所を振り分けて実装をひたすらすすめる

        問題点が発生した場合、都度、やり方を見直す。

        必ず、まとめを書くようにしておく。

        イシューの書き方もできるだけ統一感を出しておく

## 2017/01/07

    こちらで決めておくこと、

    web サーバーはsakura vps にしておく

    引き続き、日下部個人の契約上にあたらいく vps をレンタル

    sakura でまとめてドメインも取得

    サーバー、ドメイン費用は1年分を実費いただく、(年間 1万円くらい)

    1年後にまたどうするかは再度検討する。

    開発について、

    トップページが不親切すぎるので、
    暫定の案内ページを作成

    案内ページ - info 新設

    ## TODO

    システムの全体像を下記のように考えている

    ```
    告知サイト
    http://hackerzlab.com/
        当面今の告知サイトにリダイレクト予定

    トレーニングサイト
    http://hackerzlab.com/training/

    管理画面
    http://hackerzlab.com/admin/
    ```

    最終的には告知ページも Mojo のフレームワークに取り込み簡易的な CMS にしたい

    管理画面から告知ページの更新をできるようにする

    現状、コントローラーの新設だけをしておき、簡易的なメッセージを表示しておく

    'info 新設 #7'

    データベーステーブルを追加する機能 - generate_db

    ## TODO

    今回はデータベースに sqlite3 を使用 (環境構築を楽にしたい)

    テーブルを新しく追加したり、サンプルデーターを入力するのに直接DBをさわらずやりたい

    Mojolicious::Command をベースにコマンドラインで操作する

    もし mysql に移行した場合も流用できるようにしておきたい

    本格的に作り出すととても時間がかかりそうなので、最初は簡易的に作っておく


    ## 構想

    こういうファイル構成にしたい

    ```bash
    # データベースに関するファイルをいれておく
    /db

    # 本番用データーベースファイル (sqlite用)
    /db/hackerz.production.db

    # 開発用(ローカルで)データーベースファイル (sqlite用)
    /db/hackerz.development.db

    # テスト用(テストコード実施時)データーベースファイル (sqlite用)
    /db/hackerz.testing.db

    # テーブルスキーマー (これは全てのモード共通)
    /db/hackerz_schema.sql

    # サンプルデータ (エクセル等で作って csv で書き出し)
    /db/hackerz_staff.csv
    ```

    こういうコマンド実行

    ```bash
    # モードの指定がない場合はテスト用DBを作成
    $ carton exec -- script/hackerz_lab generate_db

    # テスト用DBを作成
    $ carton exec -- script/hackerz_lab generate_db --mode testing

    # 本番用DBを作成
    $ carton exec -- script/hackerz_lab generate_db --mode production

    # 開発用DBを作成
    $ carton exec -- script/hackerz_lab generate_db --mode development

    # とりあえず、オプション機能はなし
    ```

    'ファイル新設 #8'

    ## sqlite3 でデータベースを作成するイメージ

    ```bash
    # /db にいる想定で
    # コマンドラインでデーターベースにスキーマー読み込み
    $ sqlite3 ./hackerz.development.db < ./hackerz_schema.sql

    # csv ファイル読み込み
    $ sqlite3 ./hackerz.development.db < ./sqlite_cmd.txt

    # sqlite_cmd.txt の中身は動的に作り込み
    $ cat ./sqlite_cmd.txt
    .separator ,
    .import ./staff.csv staff

    # インポートするファイル名とテーブル名は揃えておく
    # これらを perl から操作する感じで
    ```


    ```

    ```

    'staff テーブルインポート #8'
    'tmp 必須 #8'

## 2017/01/09

    管理者ユーザーを管理する機能(model,db実装) - Staff 新設

    ## TODO

    管理者ユーザーを管理する機能の基本部分を作りたい

    データベーステーブルは staff を使用

    データーベースへのアクセスはデータベースオブジェクトを活用したい (teng)

    Model 層の基本を作りたい (mojo の helper メソッドを活用)

    sqlite3 ./test_hack.db ./schema_sqlite.sql


    ## 構想

    ### URL リクエスト

    こういうアクセス URL にしたい

    REST な感じでいきたいが、 PUT, DELETE, リクエストは html のフォームの実装が面倒なので POST に統一

    下記全て `http://hackerzlab.com/admin` 以下のアクセス

        GET:  /staff           -> ( controller => 'Staff', action => 'index' );  # 一覧画面 (検索入力画面含み)
        GET:  /staff/search    -> ( controller => 'Staff', action => 'search' ); # 検索実行
        GET:  /staff/create    -> ( controller => 'Staff', action => 'create' ); # 新規登録画面表示
        GET:  /staff/10        -> ( controller => 'Staff', action => 'show' );   # 個別詳細画面
        GET:  /staff/10/edit   -> ( controller => 'Staff', action => 'edit' );   # 個別編集入力画面
        POST: /staff           -> ( controller => 'Staff', action => 'store' );  # 新規登録実行
        POST: /staff/10/update -> ( controller => 'Staff', action => 'update' ); # 個別編集実行
        POST: /staff/10/remove -> ( controller => 'Staff', action => 'remove' ); # 個別削除実行

    ### モデル、データベースの実装

    Mojo の helper メソッド呼び出しを活用してこのような呼び出しにしたい

    ```perl
    # 各コントローラーから モデル呼び出し
    my $model = $self->model;

    # staff モデル呼び出しの場合
    my $model_staff = $self->model->staff;

    # データベースモデル呼び出しの場合 (teng)
    my $db = $self->db;

    # 1件検索 (teng)
    my $staff_row = $db->single( 'staff', +{ id => 5 } );

    # 基本的にコントローラーの中では model の呼び出しだけで、 db 呼び出しは避けたい
    ```

    ファイルレイアウト

    あまりファイルが多くなるのもしんどくなるので、必要に応じて拡張したい

    下記全て `HackerzLab/lib/HackerzLab` 以下

        /Command -> コマンドで実行
        /Controller -> コントローラー各種
        /DB -> DBモデル各種 (teng row オブジェクト拡張したい場合など)
        /Model -> コントローラーに対してのロジックモデル各種 (必要に応じて中身増やす)
        /DB.pm -> こちらを helper メソッドに結びつける
        /Model.pm -> こちらを helper メソッドに結びつける
        /HackerzLab.pm -> セットアップなどが記載されてる

    テストコードから

    'テスト機能強化 #9'

    staff.t

    'コントローラー新設 #9'

    db モデルを実装する

    'モデル、db 新設 #9'

## 2017/01/10

    public 配下を整理したい -  viewer 機能

    ## TODO

    public 配下は直接 URL を入力すると回覧できる

    public 配下に画面の初期デザインを配置するようにしているが回覧するための url 直接入力が面倒

    public 配下のリンク付き目次を作りたいが手動で作成するとファイル変更時面倒になる

    動的にファイルの存在を検索してリンク付き目次画面を表示する機能をつくりたい

    ## 構想

    URL の全体像 -> README.md に反映させておく

        Welcome to the HackerzLab

        告知サイト
        http://hackerzlab.com
            当面今の告知サイトにリダイレクト予定

        公開ファイルの目次
        http://hackerzlab.com/viewer
            自由に回覧できる public 配下のリンク付き目次

        トレーニングサイト
        http://hackerzlab.com/training

        管理画面
        http://hackerzlab.com/admin

    リクエスト

    `GET: /viewer -> ( controller => 'Viewer', action => 'index' )`

    makeup/
        admin/
            login.html
            logout.html
            menu.html
            staff/
                index.html
        info/
            index.html
        viewer/
            index.html

    'ファイルを整理 #10'

## 2017/01/11

    '実行モードの目印 #10'

    'readme 追記 #10'

    hypnotoad ./script/my_app
    hypnotoad ./myapp.pl
    hypnotoad -f ./myapp.pl

    $ carton exec -- hypnotoad script/hackerz_lab
    Server available at http://127.0.0.1:5000

    $ carton exec -- hypnotoad script/hackerz_lab
    Starting hot deployment for Hypnotoad server 29500.

    モード指定しなければ hypnotoad は production で実行される
    開始 (すぐにデーモン化)
    $ carton exec -- hypnotoad script/hackerz_lab

    開始 (出力待ちの状態で開始)
    $ carton exec -- hypnotoad --foreground script/hackerz_lab

    再起動 (開始している状態でまた同じことを入力)
    $ carton exec -- hypnotoad script/hackerz_lab

    停止
    $ carton exec -- hypnotoad --stop script/hackerz_lab

    テストして終了 (テストコードが実行されるわけではない)
    $ carton exec -- hypnotoad --test script/hackerz_lab
    Everything looks good!

    readme に追加

    ## 追加作業

    今の画面ではリンクなく不便なので簡易的にメニュー機能をつける

    '簡易メニュー追加 #7'

    簡易的に、ログイン機能を実装、

    概要

    管理者登録


    ログイン手順

    ログインフォームよりメルアド、パスワード入力

    メルアドで staff テーブルより検索

    存在しない場合は終了

    staff テーブルパスワードを復号化

    入力されたパスワードと検証

    一致しない場合は終了

    セッション情報にメルアドを埋め込み

    ログイン保護されたページへ移動

    ログアウト手順

    セッション情報を破棄してログイン保護されていないページへ遷移

    セッション確認手順

    セッション情報を取得

    情報が存在しない場合はログイン保護されていないページへ遷移

    情報からメルアド取得

    staff テーブル情報確認

    ログイン保護されたページへ移動

## 2017/01/12

    一旦コミットしておく
    'ログイン機能原型 #6'

    セッションチェックする機能

    'セッションチェックする機能 #6'

    '過去の告知ページ #7'

## 2017/01/13

    権限周りの一覧表

    - 管理者情報一覧

    |data -> |root|sudo|admin|general|guest|
    |-|:-:|:-:|:-:|:-:|:-:|
    |root|•|•|•|•|•|
    |sudo|•|•|•|•|•|
    |admin|•|•|•|•|•|
    |general|×|×|×|•|•|
    |guest|×|×|×|•|•|

    - 管理者情報新規作成

    |data -> |root|sudo|admin|general|guest|
    |-|:-:|:-:|:-:|:-:|:-:|
    |root|•|•|•|•|•|
    |sudo|×|•|•|•|•|
    |admin|×|×|•|•|•|
    |general|×|×|×|•|•|
    |guest|×|×|×|×|×|

    - 管理者情報修正

    |data -> |root|sudo|admin|general|guest|
    |-|:-:|:-:|:-:|:-:|:-:|
    |root|•|•|•|•|•|
    |sudo|×|•|•|•|•|
    |admin|×|×|•|•|•|
    |general|×|×|×|•|•|
    |guest|×|×|×|×|•|

    - トレーニングクイズ

    |data -> |確認|追加/編集/削除|
    |-|:-:|:-:|
    |root|•|•|
    |sudo|•|•|
    |admin|•|•|
    |general|•|×|
    |guest|•|×|

    - トレーニングクイズ参加者情報

    |data -> |確認/追加/編集/削除|
    |-|:-:|
    |root|•|
    |sudo|•|
    |admin|•|
    |general|×|
    |guest|×|

    -----

    staff の画面をつくってみる

    作りやすい順

    詳細

    変更

    新規

    一覧/検索

    この順でつくってみる

## 2017/01/14

    'staff 画面のデザイン一式 #3'

    ## help 機能について

    ## TODO

    システムの実装方法以前のアプリの仕様は分かった方がよい

    ありがちな話だが、システムが完成してから仕様書を作るのはかなりしんどい作業になりだれもやりたがらない

    せっかく作るなら利用ユーザーも実装者もみれるものが良い

    個人的には是非とも実現したい機能である

    ## 構想

    URL アクセス

    `http://hackerzlab.com/help` - help 総合案内

    `http://hackerzlab.com/help/info` - info サイトに関する help

    `http://hackerzlab.com/help/viewer` -  viewer サイトに関する help

    `http://hackerzlab.com/help/training` -  training サイトに関する help

    `http://hackerzlab.com/help/admin` -  admin サイトに関する help

    管理ユーザー staff

    管理ユーザー staff - 一覧画面 (検索入力画面含み)

    ## TODO

    下記 URL 案に従い `GET:  /staff` 一覧画面 (検索入力画面含み) を実装


    管理ユーザー staff - 検索実行 を実装

    ## TODO

    下記 URL 案に従い `GET:  /staff/search` 検索実行 を実装


    管理ユーザー staff - 新規登録画面表示 を実装

    ## TODO

    下記 URL 案に従い `GET:  /staff/create` 新規登録画面表示 を実装


    管理ユーザー staff - 個別詳細画面 を実装

    ## TODO

    下記 URL 案に従い `GET:  /staff/10` 個別詳細画面 を実装


    管理ユーザー staff - 個別編集入力画面 を実装

    ## TODO

    下記 URL 案に従い `GET:  /staff/10/edit` 個別編集入力画面 を実装


    管理ユーザー staff - 新規登録実行 を実装

    ## TODO

    下記 URL 案に従い `POST: /staff` 新規登録実行 を実装


    管理ユーザー staff - 個別編集実行 を実装

    ## TODO

    下記 URL 案に従い `POST: /staff/10/update` 個別編集実行 を実装


    管理ユーザー staff - 個別削除実行 を実装

    ## TODO

    下記 URL 案に従い `POST: /staff/10/remove` 個別削除実行 を実装

## 2017/01/15

    管理ユーザー staff - 一覧画面 (検索入力画面含み)
    '基本的な表示 #12'


    テーブルのカラム名の例
    単語  TRUE(1) FALSE(0)
    deleted 削除済み    削除前
    disabled    無効  有効
    display 表示  非表示
    draft   下書き（非公開）    本登録（公開）
    enabled 有効  無効
    finished    完了  未了
    hidden  非表示 表示
    processed   処理済 未処理
    published   公開  非公開
    read    既読  未読
    readonly    読み取り専用  書き込み可
    send    送信済み    未送信
    updated 更新済み    更新前
    void    無効  有効

    テーブルを増やした時は注意、conf に情報を追加

## 2017/01/16

    ```sql
    SELECT s.id FROM staff s INNER JOIN address a
    ON s.id = a.staff_id
    WHERE a.name = '%おそ松%';
    ```

    管理ユーザー staff - 検索実行 を実装 #13
    '基本的な検索機能追加 #13'

    管理ユーザー staff - 新規登録画面表示 を実装 #14
    下記 URL 案に従い `GET:  /staff/create` 新規登録画面表示 を実装

    テンプレ移植

    正常な流れ
    入力 -> 登録 -> 詳細

    失敗
    入力 -> 登録失敗 -> 入力

    テストコード書きながら

    '新規登録画面設置 #14'

    管理ユーザー staff - 個別詳細画面 を実装 #15

    '詳細画面設置 #15'

## 2017/01/18


    管理ユーザー staff - 個別編集入力画面 を実装 #16

## 2017/01/20


## 2017/01/21

    管理ユーザー staff - 個別編集入力画面 を実装 #16
    '編集画面設置 #16'
    'リファクタリング #16'

## 2017/01/22


    ハッカーズイベントの準備

    告知内容の把握、告知の若干修正

    notice_20170122.md

    -----

    コピペしてテキストを整形しなおし

------------------------------------------------------------------------------------

    'サンプルデータの実行方法 #1'

    管理ユーザー staff - 新規登録実行 を実装 #17
    '登録機能新設 #17'

## 2017/01/23

    管理ユーザー staff - 新規登録実行 を実装 #17
    確認

    '登録方法変更 #17'

## 2017/01/24

    'バリデート追加 #6'

    ログインのところのバリデートは通過したが、
    DB の検証で失敗した場合の画面遷移

    'ログインバリデート追加 #6'

    TODO
    ~~package HackerzLab::Model::Admin::Auth;~~
    ~~create~~
    ~~params を変更するのはやめる、わかりにくくなる、~~
    ~~email はやめて、 login_id に入力フォームも統一しておく~~

    ~~package HackerzLab::Model::Admin::Auth;~~
    ~~の login_row は廃止~~
    ~~helper メソッドの login_staff に統一しておく~~

    ~~セッション成功時、ログイン成功時は~~
    ~~login_staff に保存に統一する~~

    セッション時は統一、ログイン時は再度検討が必要

    ~~package HackerzLab::Model::Base;~~
    ~~バリデーションでログインチェック時~~
    ~~取得に成功した row は~~
    ~~validation->input へ~~
    ~~パスワード認証も成功時は~~
    ~~validation->output へ~~

    ~~そして、 helper の login_staff に保存~~
    画面が遷移しないと helper には保存できない

    ~~ログイン前に helper login_staff が使えるかは微妙、要確認~~
    ログイン時は使えない

    'パラメーター名修正 #6'

    ~~セッション確認時に~~
    ~~my $staff_row = $admin_auth->exists_login_id;~~
    ~~を使っているが、 exists_login_id の代替えを用意したい~~
    ~~これは login_row に値をつくるので、~~
    ~~わかりにくくなる~~

    ~~できれば、~~
    ~~package HackerzLab::Controller::Admin::Auth;~~
    ~~での login_row は廃止したい、~~
    ~~やり方を再度検討~~

    'ログインまわりリファクタリング #6'

    'login_row 廃止 #6'

## 2017/01/27

    暗号化のプラグイン

    ```perl
    # Mojolicious
    $self->plugin('CipherBoy');

    # コントローラーにて
    my $chpher_boy = $self->chpher_boy;

    # decrypt (復号化) || encrypt (暗号化)

    # encrypt (暗号化)
    my $encrypt_password = $chpher_boy->encrypt($password);

    # decrypt (復号化)
    my $decrypt_password = $chpher_boy->decrypt($encrypt_password);

    # モデル層の呼び出しは
    my $chpher_boy = $self->app->chpher_boy;
    ```

    'flash まとめ #6'


    管理ユーザー staff - 新規登録実行 を実装 #17

    login_id の二重登録を防ぐ


    'login_id の二重登録防止 #17'

## 2017/01/28

    管理ユーザー staff - 個別編集実行 を実装 #18

    ~~編集用の画面~~
    ~~入力フォームの readonly, disabled は使わないようにする~~
    ~~わかりにくくなる~~

    入力フォーム見直し #18

    ~~create メソッドの中で~~
    ~~req_params をつくる、 req_params の値は変更しないようにする~~
    ~~使う時はフィルインなどで入力した値をそのまま出力したい場合のみ~~

    ~~各メソッドでは req_params を直接つかわず、アクセスメソッドに置き換えたものを~~
    ~~使うようにする~~

    メソッド整理 #18

    完了までの画面遷移 #18

    DB 書き込み機能実装 #18

    バリデート機能実装

    フィルイン機能

    バリデート追加 #18

    # 入力条件による検索
    sub search_staff {
    ここへの条件の指定の仕方を見直さないとわかりにくくなりそう

    検索の条件指定を修正 #18

## 2017/01/29

    管理ユーザー staff - 個別削除実行 を実装 #19

    実装一式 #19

## 2017/02/05

    開発進捗についての打ち合わせ

## 2017/02/07

    旧ハッカーズシステムからの移植
    テーブルの構成を再度みなおしてみる。

    ローカル環境での再設定
    mysql が必要
    設定おさらい

## 2017-02-26 10:05:09

    本日のハッカーズイベントの準備
    告知内容確認

    どうやっていくか、もよりの駅は？
    西鉄、春日原駅、JR 春日駅
    googlemap で検索する
    12:30 くらいの吉塚駅からの電車にのるとよさそう

## 2017-03-14 14:58:00

    新しいハッカーズシステムを公開する予定のサーバーの設定など、
    やる事を再度確認
    整理する。

    github のイシューを使うのはいいが、これは無料コースなので
    一般公開されている。

    メモが家のiMacにはりっぱなしだった。

    サーバーのid pass はキーチェーンに保存しておく

    さくらvpsの設定の仕方をまとめておく

    sakura インターネット
    https://www.sakura.ad.jp/

    さくらのサポート情報
    https://help.sakura.ad.jp/

    基本的に sakura のサービスで知りたいことはここから探すとほとんど見つかる

## 2017-04-15 13:22:46

    ハッカーズイベントの準備をしておく、
    当日のスケジュールを把握しておく。

    notice_20170416_1.md
    Hackerz Lab.博多勉強会Vol.9 Revival
    10:00 - 14:00

    notice_20170416_2.md
    Hackerz Lab.博多 勉強会Vol.10
    15:00 - 19:00

    場所:サイバーセキュリティ財団事務所
    〒812-0011 福岡県福岡市
    博多区博多駅前３−１９−２２内藤ビル３F

## 2017-05-29 22:45:44

    ハッカーズシステムの開発が全くすすんでいない、
    サーバーをせっかく借りているので
    サーバーセットアップの手順をつくりながら最低限度のセットアップを

    一旦 github にあわせ最新の状態にしておく

    きちんと動くようになっている

    サーバー設定一連のドキュメント
    deploy.md

    サーバー設定のおおまかな手順、
    旧ハッカーズシステムをデプロイした時のメモ

システムインストール
    root のパスワードを設定

CentOS 設定手順
    ssh にてroot権限でパスワード接続
    システムを最新の状態にアップデート
    日本語化
    一般ユーザー作成

鍵認証の設定

iptabelsの設定 (ファイアウォール)

事前にアプリケーションユーザーの名前などきめておく

## 2017-06-20 00:11:24

    git clone までいって、 Hypnotoad までいくが web ブラウザでアクセスできなのは？
    一旦ここでメモをまとめまた調べてみる。

    http://160.16.96.131

    http://hackerzlab.net

    http://160.16.231.20:8080/

    https://160.16.231.20:5000/

    http://hackerzlab.com:5000/

    www を勝手につけてしまうのだろうか？

    -----
    ドメインは結びついてる様子

    160.16.231.20

    http://hackerzlab.com:5000/

    ```
    $ ping 160.16.231.20

    $ ping hackerzlab.com

    $ nslookup hackerzlab.com
    Server:     2409:252:aa0:710::1
    Address:    2409:252:aa0:710::1#53

    Non-authoritative answer:
    Name:   hackerzlab.com
    Address: 160.16.231.20
    ```

        'add deploy #23'
        'add conf #23'
        'add conf #23'


    http://knowledge.sakura.ad.jp/beginner/4048/


[root@tk2-257-38266 conf.d]# cd /etc/sysconfig/
[root@tk2-257-38266 sysconfig]# vim iptables
[root@tk2-257-38266 sysconfig]# service iptables restart


## 2017-06-25 20:07:49



nginx (web サーバー)インストール

```bash
$ sudo yum install nginx

# 途中で [y/N] と聞いてくるが y でリターン

# 実行できない場合はパッケージが登録されていない場合がある、その場合は別途 yum の設定が必要

# 確認
$ which nginx
/usr/sbin/nginx

# 使い方の詳細はこちら
$ man nginx

# 今回インストールのバージョン
$ nginx -v
nginx version: nginx/1.10.2

# サーバーの起動は root 権限でないとできない
[kusakabe@tk2-257-38266 ~]$ nginx
nginx: [alert] could not open error log file: open() "/var/log/nginx/error.log" failed (13: Permission denied)
...
$
```

サーバーの起動

```
$ sudo su - root
# nginx
# ps -ax
Warning: bad syntax, perhaps a bogus '-'? See /usr/share/doc/procps-3.2.8/FAQ
  PID TTY      STAT   TIME COMMAND
    1 ?        Ss     0:01 /sbin/init
...

 9837 ?        Ss     0:00 nginx: master process nginx
 9838 ?        S      0:00 nginx: worker process
 9839 ?        S      0:00 nginx: worker process
...

(サーバーを停止)
[root@tk2-257-38266 ~]# nginx -s quit
(もう一度)
# nginx
```

web ブラウザで確認

```
http://160.16.231.20:80

Welcome to nginx on EPEL!
の文字がブラウザに表示されれば無事起動
ポートの設定については事前に iptables で 80番ポートを解放する必要がある
```


nginx の設定ファイルは

cd /etc/nginx/nginx.conf

最後の行
include /etc/nginx/conf.d/*.conf;

cd /etc/nginx/conf.d/


-rw-r--r-- 1 root root  451 10月 31 21:37 2016 default.conf
-rw-r--r-- 1 root root  686 10月 31 21:37 2016 ssl.conf
-rw-r--r-- 1 root root  283 10月 31 21:37 2016 virtual.conf

ssl.conf と virtual.conf は中身はコメントアウトされている

hackerzlab.conf
がいいのかな？

nginx 用の conf を mojo の etc 配下に設置して読み込む

nginx.conf

Hackers/etc

[root@tk2-257-38266 ~]# cd /etc/nginx/conf.d/
[root@tk2-257-38266 conf.d]#

シンボリックリンク
ln -s /home/hackerzlab/HackerzLab/etc/nginx.conf hackerzlab.conf

[root@tk2-257-38266 conf.d]# ln -s /home/hackerzlab/HackerzLab/etc/nginx.conf hackerzlab.conf
[root@tk2-257-38266 conf.d]# ls -al
合計 20
drwxr-xr-x 2 root root 4096  6月 26 22:04 2017 .
drwxr-xr-x 4 root root 4096  6月 25 20:09 2017 ..
-rw-r--r-- 1 root root  451 10月 31 21:37 2016 default.conf
lrwxrwxrwx 1 root root   42  6月 26 22:04 2017 hackerzlab.conf -> /home/hackerzlab/HackerzLab/etc/nginx.conf
-rw-r--r-- 1 root root  686 10月 31 21:37 2016 ssl.conf
-rw-r--r-- 1 root root  283 10月 31 21:37 2016 virtual.conf
[root@tk2-257-38266 conf.d]#

名前かえる

[root@tk2-257-38266 conf.d]# mv default.conf default.conf.old
[root@tk2-257-38266 conf.d]# ls -al
合計 20
drwxr-xr-x 2 root root 4096  6月 26 22:05 2017 .
drwxr-xr-x 4 root root 4096  6月 25 20:09 2017 ..
-rw-r--r-- 1 root root  451 10月 31 21:37 2016 default.conf.old
lrwxrwxrwx 1 root root   42  6月 26 22:04 2017 hackerzlab.conf -> /home/hackerzlab/HackerzLab/etc/nginx.conf
-rw-r--r-- 1 root root  686 10月 31 21:37 2016 ssl.conf
-rw-r--r-- 1 root root  283 10月 31 21:37 2016 virtual.conf
[root@tk2-257-38266 conf.d]#




/home/hackerzlab/HackerzLab/etc/nginx.conf


    'add doc #23'


drwxr-xr-x 2 root root 4096  6月 26 22:05 2017 .
drwxr-xr-x 4 root root 4096  6月 25 20:09 2017 ..
-rw-r--r-- 1 root root  451 10月 31 21:37 2016 default.conf.old
lrwxrwxrwx 1 root root   42  6月 26 22:04 2017 hackerzlab.conf -> /home/hackerzlab/HackerzLab/etc/nginx.conf
-rw-r--r-- 1 root root  686 10月 31 21:37 2016 ssl.conf
-rw-r--r-- 1 root root  283 10月 31 21:37 2016 virtual.conf
[root@tk2-257-38266 conf.d]# nginx -s quit
[root@tk2-257-38266 conf.d]# nginx
[root@tk2-257-38266 conf.d]#


hackerz 関連情報
https://www.facebook.com/HackerzLab.HKT/
https://twitter.com/hackerz_hkt
http://hackerz.sakura.ne.jp/wp/
https://hackerzlabhkt.connpass.com/
http://www13429ui.sakura.ne.jp/


# 本番用DBを作成

    $ carton exec -- script/hackerz_lab generate_db --mode production

        'add test #23'

    db メソッドを引き剥がし

        '不具合整理 #24'
        'ログイン部分 #24'
        'staff登録 #24'
        'staff更新 #24'
        'add message #24'
        'auth 関連 #24'

        'staff 関連 #24'

    ふえつづけるログをまとめる
    logrotate

    http://oxynotes.com/?p=8679
    https://nelog.jp/programming-words

## 2017-09-03 10:13:24

紆余曲折ありましたが、本日夕方ごろに博多駅付近で
線香花火やることにしました。
#線香花火大会
#sparkler


博多駅近くの人参公園で18:30ごろに集合しようとおもいます
#線香花火大会
#sparkler

## 2017-11-12 15:50:55

ハッカーズシステムのテーブル

```sql
-- 新しくテーブル構造みなおし
-- ユーザー
DROP TABLE IF EXISTS user;
CREATE TABLE user (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,  -- ID (例: 5)
    login_id        TEXT,                               -- ログインID名 (例: 'hackerz@gmail.com')
    password        TEXT,                               -- ログインパスワード (例: 'hackerz')
    approved        INTEGER,                            -- 承認フラグ (例: 0: 承認していない, 1: 承認済み)
    deleted         INTEGER,                            -- 削除フラグ (例: 0: 削除していない, 1: 削除済み)
    created_ts      TEXT,                               -- 登録日時 (例: '2016-01-08 12:24:12')
    modified_ts     TEXT                                -- 修正日時 (例: '2016-01-08 12:24:12')
);

-- 問題
DROP TABLE IF EXISTS QUESTION;
CREATE TABLE question (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `question` TEXT BINARY NOT NULL,
    `answer` TEXT BINARY NOT NULL,
    `score` INT UNSIGNED NOT NULL,
    `level` INT UNSIGNED NOT NULL,
    `type` VARCHAR(30) BINARY NOT NULL,
    `addfile` VARCHAR(255) BINARY NOT NULL DEFAULT '',
    `option1` VARCHAR(128) BINARY NOT NULL DEFAULT '',
    `option2` VARCHAR(128) BINARY NOT NULL DEFAULT '',
    `option3` VARCHAR(128) BINARY NOT NULL DEFAULT '',
    `option4` VARCHAR(128) BINARY NOT NULL DEFAULT '',
    created_ts      TEXT,                               -- 登録日時 (例: '2016-01-08 12:24:12')
    modified_ts     TEXT                                -- 修正日時 (例: '2016-01-08 12:24:12')
);


-- 問題のヒント (5段階ヒントだったが、10段階にしたい場合もありそう)
DROP TABLE IF EXISTS hint;
CREATE TABLE hint (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,  -- ID (例: 5)
    question_id     INTEGER,                            -- 問題ID (例: 5)
    level           INTEGER,                               -- ヒントレベル (例: 3 )
    hint            TEXT,                            -- ヒント文面 (例: '問題をよく読んでみよう')
    deleted         INTEGER,                            -- 削除フラグ (例: 0: 削除していない, 1: 削除済み)
    created_ts      TEXT,                               -- 登録日時 (例: '2016-01-08 12:24:12')
    modified_ts     TEXT                                -- 修正日時 (例: '2016-01-08 12:24:12')
);





-- 入力された回答


-- 得点



drop table if exists users;
create table users (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` VARCHAR(50) BINARY NOT NULL,
    `username` VARCHAR(50) BINARY NOT NULL,
    `password` VARCHAR(128) BINARY NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX `user_id_and_passwrd` (user_id, password)
);







drop table if exists users;
create table users (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` VARCHAR(50) BINARY NOT NULL,
    `username` VARCHAR(50) BINARY NOT NULL,
    `password` VARCHAR(128) BINARY NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX `user_id_and_passwrd` (user_id, password)
);

drop table if exists questions;
create table questions (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `question` TEXT BINARY NOT NULL,
    `answer` TEXT BINARY NOT NULL,
    `score` INT UNSIGNED NOT NULL,
    `level` INT UNSIGNED NOT NULL,
    `hint1` TEXT BINARY,
    `hint2` TEXT BINARY,
    `hint3` TEXT BINARY,
    `hint4` TEXT BINARY,
    `hint5` TEXT BINARY,
    `type` VARCHAR(30) BINARY NOT NULL,
    `addfile` VARCHAR(255) BINARY NOT NULL DEFAULT '',
    `option1` VARCHAR(128) BINARY NOT NULL DEFAULT '',
    `option2` VARCHAR(128) BINARY NOT NULL DEFAULT '',
    `option3` VARCHAR(128) BINARY NOT NULL DEFAULT '',
    `option4` VARCHAR(128) BINARY NOT NULL DEFAULT '',
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

drop table if exists answers;
create table answers (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `question_id` INT UNSIGNED NOT NULL,
    `user_id` INT UNSIGNED NOT NULL,
    `user_answer` TEXT BINARY NOT NULL,
    `score` INT UNSIGNED NOT NULL,
    `hint1` INT UNSIGNED,
    `hint2` INT UNSIGNED,
    `hint3` INT UNSIGNED,
    `hint4` INT UNSIGNED,
    `hint5` INT UNSIGNED,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `question_id_and_user_id` (question_id, user_id)
);

drop table if exists scores;
create table scores (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT UNSIGNED NOT NULL,
    `score` INT UNSIGNED NOT NULL,
    `updated_at` TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `user_id` (user_id)
);

drop table if exists sessions;
create table sessions (
    `session_id` VARCHAR(128) BINARY NOT NULL,
    `session_data` TEXT BINARY NOT NULL,
    `session_expires` DATETIME NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


```
