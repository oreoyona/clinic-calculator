import { ElementRef, ViewChild } from "@angular/core";
import { Button } from "@nativescript/core";
export const formulas = {
    pam: "[(PAS + (2 x PAD) )/3]",
    imc: "[Poids(Kg)/Taille^2(m)]"
}
/**
 * clear - functions to clear the screen
 * @param screen : the screen to be cleared
 */
export function clear(screen: string){
    screen = "";
    return screen;
}
/**
 * 
 * @param mode the mode chosen by the user
 * @param dest the place of the screen where 
 * the mode should be displayed
 */
export function changeMode(mode: string, dest: string){
    dest = mode;
}

/**
 * 
 * @param pas systolic arterial pressure
 * @param pad diastolic arterial pressure
 * @returns mean arterial pressure
 */
export function pam(pas: number, pad: number){
    return (2*(pad) + pas)/3
}


/**
 * imc - computes the IMC
 * @param taille: length in cm
 * @param poids: weight in Kg
 * @returns the IMC
 */
export function imc(taille: number, poids: number){
    taille = converter(taille);
    const tailleCarre = Math.pow(taille, 2);
    return poids/tailleCarre;

}
/**
 * compute - finds the right formula and computes according to
 * the mode
 * @param mode the mode chosen by the user
 * @param store the array where are stored variables
 * @returns the desired computation
 */
export function compute(mode: string, store: string[]){
    switch (mode) {
        case "PAM":
            return pam(Number(store[0]), Number(store[1]))
        case "IMC":
            return imc(Number(store[0]), Number(store[1]))
    }
}
/**
 * pusher - stores the first param in an array
 * @param screen the screen containing the first param
 * @param store the array where to store thr first param
 */
export function pusher(screen: string, store: Array<string>){
    store.push(screen);
    clear(screen);
}
/**
 * scaleAnim - animates the btn to scale 0.5 times
 * from its original state
 * @param btn : the button to be animated
 */
export function scaleAnim(btn: Button){
    btn.animate({
        scale:{x:1.5, y:1.5},
        duration: 1,
        curve: "easeOut",
        iterations: 1,
    }).then(()=>{
        btn.animate({
            scale: {x:1, y:1}
        })
    })
}
/**
 * checkState - checks the state of the screen
 * @param screen : the screen to be checked
 * @returns true if the screen is not empty
 * false otherwise
 */
export function checkState(screen: string){
    return screen?true:false;
}

/**
 * getFormula - returns the formula of the selected mode 
 * @param mode : the formula to be ruturned
 */
export function getFormula(mode: string){
    switch (mode) {
        case "PAM" || "pam":
            return formulas.pam;
        default:
            break;
    }
}
/**
 * back - delete the latest entered value in the screen
 * @param screen the screen to be sliced
 * @returns a new string
 */
export function back(screen: string){
    if (screen){
        const len = screen.length - 1;
        return screen.slice(0, len);
}
    else{
        return screen;
}
}
/**
 * converter - converts the length from cm to m
 * @params len: the length in cm
 * @returns len in m
 */
export function converter(len: number){
    return len/100;
}

/**
 * choose - helps make a choice on 3 radio btns 
 * @param vcActive : the active viewChild
 * @param vc1 : an ElementRef to reset
 * @param vc2 : an ElementRef to reset
 * @param btn : the button used to toggle the change
 */
export function choose(vcActive: ElementRef, vc1: ElementRef, vc2: ElementRef, btn?: Button){
    vcActive.nativeElement.toggle();
    vc1.nativeElement.checked = false;
    vc2.nativeElement.checked = false;
}