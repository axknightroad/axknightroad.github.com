var items = new Array();
var flag = true;

/*
while (flag) {
    var temp = prompt("请输入候选项，输入e停止","");
    if (temp == "e") {
      flag = false;
    }
    else {
      my_options[i++] = temp;
    }
  }
*/
function addItem() {
  var temp = prompt("请输入候选项","候选项");
  items.push(temp);
}

function deleteItem() {
  var now ="";
  for (var i = 0; i < items.length; i++) {
    now += "第"+i.toString()+"个选项是 "+items[i]+"\n";
  }
  now += "请输入要删除的候选项的序号"
  var temp = prompt(now,"候选项");
  items.splice(parseInt(temp),1);
}

function generate() {
  var result = parseInt(Math.random()*items.length);
  document.getElementById("result").innerHTML=("我们推荐您选择 "+items[result] +"<br>");
  for (var i = 0; i < items.length; i++) {
    console.log(items[j]);
  }
}
  /*for (var i = 0; i < my_options.length; i++) {
    document.write(my_options[i] + "<br>");
  }
  */
  console.log(parseInt(2.9))