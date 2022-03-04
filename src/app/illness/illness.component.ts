import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-illness',
  templateUrl: './illness.component.html',
  styleUrls: ['./illness.component.scss']
})
export class IllnessComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  myControl = new FormControl();
  options: string[] = ['Nhóm bệnh ung thư', 'Nhóm bệnh huyết học', 'Nhóm bệnh tim mạch','Nhóm bệnh nội thần kinh/tâm thần','Bệnh khác'];
  DSbenh:any [] = [
    {'id' : 1, 'nhombenh' :'Nhóm bệnh ung thư', 'tenbenh': ['Ung thư vú','Ung thư tử cung','Ung thư trực tràng']},
    {'id': 2, 'nhombenh':'Nhóm bệnh huyết học', 'tenbenh':['Ung thư vú','Ung thư tử cung','Ung thư trực tràng']},
    {'id': 3, 'nhombenh': 'Nhóm bệnh tim mạch'},
    {'id':4, 'nhombenh': 'Nhóm bệnh nội thần kinh/tâm thần'},
    {'id': 5, 'nhombenh': 'Bệnh khác'}
  ]
  filteredOptions!: Observable<any[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
