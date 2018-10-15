CKEDITOR.plugins.add('layout_3image',{
    requires: 'widget',

    init: function(editor) {
        editor.widgets.add('layout_3image', {

            template:
                '<div class="layout_3image template_outline">' + 
                	'<div class="layout_3image_col1 template_outline"><img src="/sr/images/image_link_shim.png" /></div>' + 
                	'<div class="layout_3image_col2 template_outline"><img src="/sr/images/image_link_shim.png" /></div>' + 
                	'<div class="layout_3image_col3 template_outline"><img src="/sr/images/image_link_shim.png" /></div>' + 
                '</div><br />Continue adding content here...',

            editables: {
                column1: {
                    selector: '.layout_3image_col1'
                },
                column2: {
                    selector: '.layout_3image_col2'
                },
                column3: {
                    selector: '.layout_3image_col3'
                }
            },
            
            allowedContent: 'img; div(!layout_3image); div(!layout_3image_col1); div(!layout_3image_col2); div(!layout_3image_col3)',
            
            requiredContent: 'div(layout_3image)',

            upcast: function(element) {
                return element.name == 'div' && element.hasClass('layout_3image');
            }
        });
    }
} );