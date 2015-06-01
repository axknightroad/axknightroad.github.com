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
    document.getElementById("generate-result").innerHTML=("我们推荐您选择 "+items[result] +"<br>");
  }
}

function showItem() {
  document.getElementById("generate-result").innerHTML=("");
  if (items.length == 0) {
    document.getElementById("generate-result").innerHTML=("当前候选列表为空，没有候选项");
    document.getElementById("table-name").innerHTML=("");
    document.getElementById("thead-name").innerHTML=("");
    document.getElementById("items-list").innerHTML=("");
  }
  else {
    var theadName = "";
    theadName += "<tr><th>"+"序号"+"</th><th>"+"候选项"+"</th></tr>";
    var list = "";
    for (var i = 0; i < items.length; i++) {
      var j=i+1;
      list += "<tr><td>"+j.toString()+"</td><td>"+items[i]+"</td></tr>";
    }
    document.getElementById("table-name").innerHTML=("候选列表");
    document.getElementById("thead-name").innerHTML=(theadName);
    document.getElementById("items-list").innerHTML=(list);
  }
}

function clearItems(){
  items.splice(0,items.length);
  showItem();
}

document.onkeydown=function(event){
e = event ? event :(window.event ? window.event : null);
var temp = document.getElementById("inputText").value
if(e.keyCode==13 && temp!="" && temp!=null){
//执行的方法
addItem(); 
}
  /*for (var i = 0; i < my_options.length; i++) {
    document.write(my_options[i] + "<br>");
  }
  */
