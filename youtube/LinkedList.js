class Node{
constructor(data){
    this.data=data;
    this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null
    }
    addFirst(data){
        const newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
    }
    addLast(data){
        const newNode=new Node(data);

        if(!this.head){
            this.head=newNode;
            return;
        }

        let current=this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newNode;
    }

    size(){
        let count=0;
        let current=this.head;
        while(current.next){
            current=current.next;
            count++
        }
        return count;
    }
    addAt(index,data){
        if(index<0 || index> this.size()){
            console.log('Invalid index');            
            return
        }
        const newNode=new Node(data);
        if(index===0){
            newNode.next=this.head;
            this.head=newNode;
            return;
        }
        let current=this.head;
        for(let i=0;i<index-1;i++){
            current=current.next;
        }
        newNode.next=current.next;
        current.next=newNode;
    }
}

const linkedList=new LinkedList();
linkedList.addFirst(4);
