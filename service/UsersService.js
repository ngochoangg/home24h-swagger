'use strict';


/**
 * Đăng nhập trả về chuỗi token
 *
 * body Object 
 * no response value expected for this operation
 **/
exports.loginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Tạo mới một bài đăng
 *
 * body Post_body 
 * no response value expected for this operation
 **/
exports.postPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Đăng ký người dùng mới.
 *
 * body User 
 * no response value expected for this operation
 **/
exports.registerPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Lấy bài đăng của người dùng theo ID.
 *
 * username String `Tên người dùng` đã đăng ký
 * id Integer `ID` của bài đăng
 * no response value expected for this operation
 **/
exports.usernamePostIdGET = function(username,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Cập nhật bài đăng của người dùng theo ID.
 *
 * body Post 
 * username String `Tên người dùng` đã đăng ký
 * id Integer `ID` của bài đăng
 * no response value expected for this operation
 **/
exports.usernamePostIdPUT = function(body,username,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Lấy danh sách bài đã đăng của người dùng
 *
 * username String Tên người dùng `đã đăng ký`
 * no response value expected for this operation
 **/
exports.usernamePostsGET = function(username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

