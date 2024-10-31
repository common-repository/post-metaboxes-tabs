jQuery(window).load(function() {
	// Make sure the script fires only when editing post:
	if( jQuery('form#post').length != 0 ) {
		// Find boxes where their names are set as as 'Group this box belongs to/Metabobox name'
		boxes = jQuery('form#post h3.hndle:contains("/")').parents('.postbox');
		
		// The menu html source code:
		menu_html = '<ul id="metaboxes-tabs" class="clearfix">\n';
		
		// Associative array for notes which has been applied:
		var tabs=new Array();
		for (var i = boxes.length-1, n = 0; i >= n; i-- ) {
			target_id = jQuery(boxes[i]).attr('id');
			// Get name parts
			boxnameparts = jQuery(boxes[i]).find('h3.hndle').text().split('/');
			if( boxnameparts.length > 1 ) {
				// Set tab name
				tabname = boxnameparts[0];
				// Set new name
				jQuery(boxes[i]).find('h3.hndle').text( boxnameparts[(boxnameparts.length - 1)].toString().trim() );
				
				if( tabname in tabs ) {
				}else {
					status = jQuery('#' + target_id + '-hide');
					if (jQuery(status + ':checked')) {
						menu_html = menu_html + '\n<li class="metabox-tab"><a href="#" metabox-tab="'+i+'">' + tabname + '</a></li>';
					} else { 
						menu_html = menu_html + '\n<li class="metabox-tab" style="display:none;"><a href="#" metabox-tab="'+i+'">' + tabname + '</a></li>';	
					}
					tabs[tabname] = i;
				}
				jQuery('#'+target_id).attr('metabox-tab', tabs[tabname]);
			}
		}
		menu_html = menu_html + '\n</ul>';
		// Attach menu
		jQuery('#normal-sortables').before(menu_html);
		jQuery('#metaboxes-tabs li:first').addClass('active');
		var first_tabs_index = jQuery('#metaboxes-tabs li:first').find('a').attr('metabox-tab');
		
		// Initialize tab interface / first tab active
		jQuery('.postbox[metabox-tab]').hide();
		jQuery('.postbox[metabox-tab='+first_tabs_index+']').show();
		// Workaround for collapsed scoll pannels for Magic Fields
		if(jQuery.isFunction( jQuery.fn.mf_group_expand) === true ) {
			jQuery('.postbox[metabox-tab='+first_tabs_index+']').find(".magicfield_group").mf_group_expand(true);
			jQuery('.postbox[metabox-tab='+first_tabs_index+']').find(".magicfield_group:not(.mf-group-expanded)").mf_group_summary(true);
		}
		
		// Switching tabs
		jQuery('a[metabox-tab]').click(function(){
			var tabindex = jQuery(this).attr('metabox-tab');
			// Set active menu item
			jQuery('#metaboxes-tabs li').removeClass('active');
			jQuery('a[metabox-tab="'+tabindex+'"]').parent().addClass( 'active' );
			// Show current tab metaboxes
			jQuery('.postbox[metabox-tab]').hide();
			jQuery('.postbox[metabox-tab='+tabindex+']').show();
			
			// Workaround for collapsed scoll pannels for Magic Fields
			if(jQuery.isFunction( jQuery.fn.mf_group_expand) === true ) {
				jQuery('.postbox[metabox-tab='+tabindex+']').find(".magicfield_group").mf_group_expand(true);
				jQuery('.postbox[metabox-tab='+tabindex+']').find(".magicfield_group:not(.mf-group-expanded)").mf_group_summary(true);
			}
			return false;
		}); 
	}
	
});