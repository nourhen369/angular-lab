import { Injectable } from '@angular/core';
import { Cv } from './Model/Cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[];
  constructor() {
    this.cvs = [
      new Cv(1, 'Ines', 'Zghal', 22, 123456, 'Designer', 'assets/ines.jpg'),
      new Cv(
        2,
        'Nourhene',
        'Khechine',
        20,
        654321,
        'Developer',
        'assets/nourhene.jpg'
      ),
      new Cv(3, 'Mahdi', 'Boudawara', 25, 345678, 'Ingenieur', ''),
    ];
  }
  getCvs(): Cv[] {
    return this.cvs;
  }
  getCvById(id: number): Cv | undefined {
    const cv = this.cvs.find((cv) => {
      return cv.id == id;
    });
    return cv;
  }
  deleteCv(id: number): void {
    const index = this.cvs.findIndex((cv) => cv.id === id);
    if (index >= 0) {
      this.cvs.splice(index, 1); // Supprimer le CV de la liste
    }
  }
}
