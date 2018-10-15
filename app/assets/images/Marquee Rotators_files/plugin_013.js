/*--- ckeditor/plugins/canceleditor/plugin.js ---*/

/*
* Cancel editor plugin
*
* Plugin name:      canceleditor
* Menu button name: CancelEditor
*
*/
( function() {
	var CancelCmd = { modes:{wysiwyg:1,source:1 },
		exec: function( editor ) {
			if (typeof flexVersion != 'undefined') {
				// when cancel button pressed, reload default data, clear undo history, destroy editor
				if (parent.window[editor.name + '-original'].substr(0,36) == '<div>[Enter your content here]</div>') {
					editor.setData('[Enter your content here]');
				} else {
					editor.setData(parent.window[editor.name + '-original']);
				}
				editor.resetUndo(true);
				
				// set contenteditable to false and destroy editor
				$('#' + editor.name).attr('contenteditable', 'false')
				editor.destroy();

			} else {

				var elementIdArray = editor.name.split("-");
				var pos = editor.name.lastIndexOf('-');
				var elementId = editor.name.substring(pos+1);
				var feEditable = $('.fe_editable');
				
				// when cancel button pressed, reload default data, clear undo history, destroy editor
				editor.setData(window[editor.name + '-original']);
				editor.resetUndo(true);
				
				// set contenteditable to false and destroy editor
				// set cursor to pointer for editable areas
				$('#' + editor.name).attr('contenteditable', 'false')
				$('#' + editor.name).css('cursor', 'pointer');
				editor.destroy();

				// run following code only if frontent editor toolbar is available
				if ($('.fe_toolbar').length > 0) {
					$('.cke_editable.cke_editable_inline, .contentEditable').css('cursor', 'auto');
					
					if($.cookie('fe_show_icons')==1) {
						$('#' + editor.name).prepend('<a class="fe_icon"></a>').addClass('fe_editable_style');
					}else {
						$('#' + editor.name).prepend('<a class="fe_icon" style="display:none;"></a>').addClass('fe_editable_style');
					}	
					
					// set cog click function for ckeditor areas to create editor instance
					$('#' + editor.name + '.contentEditable.fe_inline').find('.fe_icon').click(function() {
						var elementIdArray = $(this).parent().attr('id').split("-");
						createCkeditor( elementIdArray[1], elementIdArray[2], elementIdArray.pop() );
						
						CKEDITOR.on('instanceReady', function(event){
							var editor = event.editor;
							
							// when the editor is ready to be used, give it the focus
							editor.focus();
						});	 
					});
				} else {
					//normal operating code
				}
			}
		}
	};
	
	var pluginName = 'canceleditor';
	
    CKEDITOR.plugins.add( pluginName,
    {
		onLoad: function() {
			// Display label and chance text color to white
			CKEDITOR.addCss( '.cke_button__canceleditor .cke_button_label' +
				'{' +
					'display: inline !important;' +
					'color: #fff;' +
					'text-shadow: none;' +
				'}'
			);
			// Change default bgcolor	
			CKEDITOR.addCss( '.cke_button.cke_button__canceleditor' +
				'{' +
					'background-color: #555;' +
				'}'
			);
			// Change active bgcolor	
			CKEDITOR.addCss( '.cke_button__canceleditor.cke_button_off:hover,.cke_button__canceleditor.cke_button_off:focus,.cke_button__canceleditor.cke_button_off:active' +
				'{' +
					'-moz-box-shadow: 0 0 1px rgba(0,0,0,.3) inset;' +
					'-webkit-box-shadow: 0 0 1px rgba(0,0,0,.3) inset;' +
					'box-shadow: 0 0 1px rgba(0,0,0,.3) inset;' +
					'background: #666;' +
				'}'
			);
			// Change active bgcolor	
			CKEDITOR.addCss( '.cke_button__canceleditor_icon' +
			'{' +
				'display: none;' +
			'}'
			);
		},
        init: function( editor )
        {
			editor.addCommand( pluginName, CancelCmd );
            editor.ui.addButton( 'CancelEditor',
            {
                label: 'Cancel',
                command: pluginName,
                icon: this.path + 'images/cancel_edit.png',
                toolbar: 'canceleditor'
            } );
        }
    } );
} )();

/*--- ckeditor/plugins/canceleditor/plugin.js ---*/