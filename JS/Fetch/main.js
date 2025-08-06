// JSON

// 1. là một định dạng dữ liệu (chuỗi)
// 2. JavaScript Object Notation
// 3. JSON: Number, String, Boolean, Null, Array
// Object

// Mã hóa / giải mã
// Encode / decode
// Stringify: Từ Javascript -> JSON
// Parse: TỪ JSON -> Javascript types

// var json = '["Javascript","PHP"]';
var json = '{"name":"Son Dang","age":18}';

var a = "1";

console.log(JSON.parse(json));

console.log(JSON.stringify(true));

// Promise (sync, async)
// Promise have 3 status
// 1. Pending
// 2. Fullfilled
// 3. Rejected

var promise = new Promise(
  // Executor
  function (resolve, reject) {
    // Logic
    // Success: resolve() - Pending
    // Faile: reject()
    // resolve();
    // reject('Thong bao loi')
  }
);

promise
  .then(function () {
    console.log("Successfully! 1");
  })
  .then(function () {
    console.log("Successfully! 2");
  })
  .then(function () {
    console.log("Successfully! 3");
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Done!");
  });

function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

// sleep(1000)
//   .then(function () {
//     console.log(1);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(2);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(3);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(4);
//     return sleep(1000);
//   });

// Promise Example
var users = [
  {
    id: 1,
    name: "Nguyen Hoang Hieu",
  },
  {
    id: 2,
    name: "Tran Minh Lieu",
  },
  {
    id: 3,
    name: "Hoang Lang Tu",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Em an com chua",
  },
  {
    id: 2,
    user_id: 2,
    content: "Roi may",
  },
];

// Hàm giả lập API lấy comments
function getComments() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

// Hàm giả lập API lấy user theo ID
function getUsersByIds(userIds) {
  return new Promise(function (resolve) {
    var result = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    setTimeout(function () {
      resolve(result);
    }, 1000);
  });
}

// Gọi chuỗi promise
getComments()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });

    return getUsersByIds(userIds).then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    var commentBlock = document.getElementById("comments-block");

    var html = "";
    data.comments.forEach((comment) => {
      var user = data.users.find(function (user) {
        return user.id === comment.user_id;
      });
      html += `<li>${user.name}: ${comment.content}</li>`;
    });

    commentBlock.innerHTML = html;
  });
