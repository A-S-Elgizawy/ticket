import { Component } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { Sidebar } from '../service/sidebar';
import { RouterLink } from '@angular/router';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-story',
  imports: [NzCollapseModule, NzFlexModule,RouterLink,TranslocoDirective,CommonModule],
  templateUrl: './story.html',
  styleUrl: './story.css',
})
export class Story {
  // constructor(private sidebar: Sidebar){}

  toggleMenu(){
    this.sidebar.toggleSidebar();
  }

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
