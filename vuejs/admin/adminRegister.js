  new Vue({
      el: "#form_register",
      methods: {
          checkName: function() {
              var _this = this;
              var formser = $('#form_register').serialize();
              // console.log(formser)
              axios.post("http://localhost:8084/admin/register", formser).then(
                  function(response) {
                      //   console.log(response);
                      if (response.data.type == "error") {
                          alert(response.data.msg + ',请重新输入')
                      } else {
                          alert(response.data.msg + ",即将跳转到登录页面");
                          window.location.href = "/adminLogin.html";
                      }
                  }
              ).catch(
                  function(error) {
                      console.log("发生了错误：" + error);
                  })

          }
      }
  })