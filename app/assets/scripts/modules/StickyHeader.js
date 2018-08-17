import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
class StickyHeader{


	constructor(){
        this.lazyImages=$(".lazyload");
		this.siteHeader=$(".site-header");
		this.triggerElement=$(".home-section");
		this.createWaypoints();
		this.pageSection =$(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.waypointsRefresh();



	}

	waypointsRefresh(){

		this.lazyImages.on('load',function(){

          Waypoint.refreshAll();
		});
	}

addSmoothScrolling(){

	this.headerLinks.smoothScroll();
}
	createWaypoints(){
        var that = this;
		new Waypoint({

			element:this.triggerElement[0],
			handler:function(direction){

				if(direction == "down")
				{
               that.siteHeader.addClass("site-header--dark");
				}else{
                 that.siteHeader.removeClass("site-header--dark");
				}

				
			},
			offset:"-5%"
		});
	}

	createPageSectionWaypoints(){
      var that = this;
	this.pageSection.each(function(){
      var currentPageSection =this;
      new Waypoint({
        element:currentPageSection,
        handler:function(direction){

        	if(direction=="down"){

           var matchingHeaderLink= currentPageSection.getAttribute("data-matching-link");
              that.headerLinks.removeClass("is-current-link");
             $(matchingHeaderLink).addClass("is-current-link");
               }
           },
        offset:"30%"
        });
      new Waypoint({
        element:currentPageSection,
        handler:function(direction){

        	if(direction=="up"){

           var matchingHeaderLink= currentPageSection.getAttribute("data-matching-link");
              that.headerLinks.removeClass("is-current-link");
             $(matchingHeaderLink).addClass("is-current-link");
               }
           },
        offset:"-80%"
        });
 
	});
}
}

export default StickyHeader;