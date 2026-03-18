import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { Sidebar } from '../service/sidebar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-matches',
  imports: [CommonModule,FormsModule, NzSelectModule,RouterLink,TranslocoDirective,NzButtonModule],
  templateUrl: './matches.html',
  styleUrl: './matches.css',
})
export class Matches implements OnInit{
createMessage(type: string): void {
  this.message.create(
    type,
    this.translocoService.translate('match.message')
  );
}

  toggleMenu(){
    this.sidebar.toggleSidebar();
  }


  matches = [
    {
      "Team":"Al-Masry SC",
      "cityFil":"Suez",
      "tourFil":"Nile League 2025/2026",
      "tournamentName":"Nile League 2025/2026",
      "img_team1":"match.match1_img1",
      "name_team1":"match.match1_name1",
      "img_team2":"match.match1_img2",
      "name_team2":"match.match1_name2",
      "stadium":"match.match1_stad",
      "city":"match.match1_city",
      "date":"match.match1_date",
      "time":"match.match1_time",
      "Tournament":"match.match1_tourn",
      "Match_No":"match.match1_match_no",
      "Group":"match.match1_group",
      "class":"match.match1_stage",
      "state":"match.match1_state",
    },
    {
      "Team":"Enppi SC",
      "cityFil":"Cairo",
      "tourFil":"Nile League 2025/2026",
      "tournamentName":"Nile League 2025/2026",
      "img_team1":"match.match2_img1",
      "name_team1":"match.match2_name1",
      "img_team2":"match.match2_img2",
      "name_team2":"match.match2_name2",
      "stadium":"match.match2_stad",
      "city":"match.match2_city",
      "date":"match.match2_date",
      "time":"match.match2_time",
      "Tournament":"match.match2_tourn",
      "Match_No":"match.match2_match_no",
      "Group":"match.match2_group",
      "class":"match.match2_stage",
      "state":"match.match2_state",
    },
    {
      "Team ":"ZED FC",
      "cityFil":"Cairo",
      "tourFil":"Nile League 2025/2026",
      "tournamentName":"Nile League 2025/2026",
      "img_team1":"match.match3_img1",
      "name_team1":"match.match3_name1",
      "img_team2":"match.match3_img2",
      "name_team2":"match.match3_name2",
      "stadium":"match.match3_stad",
      "city":"match.match3_city",
      "date":"match.match3_date",
      "time":"match.match3_time",
      "Tournament":"match.match3_tourn",
      "Match_No":"match.match3_match_no",
      "Group":"match.match3_group",
      "class":"match.match3_stage",
      "state":"match.match3_state",
    },
    {
      "Team":"Zamalek SC",
       "cityFil":"Cairo",
       "tourFil":"CAF Confederation Cup 2025/2026",
      "tournamentName":"CAF Confederation 2025/2026",
      "img_team1":"match.match5_img1",
      "name_team1":"match.match5_name1",
      "img_team2":"match.match5_img2",
      "name_team2":"match.match5_name2",
      "stadium":"match.match5_stad",
      "city":"match.match5_city",
      "date":"match.match5_date",
      "time":"match.match5_time",
      "Tournament":"match.match5_tourn",
      "Match_No":"match.match5_match_no",
      "Group":"match.match5_group",
      "class":"match.match5_stage",
      "state":"match.match5_state",
    },
    {
      "Team":"Al Ahly SC",
      "cityFil":"Cairo",
      "tourFil":"CAF Champions Cup 2025/2026",
      "tournamentName":"CAF Champions 2025/2026",
      "img_team1":"match.match4_img1",
      "name_team1":"match.match4_name1",
      "img_team2":"match.match4_img2",
      "name_team2":"match.match4_name2",
      "stadium":"match.match4_stad",
      "city":"match.match4_city",
      "date":"match.match4_date",
      "time":"match.match4_time",
      "Tournament":"match.match4_tourn",
      "Match_No":"match.match4_match_no",
      "Group":"match.match4_group",
      "class":"match.match4_stage",
      "state":"match.match4_state",
    },
  ]
    matchList:any[]=[]
    ngOnInit(): void {
    this.matchList = this.matches
    console.log(this.matchList); 
  }

  activeCup:string = 'All'
  AllMatch(){
    this.matchList = this.matches
    this.activeCup = 'All'  
  }
  OnlyNile(){
    this.matchList = this.matches.filter((match)=> match.tournamentName === "Nile League 2025/2026" )
    this.activeCup = 'nile'
  }
  Onlyconf(){
    this.matchList = this.matches.filter((match)=> match.tournamentName === "CAF Confederation 2025/2026")
    this.activeCup = 'conf'
  }
  Onlyafr(){
    this.matchList = this.matches.filter((match)=> match.tournamentName === "CAF Champions 2025/2026")
    this.activeCup = 'afr'
  }
// =====
selectedValue = null;

// ==
teamFilter: string | null = null;
stadiumFilter: string | null = null;
groupFilter: string | null = null;
tournamentFilter: string | null = null;

filterMatches() {

  this.matchList = this.matches.filter(match => {

    const teamMatch =
      !this.teamFilter ||
      match.Team === this.teamFilter 
      // match.name_team2 === this.teamFilter;

    const stadiumMatch =
      !this.stadiumFilter ||
      match.cityFil.trim() === this.stadiumFilter;

    const groupMatch =
      !this.groupFilter ||
      match.Group === this.groupFilter;

    const tournamentMatch =
      !this.tournamentFilter ||
      match.tourFil === this.tournamentFilter;

    return teamMatch && stadiumMatch && groupMatch && tournamentMatch;

  });

}

// ===
IsOpened= false
openSearch(){
this.IsOpened = !this.IsOpened
}

// ======
 currentLang: string;
languages: string[];

constructor(
  private translocoService: TranslocoService,
  private sidebar: Sidebar,
  private renderer: Renderer2,
  private message: NzMessageService
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
