###
 jQuery DropDown Plugin
 https://github.com/gregmolnar/jquery-dropdown
 Copyright 2011, Greg Molnar
 Licensed under the MIT.
###
$ = jQuery

settings = {
	effect_in : null,
	effect_out : null,
	options_in : null,
	options_out: null
}
	

methods = 
	###
	initializes the plugin
	###
	init: (options) ->
		return $(this).children('li').each  -> 
			if options
		        $.extend settings, options
			$this = $(this)
			##hide all subnav element
			$this.children('ul').hide()
			$this.mouseenter  -> 
				if settings.effect_in?
					eval "$(this).children('ul')." + settings.effect_in + "(" + settings.options_in + ")"
				else
					$(this).children('ul').show()
			$this.mouseleave  -> 
				if settings.effect_in?
					eval "$(this).children('ul')." + settings.effect_out + "(" + settings.options_out + ")"
				else
					$(this).children('ul').hide()
	###
	helper method to use the console.log if available
	###			 
	log: (message) ->
		try
			console.log message
		catch e
			
$.fn.dropdown = ( method ) ->	
	if methods[method]
		methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ))
	else if typeof method == 'object' || ! method
		methods.init.apply( this, arguments )
	else
		$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' )