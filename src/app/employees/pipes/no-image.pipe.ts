import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(url: string | null) : string {
    return url != '' && url != null ? url : 'assets/img/no-image.png';
  }

}
