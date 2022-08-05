import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CadastroService } from '../services';
import { Cadastro } from '../models';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../../../../shared/modal/modal.component';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})


export class CadastrarComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private cadastroService: CadastroService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }
  result_modal: string;
  mensagem: string = "efqfwe";

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ModalComponent, {
      width: '450px',
      data: { name: this.mensagem }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.result_modal = result;
      console.log(result);
    });
  }

  criar() {
    console.log("criar");
    if (this.form.invalid) {
      return;
    }
    const cadastro: Cadastro = this.form.value;
    this.cadastroService.criar(cadastro).subscribe(
      data => {
        localStorage['conta'] = data['conta'];
        let dialogRef = this.dialog.open(ModalComponent, {
          width: '450px',
          data: { name: "Codigo da conta:  " + data['conta'] }
        });

        dialogRef.afterClosed().subscribe(result => {
          this.result_modal = result;
          console.log(result);
          this.router.navigate(['/conta']);
        });

      },
      err => {
        console.log(err['error']);
        let back_erro: String = err['error']['error'];
        console.log(back_erro);
        if (back_erro == "EMAIL_CADASTRADO") {
          this.snackBar.open('Email já cadastrado', 'Ok', { duration: 5000 });
        }
      }
    );
    return;
  }
}