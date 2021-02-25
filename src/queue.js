/**
 * A simple queue data structure implementation
 */

class Queue
{
    constructor()
    {
        this.list = [];
        this.maxSize = 5;
    }

    push(value)
    {
        if( this.maxSize > 5 )
        {
            throw "Queue is full. Maximum elements is {this.maxSize}";
        }
        let pos = this.list.length;
    }
}


export { Queue };
