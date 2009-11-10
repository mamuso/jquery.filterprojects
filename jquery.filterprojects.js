(function($) {
  
  $.fn.randomize = function(){
    return $(this).sort(function() {return 0.5 - Math.random()});
  }
  
  $.fn.filterprojects = function(settings) {
    settings = $.extend({
      animationSpeed: 900,
      animationPulse: 100,
      animationEase: "linear",
      activeClass: "active",
      allTag: "all",
      randomize: true,
      show: { width: "show", opacity: "show" },
      hide: { width: "hide", opacity: "hide" },
      filterTagSelector: [] // specify at least one 
    }, settings);
          
    $(this).each(function(i, o){
      var _groups = [];
      var _elements = $(this).children();
      
      /* Binding the filter */
      $(this).bind("filter", function(){
        var _filtered_elements = _elements;
        $.each(settings.filterTagSelector, function(k, j){
          _groups[k] = [];
          $(this + "." + settings.activeClass).each(function(){ 
            if(!$(this).hasClass(settings.allTag) && this.hash != undefined) { _groups[k].push(this.hash.substring(1)); }
          });
          if(_groups[k].length > 0){
             _filtered_elements = _filtered_elements.filter("." + _groups[k].join(",.")); 
          }
        });
        
        /* Randomize */
        if(settings.randomize){
          _filtered_elements = _filtered_elements.randomize();
          _elements = _elements.randomize();
        }
        
        /* Show */
        _filtered_elements.each(function(i,o){
          $(this).queue(function(){
            $(this).animate({left: "+0"}, (settings.animationPulse*i)); // dirty trick :)
            $(this).animate(settings.show, settings.animationSpeed);
            $(this).dequeue()
          });
        });

        /* Hide */
        _elements.not(_filtered_elements).each(function(i,o){
          $(this).queue(function(){
            $(this).animate({left: "+0"}, (settings.animationPulse*i)); // dirty trick :)
            $(this).animate(settings.hide, settings.animationSpeed);
            $(this).dequeue()
          });
        });

      });
      
      /* Setup filter selectors */
      $.each(settings.filterTagSelector, function(k, j){
        $(""+this).click(function(e){
          e.preventDefault();
          if($(this).hasClass(settings.allTag)){
            $(j).removeClass(settings.activeClass);
            $(this).addClass(settings.activeClass);
          } else {
            $(this).hasClass(settings.activeClass) ? $(this).removeClass(settings.activeClass) : $(this).addClass(settings.activeClass);
            $(j+"."+settings.activeClass).length > 0 ? $(j+"."+settings.allTag).removeClass(settings.activeClass) : $(j+"."+settings.allTag).addClass(settings.activeClass);
          }
          /* Triggering the filter */ 
          $(o).trigger("filter");
        })
      });
      
    });
    
    return this
    
  };
})(jQuery);