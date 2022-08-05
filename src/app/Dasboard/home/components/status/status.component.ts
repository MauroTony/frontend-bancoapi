import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../../../../shared/modal/modal.component';
import { HomeService, ExtratoService } from '../../services';
import { MatTableModule } from '@angular/material/table';

export interface elementos {
  data_movimentacao: Date;
  transacao: number;
  descricao: number;
  valor: string;
}

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  showFiller = false;
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private homeService: HomeService,
    private extratoService: ExtratoService,
    public dialog: MatDialog,
  ) { }
  Nome: String;
  Saldo: Number;
  Conta: String;
  limite_credito: Number;
  credito_utilizado: Number;
  vencimento_fatura: Date;
  credito_disponivel: Number;
  displayedColumns: string[] = ['data_movimentacao', 'transacao', 'descricao', 'valor'];
  dataSource;

  ngOnInit(): void {
    this.home();
  }

  home() {
    this.Conta = localStorage['conta'];
    this.homeService.home().subscribe(
      data => {
        this.Nome = data['nome_cliente'];
        this.Saldo = data['saldo'];
        this.limite_credito = data['limite_credito'];
        this.credito_utilizado = data['credito_utilizado'];
        this.vencimento_fatura = data['vencimento_fatura'];
        this.credito_disponivel = data['limite_credito'] - data['credito_utilizado'];
      },
      err => {
        let back_erro: String = err['error']['error'];
        if (back_erro == "CONTA_INEXISTENTE") {
          let dialogRef = this.dialog.open(ModalComponent, {
            width: '450px',
            data: { name: "Conta inexistente" }
          });

          dialogRef.afterClosed().subscribe(result => {
            this.router.navigate(['/conta']);
          });
        }
      }
    );
    return;
  }

  extrato() {
    console.log("extrato");
    this.Conta = localStorage['conta'];
    this.extratoService.extrato().subscribe(
      data => {
        this.dataSource = data['extrato'];
      },
      err => {
        let back_erro: String = err['error']['error'];
        if (back_erro == "CONTA_INEXISTENTE") {
          let dialogRef = this.dialog.open(ModalComponent, {
            width: '450px',
            data: { name: "Conta inexistente" }
          });

          dialogRef.afterClosed().subscribe(result => {
            this.router.navigate(['/conta']);
          });
        }
      }
    );
    return;
  }


}
