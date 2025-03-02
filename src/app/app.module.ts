import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CloseChampionComponent } from './close-champion/close-champion.component';
import { GoUpComponent } from './go-up/go-up.component';
import { HeaderComponent } from './header/header.component';
import { InfosComponent } from './infos/infos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LanguageComponent } from './language/language.component';
import { LeagueChampionListComponent } from './league-champion-list/league-champion-list.component';
import { LeagueChampionLoreComponent } from './league-champion-lore/league-champion-lore.component';
import { LeagueChampionSkinsComponent } from './league-champion-skins/league-champion-skins.component';
import { LeagueChampionComponent } from './league-champion/league-champion.component';
import { LeagueIconComponent } from './league-icon/league-icon.component';
import { LeagueSearchComponent } from './league-search/league-search.component';
import { LoadingChampionComponent } from './loading-champion/loading-champion.component';
import { SwipingAnimComponent } from './swiping-anim/swiping-anim.component';

@NgModule({
    declarations: [
        AppComponent,
        LeagueChampionComponent,
        LeagueIconComponent,
        LeagueChampionListComponent,
        HeaderComponent,
        LandingPageComponent,
        LoadingChampionComponent,
        LanguageComponent,
        LeagueChampionLoreComponent,
        LeagueChampionSkinsComponent,
        CloseChampionComponent,
        InfosComponent,
        GoUpComponent,
        SwipingAnimComponent,
        LeagueSearchComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
