import { FormControl } from "@angular/forms";

export class CustomValidators{
    static invalidProjectName(control:FormControl):any {
        if(control.value === 'Test'){
            return {'invalidProjectName':true}
        }
        return null;
    }
}




