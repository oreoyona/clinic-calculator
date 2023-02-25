import { Component, ElementRef, ViewChild } from "@angular/core";
import { Button } from "@nativescript/core";
import { ActionItem, Page } from "@nativescript/core/ui";
import { choose } from "../common/functions";
import { action, ActionOptions } from "@nativescript/core/ui";
import { RouterExtensions } from "@nativescript/angular";

@Component({
    selector: 'apgar',
    templateUrl: 'apgar.component.html',
    styleUrls: ['apgar.component.css'],
})
export class ApgarComponent{
//class members
    mode!: ActionItem;
    currentMode = "Apgar";
    scoreActivity = 0; scorePulsation = 0; scoreGrimace = 0; 
    scoreAppearance = 0; scoreRespiration = 0; apgarScore = 0;

    actionOptions: ActionOptions = {
        title: "Changer de mode",
        actions: ["FG", "PAM"],
        cancelable: true,
        cancelButtonText: "annuler",
    }
    

    // Views for the activity
    @ViewChild('actif') actif: ElementRef;
    @ViewChild('moyen') Moyen: ElementRef;
    @ViewChild('faible') faible: ElementRef;

//Views for the pulsation

    @ViewChild('fort') Fort: ElementRef;
    @ViewChild('cent') Cent: ElementRef;
    @ViewChild('absent') Absent: ElementRef;

//views for the grimnace

    @ViewChild('grimaceFort') GFort: ElementRef;
    @ViewChild('grimaceMoyen') GMoyen: ElementRef;
    @ViewChild('grimaceAbsent') GAbsent: ElementRef;    

//views for the appearance/color

    @ViewChild('pink') APink: ElementRef;
    @ViewChild('notVeryPink') ANotVerryPink: ElementRef;
    @ViewChild('blue') ABlue: ElementRef;

//views for the respiration
    @ViewChild('goodResp') GoodResp: ElementRef;
    @ViewChild('slowResp') SlowResp: ElementRef;
    @ViewChild('absentResp') AbsentResp: ElementRef;



    constructor(page: Page, private route: RouterExtensions){
        this.mode = new ActionItem()
        this.mode.text = "mode";
        this.mode.android.position = "popup"
        this.mode.style.marginTop = 12;

        page.actionBar.title = "";
        page.actionBar.style.paddingTop = 40;
        page.actionBar.style.margin = "auto"
        page.actionBar.actionItems.addItem(this.mode);
        this.mode.addEventListener("tap", async ()=>{
            action(this.actionOptions).then( async (res)=>{
                if(res === "PAM"){
                    this.route.navigate([''])
                }
                if(res === "FG"){
                    this.route.navigate(['/fg'])
                }
            })   
        })
    }

    public async toggleActif(btn: Button){
        choose(this.actif, this.Moyen, this.faible, btn);
        this.scoreActivity = 2;
        this.updateScore();
    }
    public async toggleMoyen(btn: Button){
        choose(this.Moyen, this.actif, this.faible, btn);
        this.scoreActivity = 1;
        this.updateScore();
    }
    public async toggleFaible(btn: Button){
        choose(this.faible, this.actif, this.Moyen, btn);
        this.scoreActivity = 0;
        this.updateScore();
    }
//methods for the Pulse section
    public async setPulseFort(btn: Button){
        choose(this.Fort, this.Cent, this.Absent, btn);
        this.scorePulsation = 2;
        this.updateScore();
    }
    public async setPulseCent(btn: Button){
        choose(this.Cent, this.Fort, this.Absent, btn);
        this.scorePulsation = 1;
        this.updateScore();
    }

    public async setPulseAbsent(btn: Button){
        choose(this.Absent, this.Fort, this.Cent, btn);
        this.scorePulsation = 0;
        this.updateScore();
    }
//methods for the grimace section
    public async setGrimaceFort(btn: Button){
        choose(this.GFort, this.GMoyen, this.GAbsent, btn);
        this.scoreGrimace = 2;
        this.updateScore();
    }

    public async setGrimaceMoyen(btn: Button){
        choose(this.GMoyen, this.GFort, this.GAbsent, btn)
        this.scoreGrimace = 1;
        this.updateScore();
    }

    public async setGrimaceAbsent(btn: Button){
        choose(this.GAbsent, this.GFort, this.GMoyen, btn);
        this.scoreGrimace = 0;
        this.updateScore();
    }

//methods for the appareance section

    public async setAppearancePink(btn: Button){
        choose(this.APink, this.ANotVerryPink, this.ABlue, btn)
        this.scoreAppearance = 2;
        this.updateScore()
    }

    public async setAppearanceNotVerryPink(btn: Button){
        choose(this.ANotVerryPink, this.APink, this.ABlue, btn);
        this.scoreAppearance = 1;
        this.updateScore();
    }

    public async setAppearanceBlue(btn: Button){
        choose(this.ABlue, this.APink, this.ANotVerryPink, btn);
        this.scoreAppearance = 0;
        this.updateScore();
    }

//methods for the respiration section

    public async setGoodResp(btn: Button){
        choose(this.GoodResp, this.SlowResp, this.AbsentResp, btn)
        this.scoreRespiration = 2;
        this.updateScore();
    }
    public async setSlowResp(btn: Button){
        choose(this.SlowResp, this.GoodResp, this.AbsentResp, btn);
        this.scoreRespiration = 1;
        this.updateScore();
    }
    public async setAbsentResp(btn: Button){
        choose(this.AbsentResp, this.GoodResp, this.SlowResp, btn);
        this.scoreRespiration = 0;
        this.updateScore();
    }

    async updateScore(){
        this.apgarScore = this.scoreActivity + this.scorePulsation + this.scoreAppearance + this.scoreGrimace + this.scoreRespiration;
    }

    

}