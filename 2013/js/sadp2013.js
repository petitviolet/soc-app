var Team = function(name, appname, description, blog, appurl, logo_path, os) {
  this.name = name;
  this.appname = appname;
  this.description = description;
  this.blog = blog;
  this.appurl = appurl;
  this.logo_path = logo_path;
  this.os = os;
};

var ANDROID = 'https://play.google.com/store/apps/details?id=';
var IOS = 'https://itunes.apple.com/us/app/';
var IMG_PATH = './img/';

var teamCtrl = function($scope) {
  $scope.teams = [
    new Team("ぼっちーむ", "ぼっちめし図鑑", "ぼっちめしを支援するアプリです", "http://botteam.hatenadiary.jp/", ANDROID + "kom.botch.rasaki", IMG_PATH + 'botch_logo.png', 'android'),
    new Team("部屋とＹシャツとY", "擬音祭", "楽しく擬音語を勉強するアプリです", "http://team-4y.hatenablog.com/", IOS + "ni-yin-ji/id765223887", IMG_PATH + 'gion_logo.jpg', 'ios'),
    new Team("上野パンダ", "クラスナビ", "社情のポータルアプリです", "http://ameblo.jp/sadp2013/", ANDROID + "com.yaunix.test.sadp", IMG_PATH + 'classnav_logo.png', 'stopped'),
    new Team("AppFountain", "AppFountain", "アプリの知恵袋です", "http://appfountain.hatenablog.jp/", ANDROID + "com.appfountain", IMG_PATH + 'appfountain_logo.png', 'stopped'),
    new Team("ソシャレコ！", "ソシャレコ", "声を投稿するSNSアプリです", "http://shajo-benriya.hatenablog.com/",  IOS + "soshareko!/id768606311", IMG_PATH + 'social_reco_logo.jpg', 'ios'),
    new Team("garakeee", "pregniary", "妊娠中の彼女と彼氏をつなぐアプリです", "http://garakeee.hatenablog.com/", ANDROID + "jp.gr.java_conf.pregniary", IMG_PATH + 'pregniary_logo.png', 'android')
  ];
  $scope.showRondom = function() {
    angular.forEach($scope.teams, function(team, i) {
      var r = Math.floor(6 * Math.random());
      var tmp = $scope.teams[i];
      $scope.teams[i] = $scope.teams[r];
      $scope.teams[r] = tmp;
    });
  };
  $scope.showRondom();
};

