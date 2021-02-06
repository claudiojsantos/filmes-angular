import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  readonly qtdPorPagina = 4
  filmes: Filme[] = []
  pagina = 0

  constructor(private filmesService: FilmesService) { }

  ngOnInit(): void {
    this.listaFilmes()
  }

  onScroll(): void {
    this.listaFilmes()
  }

  private listaFilmes(): void {
    this.pagina++
    this.filmesService.listar(this.pagina, this.qtdPorPagina).subscribe((filmes: Filme[]) => this.filmes.push(...filmes))
  }

}
