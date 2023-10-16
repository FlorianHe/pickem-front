import { Component, OnInit } from '@angular/core';
import { PentakillService } from 'src/app/services/pentakill.service';
import { PentakillAmount } from 'src/app/shared/interfaces/pentakillAmount';

@Component({
  selector: 'app-pentakill-page',
  templateUrl: './pentakill-page.component.html',
  styleUrls: ['./pentakill-page.component.scss']
})
export class PentakillPageComponent implements OnInit {

  pentakills! : PentakillAmount[];

  constructor(private pentakillService : PentakillService) { }

  ngOnInit(): void {
    this.pentakillService.getPentakills().subscribe((pentakills) => {
      this.pentakills = pentakills
    })
  }

}
