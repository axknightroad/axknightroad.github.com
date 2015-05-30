var i = 0;
var my_options = new Array();
var flag = true;

while (flag) {
    var temp = prompt("请输入候选项，输入e停止","");
    if (temp == "e") {
      flag = false;
    }
    else {
      my_options[i++] = temp;
    }
  }

  /*for (var i = 0; i < my_options.length; i++) {
    document.write(my_options[i] + "<br>");
  }
  */
  var result = parseInt(Math.random()*my_options.length);
  document.write("我们推荐您选择 "+my_options[result] +"<br>");
  console.log(random_out);
  console.log(result0);
  console.log(result);
  console.log(parseInt(2.9));
