import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfessionEnum } from '../../models/profession.enum';
import { ApiService } from '../../services/api.service';
import { UserRequest } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  standalone: true,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit  {
  userForm: FormGroup;
  isEditMode = false;
  userId: number | null = null;
  professions = Object.values(ProfessionEnum);

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(64)]],
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(64)]],
      address: ['', [Validators.maxLength(128)]],
      telephone: ['', [Validators.maxLength(128),  Validators.pattern(/^\+?[0-9\s\-()]+$/) ]],
      active: [true, Validators.required],
      job: [ProfessionEnum.KERTESZ, Validators.required]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.userId = +idParam; 
      this.loadUserData(this.userId);
    }
  }

  loadUserData(id: number): void {
    this.apiService.getUserById(id).subscribe(response => {
      if (response.status === 'success') {
        this.userForm.patchValue(response.data);
      }
    });
  }

  saveUser(): void {
    if (this.userForm.invalid) {
      return; 
    }

    const userData: UserRequest = this.userForm.value;

    if (this.isEditMode && this.userId) {
 
      this.apiService.updateUser(this.userId, userData).subscribe(() => {
        this.router.navigate(['/users']); 
      });
    } else {
      this.apiService.createUser(userData).subscribe(() => {
        this.router.navigate(['/users']); 
      });
    }
  }

  deleteUser(): void {
    if (this.isEditMode && this.userId) {
      if (confirm('Biztosan törli ezt a felhasználót?')) {
        this.apiService.deleteUser(this.userId).subscribe(() => {
          this.router.navigate(['']); 
        });
      }
    }
  }

}
