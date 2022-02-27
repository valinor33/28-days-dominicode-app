import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'filter',
})

export class FilterPipe implements PipeTransform {


    transform(values: string[], arg: string): string[] {

        if(!arg || arg?.length < 3 ) return values;
        let result: string[] = [];
        for(const value of values) {
            if(value.toLocaleLowerCase().indexOf(arg.toLocaleLowerCase()) > -1){
                result = [...result, value];
            }
        }
        return result;
    }

}