CKEDITOR.plugins.add('layout_image_right',{
    requires: 'widget',

    init: function(editor) {
        editor.widgets.add('layout_image_right', {

            template:
                '<div class="layout_image_right template_outline">' + 
                	'<div class="layout_image_right_col1 template_outline">Column1</div>' + 
                	'<div class="layout_image_right_col2 template_outline"><img src="/sr/images/image_link_shim.png" /></div>' + 
                '</div><br />Continue adding content here...',

            editables: {
                column1: {
                    selector: '.layout_image_right_col1'
                },
                column2: {
                    selector: '.layout_image_right_col2'
                }
            },
            
            allowedContent: 'div(!layout_image_right); div(!layout_image_right_col1); div(!layout_image_right_col2)',
            
            requiredContent: 'div(layout_image_right)',

            upcast: function(element) {
                return element.name == 'div' && element.hasClass('layout_image_right');
            }
        });
    }
} );