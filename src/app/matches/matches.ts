import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { Sidebar } from '../service/sidebar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-matches',
  imports: [CommonModule,FormsModule, NzSelectModule,RouterLink,TranslocoDirective],
  templateUrl: './matches.html',
  styleUrl: './matches.css',
})
export class Matches implements OnInit{
    // constructor(private sidebar: Sidebar){}

  toggleMenu(){
    this.sidebar.toggleSidebar();
  }


  matches = [
    // {
    //   "img_team1":"https://www.tazkarti.com/assets/images/imagesref/77379950-aa8c-466a-8ef5-1c36fc1bc777.png",
    //   "name_team1":"El Gouna FC",
    //   "img_team2":"https://www.tazkarti.com/assets/images/imagesref/e7a69330-8d11-4f5f-93d1-d72144604165.png",
    //   "name_team2":"Al-Masry SC",
    //   "stadium":" Suez Stadium,",
    //   "city":"Suez ",
    //   "date":"Tue 10 Mar 2026",
    //   "time":"Time : 09 : 30 PM",
    //   "Tournament":"Nile League 2025/2026",
    //   "Match_No":"143",
    //   "Group":"Week fifteen",
    //   "class":"First Stage",
    //   "state":"Match Ended",
    //   "state-sign":"red",
    // },
    // {
    //   "img_team1":"https://www.tazkarti.com/assets/images/imagesref/647ec9f6-5104-4cdd-b9ab-7250530be769.png",
    //   "name_team1":"Enppi SC",
    //   "img_team2":"https://www.tazkarti.com/assets/images/imagesref/e225bd49-23a2-475d-ac7f-9715c9564856.png",
    //   "name_team2":"Zamalek SC",
    //   "stadium":" Arab Contractors Stadium,",
    //   "city":"Cairo ",
    //   "date":"Wed 11 Mar 2026",
    //   "time":"Time : 09 : 30 PM",
    //   "Tournament":"Nile League 2025/2026",
    //   "Match_No":"144",
    //   "Group":"Week fifteen",
    //   "class":"First Stage",
    //   "state":"Available",
    //   "state-sign":"green",
    // },
    // {
    //   "img_team1":"https://www.tazkarti.com/assets/images/imagesref/b23bbdd9-e758-48b4-8572-0d99c69522a4.jpeg",
    //   "name_team1":"ZED FC",
    //   "img_team2":"https://www.tazkarti.com/assets/images/imagesref/45aa6e1b-29cc-47e3-a609-000f631ef4ab.jpeg",
    //   "name_team2":"Modern Sport Club",
    //   "stadium":" Cairo Int. Stadium,",
    //   "city":"Cairo ",
    //   "date":"Wed 11 Mar 2026",
    //   "time":"Time : 09 : 30 PM",
    //   "Tournament":"Nile League 2025/2026",
    //   "Match_No":"145",
    //   "Group":"Week fifteen",
    //   "class":"First Stage",
    //   "state":"Available",
    //   "state-sign":"green",
    // },
    // {
    //   "match_team1":"https://www.tazkarti.com/assets/images/imagesref/b23bbdd9-e758-48b4-8572-0d99c69522a4.jpeg",
    //   "name_team1":"ZED FC",
    //   "img_team2":"https://www.tazkarti.com/assets/images/imagesref/45aa6e1b-29cc-47e3-a609-000f631ef4ab.jpeg",
    //   "name_team2":"Modern Sport Club",
    //   "stadium":" Cairo Int. Stadium,",
    //   "city":"Cairo ",
    //   "date":"Wed 11 Mar 2026",
    //   "time":"Time : 09 : 30 PM",
    //   "Tournament":"CAF Confederation 2025/2026",
    //   "Match_No":"145",
    //   "Group":"Week fifteen",
    //   "class":"First Stage",
    //   "state":"Available",
    //   "state-sign":"green",
    // },
    // {
    //   "img_team1":"https://www.tazkarti.com/assets/images/imagesref/b23bbdd9-e758-48b4-8572-0d99c69522a4.jpeg",
    //   "name_team1":"ZED FC",
    //   "img_team2":"https://www.tazkarti.com/assets/images/imagesref/45aa6e1b-29cc-47e3-a609-000f631ef4ab.jpeg",
    //   "name_team2":"Modern Sport Club",
    //   "stadium":" Cairo Int. Stadium,",
    //   "city":"Cairo ",
    //   "date":"Wed 11 Mar 2026",
    //   "time":"Time : 09 : 30 PM",
    //   "Tournament":"CAF Champions 2025/2026",
    //   "Match_No":"145",
    //   "Group":"Week fifteen",
    //   "class":"First Stage",
    //   "state":"Available",
    //   "state-sign":"green",
    // },
    {
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
      match.name_team1 === this.teamFilter ||
      match.name_team2 === this.teamFilter;

    const stadiumMatch =
      !this.stadiumFilter ||
      match.city.trim() === this.stadiumFilter;

    const groupMatch =
      !this.groupFilter ||
      match.Group === this.groupFilter;

    const tournamentMatch =
      !this.tournamentFilter ||
      match.Tournament === this.tournamentFilter;

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
