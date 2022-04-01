import { Component, OnInit } from '@angular/core';
import { TarefaService} from './services/tarefa.service';
import { Tarefa } from './model/tarefa';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'toDoList';

  Tarefa = {} as Tarefa;
  Tarefas: Tarefa[] | undefined;

  constructor(private TarefaService: TarefaService){}

  ngOnInit(){
    this.get();
  }

  //método que chama o serviço para obter todas as tarefas
  get(){
    this.TarefaService.get().subscribe((Tarefas: Tarefa[])=>{
      this.Tarefas = Tarefas;
    });
  }

  save(form: NgForm){
    //valida se a tarefa recebida possui um id:
    //se SIM ele chama o método de atualizar"UPDATE"
    //se NÃO ele chama o método de atualizar"SAVE"

    if(this.Tarefa.id !== undefined){
      this.TarefaService.update(this.Tarefa).subscribe(()=>{
        this.cleanForm(form);
      });
    } else {
      this.TarefaService.save(this.Tarefa).subscribe(() =>{
        this.cleanForm(form);
      });
    }
  }

  delete(Tarefa: Tarefa){
    this.TarefaService.delete(Tarefa).subscribe(()=>{
      this.get();
    })
  }

  edit(Tarefa: Tarefa){
    this.Tarefa = {...Tarefa};
  }

  //limpa o formulário
  cleanForm(form: NgForm){
    //pega os dados atualizados
    this.get();
    //reseta o formulário
    form.resetForm();
    //reseta a propriedade Tarefa
    this.Tarefa = {} as Tarefa;
  }
}
