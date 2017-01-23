import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuModule } from '../menu/menu.module';
import { NgModule } from '@angular/core';

import { HeaderComponent }   from './header.component';

@NgModule({
    imports: [MenuModule, FlexLayoutModule.forRoot(),],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    providers: [],
})
export class HeaderModule { }
