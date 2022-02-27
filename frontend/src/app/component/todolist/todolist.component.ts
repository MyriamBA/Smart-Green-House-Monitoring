import { Component } from '@angular/core';


@Component({
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.scss']  

})
export class ToDoListComponent {

    list: any[]=[];
    addTask(item:string){
        
        this.list.push({id:this.list.length,name:item})
        console.warn(this.list)
    }
    removeTask(id:number){
        this.list=this.list.filter(item=>item.id!==id)
        console.warn(this.list)
    }
}