import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountUpModule } from 'ngx-countup';
import { StickyNavModule } from 'ng2-sticky-nav';
import { TabsModule } from 'ngx-tabset';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { LightboxModule } from 'ngx-lightbox';
import { AccordionModule } from 'ngx-accordion';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { PremiumAccessComponent } from './components/common/premium-access/premium-access.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { DistanceLearningComponent } from './components/pages/distance-learning/distance-learning.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { AboutStyleOneComponent } from './components/pages/about-style-one/about-style-one.component';
import { AboutStyleTwoComponent } from './components/pages/about-style-two/about-style-two.component';
import { AboutStyleThreeComponent } from './components/pages/about-style-three/about-style-three.component';
import { AboutStyleFourComponent } from './components/pages/about-style-four/about-style-four.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { CoursesStyleFiveComponent } from './components/pages/courses-style-five/courses-style-five.component';
import { CoursesDetailsStyleTwoComponent } from './components/pages/courses-details-style-two/courses-details-style-two.component';
import { BecomeATeacherComponent } from './components/pages/become-a-teacher/become-a-teacher.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { BlogStyleOneComponent } from './components/pages/blog-style-one/blog-style-one.component';
import { BlogStyleTwoComponent } from './components/pages/blog-style-two/blog-style-two.component';
import { BlogStyleThreeComponent } from './components/pages/blog-style-three/blog-style-three.component';
import { BlogStyleFourComponent } from './components/pages/blog-style-four/blog-style-four.component';
import { BlogStyleFiveComponent } from './components/pages/blog-style-five/blog-style-five.component';
import { BlogDetailsStyleOneComponent } from './components/pages/blog-details-style-one/blog-details-style-one.component';
import { BlogDetailsStyleTwoComponent } from './components/pages/blog-details-style-two/blog-details-style-two.component';
import { BlogDetailsStyleThreeComponent } from './components/pages/blog-details-style-three/blog-details-style-three.component';
import { FeaturesStyleOneComponent } from './components/common/features-style-one/features-style-one.component';
import { ViewAllCoursesComponent } from './components/common/view-all-courses/view-all-courses.component';
import { GetInstantCoursesComponent } from './components/common/get-instant-courses/get-instant-courses.component';
import { FunfactsFeedbackComponent } from './components/common/funfacts-feedback/funfacts-feedback.component';
import { VideoComponent } from './components/common/video/video.component';
import { CoursesComponent } from './components/common/courses/courses.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { ViewAllCoursesTwoComponent } from './components/common/view-all-courses-two/view-all-courses-two.component';
import { SloganComponent } from './components/common/slogan/slogan.component';
import { InstructorComponent } from './components/common/instructor/instructor.component';
import { TestimonialsComponent } from './components/common/testimonials/testimonials.component';
import { PremiumAccessTwoComponent } from './components/common/premium-access-two/premium-access-two.component';
import { FunfactsStyleOneComponent } from './components/common/funfacts-style-one/funfacts-style-one.component';
import { FeaturesStyleTwoComponent } from './components/common/features-style-two/features-style-two.component';
import { InstructorStyleTwoComponent } from './components/common/instructor-style-two/instructor-style-two.component';
import { TopCategoriesComponent } from './components/common/top-categories/top-categories.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { DistanceBlogComponent } from './components/pages/distance-learning/distance-blog/distance-blog.component';
import { DistanceCoursesComponent } from './components/pages/distance-learning/distance-courses/distance-courses.component';
import { DistancePopularCoursesComponent } from './components/pages/distance-learning/distance-popular-courses/distance-popular-courses.component';
import { DistanceBannerComponent } from './components/pages/distance-learning/distance-banner/distance-banner.component';
import { DistanceBoxesComponent } from './components/pages/distance-learning/distance-boxes/distance-boxes.component';
import { DistanceAboutComponent } from './components/pages/distance-learning/distance-about/distance-about.component';
import { FunfactsStyleTwoComponent } from './components/common/funfacts-style-two/funfacts-style-two.component';
import { FeedbackWithBgComponent } from './components/common/feedback-with-bg/feedback-with-bg.component';
import { HowToApplyComponent } from './components/common/how-to-apply/how-to-apply.component';
import { FreeTrialComponent } from './components/common/free-trial/free-trial.component';
import { UpcomingEventsComponent } from './components/common/upcoming-events/upcoming-events.component';
import { BoxesComponent } from './components/common/boxes/boxes.component';
import { OverviewComponent } from './components/common/overview/overview.component';
import { TrainingComponent } from './components/common/training/training.component';
import { FeedbackStyleTwoComponent } from './components/common/feedback-style-two/feedback-style-two.component';
import { DownloadSyllabusComponent } from './components/common/download-syllabus/download-syllabus.component';
import { FlexiblePricingComponent } from './components/common/flexible-pricing/flexible-pricing.component';
import { SubscribeStyleTwoComponent } from './components/common/subscribe-style-two/subscribe-style-two.component';
import { ExperienceComponent } from './components/common/experience/experience.component';
import { LifestyleComponent } from './components/common/lifestyle/lifestyle.component';
import { ProgramComponent } from './components/common/program/program.component';
import { ServicesComponent } from './components/common/services/services.component';
import { SubscribeStyleThreeComponent } from './components/common/subscribe-style-three/subscribe-style-three.component';
import { SubscribeStyleFourComponent } from './components/common/subscribe-style-four/subscribe-style-four.component';
import { SelectedAgesComponent } from './components/common/selected-ages/selected-ages.component';
import { AppDownloadComponent } from './components/common/app-download/app-download.component';
import { OnlinePlatformComponent } from './components/common/online-platform/online-platform.component';
import { FeaturedComponent } from './components/common/featured/featured.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { FunfactsStyleThreeComponent } from './components/common/funfacts-style-three/funfacts-style-three.component';
import { FeedbackStyleThreeComponent } from './components/common/feedback-style-three/feedback-style-three.component';
import { ExpertTrainerComponent } from './components/common/expert-trainer/expert-trainer.component';
import { ApplyInstructorComponent } from './components/common/apply-instructor/apply-instructor.component';
import { TeacherRegisterComponent } from './components/common/teacher-register/teacher-register.component';
import { SuccessPeopleComponent } from './components/common/success-people/success-people.component';
import { FeaturesStyleFourComponent } from './components/common/features-style-four/features-style-four.component';
import { TestimonialsStyleTwoComponent } from './components/common/testimonials-style-two/testimonials-style-two.component';
import { GetInstantCoursesTwoComponent } from './components/common/get-instant-courses-two/get-instant-courses-two.component';
import { PartnerSliderComponent } from './components/common/partner-slider/partner-slider.component';
import { VideoStyleTwoComponent } from './components/common/video-style-two/video-style-two.component';
import { FunfactsStyleFourComponent } from './components/common/funfacts-style-four/funfacts-style-four.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './core/api.service';
import {CoursesDetailsStyleOneComponent} from './components/pages/courses-details-style-one/courses-details-style-one.component';
import {PrivacyPolicyComponent} from "./components/pages/privacy-policy/privacy-policy.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    PartnerComponent,
    PremiumAccessComponent,
    SubscribeComponent,
    DistanceLearningComponent,
    ContactUsComponent,
    CoursesDetailsStyleOneComponent,
    AboutStyleOneComponent,
    AboutStyleTwoComponent,
    AboutStyleThreeComponent,
    AboutStyleFourComponent,
    ErrorComponent,
    CoursesStyleFiveComponent,
    CoursesDetailsStyleTwoComponent,
    BecomeATeacherComponent,
    CategoriesComponent,
    CartComponent,
    CheckoutComponent,
    BlogStyleOneComponent,
    BlogStyleTwoComponent,
    BlogStyleThreeComponent,
    BlogStyleFourComponent,
    BlogStyleFiveComponent,
    BlogDetailsStyleOneComponent,
    BlogDetailsStyleTwoComponent,
    BlogDetailsStyleThreeComponent,
    FeaturesStyleOneComponent,
    ViewAllCoursesComponent,
    GetInstantCoursesComponent,
    FunfactsFeedbackComponent,
    VideoComponent,
    CoursesComponent,
    BlogComponent,
    ViewAllCoursesTwoComponent,
    SloganComponent,
    InstructorComponent,
    TestimonialsComponent,
    PremiumAccessTwoComponent,
    FunfactsStyleOneComponent,
    FeaturesStyleTwoComponent,
    InstructorStyleTwoComponent,
    TopCategoriesComponent,
    FeedbackComponent,
    DistanceBlogComponent,
    DistanceCoursesComponent,
    DistancePopularCoursesComponent,
    DistanceBannerComponent,
    DistanceBoxesComponent,
    DistanceAboutComponent,
    FunfactsStyleTwoComponent,
    FeedbackWithBgComponent,
    HowToApplyComponent,
    FreeTrialComponent,
    UpcomingEventsComponent,
    BoxesComponent,
    OverviewComponent,
    TrainingComponent,
    FeedbackStyleTwoComponent,
    DownloadSyllabusComponent,
    FlexiblePricingComponent,
    SubscribeStyleTwoComponent,
    ExperienceComponent,
    LifestyleComponent,
    ProgramComponent,
    ServicesComponent,
    SubscribeStyleThreeComponent,
    SubscribeStyleFourComponent,
    SelectedAgesComponent,
    AppDownloadComponent,
    OnlinePlatformComponent,
    FeaturedComponent,
    WhyChooseUsComponent,
    FunfactsStyleThreeComponent,
    FeedbackStyleThreeComponent,
    ExpertTrainerComponent,
    ApplyInstructorComponent,
    TeacherRegisterComponent,
    SuccessPeopleComponent,
    FeaturesStyleFourComponent,
    TestimonialsStyleTwoComponent,
    GetInstantCoursesTwoComponent,
    PartnerSliderComponent,
    VideoStyleTwoComponent,
    FunfactsStyleFourComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    CountUpModule,
    StickyNavModule,
    TabsModule,
    NgxScrollTopModule,
    LightboxModule,
    AccordionModule,
    FormsModule,    
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
