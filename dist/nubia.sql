/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : nubia

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-14 19:14:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for nubia_register
-- ----------------------------
DROP TABLE IF EXISTS `nubia_register`;
CREATE TABLE `nubia_register` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tel` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of nubia_register
-- ----------------------------
INSERT INTO `nubia_register` VALUES ('8', '18370786481', 'lmb12322');
INSERT INTO `nubia_register` VALUES ('9', '18370786482', 'lmb123');
INSERT INTO `nubia_register` VALUES ('10', '18370786484', 'lmb123');
INSERT INTO `nubia_register` VALUES ('11', '13666666666', 'lmb123');
INSERT INTO `nubia_register` VALUES ('12', '13999999999', 'lmb123');
INSERT INTO `nubia_register` VALUES ('13', '18370786490', 'lmb222');
INSERT INTO `nubia_register` VALUES ('14', '18665435264', 'lmb123');
INSERT INTO `nubia_register` VALUES ('15', '18365465824', 'lmb123');
INSERT INTO `nubia_register` VALUES ('16', '18654585321', 'lmb123');
INSERT INTO `nubia_register` VALUES ('17', '18356644622', 'lmb123');
INSERT INTO `nubia_register` VALUES ('18', '13367898767', '123456qqq');
INSERT INTO `nubia_register` VALUES ('19', '133678987677', 'fgf676767');
INSERT INTO `nubia_register` VALUES ('20', '188654215464', 'lmb12322');
