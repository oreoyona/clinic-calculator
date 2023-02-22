import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { Button } from "@nativescript/core";
import { choose } from "../common/functions";
@Component({
    selector: 'apgar',
    templateUrl: 'apgar.component.html',
    styleUrls: ['apgar.component.css'],
    styles: [`
    button{
        padding: 30px;
    }
    
    `]
})
export class ApgarComponent {
    @Input() modes: string[];
    @Input() currentMode: string;

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

    scoreActivity!:number; scorePulsation!: number; scoreGrimace!: number; 
    scoreAppearance!:number; scoreRespiration!:number;

    constructor(){

    }

    public toggleActif(btn: Button){
        choose(this.actif, this.Moyen, this.faible, btn)
    }
    public toggleMoyen(btn: Button){
        choose(this.Moyen, this.actif, this.faible, btn)
    }
    public toggleFaible(btn: Button){
        choose(this.faible, this.actif, this.Moyen, btn)
    }
//methods for the Pulse section
    public setPulseFort(btn: Button){
        choose(this.Fort, this.Cent, this.Absent, btn);
    }
    public setPulseCent(btn: Button){
        choose(this.Cent, this.Fort, this.Absent, btn);
    }

    public setPulseAbsent(btn: Button){
        choose(this.Absent, this.Fort, this.Cent, btn)
    }
//methods for the grimace section
    public setGrimaceFort(btn: Button){
        choose(this.GFort, this.GMoyen, this.GAbsent, btn)
    }

    public setGrimaceMoyen(btn: Button){
        choose(this.GMoyen, this.GFort, this.GAbsent, btn)
    }

    public setGrimaceAbsent(btn: Button){
        choose(this.GAbsent, this.GFort, this.GMoyen, btn);
    }

//methods for the appareance section

    public setAppearancePink(btn: Button){
        choose(this.APink, this.ANotVerryPink, this.ABlue, btn)
    }

    public setAppearanceNotVerryPink(btn: Button){
        choose(this.ANotVerryPink, this.APink, this.ABlue, btn);
    }

    public setAppearanceBlue(btn: Button){
        choose(this.ABlue, this.APink, this.ANotVerryPink, btn);
    }

//methods for the respiration section

    public setGoodResp(btn: Button){
        choose(this.GoodResp, this.SlowResp, this.AbsentResp, btn)
    }
    public setSlowResp(btn: Button){
        choose(this.SlowResp, this.GoodResp, this.AbsentResp, btn);
    }
    public setAbsentResp(btn: Button){
        choose(this.AbsentResp, this.GoodResp, this.SlowResp, btn);
    }

}