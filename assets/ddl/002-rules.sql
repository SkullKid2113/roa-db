DROP DATABASE IF EXISTS `roa`;
CREATE DATABASE `roa`;
USE `roa`;
CREATE TABLE `rules`
(
  `id` int PRIMARY KEY NOT NULL,
  `rule` TINYTEXT NOT NULL,
  `episode` varchar
(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `rules`
VALUES
  (2, 'The best deal is the one that makes the most profit.', 'The 34th Rule (DS9 novel)'),
  (3, 'Never spend more for an acquisition than you have to.', 'The Maquis, Part II (DS9 episode)'),
  (4, 'A woman wearing clothes is like a man in the kitchen.', 'The Ferengi Rules of Acquisition (DS9 novel)'),
  (5, 'Always exaggerate your estimates.', 'Cold Fusion (SCE novel)'),
  (6, 'Never let family stand in the way of opportunity.', 'The Nagus (DS9 episode)'),
  (7, 'Always keep your ears open.', 'In the Hands of the Prophets (DS9 episode)'),
  (8, 'Small print leads to large risk.', 'The Ferengi Rules of Acquisition (DS9 novel)'),
  (9, 'Instinct, plus opportunity, equals profit.', 'The Storyteller (DS9 episode)'),
  (10, 'Greed is eternal.', 'Prophet Motive (VOY episode)'),
  (11, 'Even if its free, you can always buy it cheaper.', 'The Ferengi Rules of Acquisition (DS9 novel)'),
  (12, 'Anything worth selling is worth selling twice.', 'The Ferengi Rules of Acquisition (DS9 novel)'),
  (13, 'Anything worth doing is worth doing for money.', 'Legends of the Ferengi (DS9 novel)'),
  (15, 'Dead men close no deals.', 'Demons of Air and Darkness (DS9 novel)'),
  (16, 'A deal is a deal (is a deal)...until a better one comes along.', 'The Ferengi Rules of Acquisition (DS9 novel)'),
  (17, 'A contract is a contract is a contract... but only between Ferengi.', 'Body Parts (DS9 episode)'),
  (18, 'A Ferengi without profit is no Ferengi at all.', 'Heart of Stone (DS9 episode)'),
  (19, 'Satisfaction is not guaranteed.', 'Legends of the Ferengi (DS9 novel)'),
  (20, 'He who dives under the table today lives to profit tomorrow.', 'Ferenginar: Satisfaction is Not Guaranteed (DS9 novella)'),
  (21, 'Never place friendship before profit.', 'Rules of Acquisition (DS9 episode)'),
  (22, 'Wise men can hear profit in the wind.', 'Rules of Acquisition (DS9 episode)'),
  (23, 'Nothing is more important than your health...except for your money.', 'Acquisition (ENT episode)')
;