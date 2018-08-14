import $ from 'jquery';

class MobileMenu{

     constructor(){
     	this.siteHeaderLogo =$('.site-header__logo');
        this.siteHeader = $('.site-header');
     	this.menuIcon = $('.site-header__menu-icon');
     	this.menuContent = $('.site-header__menu-content');
     	this.events();
     }
      
      events(){

      	this.menuIcon.click(this.toggleTheMenu.bind(this));

      }

      toggleTheMenu(){
        this.siteHeaderLogo.toggleClass("site-header__logo--is-on-bug-click");
      	this.siteHeader.toggleClass("site-header--is-expended");
      	this.menuContent.toggleClass("site-header__menu-content--is-visible");
      	this.menuIcon.toggleClass("site-header__menu-icon--close-x");
      }


}

export default MobileMenu;