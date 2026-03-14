import { CommonModule } from '@angular/common';
import { Component ,Renderer2} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { Sidebar } from '../service/sidebar';

@Component({
  selector: 'app-home',
  imports: [RouterLink,TranslocoDirective,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
    // constructor(private sidebar: Sidebar){}
  toggleMenu(){
    this.sidebar.toggleSidebar();
  }

  isActive = false
  removeActive = true
  closeMenu(){
   if(this.isActive == true){
     setTimeout(()=>{
     this.isActive = !this.isActive
   },400)
   }else{
    this.isActive = !this.isActive
    // this.removeActive = false
   }

   this.removeActive = !this.removeActive
  }
  closeMenul(){
   this.removeActive = false
  }

currentLang: string;
languages: string[];

constructor(
  private translocoService: TranslocoService,
  private sidebar: Sidebar,
  private renderer: Renderer2
){

  // قراءة اللغة المحفوظة
  const savedLang = localStorage.getItem('lang');

  this.currentLang = savedLang || this.translocoService.getDefaultLang();

  // تفعيل اللغة
  this.translocoService.setActiveLang(this.currentLang);

  const availableLangs = this.translocoService.getAvailableLangs();

  if(Array.isArray(availableLangs) && typeof availableLangs[0] === 'string'){
    this.languages = availableLangs as string[];
  }else{
    this.languages = (availableLangs as {id:string; label:string}[])
      .map(lang => lang.id)
  }

  // تغيير الاتجاه عند تغيير اللغة
  this.translocoService.langChanges$.subscribe(lang => {
    this.updateDirection(lang);
  });

  // تعيين الاتجاه عند تحميل الصفحة
  this.updateDirection(this.currentLang);
}


updateDirection(lang: string) {

  const rtlLangs = ['ar'];
  const direction = rtlLangs.includes(lang) ? 'rtl' : 'ltr';

  this.renderer.setAttribute(document.documentElement,'dir',direction);

}


changeLang(langCode: string): void {

  this.translocoService.setActiveLang(langCode);
  this.currentLang = langCode;

  // حفظ اللغة
  localStorage.setItem('lang', langCode);

}
  
}
