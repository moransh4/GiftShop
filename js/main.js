$(document).ready(function() {
	$('#search').focus(function() {
    $(this).parent().find('.placeholder').hide()
       
}).blur(function() {
    if ($(this).val() == '') {
        $(this).parent().find('.placeholder').show()
    }
})

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   

});


    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: true, 
      slidesPerView: 3,
    })   


    var $teaserGallery = $('.js-teaser-gallery-slider');

    if ($teaserGallery.length) {

        $teaserGallery.each(function() {

            /**
             * variables
             */
            var $this = $(this),
                slidesPerView = 3, // Default slides per view
                spaceBetween = 10, // space between slides
                pagination = '.swiper-pagination',
                nextButton = '.swiper-button-next',
                prevButton = '.swiper-button-prev';

            /**
             * if slidesPerView are set via data attribute (data-slides-per-view)
             * update slidesPerView with value as number
             */
            if ($this.is('[data-slides-per-view]')) {
                
                var dataSlidesPerView = parseInt($this.attr('data-slides-per-view'), 10);
                
                // check if dataSlidesPerView is numeric to take empty data-slides-per-view into account
                if($.isNumeric(dataSlidesPerView)) {
                    var slidesPerView = dataSlidesPerView; // jshint ignore:line                
                }
                
            }

            /**
             * initialize Swiper
             */
            new Swiper($this, {
                slidesPerView: slidesPerView,
                slidesPerGroup: slidesPerView,
                spaceBetween: spaceBetween,
                loop: true,
                paginationClickable: true,
                pagination: pagination,
                nextButton: nextButton,
                prevButton: prevButton
            });

            /**
             * move pagination above Swiper container
             */
            var $pagination = $this.find(pagination);
            $pagination.parent().before($pagination);

            /**
             * for styling reasons move nav buttons
             * above Swiper container
             */
            var $nextButton = $this.find(nextButton);
            var $prevButton = $this.find(prevButton);
            $nextButton.parent().before($nextButton);
            $prevButton.parent().before($prevButton);

        });
    }
});



