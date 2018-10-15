CKEDITOR.plugins.add('layout_4column',{
    requires: 'widget',

    init: function(editor) {
        editor.widgets.add('layout_4column', {

            template:
                '<div class="layout_4column template_outline">' + 
                	'<div class="layout_4column_col1 template_outline">Column1</div>' + 
                	'<div class="layout_4column_col2 template_outline">Column2</div>' + 
                	'<div class="layout_4column_col3 template_outline">Column3</div>' + 
                	'<div class="layout_4column_col4 template_outline">Column4</div>' + 
                '</div>',

            editables: {
                column1: {
                    selector: '.layout_4column_col1'
                },
                column2: {
                    selector: '.layout_4column_col2'
                },
                column3: {
                    selector: '.layout_4column_col3'
                },
                column4: {
                    selector: '.layout_4column_col4'
                }
            },
            
            allowedContent: 'br; div(!layout_4column); div(!layout_4column_col1); div(!layout_4column_col2); div(!layout_4column_col3); div(!layout_4column_col4)',
            
            requiredContent: 'div(layout_4column)',

            upcast: function(element) {
                return element.name == 'div' && element.hasClass('layout_4column');
            }
        });
    }
} );