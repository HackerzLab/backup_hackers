--
-- データベース: `jsdd_ch15`
--

-- --------------------------------------------------------

--
-- `bids`テーブルのテーブル構造
--

CREATE TABLE `bids` (
  `bidId` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `itemId` INT(10) UNSIGNED NOT NULL,
  `userId` MEDIUMINT(8) UNSIGNED NOT NULL,
  `bid` DECIMAL(7,2) UNSIGNED NOT NULL,
  `dateSubmitted` TIMESTAMP NOT NULL,
  PRIMARY KEY (`bidId`),
  KEY `itemId` (`itemId`),
  KEY `userId` (`userId`)
);

-- --------------------------------------------------------

--
-- `items`テーブルのテーブル構造
--

CREATE TABLE `items` (
  `itemId` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `item` VARCHAR(100) NOT NULL,
  `description` TINYTEXT,
  `openingPrice` DECIMAL(7,2) UNSIGNED NOT NULL,
  `finalPrice` DECIMAL(7,2) DEFAULT NULL,
  `dateOpened` timestamp NOT NULL,
  `dateClosed` datetime NOT NULL,
  PRIMARY KEY (`itemId`)
);

INSERT INTO `items` (`item`, `description`, `openingPrice`, `dateOpened`, `dateClosed`) VALUES ('This is the item.', 'This is the description.', 1.25, UTC_TIMESTAMP(), '2015-07-05 13:01:00');
INSERT INTO `items` (`item`, `description`, `openingPrice`, `dateOpened`, `dateClosed`) VALUES ('Item2', 'This is the Item2', 3.00, UTC_TIMESTAMP(), '2012-11-18 12:00:00');
INSERT INTO `items` (`item`, `description`, `openingPrice`, `dateOpened`, `dateClosed`) VALUES ('ふとん', 'ふとんの説明', 7.30, UTC_TIMESTAMP(), '2012-11-18 08:01:00');
INSERT INTO `items` (`item`, `description`, `openingPrice`, `dateOpened`, `dateClosed`) VALUES ('こたつ', 'こたつの説明', 5.30, UTC_TIMESTAMP(), '2012-11-25 11:01:00');

-- --------------------------------------------------------

--
-- `users`テーブルのテーブル構造
--

CREATE TABLE `users` (
  `userId` MEDIUMINT(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(40) NOT NULL,
  `userpass` CHAR(40) NOT NULL,
  `timezone` VARCHAR(100) NOT NULL,
  `dateCreated` TIMESTAMP NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `username` (`username`),
  KEY `login` (`username`,`userpass`)
);

INSERT INTO `users` (`username`, `userpass`, `timezone`, `dateCreated`) VALUES ('testing', SHA1('securepass'), 'America/New_York', UTC_TIMESTAMP());
INSERT INTO `users` (`username`, `userpass`, `timezone`, `dateCreated`) VALUES ('user02', SHA1('securepass02'), 'Asia/Tokyo', UTC_TIMESTAMP());
