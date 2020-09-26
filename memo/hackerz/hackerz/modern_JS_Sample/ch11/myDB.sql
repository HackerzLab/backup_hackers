-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- ホスト: localhost
-- 生成日時: 2012 年 10 月 30 日 01:01
-- サーバのバージョン: 5.5.25
-- PHP のバージョン: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- データベース: `myDB`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` text NOT NULL,
  `email` text NOT NULL,
  `date_submitted` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- テーブルのデータのダンプ `comments`
--

INSERT INTO `comments` (`id`, `comment`, `email`, `date_submitted`) VALUES
(1, 'user1 comment', 'user1@example.com', '2012-10-29 07:06:41'),
(2, 'user2 comment', 'user2@example.com', '2012-10-29 07:07:05');
