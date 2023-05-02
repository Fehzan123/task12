var form=document.getElementById('form');
var list=document.getElementById('item');
form.addEventListener('submit',addItems);
// list.addEventListener('click',removeItem);
function addItems(e){
    e.preventDefault();
    var newItem=document.getElementById('username').value;
    var newItem2=document.getElementById('username2').value;
    var newItem3=document.getElementById('phone-no').value;
   var loc=localStorage.setItem(newItem2,' Name '+newItem+','+' Email : '+newItem2+','+' phon no '+newItem3);
    var li=document.createElement('li');
li.className='list';
li.appendChild(document.createTextNode('Name '+newItem+','+' Email : '+newItem2+','+' phone No '+newItem3));
// creat btn
var btn=document.createElement('button');
btn.appendChild(document.createTextNode('delete'));
btn.addEventListener('click',dtbtn);
function dtbtn(e){
   e.target.parentNode.remove();
}
li.appendChild(btn);
list.appendChild(li);
// create Edt

var btn1=document.createElement('button');
btn1.appendChild(document.createTextNode('Edit'));

btn1.addEventListener('click',remloc);
function remloc(e){
    e.target.parentNode.remove();
 localStorage.removeItem(newItem2);
    console.log('1');


}
li.appendChild(btn1);
list.appendChild(li);
}