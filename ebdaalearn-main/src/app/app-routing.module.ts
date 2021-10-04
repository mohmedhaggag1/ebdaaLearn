import { SuccessPeopleComponent } from './components/common/success-people/success-people.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { AboutStyleFourComponent } from './components/pages/about-style-four/about-style-four.component';
import { AboutStyleThreeComponent } from './components/pages/about-style-three/about-style-three.component';
import { FeedbackStyleThreeComponent } from './components/common/feedback-style-three/feedback-style-three.component';
import { FunfactsStyleThreeComponent } from './components/common/funfacts-style-three/funfacts-style-three.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { SubscribeStyleFourComponent } from './components/common/subscribe-style-four/subscribe-style-four.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { BlogStyleFiveComponent } from './components/pages/blog-style-five/blog-style-five.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistanceLearningComponent } from './components/pages/distance-learning/distance-learning.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { AboutStyleTwoComponent } from './components/pages/about-style-two/about-style-two.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { CoursesStyleFiveComponent } from './components/pages/courses-style-five/courses-style-five.component';
import { CoursesDetailsStyleTwoComponent } from './components/pages/courses-details-style-two/courses-details-style-two.component';
import {PrivacyPolicyComponent} from "./components/pages/privacy-policy/privacy-policy.component";
import { AboutStyleOneComponent } from './components/pages/about-style-one/about-style-one.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
const routes: Routes = [
    {path: '', component: DistanceLearningComponent},
    {path: 'home', component: DistanceLearningComponent},
    {path: 'about', component: AboutStyleTwoComponent},
    {path: 'courses', component: CoursesStyleFiveComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'details-courses', component: CoursesDetailsStyleTwoComponent},
    //haggag
    {path: 'login', component: BlogComponent},
    {path: 'SubscribeStyleFourComponent', component: SubscribeStyleFourComponent},
    {path: 'add-new-teacher', component: WhyChooseUsComponent},
    {path: 'add-new-course', component: FunfactsStyleThreeComponent},
    {path: 'register', component: FeedbackStyleThreeComponent},
    {path: 'forget-Password' ,component:AboutStyleOneComponent},
    {path: 'send-Code' ,component:AboutStyleThreeComponent},
    {path: 'Change-Password' ,component:AboutStyleFourComponent},
    {path:'delete-teacher',component:BlogStyleFiveComponent},
    {path:'nav-dash',component:SuccessPeopleComponent},
    // 

    
    
    {path: 'delete-Course', component: CheckoutComponent},
    {path: 'contact', component: ContactUsComponent},
    // Here add new pages component

    {path: '**', component: ErrorComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
