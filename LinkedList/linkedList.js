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
    if(index<=0){
        return this.prepend(value)
    }
    if (index>= this.length){
        return this.append(value)
    }
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
    this.length++;
  }
  
  remove(index){
      
    if(index===0){
      const node = this.head;
      this.head= this.head.next;
      this.length--;
      return node
    }
    let pointer= this.head;
    const prevIndex= index-1;
    let i=0;
    console.log(prevIndex)
    while(i !== prevIndex){
      pointer = pointer.next;
      i++;
    }
    const node = pointer.next;
    pointer.next = pointer.next.next ?? null;
    if(index === this.length-1){
      this.tail = pointer;
    }
    this.length--;
  }

  reverse(){
    if(this.length === 1){
      return this.head;
    }
    let first = this.head;
    this.tail = first;
    let second = first.next;
    while(second){
     let temp = second.next;
     second.next = first;
     first = second;
     second = temp;
    }
    
    this.head = first;
    this.tail.next=null;
  }
}

const myLinkedList= new LinkedList(10);
myLinkedList.prepend(6);
myLinkedList.insert(2,20);
myLinkedList.remove(2);
myLinkedList.append(35);
console.log(myLinkedList);

