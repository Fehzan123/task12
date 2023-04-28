
var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

form.addEventListener('submit',addItem);
// deletEvent list
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);
function addItem(e){
    
    e.preventDefault();
    var newItem=document.getElementById('item').value+" "+document.getElementById('item2').value;
    // creat li Eliment
    var li=document.createElement('li');
    // creat li class
    li.className='list-group-item';
    // Addtextnode
    li.appendChild(document.createTextNode(newItem));
    // creat deletbtn
    var deletbtn=document.createElement('button');
    // add btnclass
    deletbtn.className='btn btn-danger btn-sm float-right delete';
    // appendtext
    deletbtn.appendChild(document.createTextNode('x'));
    li.appendChild(deletbtn);
    // addlitem
    itemList.appendChild(li);   
}
// remove items function
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('are u shur')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
      }
    }
}
// filter function
function filterItems(e){
var text=e.target.value.toLowerCase();
// get li
var items=itemList.getElementsByTagName('li');

Array.from(items).forEach(function(item){
  var itemName=item.firstChild.textContent;
  if(itemName.toLocaleLowerCase().indexOf(text)!=-1){
    item.style.display='block';
  }else{
    item.style.display='none';
  }
});
}
