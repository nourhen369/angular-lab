import { Injectable } from '@angular/core';
import { Cv } from './Model/Cv';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private cvs: Cv[];

  constructor(private toastr: ToastrService) {
    this.cvs = [];
  }

  getEmbachees(): Cv[] {
    return this.cvs;
  }

  embaucher(cv: Cv): void {
    const index = this.cvs.indexOf(cv);
    if (index < 0) {
      this.cvs.push(cv);

      this.toastr.success(`${cv.name} a été embauché avec succès !`, 'Succès');
    } else {
      alert(`${cv.name} est deja selectionne`);
      this.toastr.warning(`${cv.name} est déjà sélectionné !`, 'Attention');
    }
  }

  // Méthode pour retirer un CV de la liste des embauchés
  debaucher(cv: Cv): void {
    const index = this.cvs.indexOf(cv);
    if (index >= 0) {
      this.cvs.splice(index, 1);
      this.toastr.info(
        `${cv.name} a été retiré de la liste des embauchés.`,
        'Information'
      );
    }
  }
}
