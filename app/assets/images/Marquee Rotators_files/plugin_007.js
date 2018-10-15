CKEDITOR.plugins.add('layout_image_left',{
    requires: 'widget',

    init: function(editor) {
        editor.widgets.add('layout_image_left', {

            template:
                '<div class="layout_image_left template_outline">' + 
                	'<div class="layout_image_left_col1 template_outline"><img src="/sr/images/image_link_shim.png" /></div>' + 
                	'<div class="layout_image_left_col2 template_outline">Column2</div>' + 
                '</div><br />Continue adding content here...',

            editables: {
                column1: {
                    selector: '.layout_image_left_col1'
                },
                column2: {
                    selector: '.layout_image_left_col2'
                }
            },
            
            allowedContent: 'div(!layout_image_left); div(!layout_image_left_col1); div(!layout_image_left_col2)',
            
            requiredContent: 'div(layout_image_left)',

            upcast: function(element) {
                return element.name == 'div' && element.hasClass('layout_image_left');
            }
        });
    }
} );