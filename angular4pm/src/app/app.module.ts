import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app.routing';
import { DirectiveComponent } from './directive/directive.component';
import { HighlightDirective } from './highlight.directive';
import { PipeComponent } from './pipe/pipe.component';
import { ReversePipe } from './reverse.pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { ParentComponent } from './inheritance/parent.component';
import { ChildComponent } from './inheritance/child.component';
import { MasterComponent } from './nested/master.component';
import { DetailsComponent } from './nested/details.component';
import { ParentHooksComponent } from './hooks/parent-hooks.component';
import { ChildHooksComponent } from './hooks/child-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    AboutComponent,
    NotfoundComponent,
    DirectiveComponent,
    HighlightDirective,
    PipeComponent,
    ReversePipe,
    ParentComponent,
    ChildComponent,
    MasterComponent,
    DetailsComponent,
    ParentHooksComponent,
    ChildHooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
