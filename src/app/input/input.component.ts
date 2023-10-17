import { Component } from '@angular/core';
//import { DatabaseService } from '../Services/DatabaseService.service';


export class Match{
  constructor(public team1: string, public team2: string, public matchDate: Date){}
}
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

  export class InputComponent {
    //constructor(private databaseService: DatabaseService){}
    newTeamName!:string;
    teams: string[] = [];
    //matches:string[]=[];
    matches: Match[]=[];
    startingDate:Date=new Date();

    addTeam() {
      if (this.newTeamName.trim() !== '') {
        this.teams.push(this.newTeamName);
        this.newTeamName = '';
       
        }
      //   for(let i of this.teams){
      //     console.log(i);
      // }
    }
    deleteTeam(){
      this.teams.pop();
    }

    generateMatchSchedule(startingDate: Date){
      this.matches=[]; //empty the array
      const numberofTeams=this.teams.length;
      console.log(numberofTeams);
      if(numberofTeams<2){
        alert("Please add atleast two teams");
      }
      //const insertionPromises = [];

      let currentDate=new Date(this.startingDate);
      for(let i=0; i<numberofTeams; i++){
        for(let j=i+1; j<numberofTeams; j++){
          // const match1=this.teams[i]+ " vs "+ this.teams[j]+" on "+ currentDate;
          // console.log(match1);
          // this.matches.push(match1);
          const team1=this.teams[i];
          const team2=this.teams[j];
          const match = { team1: team1, team2: team2, matchDate: new Date(currentDate) };
          this.matches.push(match);
          // this.matches.push({team1:team1, team2:team2, matchDate:new Date(currentDate)});
          //insertionPromises.push(this.databaseService.addMatch(match.team1, match.team2, match.matchDate));
          currentDate.setDate(currentDate.getDate()+1);
      }
    }
    // Promise.all(insertionPromises)
    // .then(() => {
    //   console.log('All matches added to the database');
    // })
    // .catch(error => {
    //   console.error('Error adding matches to the database', error);
    // });
  }

  }
