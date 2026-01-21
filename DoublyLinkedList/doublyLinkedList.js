class DoubleNode{
  constructor(value){
    this.value= value;
    this.next=null;
    this.prev=null
  }
}

class DoublyLinkedList{
  constructor(value){
    const node = new DoubleNode(value);
    this.head=node;
    this.tail=this.head;
    this.length=1;
  }
  
  append(value){
    const node = new DoubleNode(value);
    this.tail.next=node;
    node.prev=this.tail;
    this.tail = node;
    this.length++;
  }
  
  prepend(value){
     const node = new DoubleNode(value);
     this.head.prev=node
     node.next=this.head;
     this.head=node;
     
  }
  
  insert(index,value){
    if(index===0){
      return this.prepend(value);
    }
    if(index>=this.length){
      return this.append(value)
    }
    let i=0;
    let pointer = this.head;
    while(i !== index-1){
      pointer = pointer.next;
      i++;
    }
    const node = new DoubleNode(value);
    const newPointer = pointer.next;
    pointer.next = node;
    node.next=newPointer;
    node.prev=pointer
    newPointer.prev=node;
    this.length++;
}

  remove(index){
    if(index===0){
      this.head = this.head.next;
      this.head.prev=null;
      this.length--;
      return
    }
    if(index >= this.length){
      return
    }
    let i=0;
    let pointer = this.head;
    while(i !== index-1){
      pointer = pointer.next;
      i++;
    }
    const nextPointer = pointer.next.next;
    // removing last node
    if(nextPointer === null){
      pointer.next = null
      this.tail = pointer;
      this.length--;
      return
    }else{
      pointer.next = nextPointer;
      nextPointer.prev= pointer;
      this.length--;
    }
    
  }

}
const doubleLinkedListObj = new DoublyLinkedList(10);


doubleLinkedListObj.append(4);
doubleLinkedListObj.append(6);
doubleLinkedListObj.insert(1,15);

doubleLinkedListObj.remove(1);

console.log(doubleLinkedListObj);