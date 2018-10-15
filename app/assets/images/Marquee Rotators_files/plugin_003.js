CKEDITOR.plugins.add('layout_4image',{
    requires: 'widget',

    init: function(editor) {
        editor.widgets.add('layout_4image', {

            template:
                '<div class="layout_4image template_outline">' + 
                	'<div class="layout_4image_col1 template_outline"><img src="/sr/images/image_link_shim.png" /></div>' + 
                	'<div class="layout_4image_col2 template_outline"><img src="/sr/images/image_link_shim.png" /></div>' + 
                	'<div class="layout_4image_col3 template_outline"><img src="/sr/images/image_link_shim.png" /></div>' + 
                	'<div class="layout_4image_col4 template_outline"><img src="/sr/images/image_link_shim.png" /></div>' +
                '</div><br />Continue adding content here...',

            editables: {
                column1: {
                    selector: '.layout_4image_col1'
                },
                column2: {
                    selector: '.layout_4image_col2'
                },
                column3: {
                    selector: '.layout_4image_col3'
                },
                column4: {
                    selector: '.layout_4image_col4'
                }
            },
            
            allowedContent: 'img; div(!layout_4image); div(!layout_4image_col1); div(!layout_4image_col2); div(!layout_4image_col3); div(!layout_4image_col4)',
            
            requiredContent: 'div(layout_4image)',

            upcast: function(element) {
                return element.name == 'div' && element.hasClass('layout_4image');
            }
        });
    }
} );