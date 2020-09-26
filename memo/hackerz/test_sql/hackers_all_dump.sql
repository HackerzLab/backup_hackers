-- MySQL dump 10.13  Distrib 5.6.26, for osx10.10 (x86_64)
--
-- Host: localhost    Database: hackers
-- ------------------------------------------------------
-- Server version	5.6.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `hackers`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `hackers` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `hackers`;

--
-- Table structure for table `answers`
--

DROP TABLE IF EXISTS `answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `answers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `question_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `user_answer` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `score` int(10) unsigned NOT NULL,
  `hint1` int(10) unsigned DEFAULT NULL,
  `hint2` int(10) unsigned DEFAULT NULL,
  `hint3` int(10) unsigned DEFAULT NULL,
  `hint4` int(10) unsigned DEFAULT NULL,
  `hint5` int(10) unsigned DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `question_id_and_user_id` (`question_id`,`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answers`
--

LOCK TABLES `answers` WRITE;
/*!40000 ALTER TABLE `answers` DISABLE KEYS */;
INSERT INTO `answers` VALUES (7,1,3,'Stay Hungry',0,1,1,1,1,1,'2016-03-26 13:18:27'),(8,2,3,'3',0,1,1,1,1,1,'2016-03-26 13:18:42'),(9,3,3,'wATFyXV66LYHsCsoMDCeQLMfmGzU3A4C',0,1,1,1,1,1,'2016-03-26 13:19:02'),(10,4,3,'2',0,1,1,1,1,1,'2016-03-26 13:19:15'),(11,5,3,'ddfs',0,1,1,1,1,1,'2016-03-26 13:29:21'),(12,6,3,'1',0,1,1,1,1,1,'2016-03-26 13:29:27'),(13,7,3,'<p>改ざん</p>',0,1,1,1,1,1,'2016-03-26 13:30:39'),(14,8,3,'c',0,1,1,1,1,1,'2016-03-26 13:30:56'),(15,9,3,'hacker',0,1,1,1,1,1,'2016-03-26 13:32:22'),(16,10,3,'d',0,1,1,1,1,1,'2016-03-26 13:32:30'),(17,1,5,'hacker',0,1,1,1,1,NULL,'2016-01-30 17:15:32'),(18,2,5,'1',6,1,1,NULL,NULL,NULL,'2016-01-30 17:31:17'),(19,3,5,'wATFyXV66LYHsCsoMDCeQLMfmGzU3A4C',10,NULL,NULL,NULL,NULL,NULL,'2016-01-30 17:55:48'),(20,4,5,'2',10,NULL,NULL,NULL,NULL,NULL,'2016-01-30 17:55:56'),(21,5,5,'nRoyhQNv',10,NULL,NULL,NULL,NULL,NULL,'2016-01-30 17:56:25'),(22,6,5,'3',10,NULL,NULL,NULL,NULL,NULL,'2016-01-30 17:56:38'),(23,7,5,'<p>koo</p>',0,NULL,NULL,NULL,NULL,NULL,'2016-01-30 17:57:17'),(24,8,5,'神楽坂下店',10,NULL,NULL,NULL,NULL,NULL,'2016-01-30 17:57:26'),(25,9,5,'hacker',0,1,1,NULL,NULL,NULL,'2016-01-30 17:59:17'),(26,10,5,'おつかれさまでした',0,1,1,1,1,1,'2016-01-30 18:17:12'),(27,1,6,'Stay Hungry',10,NULL,NULL,NULL,NULL,NULL,'2016-03-26 13:41:44'),(28,10,7,'',0,1,1,1,1,1,'2016-05-05 13:28:06'),(29,2,7,'1',10,NULL,NULL,NULL,NULL,NULL,'2016-05-05 13:34:45'),(30,11,7,'59.106.194.19',10,NULL,NULL,NULL,NULL,NULL,'2016-05-05 14:20:26'),(31,12,7,'nginx',0,1,1,1,1,1,'2016-05-05 15:32:54'),(32,13,7,'false',0,1,1,1,1,1,'2016-05-05 15:33:45'),(33,14,7,'grep',0,1,1,1,1,1,'2016-05-05 15:36:00'),(34,24,7,'',0,1,1,1,1,1,'2016-09-17 15:08:14'),(35,18,7,'',0,1,1,1,1,1,'2016-09-17 15:09:03'),(36,26,7,'ENIAC',0,1,1,1,1,1,'2016-11-19 07:29:26'),(37,27,7,'4',0,1,1,1,1,1,'2016-11-19 07:54:25'),(38,29,7,'JOJO',0,1,1,1,1,1,'2016-11-19 08:27:23'),(39,30,7,'4',10,NULL,NULL,NULL,NULL,NULL,'2016-11-19 08:38:28'),(40,31,7,'2',10,NULL,NULL,NULL,NULL,NULL,'2016-11-19 09:08:58'),(41,32,7,'4',10,NULL,NULL,NULL,NULL,NULL,'2016-11-19 09:35:42'),(42,33,7,'4',10,NULL,NULL,NULL,NULL,NULL,'2016-11-19 11:49:27'),(43,34,7,'4',10,NULL,NULL,NULL,NULL,NULL,'2016-11-19 11:58:36'),(44,35,7,'Enjoy Hack',0,1,1,1,1,1,'2016-11-19 12:19:37');
/*!40000 ALTER TABLE `answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `question` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `answer` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `score` int(10) unsigned NOT NULL,
  `level` int(10) unsigned NOT NULL,
  `hint1` text CHARACTER SET utf8 COLLATE utf8_bin,
  `hint2` text CHARACTER SET utf8 COLLATE utf8_bin,
  `hint3` text CHARACTER SET utf8 COLLATE utf8_bin,
  `hint4` text CHARACTER SET utf8 COLLATE utf8_bin,
  `hint5` text CHARACTER SET utf8 COLLATE utf8_bin,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'以下の暗号を解読し、元の文字列を解読せよ。この暗号はシーザー暗号という暗号化方式を利用して暗号化されている。<br>Vwdb Kxqjub','Stay Hungry',10,1,'Webでシーザー暗号を調べよう','シーザー暗号は元のアルファベットをある規則に従って別のアルファベットに変換する暗号だ','シーザー暗号は元のアルファベットを3文字後ろのアルファベットに置き換えるんだ','aならd、bならe、cならfというように3文字後ろのアルファベットに変換する','Vwdb Kxqjubという文字列はシーザー暗号化されたものだから、アルファベットを3文字前にずらせば元の文字列がわかる。例えばVの3文字前はS、wの3文字前はtというように変換しよう。','2016-11-19 12:16:54'),(2,'ソフトバンクグループ株式会社の代表取締役社長は誰でしょう？','1',10,1,'高校生の頃に中退をして渡米を行っています','若い頃、慢性肝炎で生死をさまよった経験があります','坂本龍馬の大ファン','東日本大震災復興において多額の寄付を行っています','頭が薄いことをよくネタにします','2016-11-19 12:16:54'),(3,'クラッキング用ページのIDとパスワードをクラックせよ。クラックに成功したらパスワードの方を解答に入力してくれ。正解のIDとパスワードはクラッキング用ページのどこかにかかれているらしい。よく調べてくれ。','wATFyXV66LYHsCsoMDCeQLMfmGzU3A4C',10,1,'まずはブラウザの機能でHTMLのソースを表示してみよう','右クリックでソースの表示を選択しよう','ソースの中をくまなく調べてみよう','ソースの中のHTMLのコメントアウト部分をよく見よう','真ん中あたりにidとpasswordが書いてあるぞ','2016-11-19 12:16:54'),(4,'プログラミング言語、Perl の開発者は誰でしょう？','2',10,1,'言語学者でもあります','プログラマの三大美徳というものを唱え始めました','プログラミング Perl の共同著者です','まつもとゆきひろ氏が尊敬をしている人物です','とっても愛妻家','2016-11-19 12:16:54'),(5,'とある筋からユーザーIDとパスワードのリストを手に入れた。IDとパスワードはタブで区切られており、パスワードは暗号化されている。おそらくこのリストの中の誰かのアカウントがクラッキング用ページのIDとパスワードに一致するはずだ。暗号化されたパスワードを解読し、IDとパスワードをクラックせよ。','nRoyhQNv',10,4,'パスワードはシーザー暗号化されているのでまずは暗号化される前の文字列にもどそう','シーザー暗号がわからない人は問1のヒントを見よう','リストの先頭から順番にIDとパスワードを入力してみよう','正解のIDはサイトのどこかに隠されている','サイトからリンクされているid.jsを見てみよう','2016-11-19 12:16:54'),(6,'Facebook の創業者は誰でしょう？','3',10,1,'高校時代は友達が非常に少なかったらしいです','大学時代に「Coursematch」というサービスを開発しています','画像格付けサイト「Facemash.com」は女子学生の容姿を格付けする内容で大学から保護観察処分','いつも同じ服装である理由は仕事以外の意思決定を少なくしたいとのこと','名言「リスクを取らないことが一番のリスクだ」','2016-11-19 12:16:54'),(7,'改ざん用ページのサイトを改ざんせよ。テキストボックスに文字列やプログラムを入力してサイトを改ざんするんだ。解答には改ざんに使用したプログラムや文字列を入力せよ。','',10,7,'サイトを改ざんするには現在表示されているページのHTMLを改ざんする必要がある','テキストボックスに入力された文字を送信するとHTMLの一部としてWebページに表示される','テキストボックスに特定の文字を入力して送信するとHTMLの一部としてページが表示される','HTMLとは<h1>タイトル</h1>みたいなタグで囲まれた構文を持つ','テキストボックスに適当なHTMLを入力してみよう','2016-11-19 12:16:54'),(8,'下の写真が撮られたモスバーガーの店舗を特定せよ。解答には店名を入力せよ。(例えば天神北店)。写真には位置情報が埋め込まれているのでまずはそれを調べよう。','神楽坂下店',10,3,'写真に埋め込まれた位置情報をExifというんだ','Exifの情報を調べるサイトがあるぞ','モスバーガーの写真をそのサイトで調べてみよう','位置情報がわかったらその場所をGoogle Mapsで調べてみよう','http:://exif-check.orgで位置情報を調べられるぞ','2016-11-19 12:16:54'),(9,'以下の実行ファイルを起動してパスワードをクラックせよ。実行ファイルの中身を解析すればパスワードがわかるかもしれない。','hacker',10,10,'バイナリデータの中身をバイナリエディタで見てみよう','バイナリエディタはWindowsの人はBZ、Macの人はhexeditというツールがあるぞ','パスワードはプログラムの中に直接書かれている','バイナリデータの中のASCII表示のパスワードが隠れているかもしれない','パスワードはかなり簡単な文字列だ','2016-11-19 12:16:54'),(10,'この問題の答えはなんでしょう？','おつかれさまでした',10,100,'次のヒントをみるしかない！','見当もつかないだろ？','告知HPの問題が解けた君ならできるはずだけどなぁ？','ソースコードを直接見るにはどうしたらいいんだっけ？','この辺を右クリックしたら、ソースコードがみれるだろ？','2016-11-19 12:16:54'),(11,'IP アドレスを特定せよ！ このURL http://www.hatena.ne.jp/ の IP アドレスを特定して入力してくれ！','59.106.194.19',10,10,'URL アドレスはネームサーバーに問い合わせているんだね','ネームサーバーに問い合わせると IP アドレスを教えてくれる','ネームサーバーに問い合わせコマンドがあるんだよ','ソースコードを直接見るにはどうしたらいいんだっけ？','web ブラウザの機能を使うか UNIX のコマンドかどちらかだね','2016-11-19 12:16:54'),(12,'WEB サーバーを特定せよ！ このhackersLab.博多のwebアプリを配信している webサーバーを特定して入力してくれ！','nginx',10,10,'最近はwebサーバーもいろんな種類がある','http ヘッダーに情報が隠されてるぞ','サイトにアクセスすれば必ず返却されているはずなんだ','おなじく、問い合わせるコマンドがあるぞ','やはりweb ブラウザの機能を使うか UNIX のコマンドかどちらかだね','2016-11-19 12:16:54'),(13,'時間の計算とは！ コンピューターは時間の計算を ****秒を基準に考えている、 **** にはなにが入るか答えよ','エポック',10,10,'これは検索すれば簡単ですね','世界で共通化されているみたいだね','UNIX時間ともいうみたいです','1970年','UNIX時間で検索してみよう','2016-11-19 12:16:54'),(14,'うるう年を特定せよ！ 紀元前1,900年はうるう年か？うるう年なら true うるう年でないなら false を入力せよ！','false',10,10,'うるう年の法則を覚えているかい？','4年一度だけではない','100年に一度の例外だけでもない','400年に一度の例外もある','こういう計算こそプログラミングだ -> https://www.python.org/','2016-11-19 12:16:54'),(15,'プログラミングコードを解明せよ！ この Perl スクリプトを正しく実行するには **** になにを記述すればよいか！入力しくれ！','grep',10,10,'日本語のコメントを読んでなにをしているかイメージしよう','**** は標準関数だ','条件に一致するデータを検索していて戻り値はリストになる','Perlは公式ドキュメントを日本語化されたものがある','Perldoc.jp','2016-11-19 12:16:54'),(16,'以下のバイナリファイルのフォーマットを答えよ','2',10,10,'バイナリファイルといってもいろんな種類がある','今回用意したファイルは実行ファイルだ','Linux上で実行可能なファイルだ','バイナリファイルの種類を調べるコマンドがある','fileコマンドを使う','2016-11-19 12:16:54'),(17,'以下のプログラムはとあるサイトにおけるログイン処理の一部である。$uidにはユーザー名、$passwordにはパスワードが入力されているとする。本来であればユーザー名とパスワードが一致しないとログインは出来ないが$uidにある入力を行うとパスワードを入力しなくてもログインができてしまう。その入力を答えよ。入力文字数は全部で11文字とする。なおこのサイトではkusakabeというユーザー名が存在していることは確認されている。','kusakabe\'--',10,10,'ユーザーがどういう値を入力すれば今回の不具合がおきるか考えよう','uid = $uidの部分が怪しいぞ','password = $passwordの部分が無視されれば良いんだね','uid = kusakabeとなれば良いんだね','kusakabe\'--','2016-11-19 12:16:54'),(18,'以下のPerlプログラムには脆弱性がある。$cmdにはユーザーの入力値が入っているとする。特定の文字を入れるとサーバーのファイル一覧が表示されてしまう。その入力を答えよ。入力文字数は2文字とする。','ls',10,10,'system関数は何をする関数か調べよう','system関数はOSのコマンドを実行する関数だ','ユーザー入力がそのままsystem関数に渡されているね','system関数に渡す引数にファイル一覧を表示するコマンドを渡せば良さそうだ','ls','2016-11-19 12:16:54'),(19,'以下のビット列の1の個数を数えよ','254',10,10,'愚直に1ビットずつ数えてみよう','ループを使って順番に処理しよう','ビット列の長さを取得してループで回そう','while文が使えそうだ','while文でビット列をループで回して1の場合数えるという処理をすればいけそう','2016-11-19 12:16:54'),(20,'3本の棒A,B,Cがある。最初,棒Aには5枚の円板が大きい順に重ねてさしてある。円板を棒から棒に1枚ずつ動かして全円板を棒Bに集めるとき、何回の移動で完了するか。それぞれの棒から棒へ円板を1枚移動を1回と数える。ただし小さい円板の上に大きい円板をのせてはならない。','31',10,10,'まずは円板が1つの場合を考えてみよう','次に円板が2つの場合、3つの場合を考える','Bの棒に一番大きい円板を移すためには一旦Cの棒に一番大きい円板以外を移す必要がある','その後にCの棒からBの棒へ移動させる','ハノイの塔','2016-11-19 12:16:54'),(21,'このサイトのCookieの名前(name)を表示せよ','hackers_session',10,10,'Cookieとはブラウザに保存されているデータのことだ','CookieはHTTPヘッダを見れば分かる','HTTPヘッダはブラウザの開発者ツールを使えば見れる','開発者ツールを起動してCookieの項目を見よ','Cookieの名前はhackersから始まるぞ','2016-11-19 12:16:54'),(22,'とあるサイトを訪問すると突然画面にIPアドレスが表示され、架空請求を思わせる文言が表示された。以下はこのプログラムの一部である。****の部分を答えよ。','REMOTE_ADDR',10,10,'IPアドレスはサーバー側でなければ取得できない','この例ではサーバー側のPHPでユーザーのIPアドレスを取得している','$_SERVERは様々な値が格納されているPHPのグローバル変数である','$_SERVERの特定の値がユーザーのIPアドレスを表す','REMOTEから始まる','2016-11-19 12:16:54'),(23,'ハッカーがよく使用するエディタでノーマルモードと挿入モードが別れておりESCを使って2つを切り替えるエディタを何というか。全て小文字で答えよ。','vim',10,2,'最初はノーマルモードという状態で起動する','iをおして挿入モードに切り替える','ESCを押すとノーマルモードに切り替わる',':を押すとコマンドモードに切り替わる','viと似ている','2016-11-19 12:16:54'),(24,'Googleが開発してるプログラミング言語を何というか。全て小文字で答えよ。','go',10,2,'Googleが2009年に発表したプログラミング言語','C/C++を置き換えるために考えられたんだ','dockerというソフトウェアで使われており注目を浴びている','Googleという名前の中に言語名があるよ','golangと言われることもある','2016-11-19 12:16:54'),(25,'バイナリファイルに含まれている表示可能文字列の個数を数えよ','576',10,10,'表示可能文字列というのはプログラムに埋め込まれたASCII文字のこと','バイナリファイルを調べてみよう','表示可能文字列を表示してくれる機能があるものを選ぼう','stringsというコマンドが使えるぞ','wc -lで行数を数えることができる','2016-11-19 12:16:54'),(26,'「世界最初のコンピュータは？」<br>次の説明の（A）に入る言葉をアルファベット5文字で入力してください。<br>世界最初の汎用電子式コンピュータは通称（A）と呼ばれる','ENIAC',10,1,'わからなければ何でも検索しよう','Googleで検索するのをオススメするよ','「世界最初の汎用電子式コンピュータ」で検索しよう','このURLに記載されてるよ  https://ja.wikipedia.org/wiki/ENIAC','E◯◯◯C　Eで始まりCで終わる言葉を探そう','2016-11-19 12:16:54'),(27,'「キャプテンクランチ」<br>キャプテンクランチと呼ばれる伝説的ハッカーの「ジョン・T・ドレイパー」さん。<br>この方は、1972年に長距離電話でタダでかけるハッキングをした方ですが、何を利用してハックしたか次の中から選んでください。','4',10,1,'わからなければ何でも検索しよう','Googleで検索するのをオススメするよ','「キャプテンクランチ」で検索しよう','このURLに記載されてるよ  http://www.gizmodo.jp/2011/09/10-hackers-who-made-history.html','キャプテンクランチというある食べ物のおまけ','2016-11-19 12:16:54'),(28,'「キャプテンクランチ２」<br>キャプテンクランチはシリアルのおまけで長距離電話をタダでかけるハッキングをした人ですが、何ヘルツの音を出すことでハックが成功したのか次の中から選んでください。','4',10,1,'わからなければ何でも検索しよう','Googleで検索するのをオススメするよ','「キャプテンクランチ ヘルツ」で検索しよう','このURLに記載されてるよ  http://www.gizmodo.jp/2011/09/10-hackers-who-made-history.html','2600ヘルツ','2016-11-19 12:16:54'),(29,'「主人公のあだ名」<br>メタリカ、ビーチ・ボーイ、ベイビィ・フェイス、ホワイト・アルバムという名前のキャラクターが出てくる物語の主人公は通称なんと呼ばれている？<br>アルファベット４文字で入力してください。','JOJO',10,1,'わからなければ何でも検索しよう','Googleで検索するのをオススメするよ','「メタリカ、ビーチ・ボーイ、ベイビィ・フェイス、ホワイト・アルバム」で検索しよう','このURLに記載されてるよ http://dic.pixiv.net/a/%E3%82%B8%E3%83%A7%E3%82%B8%E3%83%A7%E3%81%AE%E5%A5%87%E5%A6%99%E3%81%AA%E5%86%92%E9%99%BA%E3%83%BB%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E4%B8%80%E8%A6%A7','これは全て「ジョジョの奇妙な冒険」というマンガに出てくるキャラクター','2016-11-19 12:16:54'),(30,'「共通点」<br>次の名前はあるキャラクター名前です。３つの名前には共通点があります。<br>ボヘミアン・ラブソディー、スカイ・ハイ、アンダー・ワールド、同じ共通点の名前を次の中から選んでください。','4',10,2,'わからなければ何でも検索しよう','Googleで検索するのをオススメするよ','「ボヘミアン・ラブソディー、スカイ・ハイ、アンダー・ワールド」で検索しよう','DIO息子4兄弟って検索結果に出てきたはず','A〜DのキャラクターでDIOの息子を探そう','2016-11-19 12:16:54'),(31,'「正しい行動はどれ？」<br> あなたは友人から電話で次のような相談を受けました。<br> <br> 「パソコンを使っていたら急に変なウィンドウが出てきた。<br> そのウィンドウには、<br> 『このウィンドウを消したければ、<br> 　http://****.com/****のアクセスして解除申請をしてください』<br> と書かれているがどうすればいい？」<br> <br> と聞かれました。<br> あなたは電話口で友人にアドバイスをしようとしていますが、<br> 次の中で、友人に行ってもらう行動として、最優先のものを選んでください。','2',10,2,'パソコンが被害にあったらまず落ち着く','URLをクリックしては絶対ダメ','警察に電話するよりも先にやることがある','ウィルス対策ソフトでスキャンするよりも先にやることがある','被害にあったパソコンをネットワークから切り離すことが最優先','2016-11-19 12:16:54'),(32,'「Webサイトが見れない原因はなんだろう？」<br> <br> あなたは新しいパソコンを購入しました。<br> <br> さっそくブラウザでYahooのトップ画面(http://www.yahoo.co.jp/)を見ようとしましたが、<br> サイトに繋がらず表示できませんでした。<br> 試しに自分のスマホでYahooのトップ画面を見ると表示できました。<br> <br> 新しいパソコンがネットに繋がってないと思ったあなたは<br> ルーターにpingを飛ばしてみたところ応答が返ってきます。<br> <br> 試しに、URLにhttp://183.79.135.206を入力してみたところ表示できました。<br> <br> この段階で考えられる原因として次の中から一番当てはまるものを選んでください。','4',10,3,'スマホで表示できたならYahooのWebサーバはダウンしてない','IPアドレスのURLで表示できたのでルーターは稼働している','187.79.135.206は外部のネットワーク。そこに接続できたということはデフォルトゲートウェイは設定している','IPアドレスとドメイン名の紐づけを管理しているサーバーをDNSサーバーと呼ぶ','ドメインの名称解決ができていないということは、新しいパソコンでDNSサーバーを設定していない可能性が大きい','2016-11-19 12:16:54'),(33,'「IPアドレスから国を特定する」<br> <br> 次のIPアドレスの国を特定してください。<br> <br> IPアドレスその１：69.63.188.0<br> IPアドレスその２：121.201.98.0','4',10,3,'IPアドレスの情報を確認するにはwhoisコマンドを使います','「whois 調べたいIPアドレス」のように入力して実行します','IPアドレス１の国名コードはUSです','IPアドレス２の国名コードはCNです','USはアメリカ、CNは中国です','2016-11-19 12:16:54'),(34,'「パケットキャプチャしたい・・・」<br> <br> あなたは職場の上司から、<br> 同僚のAさんが不審な通信をしてないか、<br> Aさんに知られずにネットワークの調査をしてほしいと頼まれました。<br> <br> しかしAさんは四六時中パソコンから離れないため、<br> Aさんのパソコンをあなたが直接さわることはできません。<br> <br> そこであなたはAさんのパソコンからインターネットまでのネットワークを<br> キャプチャしようと考えます。<br> 幸いAさんはネットワークが詳しくありませんし、<br> あなたとAさんは同じLANで接続しています。<br> <br> さて、この状況であなたが目的を達成するために、<br> 一番必要となる機器は次の中から選んでください。','4',10,4,'キャプチャとはネットワークを流れるデータを補足する意味合い','この問題はネットワークに関する問題です','Aの外付けハードディスクは無関係です','LANケーブルだけでは調べることはできません','バカハブと呼ばれる機器を使います','2016-11-19 12:16:54'),(35,'「特定の文字列を探そう」<br> <br> 画像ファイル「hackerz_Level4-1.png」の中から<br> 以下の文字列のAの部分に入っている文字を探して、答えを入力してください。<br> <br> hackerz{A}','Enjoy Hack',10,4,'ファイルの中身をみるにはエディタが必要','バイナリエディタを使おう','vimでもバイナリモードがあるよ','エディタでファイルを開いたら「hackerz」で検索してみよう','hackerz{Enjoy Hack}','2016-11-19 12:16:54');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scores`
--

DROP TABLE IF EXISTS `scores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scores` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `score` int(10) unsigned NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scores`
--

LOCK TABLES `scores` WRITE;
/*!40000 ALTER TABLE `scores` DISABLE KEYS */;
/*!40000 ALTER TABLE `scores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `session_data` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `session_expires` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('2b74dcc7a36bee45b00a8dff894cc3915370c1ef2ce341cf36248426d9c6ca1e3122a5cc6c579c612197e589262860d1c9b0e3a675b8f13eb55cd9918d4de1c9','{\"answer\":{\"user_answer\":\"おつかれさまでした\"},\"user\":{\"user_id\":\"yk05\",\"password\":\"9ab35af97615e7e0c9e92f36a40190eb250ab5b4c21ee073d0a37f1832150e9597b5e791c6833397e0659c885aa02a1823455472a2fd556e7f4d7910a969c503\",\"id\":\"5\",\"username\":\"日下部2\",\"created_at\":\"2016-01-31 01:51:02\"},\"error\":2,\"question\":{\"hint1\":\"次のヒントをみるしかない！\",\"hint4\":\"ソースコードを直接見るにはどうしたらいいんだっけ？\",\"level\":\"100\",\"hint2\":\"見当もつかないだろ？\",\"id\":\"10\",\"answer\":\"おつかれさまでした\",\"score\":\"10\",\"hint5\":\"この辺を右クリックしたら、ソースコードがみれるだろ？\",\"created_at\":\"2016-01-31 01:34:42\",\"hint3\":\"告知HPの問題が解けた君ならできるはずだけどなぁ？\",\"question\":\"この問題の答えはなんでしょう？\"},\"user_answer\":null}','2016-03-01 03:22:12','2016-01-31 01:51:02','2016-01-30 18:22:12'),('13a5f807cc8e06abfc26d06394c08cf69e8ca9033655ecf482c0fd5b7a74819b92926610ce3b3d16781d37839df4984c78bee3b4da129dfdf36a2716f1cd8621','{\"user\":{\"id\":\"6\",\"password\":\"6558099506c93c3de91bbd3b98e5999b8799c23bfe76057f75774302fad5597f77d64bc7ae9c2257402d75766da4b7b68804e61e1a33cafc59700a3cc7b014fd\",\"username\":\"0326beck\",\"user_id\":\"0326beck\",\"created_at\":\"2016-03-26 22:41:19\"}}','2016-04-25 23:19:04','2016-03-26 22:44:48','2016-03-26 14:19:04'),('eb1366370da5f0c0bd43023a256c5a3f99f6640c46a8c83a09b5d36f4bcdca29764a6e939a2df704c26cd744adb925bce3a34ba11b0e5039b0c4223392b54175','{\"answer\":{\"user_answer\":\"false\"},\"user\":{\"username\":\"yosizuka\",\"password\":\"9ea28162848fc9f47e8aa734cf069c6388c5df85b7c6a533a232326f00ef605dcbc50e0f625ceebac7442de3b6f290b4470788841a6a35a94f8414e68d2f2697\",\"id\":\"7\",\"created_at\":\"2016-05-05 22:27:33\",\"user_id\":\"yosizuka1\"},\"question\":{\"id\":\"14\",\"answer\":\"grep\",\"hint5\":\"Perldoc.jp\",\"hint3\":\"条件に一致するデータを検索していて戻り値はリストになる\",\"question\":\"プログラミングコードを解明せよ！ この Perl スクリプトを正しく実行するには **** になにを記述すればよいか！入力しくれ！\",\"hint2\":\"**** は標準関数だ\",\"created_at\":\"2016-05-06 00:32:22\",\"level\":\"10\",\"score\":\"10\",\"hint1\":\"日本語のコメントを読んでなにをしているかイメージしよう\",\"hint4\":\"Perlは公式ドキュメントを日本語化されたものがある\"},\"error\":0}','2016-06-05 00:36:00','2016-05-05 22:27:33','2016-05-05 15:36:00'),('5c24d30c324e75b372b5b6d4fb58c7b111f636b973419b9a2e8eb6fc0b89feee349920e83acbca547e2c41e0ec503981dad123963a064dbbc13081b0cc533fe2','{\"error\":0,\"user\":{\"user_id\":\"yosizuka1\",\"created_at\":\"2016-05-05 22:27:33\",\"username\":\"yosizuka\",\"password\":\"9ea28162848fc9f47e8aa734cf069c6388c5df85b7c6a533a232326f00ef605dcbc50e0f625ceebac7442de3b6f290b4470788841a6a35a94f8414e68d2f2697\",\"id\":\"7\"},\"question\":{\"hint5\":\"ls\",\"question\":\"以下のPerlプログラムには脆弱性がある。$cmdにはユーザーの入力値が入っているとする。特定の文字を入れるとサーバーのファイル一覧が表示されてしまう。その入力を答えよ。入力文字数は2文字とする。\",\"level\":\"10\",\"id\":\"18\",\"hint4\":\"system関数に渡す引数にファイル一覧を表示するコマンドを渡せば良さそうだ\",\"hint3\":\"ユーザー入力がそのままsystem関数に渡されているね\",\"answer\":\"ls\",\"score\":\"10\",\"created_at\":\"2016-09-18 00:07:21\",\"hint2\":\"system関数はOSのコマンドを実行する関数だ\",\"hint1\":\"system関数は何をする関数か調べよう\"}}','2016-10-18 00:09:03','2016-09-17 23:47:23','2016-09-17 15:09:03'),('19fe1af3754848c24bf71d74e18870e0b996d637bc3060b53c6531df1daad2848cd1dff67d70bb2f0fb00bf17dd2553da50b1d8d0f7dea1528a80d8c2f28ce64','{\"error\":0,\"answer\":{\"user_answer\":\"ENIAC\"},\"user\":{\"username\":\"yosizuka\",\"created_at\":\"2016-05-05 22:27:33\",\"user_id\":\"yosizuka1\",\"id\":\"7\",\"password\":\"9ea28162848fc9f47e8aa734cf069c6388c5df85b7c6a533a232326f00ef605dcbc50e0f625ceebac7442de3b6f290b4470788841a6a35a94f8414e68d2f2697\"},\"question\":{\"question\":\"世界最初のコンピュータは？\\n次の説明の（A）に入る言葉をアルファベット5文字で入力してください。\",\"hint5\":\"E◯◯◯C　Eで始まりCで終わる言葉を探そう\",\"created_at\":\"2016-11-19 16:25:38\",\"hint1\":\"わからなければ何でも検索しよう\",\"hint2\":\"Googleで検索するのをオススメするよ\",\"level\":\"1\",\"hint4\":\"このURLに記載されてるよ  https://ja.wikipedia.org/wiki/ENIAC\",\"id\":\"26\",\"hint3\":\"「世界最初の汎用電子式コンピュータ」で検索しよう\",\"answer\":\"ENIAC\",\"score\":\"10\"}}','2016-12-19 16:32:08','2016-11-19 11:55:46','2016-11-19 07:32:08'),('c0271791c453f0c3eca318d35c48962bc2365b4739e7f5499b1719488513858c7caa596f9a1519c899198ae1595ec798c13b42727c6eaebbf4c1a17b4beae0d4','{\"question\":{\"score\":\"10\",\"hint2\":\"バイナリエディタを使おう\",\"hint5\":\"hackerz{Enjoy Hack}\",\"hint3\":\"vimでもバイナリモードがあるよ\",\"hint1\":\"ファイルの中身をみるにはエディタが必要\",\"id\":\"35\",\"answer\":\"Enjoy Hack\",\"hint4\":\"エディタでファイルを開いたら「hackerz」で検索してみよう\",\"question\":\"「特定の文字列を探そう」<br> <br> 画像ファイル「hackerz_Level4-1.png」の中から<br> 以下の文字列のAの部分に入っている文字を探して、答えを入力してください。<br> <br> hackerz{A}\",\"level\":\"4\",\"created_at\":\"2016-11-19 21:16:54\"},\"error\":2,\"user\":{\"username\":\"yosizuka\",\"user_id\":\"yosizuka1\",\"id\":\"7\",\"created_at\":\"2016-05-05 22:27:33\",\"password\":\"9ea28162848fc9f47e8aa734cf069c6388c5df85b7c6a533a232326f00ef605dcbc50e0f625ceebac7442de3b6f290b4470788841a6a35a94f8414e68d2f2697\"},\"answer\":{\"user_answer\":\"Enjoy Hack\"}}','2016-12-19 21:50:43','2016-11-19 16:42:21','2016-11-19 12:50:43');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(128) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id_and_passwrd` (`user_id`,`password`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'','','49fbc7107860f6a3d61c2cdc826da290d851f87e14dc7bc780a9114cd8cb86dbeedf69ca6f3491ada95fb75437eec2c5931a7f8dee6443470c9a91b580d300a9','2016-01-16 15:21:21'),(2,'','','3dc4e2d2005b64a7f19af74e1e5fd76123e9500d7f89b0931689c4776bee1b8ed46e845e0951b2bd73aeedd563b8c9b635497216f6c983c4b36474c9422e653e','2016-01-16 17:38:04'),(3,'yosizuka','日下部','9ab35af97615e7e0c9e92f36a40190eb250ab5b4c21ee073d0a37f1832150e9597b5e791c6833397e0659c885aa02a1823455472a2fd556e7f4d7910a969c503','2016-01-17 05:23:14'),(4,'','日下部','9ab35af97615e7e0c9e92f36a40190eb250ab5b4c21ee073d0a37f1832150e9597b5e791c6833397e0659c885aa02a1823455472a2fd556e7f4d7910a969c503','2016-01-17 15:51:58'),(5,'yk05','日下部2','9ab35af97615e7e0c9e92f36a40190eb250ab5b4c21ee073d0a37f1832150e9597b5e791c6833397e0659c885aa02a1823455472a2fd556e7f4d7910a969c503','2016-01-30 16:51:02'),(6,'0326beck','0326beck','6558099506c93c3de91bbd3b98e5999b8799c23bfe76057f75774302fad5597f77d64bc7ae9c2257402d75766da4b7b68804e61e1a33cafc59700a3cc7b014fd','2016-03-26 13:41:19'),(7,'yosizuka1','yosizuka','9ea28162848fc9f47e8aa734cf069c6388c5df85b7c6a533a232326f00ef605dcbc50e0f625ceebac7442de3b6f290b4470788841a6a35a94f8414e68d2f2697','2016-05-05 13:27:33');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-09 22:46:35
