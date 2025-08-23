import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { UserResponse } from '../../models/user.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-list',
  standalone: true, 
  imports: [CommonModule, RouterLink, ButtonComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']  
})
export class UserListComponent implements OnInit{

  users: UserResponse[] = [];
  currentPage: number = 0;    
  totalPages: number = 0;     
  totalElements: number = 0;  

  constructor(private apiService: ApiService) {}

    ngOnInit(): void {
    this.loadUsers(this.currentPage);
  }

  test() {   
    console.log("test");
  }

 
   loadUsers(page: number): void {
    this.apiService.getUsers(page, 5).subscribe(response => {
      if (response.status === 'success' && response.data) {
        this.users = response.data.content;
        this.currentPage = response.data.number;
        this.totalPages = response.data.totalPages;
        this.totalElements = response.data.totalElements;
      }
    });
  }

  deleteUser(id: number): void {
    if (confirm('Biztosan törli ezt a felhasználót?')) {
      this.apiService.deleteUser(id).subscribe(() => {
        if (this.users.length === 1 && this.currentPage > 0) {
          this.loadUsers(this.currentPage - 1);
        } else {
          this.loadUsers(this.currentPage);
        }
      });
    }
  }

  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.loadUsers(page);
    }
  }

  get pagesArray(): number[] {
    return new Array(this.totalPages).fill(0).map((_, i) => i);
  }
}
