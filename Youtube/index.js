var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(_title, _views, _likes, _dislikes, _comments, _datePublished, _channelName, _channelSubscribers) {
        var _this = this;
        this.get_title = function () {
            return _this.title;
        };
        this.get_views = function () {
            return _this.views;
        };
        this.get_likes = function () {
            return _this.likes;
        };
        this.get_dislikes = function () {
            return _this.dislikes;
        };
        this.get_comments = function () {
            return _this.comments;
        };
        this.get_datePublished = function () {
            return _this.datePublished;
        };
        this.get_channelName = function () {
            return _this.channelName;
        };
        this.get_channelSubscribers = function () {
            return _this.channelSubscribers;
        };
        this.set_title = function (_title) {
            return _this.title = _title;
        };
        this.set_views = function (_views) {
            return _this.views = _views;
        };
        this.set_likes = function (_likes) {
            return _this.likes = _likes;
        };
        this.set_dislikes = function (_dislikes) {
            return _this.dislikes = _dislikes;
        };
        this.set_comments = function (_comments) {
            return _this.comments = _comments;
        };
        this.set_datePublished = function (_datePublished) {
            return _this.datePublished = _datePublished;
        };
        this.set_channelName = function (_channelName) {
            return _this.channelName = _channelName;
        };
        this.set_channelSubscribers = function (_channelSubscribers) {
            return _this.channelSubscribers = _channelSubscribers;
        };
        this.title = _title;
        this.views = _views;
        this.likes = _likes;
        this.dislikes = _dislikes;
        this.comments = _comments;
        this.datePublished = _datePublished;
        this.channelName = _channelName;
        this.channelSubscribers = _channelSubscribers;
    }
    return YoutubeVideo;
}());
var TredingVideo = /** @class */ (function (_super) {
    __extends(TredingVideo, _super);
    function TredingVideo(_title, _views, _likes, _dislikes, _comments, _datePublished, _channelName, _channelSubscribers, _on_Treading) {
        var _this = _super.call(this, _title, _views, _likes, _dislikes, _comments, _datePublished, _channelName, _channelSubscribers) || this;
        _this.get_title = function () {
            return _this.title;
        };
        _this.get_views = function () {
            return _this.views;
        };
        _this.get_likes = function () {
            return _this.likes;
        };
        _this.get_dislikes = function () {
            return _this.dislikes;
        };
        _this.get_comments = function () {
            return _this.comments;
        };
        _this.get_datePublished = function () {
            return _this.datePublished;
        };
        _this.get_channelName = function () {
            return _this.channelName;
        };
        _this.get_channelSubscribers = function () {
            return _this.channelSubscribers;
        };
        _this.get_onTreading = function () {
            return _this.on_Treading;
        };
        _this.set_title = function (_title) {
            return _this.title = _title;
        };
        _this.set_views = function (_views) {
            return _this.views = _views;
        };
        _this.set_likes = function (_likes) {
            return _this.likes = _likes;
        };
        _this.set_dislikes = function (_dislikes) {
            return _this.dislikes = _dislikes;
        };
        _this.set_comments = function (_comments) {
            return _this.comments = _comments;
        };
        _this.set_datePublished = function (_datePublished) {
            return _this.datePublished = _datePublished;
        };
        _this.set_channelName = function (_channelName) {
            return _this.channelName = _channelName;
        };
        _this.set_channelSubscribers = function (_channelSubscribers) {
            return _this.channelSubscribers = _channelSubscribers;
        };
        _this.set_onTreading = function (_on_Treading) {
            return _this.on_Treading = _on_Treading;
        };
        _this.on_Treading = _on_Treading;
        return _this;
    }
    return TredingVideo;
}(YoutubeVideo));
var NickyJamTv = new YoutubeVideo('Live It Up (Official Video) ', 524545474, 65454, 12, "The best accidental listening I have done on You Tube!  Awesome", "jun 8 2018", "NickyJamTv", 14545545);
var LilUziVert = new YoutubeVideo('XO TOUR Llif3', 454848666, 454864, 13, "Addicted to it ", "May 10 2018", "LilUziVert", 546548748);
var PostMalone = new YoutubeVideo('Rockstar', 457845455, 87874, 5, "STOP BEING SO GOOD", "jun 15 2018", "PostMalone", 46546848);
var MigosATL = new TredingVideo("Bad and Boujee ft Lil Uzi Vert", 8687846545, 545456, 2, "Train drop, dip drop, and i want that grass with cheese drop ohh.", "oct 31 2016", "MigosATL", 93254454, 1);
console.log("Title Name :" + LilUziVert.get_title());
console.log("Channel Name :" + LilUziVert.get_channelName());
console.log("Date Released :" + NickyJamTv.get_datePublished());
console.log("Comment :" + NickyJamTv.get_comments());
console.log("Views :" + PostMalone.get_views());
console.log("Title Name:" + PostMalone.get_title());
var change = PostMalone.set_channelName("@@@PostMalone@@@");
console.log("Change the Channel Name :" + change);
console.log("Treading  :" + MigosATL.get_onTreading());
