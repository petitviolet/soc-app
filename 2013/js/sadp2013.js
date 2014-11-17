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

var app = angular.module('sadp2013', []);

// http://jsfiddle.net/brettdewoody/y65G5/
app.service('anchorSmoothScroll', function(){
    this.scrollTo = function(eID) {
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }
    };
});

app.controller('ScrollController', ['$scope', '$location', 'anchorSmoothScroll',
    function($scope, $location, anchorSmoothScroll) {
      $scope.gotoAnchor = function(anchor) {
        anchorSmoothScroll.scrollTo(anchor);
      };
    }])
  .controller('TeamController', ['$scope',
    function($scope) {
      $scope.teams = [
        new Team("ぼっちーむ", "ぼっちめし図鑑", "ぼっちめしを支援するアプリです",
                 "http://botteam.hatenadiary.jp/", ANDROID + "kom.botch.rasaki", IMG_PATH + 'botch_logo.png', 'android'),
        new Team("部屋とＹシャツとY", "擬音祭", "楽しく擬音語を勉強するアプリです",
                 "http://team-4y.hatenablog.com/", IOS + "ni-yin-ji/id765223887", IMG_PATH + 'gion_logo.jpg', 'ios'),
        new Team("上野パンダ", "クラスナビ", "社情のポータルアプリです",
                 "http://ameblo.jp/sadp2013/", ANDROID + "com.yaunix.test.sadp", IMG_PATH + 'classnav_logo.png', 'stopped'),
        new Team("AppFountain", "AppFountain", "アプリの知恵袋です",
                 "http://appfountain.hatenablog.jp/", ANDROID + "com.appfountain", IMG_PATH + 'appfountain_logo.png', 'stopped'),
        new Team("ソシャレコ！", "ソシャレコ", "声を投稿するSNSアプリです",
                 "http://shajo-benriya.hatenablog.com/",  IOS + "soshareko!/id768606311", IMG_PATH + 'social_reco_logo.jpg', 'ios'),
        new Team("garakeee", "pregniary", "妊娠中の彼女と彼氏をつなぐアプリです",
                 "http://garakeee.hatenablog.com/", ANDROID + "jp.gr.java_conf.pregniary", IMG_PATH + 'pregniary_logo.png', 'android')
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
    }]);
