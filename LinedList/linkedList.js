class LinkedList{
  constructor(value){
    this.head={
      value: value,
      next: null
    };
    this.tail= this.head;
    this.length=1;
  }
  
  append(value){
    const node={
      value,
      next:null
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  
  prepend(value){
    const node ={
      value,
      next: this.head
    };
    this.head = node;
    this.length++;
  }
  
  insert(index,value){
    let i=0;
    let pointer= this.head
    while(i !== index-1){
      pointer = pointer.next;
      i++;
    }
    const holdingPointer = pointer.next;
    
     const node ={
       value,
       next: holdingPointer
     }
    pointer.next= node;
  }
}

const myLinkedList= new LinkedList(10);

myLinkedList.prepend(6);
myLinkedList.insert(1,20);

console.log(myLinkedList);