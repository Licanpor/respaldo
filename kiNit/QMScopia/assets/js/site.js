if (typeof console == "object") log = console.log;
else log = function() {};

/* BEGIN JQUERY 
================================== */
$(document).ready(function() {
	centradoBoletines();
	var filter = 'none'; 
	
	$('#fullpage').fullpage( {
    		easing: 'easeOutSine',
    		loopHorizontal: false,
    		resize:  false,
            slidesNavigation: false,
            controlArrows: false,
            navigation: false,
    		anchors: ['inicio', 'nosotros', 'marcas', 'categorias', 'boletines', 'contacto'],
            
    		afterLoad: function(anchorLink, index) {
            }, // FULLPAGE.afterLoad
            
            onLeave: function(index, nextIndex, direction) {
            }, // FULLPAGE.onLeave
            
            
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) { 
            	
            	 var loadedSlide = $(this);

	            //after first slide of the marcas section
	            if(anchorLink == 'marcas' && slideIndex != 0){
	            	$('#section-marcas .marca-holder').css('overflow-y', 'scroll');
	            	$('#section-marcas .product').hide();
	            	setTimeout(function() {
            		$('#section-marcas .product').fadeTo('slow',1);
            		}, 500); 
	            	           
	            }
	            
	            //after first slide of the categorias section
	            if(anchorLink == 'categorias' && slideIndex != 0){ 
	            	$('#section-categorias .cat-holder').css('overflow-y', 'scroll'); 
	            	$('#section-categorias .product').hide();
	            	setTimeout(function() {
            		$('#section-categorias .product').fadeTo('slow',1);
            		}, 500);
	            }
            	                                                               
            }, // FULLPAGE.afterSlideLoad
            
            onSlideLeave: function(anchorLink, index, slideAnchor, slideIndex) { 
            	
            	 var loadedSlide = $(this);            	             	 
            	                                                               
            }, // FULLPAGE.onSlideLeave
            
            afterRender: function() {
            	
            	//disabling scrolling down and up
				$.fn.fullpage.setAllowScrolling(false, 'down, up');	 
            	
            	/* PROMO FADE */
            	$('.splash.promo').css('z-index', 4);
            	setTimeout(function() {
            		$('.splash.promo').animate({opacity: 1},500);
            		}, 1500);            	            
            	
            	/* BOLETINES */
            	
            	$('#section-boletines a').click(function(e) {
            		e.preventDefault();            		
            		var target = '.boletin-'+$(this).attr('href');
            		$(target).css('z-index', 4);
            		$(target).animate({opacity: 1},500);
            	});
            	
            	$('.close').click(function() {
            		var target = $(this).data('parent');
            		$('.splash'+target).animate({opacity: 0},200, function(){$(this).css('z-index', '-1');});
            	});
            		
            	/* NAVIGATION DROPDOWN */
            	$('#navigation a.drop').click(function () {
            		$('#navigation ul.dropdown').removeClass('hidden');
            	});
            	
            	$('#navigation ul.dropdown').mouseleave( function () {
            		$('#navigation ul.dropdown').addClass('hidden');
            	});
            	
            	$('#navigation ul.dropdown').click( function () {
            		$('#navigation ul.dropdown').addClass('hidden');
            	});
            	
            	/* PRODUCT FILTERS */
            	$('.marca-holder a.filter').click(function() {
            		$('a.filter').css('font-weight', 'normal');            		           	
            		filter = $(this).data('filter'); 	            		            	
	            	
	            	switch (filter) {
	            		case 'lamparas':
	            			$('.product').hide();    		
		            		setTimeout(function() {	 		
		            		$('.product.lamparas_frontales, .product.lamparas_exploracion').fadeTo('slow',1);
		            		}, 500);
	            		break;
	            		
	            		case 'todos':
	            			$('.product').hide();
	            			setTimeout(function() {
	            			$('.product').fadeTo('slow',1);
	            			}, 500);
	            		break;
	            		
	            		default:
		            		$('.product').hide();
		            		setTimeout(function() {
		            		$('.product.'+filter).fadeTo('slow',1);
		            		}, 500);	            		
	            	}
	            		            		            	   
	            	$(this).css('font-weight', 'bold');   		          	
            	});
            	
            	$('p.prods a.filter').click(function() {            		           	
            		filter = $(this).data('filter'); 	            		
            		
            		switch (filter) {
	            		case 'lamparas':	            			
		            		setTimeout(function() {	
		            		$('.product').hide(); 		
		            		$('.product.lamparas_frontales, .product.lamparas_exploracion').show();
		            		}, 2000);
	            		break;
	            		
	            		default:		            		
		            		setTimeout(function() {
		            		$('.product').hide();
		            		$('.product.'+filter).show();
		            		}, 2000);	            	
	            	} 	            		              		          	
            	});
            	
            	/* PRODUCT NAVIGATION */
            	$('a.marca').click(function() {
                        console.log("hola");
            		$('a.filter').css('font-weight', 'normal'); 
            		if($(this).hasClass('to-aaronbovie')) {
            			$.fn.fullpage.moveTo('marcas', 1);
            		}
            		if($(this).hasClass('to-huntleigh')) {            			
            			$.fn.fullpage.moveTo('marcas', 2);
            		}
            		if($(this).hasClass('to-littmann')) {
            			$.fn.fullpage.moveTo('marcas', 3);
            		}
            		if($(this).hasClass('to-metro')) {
            			$.fn.fullpage.moveTo('marcas', 4);
            		}
            		if($(this).hasClass('to-midmark')) {
            			$.fn.fullpage.moveTo('marcas', 5);
            		}
            		if($(this).hasClass('to-miltek')) {
            			$.fn.fullpage.moveTo('marcas', 6);
            		}
            		if($(this).hasClass('to-nonin')) {
            			$.fn.fullpage.moveTo('marcas', 7);
            		}
            		if($(this).hasClass('to-ricelake')) {
            			$.fn.fullpage.moveTo('marcas', 8);
            		}
            		if($(this).hasClass('to-schiller')) {
            			$.fn.fullpage.moveTo('marcas', 9);
            		}
            		if($(this).hasClass('to-seca')) {
            			$.fn.fullpage.moveTo('marcas', 10);
            		}
            		if($(this).hasClass('to-wallach')) {
            			$.fn.fullpage.moveTo('marcas', 11);
            		}
            		if($(this).hasClass('to-welchallyn')) {
            			$.fn.fullpage.moveTo('marcas', 12);
            		} 
            		if($(this).hasClass('to-mortara')) {
            			$.fn.fullpage.moveTo('marcas', 13);
            		}
            		if($(this).hasClass('to-philips')) {
            			$.fn.fullpage.moveTo('marcas', 14);
            		}             		
            		if($(this).hasClass('to-inicio')) {
            			$.fn.fullpage.moveTo('marcas', 0);
            		}
            	});
            	
            	$('a.categoria').click(function() {
            		if($(this).hasClass('to-basculas')) {
            			$.fn.fullpage.moveTo('categorias', 1);
            		}
            		if($(this).hasClass('to-carro')) {
            			$.fn.fullpage.moveTo('categorias', 2);
            		}
            		if($(this).hasClass('to-crio')) {
            			$.fn.fullpage.moveTo('categorias', 3);
            		}
            		if($(this).hasClass('to-desf')) {
            			$.fn.fullpage.moveTo('categorias', 4);
            		}
            		if($(this).hasClass('to-dopplers')) {
            			$.fn.fullpage.moveTo('categorias', 5);
            		}
            		if($(this).hasClass('to-electrocar')) {
            			$.fn.fullpage.moveTo('categorias', 6);
            		}
            		if($(this).hasClass('to-electrocir')) {
            			$.fn.fullpage.moveTo('categorias', 7);
            		}
            		if($(this).hasClass('to-esfigmo')) {
            			$.fn.fullpage.moveTo('categorias', 8);
            		}
            		if($(this).hasClass('to-esteto')) {
            			$.fn.fullpage.moveTo('categorias', 9);
            		}
            		if($(this).hasClass('to-estuches')) {
            			$.fn.fullpage.moveTo('categorias', 10);
            		}
            		if($(this).hasClass('to-espejos')) {
            			$.fn.fullpage.moveTo('categorias', 11);
            		}
            		if($(this).hasClass('to-espiro')) {
            			$.fn.fullpage.moveTo('categorias', 12);
            		}
            		if($(this).hasClass('to-exploracion')) {
            			$.fn.fullpage.moveTo('categorias', 13);
            		}
            		if($(this).hasClass('to-frontales')) {
            			$.fn.fullpage.moveTo('categorias', 14);
            		}
            		if($(this).hasClass('to-laringo')) {
            			$.fn.fullpage.moveTo('categorias', 15);
            		}
            		if($(this).hasClass('to-mesas')) {
            			$.fn.fullpage.moveTo('categorias', 16);
            		}
            		if($(this).hasClass('to-monitores')) {
            			$.fn.fullpage.moveTo('categorias', 17);
            		}
            		if($(this).hasClass('to-oxi')) {
            			$.fn.fullpage.moveTo('categorias', 18);
            		}
            		if($(this).hasClass('to-toco')) {
            			$.fn.fullpage.moveTo('categorias', 19);
            		}
            		if($(this).hasClass('to-nebulizadores')) {
            			$.fn.fullpage.moveTo('categorias', 20);
            		}
            		if($(this).hasClass('to-camaras')) {
            			$.fn.fullpage.moveTo('categorias', 21);
            		}
            		if($(this).hasClass('to-inicio')) {
            			$.fn.fullpage.moveTo('categorias', 0);
            		}
            	});
            	
            	// PRODUCT JSON LOAD
            	var template;          
            	$.each(listaProductos.productos, function(key, val) {
                        
            		template =             
            		'<div class=" row product '+val.categoria+'">'+
            		'<div class="col-xs-3 col-sm-3 col-md-4 no-padding product-thumb">'+
            		'<img class="img-responsive" src="assets/images/productos/'+val.codigo.replace(/ /g,'')+'.jpg" /></div>'+
            		'<div class="col-xs-9 col-sm-9 col-md-8 no-padding">'+
            		'<p class="text-green weight-strong">'+val.codigo+'</p>'+
            		'<p class="text-medium" style="height:75px; width:95%">'+val.descripcion+'</p>'+
            		'<p><a href="'+val.ruta_catalogo+'" target="_blank">ver catálogo ></a></p>'+
            		'</div>'+
            		'</div>';
            		
            		switch(val.marca) {
            			case 'aaronbovie':
            				$('.aaronbovie .product-child').append(template);
            			break;
            			
            			case 'huntleigh':
            				$('.huntleigh .product-child').append(template);
            			break;
            			
            			case 'littmann':
            				$('.littmann .product-child').append(template);
            			break;
            			
            			case 'metro':
            				$('.metro .product-child').append(template);
            			break;
            			
            			case 'midmark':
            				$('.midmark .product-child').append(template);
            			break;
            			
            			case 'miltex':
            				$('.miltex .product-child').append(template);
            			break;
            			
            			case 'nonin':
            				$('.nonin .product-child').append(template);
            			break;
            			
            			case 'ricelake':
            				$('.ricelake .product-child').append(template);
            			break;
            			
            			case 'schiller':
            				$('.schiller .product-child').append(template);
            			break;
            			
            			case 'seca':
            				$('.seca .product-child').append(template);
            			break;
            			
            			case 'wallach':
            				$('.wallach .product-child').append(template);
            			break;
            			
            			case 'welchallyn':
            				$('.welchallyn .product-child').append(template);
            			break;
            			
            			case 'mortara':
            				$('.mortara .product-child').append(template);
            			break;
            			
            			case 'philips':
            				$('.philips .product-child').append(template);
            			break;
            			
            			default:
            				alert('ERROR! >> MARCA no registrada en catalogo.\n\nMARCA: '+val.marca+'\nID: '+val.id);
            		console.log("SE BUSCA");
                        }
            		
            		switch(val.categoria) {
            			case 'basculas':
            				$('.basculas .product-child').append(template);
            			break;
            			
            			case 'carro_rojo':
            				$('.carro_rojo .product-child').append(template);
            			break;
            			
            			case 'criocirugia':
            				$('.criocirugia .product-child').append(template);
            			break;
            			
            			case 'desfibriladores':
            				$('.desfibriladores .product-child').append(template);
            			break;
            			
            			case 'dopplers':
            				$('.dopplers .product-child').append(template);
            			break;
            			
            			case 'electrocardiografos':
            				$('.electrocardiografos .product-child').append(template);
            			break;
            			
            			case 'electrocirugia':
            				$('.electrocirugia .product-child').append(template);
            			break;
            			
            			case 'esfigmomanometros':
            				$('.esfigmomanometros .product-child').append(template);
            			break;
            			
            			case 'estetoscopios':
            				$('.estetoscopios .product-child').append(template);
            			break;
            			
            			case 'estuches_diagnostico':
            				$('.estuches_diagnostico .product-child').append(template);
            			break;
            			
            			case 'espejos_vaginales':
            				$('.espejos_vaginales .product-child').append(template);
            			break;
            			
            			case 'espirometria':
            				$('.espirometria .product-child').append(template);
            			break;
            			
            			case 'lamparas_exploracion':
            				$('.lamparas_exploracion .product-child').append(template);
            			break;
            			
            			case 'lamparas_frontales':
            				$('.lamparas_frontales .product-child').append(template);
            			break;
            			
            			case 'laringoscopios':
            				$('.laringoscopios .product-child').append(template);
            			break;
            			
            			case 'mesas':
            				$('.mesas .product-child').append(template);
            			break;
            			
            			case 'monitores':
            				$('.monitores .product-child').append(template);
            			break;
            			
            			case 'oximetros':
            				$('.oximetros .product-child').append(template);
            			break;
            			
            			case 'tococardiografos':
            				$('.tococardiografos .product-child').append(template);
            			break;
            			
            			case 'nebulizadores':
            				$('.nebulizadores .product-child').append(template);
            			break;
            			
            			case 'camaras':
            				$('.camaras .product-child').append(template);
            			break;
            			
            			default:
            				alert('ERROR! >> CATEGORIA no registrada en catalogo.\n\nCATEGORIA: '+val.categoria+'\nID: '+val.id);
            		}
            	});
            	
            	$("#submit_btn").click(function() { 
            
		            var user_message = $('textarea[name=userMessage]').val(); 
		            var user_name = $('textarea[name=userName]').val(); 
		            var user_mail = $('textarea[name=userEmail]').val(); 
		            var user_phone = $('textarea[name=userPhone]').val(); 
		          
		                       
		            var proceed = true;
		            
		            if(user_message.trim() == "") {  
		                $('textarea[name=userMessage]').css({
		                	'background-color':'#FFCCCC'
		                	}); 
		                $('textarea[name=userMessage]').attr('placeholder','CAMPO REQUERIDO*');
		                proceed = false;
		            }
		            
		             if(user_name.trim() == "") {  
		                $('textarea[name=userName]').css({
		                	'background-color':'#FFCCCC'
		                	}); 
		                $('textarea[name=userName]').attr('placeholder','CAMPO REQUERIDO*');
		                proceed = false;
		            }
		            
		             if(user_mail.trim() == "") {  
		                $('textarea[name=userEmail]').css({
		                	'background-color':'#FFCCCC'
		                	}); 
		                $('textarea[name=userEmail]').attr('placeholder','CAMPO REQUERIDO*');
		                proceed = false;
		            }
		            
		            if(user_phone.trim() == "") {  
		                user_phone = 'sin teléfono';
		            }
		            
		            setTimeout(function() {          			            
			            if(proceed) 
			            {
			                //data to be sent to server
			                post_data = {userMessage:user_message, userName:user_name, userEmail:user_mail, userPhone:user_phone};						
			                //Ajax post data to server
			                $.post('assets/php/contacto.php', post_data, function(response){  
			
			                    //load json data from server and output message     
			                    /*
			                    if(response.type == 'error')
			                    {
			                        output = '<div class="error">'+response.text+'</div>';
			                        alert(response.text);
			                    }else{
			
			                        output = '<div class="success">'+response.text+'</div>';
			                        //reset values in all input fields
			                        $('#contact_form textarea').val(''); 
			                    }
			                    */
			                   
			                   $('#contact_form').hide();
			                   
			                   $(".contact-response").html(response.text).fadeIn(250);
			                 }, 'json');
			            }
			         }, 800);
			         return false;			        
		        });

            		
            }, // FULLPAGE.afterRender (starting point)
            
    	}); // FULLPAGE
        
        /* *** */
    
       /* GOOGLE MAPS */
      $('#map_canvas').ready(function() {
    	var mapCanvas = document.getElementById('map_canvas');    	
    	var myLatlng = new google.maps.LatLng(19.3814841, -99.1312708);
    	var mapOptions = {
      		center: myLatlng,
      		zoom: 15,
      		disableDefaultUI: true,
      		scrollwheel: false,
      		panControl: true,
			zoomControl: true,
      		mapTypeId: google.maps.MapTypeId.ROADMAP
    	};
    	var map = new google.maps.Map(mapCanvas, mapOptions);
    	var marker = new google.maps.Marker({
     		position: myLatlng,
      		map: map,
      		title: 'Quality Medical Service'
  		});
    	
    	//map.set('styles', [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]);
    	map.set('styles', [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]);
  	});

      function centradoBoletines(){
            var altura_img = $('.splash.promo img').height();
            var ancho_img = $('.splash.promo img').width();
             var altura_screen = $('.splash.promo').height();
            var ancho_screen = $('.splash.promo').width();

            $('.splash.promo img').css('margin-top', ((altura_screen/2)-(altura_img/2)+'px'));
            // console.log('altura:' + altura + 'Ancho: '+ ancho);
            // console.log(altura/2*-1);
            $('.splash.promo img').css('margin-left', ((ancho_screen/2)-(ancho_img/2)+'px'));
            // console.log(ancho/2*-1);

            var altura_img_boletin = $('.splash.boletin-img img').height();
            var ancho_img_boletin = $('.splash.boletin-img img').width();
             var altura_screen_boletin = $('.splash.boletin-img').height();
            var ancho_screen_boletin = $('.splash.boletin-img').width();

            $('.splash.boletin-img img').css('margin-top', ((altura_screen_boletin/2)-(altura_img_boletin/2)+'px'));
            // console.log('altura:' + altura + 'Ancho: '+ ancho);
            // console.log(altura/2*-1);
            $('.splash.boletin-img img').css('margin-left', ((ancho_screen_boletin/2)-(ancho_img_boletin/2)+'px'));
            // console.log(ancho/2*-1);

      }


}); // END JQUERY