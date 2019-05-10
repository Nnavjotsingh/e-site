import { NgModule } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import { 
    MatBadgeModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatGridListModule,
  MatCardModule,
  MatTooltipModule,
  MatTableModule
} from '@angular/material';


@NgModule({
    imports:[
        MatBadgeModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatGridListModule,
  MatCardModule,
  FlexLayoutModule,
  MatTooltipModule,
  MatTableModule
    ],
    exports:[
        MatBadgeModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatGridListModule,
  MatCardModule,
  FlexLayoutModule,
  MatTooltipModule,
  MatTableModule
    ]
})
export class MaterialModule {}