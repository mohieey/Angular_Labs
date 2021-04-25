import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
export function validation(regxp:RegExp)
{
    return (control:AbstractControl)=>
    {
        const patternMatched =regxp.test(control.value);
        return patternMatched ?  {'badPattern':{value:control.value}}:null;
    } 
}