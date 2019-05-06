import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterPolationComponent } from './inter-polation/inter-polation.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

export const routes: Routes = [
  { path: 'interpolation', component: InterPolationComponent },
  { path: 'twoway', component: TwoWayDataBindingComponent },
  { path: 'event', component: EventBindingComponent },
  { path: 'property', component: PropertyBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
