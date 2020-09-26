## MySQL 基本

管理者権限、 一般ユーザー

    管理者権限 -> root
    一般ユーザー -> *** (任意で作成)

    ユーザーに関する情報は mysql.user に保存されている

    情報にアクセス

    管理者権限 (root) でログイン後

    mysql> SELECT * FROM mysql.user\G;

    ...

    項目が多すぎるので、項目をしぼる

    mysql> SELECT Host, User, Password FROM mysql.user\G;
    *************************** 1. row ***************************
        Host: localhost
        User: root
    Password: *4FD439787F5AAF3CE2D68610AA04100CC93AA41E
    *************************** 2. row ***************************
        Host: yk-no-MacBook-Air.local
        User: root
    Password:
    *************************** 3. row ***************************
    ...

    Password については暗号化された文字列なので、これを入力してもアクセスできない。

MySQL を使い始めるために必要な事

    手元の PC にインストールする

    mysql サーバーを起動する (mysql はサーバー型データベース)

    サーバーにログインするための管理者の設定

        Host: localhost (通常は localhost 手元の PC )
        User: root (管理者は root)
        Password: *** (任意の文字列)

    サーバーにログインするための一般ユーザーの設定

        Host: localhost (通常は localhost 手元の PC )
        User: *** (一般ユーザーは任意の文字列)
        Password: *** (任意の文字列)

    データベースを作成

        root もしくは一般ユーザーログイン後作成、ユーザー権限により、アクセス制限できる

    テーブルを作成

        使用するデータベースに切り替えたあとテーブル作成の sql を実行

    レコードを追加

        sql 文を使い任意にテーブルを指定してレコードを追加

    レコードを検索

        sql 文を使い任意に検索の sql を実行

## ユーザー作成からテーブルスキーマー作成まで

ヘルプ

    $ mysql --help

バージョン確認

    $ mysql --version
    mysql  Ver 14.14 Distrib 5.6.26, for osx10.10 (x86_64) using  EditLine wrapper

接続 root ユーザーでデータベース mysql を指定して接続、 root のパスワードは設定していない前提

    $ mysql --user=root mysql

ユーザーを作成する sql が書かれたファイルを読み込んで作成 (create_user.sql)

     mysql> source [ファイル名]

アカウントに対する権限を確認

    mysql> SHOW GRANTS FOR 'hackers'@'localhost';
    +-------------------------------------------------------------------------------------------------------------------------------------------+
    | Grants for hackers@localhost                                                                                                              |
    +-------------------------------------------------------------------------------------------------------------------------------------------+
    | GRANT ALL PRIVILEGES ON *.* TO 'hackers'@'localhost' IDENTIFIED BY PASSWORD '*8660BAF96F091F55F5D0593EF61DA65B6CA84088' WITH GRANT OPTION |
    +-------------------------------------------------------------------------------------------------------------------------------------------+

一度ログアウトして、再度作成したユーザーでログイン

    mysql> exit

作成したユーザーでログイン

    $ mysql -h localhost -u hackers -p
    Enter password:
    Welcome to the MySQL monitor.  Commands end with ; or \g.
    Your MySQL connection id is 4
    Server version: 5.6.26 Homebrew

    Copyright (c) 2000, 2015, Oracle and/or its affiliates. All rights reserved.

    Oracle is a registered trademark of Oracle Corporation and/or its
    affiliates. Other names may be trademarks of their respective
    owners.

    Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

    mysql>

現在の状況を確認

    mysql> status
    --------------
    mysql  Ver 14.14 Distrib 5.6.26, for osx10.10 (x86_64) using  EditLine wrapper

    Connection id:      4
    Current database:
    Current user:       hackers@localhost
    SSL:            Not in use
    Current pager:      stdout
    Using outfile:      ''
    Using delimiter:    ;
    Server version:     5.6.26 Homebrew
    Protocol version:   10
    Connection:     Localhost via UNIX socket
    Server characterset:    utf8
    Db     characterset:    utf8
    Client characterset:    utf8
    Conn.  characterset:    utf8
    UNIX socket:        /tmp/mysql.sock
    Uptime:         3 hours 1 min 31 sec

    Threads: 1  Questions: 97  Slow queries: 0  Opens: 87  Flush tables: 1  Open tables: 80  Queries per second avg: 0.008
    --------------

    mysql> SHOW DATABASES;
    +--------------------+
    | Database           |
    +--------------------+
    | information_schema |
    | mysql              |
    | performance_schema |
    +--------------------+
    3 rows in set (0.00 sec)

    mysql>

データーベースの作成 sql が書かれたファイルを読み込んで作成 (create_database.sql)

    mysql> source [ファイル名]

作成したデータベースに切り替える

    mysql> use hackers
    Database changed

一旦ログアウト

    mysql> exit

データベースを指定してログイン

    $ mysql -h localhost -u hackers -p hackers

データーベースに移動している

    mysql> status
    --------------
    mysql  Ver 14.14 Distrib 5.6.26, for osx10.10 (x86_64) using  EditLine wrapper

    Connection id:      5
    Current database:   hackers
    Current user:       hackers@localhost
    SSL:            Not in use
    Current pager:      stdout
    Using outfile:      ''
    Using delimiter:    ;
    Server version:     5.6.26 Homebrew
    Protocol version:   10
    Connection:     Localhost via UNIX socket
    Server characterset:    utf8
    Db     characterset:    utf8
    Client characterset:    utf8
    Conn.  characterset:    utf8
    UNIX socket:        /tmp/mysql.sock
    Uptime:         3 hours 31 min 35 sec

    Threads: 1  Questions: 112  Slow queries: 0  Opens: 87  Flush tables: 1  Open tables: 80  Queries per second avg: 0.008
    --------------

    mysql>

テーブルの状況

    mysql> SHOW TABLES;
    Empty set (0.00 sec)

テーブルの作成 sql が書かれたファイルを読み込んで作成 (schema.sql)

    mysql> source [ファイル名]

テーブルの状況

    mysql> SHOW TABLES;
    +-------------------+
    | Tables_in_hackers |
    +-------------------+
    | answers           |
    | questions         |
    | scores            |
    | sessions          |
    | users             |
    +-------------------+
    5 rows in set (0.00 sec)

個別のテーブルの詳細

    mysql> DESCRIBE answers;
    +-------------+------------------+------+-----+-------------------+-----------------------------+
    | Field       | Type             | Null | Key | Default           | Extra                       |
    +-------------+------------------+------+-----+-------------------+-----------------------------+
    | id          | int(10) unsigned | NO   | PRI | NULL              | auto_increment              |
    | question_id | int(10) unsigned | NO   | MUL | NULL              |                             |
    | user_id     | int(10) unsigned | NO   |     | NULL              |                             |
    | user_answer | text             | NO   |     | NULL              |                             |
    | score       | int(10) unsigned | NO   |     | NULL              |                             |
    | hint1       | int(10) unsigned | YES  |     | NULL              |                             |
    | hint2       | int(10) unsigned | YES  |     | NULL              |                             |
    | hint3       | int(10) unsigned | YES  |     | NULL              |                             |
    | hint4       | int(10) unsigned | YES  |     | NULL              |                             |
    | hint5       | int(10) unsigned | YES  |     | NULL              |                             |
    | updated_at  | timestamp        | NO   |     | CURRENT_TIMESTAMP | on update CURRENT_TIMESTAMP |
    +-------------+------------------+------+-----+-------------------+-----------------------------+
    11 rows in set (0.04 sec)

### 読み込んだ sql ファイル

create_user.sql

```sql
-- ユーザー名: hackers / パスワード: thackers007
CREATE USER 'hackers'@'localhost' IDENTIFIED BY 'thackers007';

-- 権限の指定 すべての権限、スーパーユーザーに指定
GRANT ALL PRIVILEGES ON *.* TO 'hackers'@'localhost' WITH GRANT OPTION;
```

create_database.sql

```sql
-- データーベース名: hackers
CREATE DATABASE hackers;
```

schema.sql

```sql
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
