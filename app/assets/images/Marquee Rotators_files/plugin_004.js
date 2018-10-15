CKEDITOR.plugins.add('layout_3image_text',{
    requires: 'widget',

    init: function(editor) {
        editor.widgets.add('layout_3image_text', {

            template:
                '<div class="layout_3image_text template_outline">' + 
                	'<div class="layout_3image_text_col1 template_outline">' +
                		'<div class="layout_3image_text_image1">' +
	                		'<img src="/sr/images/image_link_shim.png" />' +
	                	'</div>' +
                		'<div class="layout_3image_textl_content1">Enter content here...</div>' +
                	'</div>' +
                	'<div class="layout_3image_text_col2 template_outline">' +
                		'<div class="layout_3image_text_image2">' +
	                		'<img src="/sr/images/image_link_shim.png" />' +
	                	'</div>' +
                		'<div class="layout_3image_textl_content2">Enter content here...</div>' +
                	'</div>' +
                	'<div class="layout_3image_text_col3 template_outline">' +
                		'<div class="layout_3image_text_image3">' +
	                		'<img src="/sr/images/image_link_shim.png" />' +
	                	'</div>' +
                		'<div class="layout_3image_textl_content3">Enter content here...</div>' +
                	'</div>' +
                '</div><br />Continue adding content here...',

            editables: {
                column1: {
                    selector: '.layout_3image_text_image1'
                },
                column2: {
                    selector: '.layout_3image_text_image2'
                },
                column3: {
                    selector: '.layout_3image_text_image3'
                },
                content1: {
                    selector: '.layout_3image_textl_content1'
                },
                content2: {
                    selector: '.layout_3image_textl_content2'
                },
                content3: {
                    selector: '.layout_3image_textl_content3'
                }
            },
            
            allowedContent: 'img; div(!layout_3image_text); div(!layout_3image_text_image1); div(!layout_3image_text_image2); div(!layout_3image_text_image3); div(!layout_3image_textl_content1); div(!layout_3image_textl_content2); div(!layout_3image_textl_content3)',
            
            requiredContent: 'div(layout_3image_text)',

            upcast: function(element) {
                return element.name == 'div' && element.hasClass('layout_3image_text');
            }
        });
    }
} );