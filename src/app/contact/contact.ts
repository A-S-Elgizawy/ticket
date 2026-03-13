import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../service/sidebar';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [RouterLink,TranslocoDirective,CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  sidebar = inject(Sidebar)
  toggleMenu(){
    this.sidebar.toggleSidebar();
  }

       currentLang:string;
       languages:string[];
       
       constructor(private translocoService:TranslocoService){
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
