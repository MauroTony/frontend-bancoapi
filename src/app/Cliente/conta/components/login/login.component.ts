import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Conta } from '../../models';
import { LoginService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      conta: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }

  logar() {
    if (this.form.invalid) {
      return;
    }
    const conta: Conta = this.form.value;
    this.loginService.logar(conta).subscribe(
      data => {
        localStorage['conta'] = data['conta'];
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err['error']);
        let back_erro: String = err['error']['error'];
        console.log(back_erro);
        if (back_erro == "CONTA_INEXISTENTE") {
          this.snackBar.open('Conta não encontrada', 'Ok', { duration: 5000 });
        }
      }
    );
    return;
  }
}
