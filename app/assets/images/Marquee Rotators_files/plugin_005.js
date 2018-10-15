CKEDITOR.plugins.add('layout_staff_list',{
    requires: 'widget',

    init: function(editor) {
        editor.widgets.add('layout_staff_list', {

            template:
                '<div class="layout_staff_list template_outline">' + 
                	'<div class="layout_staff_list_col1 template_outline"><img src="/sr/images/image_link_shim.png" /></div>' + 
                	'<div class="layout_staff_list_col2 template_outline">' +
                		'<h2 class="layout_staff_list_name">Name</h2>' +
	                	'<div class="layout_staff_list_position">Position</div>' +
	                	'<div class="layout_staff_list_bio">Enter additonal information such as staff bio or links here.</div>' +
	                '</div>' + 
                '</div><br />Continue adding content here...',

            editables: {
                column1: {
                    selector: '.layout_staff_list_col1'
                },
                name: {
                    selector: '.layout_staff_list_name'
                },
                position: {
                    selector: '.layout_staff_list_position'
                },
                bio: {
                    selector: '.layout_staff_list_bio'
                }
            },
            
            allowedContent: 'div(!layout_staff_list); div(!layout_staff_list_col1); h2(!layout_staff_list_name); div(!layout_staff_list_position); div(!layout_staff_list_bio)',
            
            requiredContent: 'div(layout_staff_list)',

            upcast: function(element) {
                return element.name == 'div' && element.hasClass('layout_staff_list');
            }
        });
    }
} );