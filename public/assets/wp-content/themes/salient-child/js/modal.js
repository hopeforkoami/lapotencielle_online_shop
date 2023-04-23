jQuery(document).ready(function(){
    // Set div display to none
    jQuery(".close").click(function(){
        // jQuery("#exampleModal").css("display", "none");
        jQuery("#exampleModal").slideUp();
        jQuery("#exampleModal").slideUp("slow");
        jQuery("#exampleModal").slideUp(3000);
    });
    
    // Set div display to block
    jQuery(".show-btn").click(function(){
        // jQuery("#exampleModal").css("display", "block");
        jQuery("#exampleModal").slideDown();
        jQuery("#exampleModal").slideDown("slow");
        jQuery("#exampleModal").slideDown(3000);
    });	
});