import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query } from '@angular/fire/firestore';


@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(
        public firestore: Firestore,
    ){}

    async getData(){
        return (
            await getDocs(query(collection(this.firestore, 'informationPortfolio')))
        ).docs.map((res:any) => res['_document'].data.value.mapValue.fields)
    }    
}