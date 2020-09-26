-- ユーザー名: hackers / パスワード: thackers007
CREATE USER 'hackers'@'localhost' IDENTIFIED BY 'thackers007';

-- 権限の指定 すべての権限、スーパーユーザーに指定
GRANT ALL PRIVILEGES ON *.* TO 'hackers'@'localhost' WITH GRANT OPTION;
