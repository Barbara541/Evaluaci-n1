import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  urlEndPoint: string = 'https://api.sampleapis.com/recipes/recipes';

  constructor(private httpClient: HttpClient) { }

  getListadoRecipes(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(`${this.urlEndPoint}`)
      .subscribe({
        next: (respuesta) => resolve(respuesta),
        error:  (error) => reject(error),
        complete: () => console.log('Complete')
      })
    })
  }

}
