import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { Sidebar } from '../service/sidebar';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-faq',
  imports: [NzCollapseModule,RouterLink,TranslocoDirective,CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
      // constructor(private sidebar: Sidebar){}
    toggleMenu(){
      this.sidebar.toggleSidebar();
    }

    
  panels = [
    {
      active: true,
      disabled: false,
      name: 'faq.h_2',
      childPannel: [
        {
          active: false,
          disabled: true,
          name: 'faq.p1'
        }
      ]
    },
    {
      active: false,
      disabled: true,
      name: 'faq.h_3',
        childPannel: [
        {
          active: false,
          disabled: true,
          name: 'faq.p2'
        }
      ]
    },
    {
      active: false,
      disabled: true,
      name: 'faq.h_4',
        childPannel: [
        {
          active: false,
          disabled: true,
          name: 'faq.p3'
        }
      ]
    },
    {
      active: false,
      disabled: true,
      name: 'faq.h_5',
        childPannel: [
        {
          active: false,
          disabled: true,
          name: 'faq.p4'
        }
      ]
    },
    {
      active: false,
      disabled: true,
      name: 'faq.h_6',
        childPannel: [
        {
          active: false,
          disabled: true,
          name: 'faq.p5'
        }
      ]
    },
    {
      active: false,
      disabled: true,
      name: 'faq.h_7',
        childPannel: [
        {
          active: false,
          disabled: true,
          name: 'faq.p6'
        }
      ]
    },
    {
      active: false,
      disabled: true,
      name: 'faq.h_8',
        childPannel: [
        {
          active: false,
          disabled: true,
          name: 'faq.p7'
        }
      ]
    },

  ];


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
