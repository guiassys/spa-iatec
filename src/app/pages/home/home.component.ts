import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy {

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck():void{
    console.log('ngDoCheck');
  }

  ngAfterContentInit():void{
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked():void{
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit():void{
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked():void{
    console.log('ngAfterViewChecked');
  }

  ngOnChanges():void{
    console.log('ngOnChanges');
  }

  ngOnDestroy():void{
    console.log('ngOnDestroy');
  }

  newsList = [
    {
      title: 'Nova Descoberta Científica',
      content: 'Cientistas encontram evidências de vida em outro planeta.',
      image: 'https://via.placeholder.com/300'
    },
    {
      title: 'Lançamento do Novo Smartphone',
      content: 'Empresa X lança o mais novo smartphone com câmera de 108 MP.',
      image: 'https://via.placeholder.com/300'
    },
    {
      title: 'Recorde de Temperatura',
      content: 'Temperatura atinge 50 graus em cidade do deserto.',
      image: 'https://via.placeholder.com/300'
    },
  ];
}
