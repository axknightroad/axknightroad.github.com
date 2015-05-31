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
  showItem()
  var temp = document.getElementById("inputText").value
  if (temp != null && temp != "") {
    items.push(temp);
    document.getElementById("inputText").value=null;
  }
  showItem()
}

function deleteItem() {
  /*
  var now ="";
  for (var i = 0; i < items.length; i++) {
    now += "第"+i.toString()+"个选项是 "+items[i]+"\n";
  }
  now += "请输入要删除的候选项的序号"
  */
  showItem()
  var temp = document.getElementById("inputText").value;
  console.log(temp);
  if (temp != null && temp >= 1 && temp <= items.length) {
    items.splice(parseInt(temp)-1,1);
    document.getElementById("inputText").value=null;
  }
  showItem()
}

function generate() {
  if (items.length > 0) {
    var result = parseInt(Math.random()*items.length);
    document.getElementById("result").innerHTML=("我们推荐您选择 "+items[result] +"<br>");
  }
}

function showItem() {
  if (items.length == 0) {
    document.getElementById("result").innerHTML=("当前无候选项，候选列表为空<br>");
  }
  else {
    var list = "
    <table class='table'>
      <caption>候选列表</caption>
      <thead>
        <tr>
          <th>序号</th>
          <th>候选项</th>
        </tr>
      </thead>
      <tbody>"
    for (var i = 0; i < items.length; i++) {
      var j=i+1;
      list += "
      <tr>
        <td>"+j.toString()+"</td>
        <td>"+items[i]+"</td>
      </tr>";
    }
    list += "
    </tbody>
   </table>"
    document.getElementById("result").innerHTML=(list);
  }
}

function clearItems(){
  items.splice(0,items.length);
  showItem();
}
  /*for (var i = 0; i < my_options.length; i++) {
    document.write(my_options[i] + "<br>");
  }
  */
