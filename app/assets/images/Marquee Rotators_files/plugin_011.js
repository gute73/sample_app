CKEDITOR.plugins.add('layout_2column',{
    requires: 'widget',

    init: function(editor) {
        editor.widgets.add('layout_2column', {

            template:
                '<div class="layout_2column template_outline">' + 
                	'<div class="layout_2column_col1 template_outline">Column1</div>' + 
                	'<div class="layout_2column_col2 template_outline">Column2</div>' + 
                '</div>',

            editables: {
                column1: {
                    selector: '.layout_2column_col1'
                },
                column2: {
                    selector: '.layout_2column_col2'
                }
            },
            
            allowedContent: 'br; div(!layout_2column); div(!layout_2column_col1); div(!layout_2column_col2)',
            
            requiredContent: 'div(layout_2column)',

            upcast: function(element) {
                return element.name == 'div' && element.hasClass('layout_2column');
            }
        });
    }
});