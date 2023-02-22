import { Component, OnInit } from '@angular/core'
import { Button, Color } from '@nativescript/core';
import { Page } from '@nativescript/core/ui/page';
import { checkState, clear, compute, back, scaleAnim} from '../common/functions'
@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  //members of the class
  screen = "";
  reponse = "";
  pam = true;
  apgar = false;
  fg = false;
  imc = false;

  modes = {
    imc: "IMC",
    fg: "FG",
    apgar: "AP",
    pam: "PAM"
  }
  currentMode = this.modes.apgar;

  pamArray = [];
  imcArray = [];
  pas = true;
  pad = false;

  colors = {
    gray: new Color("#383838")
  }

  //end Members of the class definition

  /************************************* Methods ******************************************/


  /**
   * getAnim - saves the buttons typed to the screen
   * @param btn : Button clicked by the user
   */
  getAnim = (btn: Button) => {
    scaleAnim(btn);
    if(checkState(this.reponse)){
      this.reponse = clear(this.reponse);
      this.pamArray = [];
      this.imcArray = [];
    }
    this.screen += btn.text;

  }
  /**
   * changeMode - changes the mode of the calculator
   * and updates the screen accordingly
   * @param btn : Button clicked by the user
   */
  changeMode(btn: Button) {
    const mode = btn.text;
    if (mode != this.currentMode) {
      this.screen = clear(this.screen);
      this.reponse = clear(this.reponse);
      this.imcArray = [];
      this.pamArray = [];
    };
    this.currentMode = mode;

  }

  /**
   * bck - invokes the back function
   * to delete the latest entered char in the screen
   */
  bck(){
    this.screen = back(this.screen);
  }

  /**
   * next - saves variables and do the computations
   * according to the selected mode
   */
  next() {
    //checks that the current mode is indeed "PAM"
    if (this.currentMode == this.modes.pam) {
      //computations for the "PAM" mode.
      if (!this.screen && !this.pamArray[0]){}
      if (this.pamArray[0] && this.pamArray[1]) {
        this.reponse = String(compute("PAM", this.pamArray));
        this.pamArray = [];
        this.screen = clear(this.screen);
      }
      this.pamArray.push(Number(this.screen));
      this.screen = clear(this.screen);
    }

    else if(this.currentMode == this.modes.imc){
      //computationa for the "IMC" mode.
      if (!this.screen && !this.imcArray[0]){}
      if (this.imcArray[0] && this.imcArray[1]) {
        this.reponse = String(compute("IMC", this.imcArray));
        this.imcArray = [];
        this.screen = clear(this.screen);
      }
      this.imcArray.push(Number(this.screen));
      this.screen = clear(this.screen);
    }

  }

  constructor(private page: Page) {
    this.page.actionBarHidden = true;

  }

  ngOnInit(): void {


  }
}
