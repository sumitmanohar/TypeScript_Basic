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
var Facebook = /** @class */ (function () {
    function Facebook(_StoriesFriendName, _Images, _Video, _Comment) {
        var _this = this;
        this.get_StoriesFriendName = function () {
            return _this.StoriesFriendName;
        };
        this.get_Comment = function () {
            return _this.Comment;
        };
        this.get_Images = function () {
            return _this.Images;
        };
        this.get_Video = function () {
            return _this.Video;
        };
        this.set_StoriesFriendName = function (_StoriesFriendName) {
            return _this.StoriesFriendName = _StoriesFriendName;
        };
        this.set_Comment = function (_Comment) {
            return _this.Comment = _Comment;
        };
        this.set_Images = function (_Images) {
            return _this.Images = _Images;
        };
        this.set_Video = function (_Video) {
            return _this.Video = _Video;
        };
        this.StoriesFriendName = _StoriesFriendName;
        this.Comment = _Comment;
        this.Images = _Images;
        this.Video = _Video;
    }
    return Facebook;
}());
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile(_StoriesFriendName, _Images, _Video, _Comment, _FullName, _Gender, _BirthDate, _Work, _Education, _Hometown, _Siblings, _Friends) {
        var _this = _super.call(this, _StoriesFriendName, _Images, _Video, _Comment) || this;
        _this.get_FullName = function () {
            return _this.FullName;
        };
        _this.get_Gender = function () {
            return _this.Gender;
        };
        _this.get_BirthDate = function () {
            return _this.BirthDate;
        };
        _this.get_Work = function () {
            return _this.Work;
        };
        _this.get_Education = function () {
            return _this.Education;
        };
        _this.get_Hometown = function () {
            return _this.Hometown;
        };
        _this.get_Siblings = function () {
            return _this.Siblings;
        };
        _this.get_Friends = function () {
            return _this.Friends;
        };
        _this.set_FullName = function (_FullName) {
            return _this.FullName = _FullName;
        };
        _this.set_Gender = function (_Gender) {
            return _this.Gender = _Gender;
        };
        _this.set_BirthDate = function (_BirthDate) {
            return _this.BirthDate = _BirthDate;
        };
        _this.set_Work = function (_Work) {
            return _this.Work = _Work;
        };
        _this.set_Education = function (_Education) {
            return _this.Education = _Education;
        };
        _this.set_Hometown = function (_Hometown) {
            return _this.Hometown = _Hometown;
        };
        _this.set_Siblings = function (_Siblings) {
            return _this.Siblings = _Siblings;
        };
        _this.set_Friends = function (_Friends) {
            return _this.Friends = _Friends;
        };
        _this.get_StoriesFriendName = function () {
            return _this.StoriesFriendName;
        };
        _this.get_Comment = function () {
            return _this.Comment;
        };
        _this.get_Images = function () {
            return _this.Images;
        };
        _this.get_Video = function () {
            return _this.Video;
        };
        _this.set_StoriesFriendName = function (_StoriesFriendName) {
            return _this.StoriesFriendName = _StoriesFriendName;
        };
        _this.set_Comment = function (_Comment) {
            return _this.Comment = _Comment;
        };
        _this.set_Images = function (_Images) {
            return _this.Images = _Images;
        };
        _this.set_Video = function (_Video) {
            return _this.Video = _Video;
        };
        _this.FullName = _FullName;
        _this.Gender = _Gender;
        _this.BirthDate = _BirthDate;
        _this.Work = _Work;
        _this.Education = _Education;
        _this.Hometown = _Hometown;
        _this.Siblings = _Siblings;
        _this.Friends = _Friends;
        return _this;
    }
    return Profile;
}(Facebook));
var Sumit = new Profile("Noman Shaikh", "PHOTO", "VIDEO", "nice", "Sumit Manohar", "Male", "24 May 1997", "Student", "TYBSCIT", "MUMBAI", 1, 250);
var Raj = new Profile("Sujeet Gupta", "PHOTO123", "VIDEO123", "nice to meet you", "Raj Jaiswal", "Male", "15 Nov 1995", "Accenture", "MUMABI", 'TYBCOM', 3, 100);
console.log("FullName :" + Sumit.get_FullName());
console.log("BirthDate :" + Sumit.get_BirthDate());
console.log("Work :" + Raj.get_Work());
console.log("HomeTown :" + Raj.get_Hometown());
console.log("StoriesFriendName :" + Raj.get_StoriesFriendName());
var change = Raj.set_StoriesFriendName("Pritesh Jadhav");
console.log("Change StoriesFriendName :" + change);
