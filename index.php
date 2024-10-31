<?php 
/*
	Plugin Name:	Post Metaboxes Tabs
	Plugin URI:		http://www.attitude.sk/
	Description:	Groups mataboxes when editing post/page in administration backend to tabs according to metabox name pattern 'Group Name/Metabox'.
	Author:			Martin Adamko
	Version:		0.1
	Author URI:		http://www.attitude.sk/
	Licence:		GPL2
*/

/*  Copyright 2011  Martin Adamko  (email : martin@attitude.sk)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as 
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

	class Metaboxes_tabs {
		function append_to_header() {
			$plugin_url = plugins_url() .'/'. basename(dirname(__FILE__));
			$css_url = $plugin_url . '/tabs.css';
			$js_url = $plugin_url . '/tabs.js';
			echo "\n".'<link rel="stylesheet" type="text/css" href="'.$css_url.'" />';
			echo "\n".'<script type="text/javascript" src="'.$js_url.'"></script>';
		}
	}
	
	add_action('admin_head', array( 'Metaboxes_tabs', 'append_to_header' ) );

?>