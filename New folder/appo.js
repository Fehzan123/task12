var form=document.getElementById('form');
var list=document.getElementById('item');
form.addEventListener('submit',addItems);
// list.addEventListener('click',removeItem);
function addItems(e){
    e.preventDefault();
    var newItem=document.getElementById('username').value;
    var newItem2=document.getElementById('username2').value;
    var newItem3=document.getElementById('phone-no').value;
   localStorage.setItem(newItem2,' Name '+newItem+','+' Email : '+newItem2+','+' phon no '+newItem3);
    var li=document.createElement('li');
li.className='list';
li.appendChild(document.createTextNode('Name '+newItem+','+' Email : '+newItem2+','+' phone No '+newItem3));
// creat btn
var btn=document.createElement('button');
btn.appendChild(document.createTextNode('delete'));
li.appendChild(btn);
list.appendChild(li);

// delet data
// delete btn
btn.addEventListener('click',dltbtn);
function dltbtn(e) {
    e.target.parentNode.remove();
    let obj2 = localStorage.removeItem(obj.email);
  }

  li.innerText = obj.name + " " + obj.email + " " + obj.pho;
  li.append(dltbtn);
  user.append(li);
}

