(function() {
  var $, methods, settings;
  $ = jQuery;
  /*
  closure inside
  */
  settings = {
    effect_in: null,
    effect_out: null,
    options_in: null,
    options_out: null
  };
  methods = {
    /*
    	initializes the plugin
    	*/
    init: function(options) {
      return $(this).children('li').each(function() {
        var $this;
        if (options) {
          $.extend(settings, options);
        }
        $this = $(this);
        $this.children('ul').hide();
        $this.mouseenter(function() {
          if (settings.effect_in != null) {
            return eval("$(this).children('ul')." + settings.effect_in + "(" + settings.options_in + ")");
          } else {
            return $(this).children('ul').show();
          }
        });
        return $this.mouseleave(function() {
          if (settings.effect_in != null) {
            return eval("$(this).children('ul')." + settings.effect_out + "(" + settings.options_out + ")");
          } else {
            return $(this).children('ul').hide();
          }
        });
      });
    },
    /*
    	helper method to use the console.log if available
    	*/
    log: function(message) {
      try {
        return console.log(message);
      } catch (e) {

      }
    }
  };
  $.fn.dropdown = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      return $.error('Method ' + method + ' does not exist on jQuery.tooltip');
    }
  };
}).call(this);
