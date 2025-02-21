import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  Designation: string = "Team Leader";
  Username: string = "Luis Mejías";
  NoOfTeamMembers: number = 67;
  TotalCostOfAllProjects: number = 240;
  PendingTasks: number = 15;
  UpComingProjects: number = 2;
  ProjectCost: number = 2113507;
  CurrentExpenditure: number = 96788;
  AvailableFunds: number = 52536;

  ngOnInit(): void {
  }
}
