import { MenuService } from './services/menu.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { MenuComponent }   from './components/menu.component';

@NgModule({
    imports: [CommonModule, RouterModule, MaterialModule.forRoot(),],
    exports: [MenuComponent],
    declarations: [MenuComponent],
    providers: [MenuService],
})
export class MenuModule { }
