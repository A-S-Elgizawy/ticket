import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { Home } from './home/home';
import { Header } from './header/header';
import { Sidebar } from './service/sidebar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,RouterLink,CommonModule,TranslocoDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    isActive = false;
    removeActive = true

  // constructor(private sidebar: Sidebar) {}
 
  ngOnInit(){
    this.sidebar.sidebar$.subscribe(value => {
      this.isActive = value;
      this.removeActive = false
    });
  }
    closeMenu(){
      setTimeout(()=>{
        this.sidebar.closeSidebar();
      },700)
      this.removeActive = true
  }
    closeMenul(){
      this.sidebar.closeSidebar();
    }


    // =========
    
             currentLang:string;
             languages:string[];
             
             constructor(private translocoService:TranslocoService,private sidebar: Sidebar){
              this.currentLang = this.translocoService.getDefaultLang();
          
              const availableLangs = this.translocoService.getAvailableLangs();
              if(Array.isArray(availableLangs) && typeof availableLangs[0] === 'string'){
                this.languages = availableLangs as string[];
              }else{
                this.languages = (availableLangs as {id:string; label:string}[]).map(lang => lang.id)
              }
             }
          
        
            changeLang(langCode: string): void {
            this.translocoService.setActiveLang(langCode);
            this.currentLang = langCode;
        }
}
