import { Component, OnInit } from '@angular/core';
import { Answer } from '../answer';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionsInfo:Array<Question>=[]
  answersInfo:Array<Answer>=[];
  flag:boolean = false;
  constructor(public qs:QuestionService) { }
  myAnswer=new Map();
  // life cycle method it will call after constructor. it call only once. 
  ngOnInit(): void {
    this.qs.loadAnswers().subscribe({
      next:(data:any)=>this.answersInfo=data.answers,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }
  loadQuestionDetails(){
    this.flag=true;
    this.qs.loadAllQuestion().subscribe({
      next:(data:any)=>this.questionsInfo=data.questions,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("done")
    })
  }

  storeAns(qid:any,ans:any){
    this.myAnswer.set(qid,ans);
  }
  submitExam(){
    console.log(this.myAnswer);
    console.log(this.answersInfo);
    //this.myAnswer.forEach((key:any,value:any)=>console.log(key+""+value));
    this.answersInfo.forEach((obj:any,index:any)=> {
      
      // if(obj.qid==this.myAnswer.get(index+1)){

      // }

    });
  }

}



