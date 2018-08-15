import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
class RevealOnScroll {

	constructor(element,offset){

		this.itemOnScroll = element;
		this.offsetPercentage = offset;
		this.hideItemInitially();
		this.createWaypoints();


	}

	hideItemInitially(){
		this.itemOnScroll.addClass("reveal-item");
	}

	createWaypoints(){
         var that =this;
		this.itemOnScroll.each(function(){
			var currentItem =this;
			new Waypoint({

				element:currentItem,
				handler:function(){

					$(currentItem).addClass("reveal-item--is-visible");
				},

				offset: that.offsetPercentage
			});

		});
	}
}

export default RevealOnScroll;