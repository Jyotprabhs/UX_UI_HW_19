

function scrollToAnchor(aid){
  aid.preventDefault();
    const destination = $("a[name='"+ aid +"']");
      $('html,body').animate({
        scrollTop: destination.offset().top
      },'slow');
  }
  
  $(".cta").on('click', '.smooth-link', function(){
    
    scrollToAnchor('demo');
  })

 