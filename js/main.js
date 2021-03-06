/*
*/
$(document).ready(function ($) {
  
    // Sidebar Toggle
    
    $('.btn-navbar').click( function() {
	    $('html').toggleClass('expanded');
    });
    
    
    // Slide Toggles
    
    $('#section3 .button').on('click', function () {
	    
	    var section = $(this).parent();
		
		section.toggle();
	    section.siblings(".slide").slideToggle('2000', "easeInQuart");
	});
	
	$('#section3 .read-more').on('click', function () {
	    
	    var section = $(this).parent();
		
		section.toggle();
	    section.siblings(".slide").slideToggle('2000', "easeInQuart");
	});
	
	$('#section4 .article-tags li').on('click', function () {
	    
	    var section = $(this).parents('.span4');
	    var category = $(this).attr('data-blog');
	    var articles = section.siblings();
	    
	    // Change Tab BG's
	    $(this).siblings('.current').removeClass('current');
	    $(this).addClass('current');
		
		// Hide/Show other articles
	    section.siblings('.current').removeClass('current').hide();
	    
    	$(articles).each(function (index) {
	    	
	    	var newCategory = $(this).attr('data-blog');
	    	
	    	if ( newCategory == category ) {
		    	$(this).slideDown('1000', "easeInQuart").addClass('current');
	    	}
	    });

	});
	
	
		
	// Waypoints Scrolling
	
	var links = $('.navigation').find('li');
	var button = $('.intro button');
    var section = $('section');
    var mywindow = $(window);
    var htmlbody = $('html,body');

    
    section.waypoint(function (direction) {

        var datasection = $(this).attr('data-section');

        if (direction === 'down') {
            $('.navigation li[data-section="' + datasection + '"]').addClass('active').siblings().removeClass('active');
        }
        else {
        	var newsection = parseInt(datasection) - 1;
            $('.navigation li[data-section="' + newsection + '"]').addClass('active').siblings().removeClass('active');
        }

    });
    
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-section="1"]').addClass('active');
            $('.navigation li[data-section="2"]').removeClass('active');
        }
    });
    
    function goToByScroll(datasection) {
        
        if (datasection == 1) {
	        htmlbody.animate({
	            scrollTop: $('.section[data-section="' + datasection + '"]').offset().top
	        }, 500, 'easeOutQuart');
        }
        else {
	        htmlbody.animate({
	            scrollTop: $('.section[data-section="' + datasection + '"]').offset().top + 70
	        }, 500, 'easeOutQuart');
        }
        
    }

    links.click(function (e) {
        e.preventDefault();
        var datasection = $(this).attr('data-section');
        goToByScroll(datasection);
    });
    
    button.click(function (e) {
        e.preventDefault();
        var datasection = $(this).attr('data-section');
        goToByScroll(datasection);
    });
  
    // Snap to scroll (optional)
    
    /*

    section.waypoint(function (direction) {

        var nextpos = $(this).attr('data-section');
        var prevpos = $(this).prev().attr('data-section');

        if (nextpos != 1) {
	        if (direction === 'down') {
	            htmlbody.animate({
		            scrollTop: $('.section[data-section="' + nextpos + '"]').offset().top
		        }, 750, 'easeOutQuad');
	        }
	        else {
	            htmlbody.animate({
		            scrollTop: $('.section[data-section="' + prevpos + '"]').offset().top
		        }, 750, 'easeOutQuad');
	        }
        }
        

    }, { offset: '60%' });	
    
    */
   
       
    
    
    // Redirect external links
	
	$("a[rel='external']").click(function(){
		this.target = "_blank";
	}); 	
	
	
	// Modernizr SVG backup
	
	if(!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
	        return $(this).attr('src').replace('.svg', '.png');
	    });
	}    
	    
   // Initialize Map
   initMap();

    
    // Animation Skills
    // CHART n1 Javascript
    											// Triggering only when it is inside viewport
											jQuery('.knob-85').waypoint(function(){         		        		        
												// Triggering now
										        jQuery('.knob-85').knob();     
										        // Animating the value
										        if(jQuery('.knob-85').val() == 0) {	
											    	jQuery({value: 0}).animate({value: jQuery('.knob-85').attr("rel")}, {
											        	duration: 5000,
											        	easing:'swing',
											        	step: function() 
												        	{
													            jQuery('.knob-85').val(Math.ceil(this.value)).trigger('change');
													        }
												    	})
											   	}	        	   	        
									   	        }
										        ,{
										          triggerOnce: true,
										          offset: function(){
										            return $(window).height() - $(this).outerHeight(); 
										          }
										        }
									        ); 
	// CHART n2 Java
    
    											// Triggering only when it is inside viewport
											jQuery('.knob-65').waypoint(function(){         		        		        
												// Triggering now
										        jQuery('.knob-65').knob();     
										        // Animating the value
										        if(jQuery('.knob-65').val() == 0) {	
											    	jQuery({value: 0}).animate({value: jQuery('.knob-65').attr("rel")}, {
											        	duration: 5000,
											        	easing:'swing',
											        	step: function() 
												        	{
													            jQuery('.knob-65').val(Math.ceil(this.value)).trigger('change');
													        }
												    	})
											   	}	        	   	        
									   	        }
										        ,{
										          triggerOnce: true,
										          offset: function(){
										            return $(window).height() - $(this).outerHeight(); 
										          }
										        }
									        ); 
									        
	// CHART n3 Android
												// Triggering only when it is inside viewport
											jQuery('.knob-70').waypoint(function(){         		        		        
												// Triggering now
										        jQuery('.knob-70').knob();     
										        // Animating the value
										        if(jQuery('.knob-70').val() == 0) {	
											    	jQuery({value: 0}).animate({value: jQuery('.knob-70').attr("rel")}, {
											        	duration: 5000,
											        	easing:'swing',
											        	step: function() 
												        	{
													            jQuery('.knob-70').val(Math.ceil(this.value)).trigger('change');
													        }
												    	})
											   	}	        	   	        
									   	        }
										        ,{
										          triggerOnce: true,
										          offset: function(){
										            return $(window).height() - $(this).outerHeight(); 
										          }
										        }
									        ); 
	
	// CHART n4 Python
	
	// Triggering only when it is inside viewport
											jQuery('.knob-60').waypoint(function(){         		        		        
												// Triggering now
										        jQuery('.knob-60').knob();     
										        // Animating the value
										        if(jQuery('.knob-60').val() == 0) {	
											    	jQuery({value: 0}).animate({value: jQuery('.knob-60').attr("rel")}, {
											        	duration: 5000,
											        	easing:'swing',
											        	step: function() 
												        	{
													            jQuery('.knob-60').val(Math.ceil(this.value)).trigger('change');
													        }
												    	})
											   	}	        	   	        
									   	        }
										        ,{
										          triggerOnce: true,
										          offset: function(){
										            return $(window).height() - $(this).outerHeight(); 
										          }
										        }
									        );    
    
    // Send Mail
    $("#submitButton").click( function(evt) {
    		$.ajax({
    			   url: 'http://sendmail.michogarcia.org/sendmail/mail', 
    				type: 'POST',
    				data: $('#contact-form').serialize(),
    				dataType:"json",
    				success : function() {
    					clearedForm()
    					$("#submitButton").val('Send it!');
    				},
    				error: function() {
    					clearedForm()
    					$("#submitButton").val('Send it!');    					
    				}
    		});
    });
    
    $("#submitButton").on('mouseover', function(evt) {
    	if ($("#submitButton").val() != 'Send Message') {
    		$("#submitButton").val('Send Message');
    	}
    })
});

function clearedForm() {
	$('#contact-form').each(function(){
		this.reset();
	})
}


