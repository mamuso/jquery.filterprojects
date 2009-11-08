(function($) {
  
  $.fn.randomize = function(){
    return $(this).sort(function() {return 0.5 - Math.random()});
  }
  
  $.fn.filterprojects = function(settings) {
    settings = $.extend({
      animationSpeed: 1400,
      animationPulse: 200,
      show: { width: 'show', opacity: 'show' },
      hide: { width: 'hide', opacity: 'hide' },
      filterTagSelector: [], // specify at least one 
      activeClass: 'active',
      allTag: 'all'
    }, settings);
          
    $(this).each(function(i, o){
      var _groups = [];
      var _elements = $("li", this);
      
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

        /* Show */
        _filtered_elements.randomize().each(function(i,o){
          $(this).queue(function(){
            $(this).animate({left: '+0'}, (settings.animationPulse*i)); // dirty trick :)
            $(this).animate(settings.show, settings.animationSpeed);
            $(this).dequeue()
          });
        });

        /* Hide */
        _elements.not(_filtered_elements).randomize().each(function(i,o){
          $(this).queue(function(){
            $(this).animate({left: '+0'}, (settings.animationPulse*i)); // dirty trick :)
            $(this).animate(settings.hide, settings.animationSpeed);
            $(this).dequeue()
          });
        });

      });
      
      /* Setup filter selectors */
      $.each(settings.filterTagSelector, function(k, j){
        $(''+this).click(function(e){
          e.preventDefault();
          if($(this).hasClass(settings.allTag)){
            $(j).removeClass(settings.activeClass);
            $(this).addClass(settings.activeClass);
          } else {
            $(this).hasClass(settings.activeClass) ? $(this).removeClass(settings.activeClass) : $(this).addClass(settings.activeClass);
            $(j+"."+settings.activeClass).length > 0 ? $(j+"."+settings.allTag).removeClass(settings.activeClass) : $(j+"."+settings.allTag).addClass(settings.activeClass);
          }
          /* filter */ 
          $(o).trigger("filter");
        })
      });
      
    });
    
  };
})(jQuery);