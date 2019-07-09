import { Component, OnInit } from '@angular/core';
import { ExternalService } from '../../services/external.service';
import { NgForm } from '@angular/forms';
import { External } from '../../models/external';
declare var M: any;

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css'],
  providers: [ExternalService]
})
export class ExternalComponent implements OnInit {

  constructor(private externalService: ExternalService) { }
  filterExternals = '';

  ngOnInit() {
    this.getExternals();
  }

  addExternal(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.externalService.putExternal(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getExternals();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.externalService.postExternal(form.value)
      .subscribe(res => {
        this.getExternals();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
  }

  getExternals() {
    this.externalService.getExternals()
      .subscribe(res => {
        this.externalService.externals = res as External[];
      });
  }

  editExternal(external: External) {
    this.externalService.selectedExternal = external;
  }

  deleteExternal(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.externalService.deleteExternal(_id)
        .subscribe(res => {
          this.getExternals();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  getTotal() {
    return this.externalService.externals.map(i => i.cost).reduce((acc, value) => acc + value, 0);
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.externalService.selectedExternal = new External();
    }
  }

}
