CKEDITOR.plugins.add('layout_3column',{
    requires: 'widget',

    init: function(editor) {
        editor.widgets.add('layout_3column', {

            template:
                '<div class="layout_3column template_outline">' + 
                	'<div class="layout_3column_col1 template_outline">Column1</div>' + 
                	'<div class="layout_3column_col2 template_outline">Column2</div>' + 
                	'<div class="layout_3column_col3 template_outline">Column3</div>' + 
                '</div>',

            editables: {
                column1: {
                    selector: '.layout_3column_col1'
                },
                column2: {
                    selector: '.layout_3column_col2'
                },
                column3: {
                    selector: '.layout_3column_col3'
                }
            },
            
            allowedContent: 'br; div(!layout_3column); div(!layout_3column_col1); div(!layout_3column_col2); div(!layout_3column_col3)',
            
            requiredContent: 'div(layout_3column)',

            upcast: function(element) {
                return element.name == 'div' && element.hasClass('layout_3column');
            }
        });
    }
} );