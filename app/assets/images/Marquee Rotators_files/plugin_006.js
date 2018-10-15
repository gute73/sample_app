/*--- ckeditor/plugins/saveeditor/plugin.js ---*/

/*
* Save editor plugin
*
* Plugin name:      saveeditor
* Menu button name: SaveEditor
*
*/
( function() {
	var saveCmd = { modes:{wysiwyg:1,source:1 },
		exec: function( editor ) {
			if (typeof flexVersion != 'undefined') {
				var data = editor.getData();
				if (data =='') {
					editor.setData('[Enter your content here]');
				}
				var fe = parent.fe;
				fe.sectionArea.currentBlocks[fe.sectionArea.area].blocks[fe.blockSettings.blockID].settings.content = editor.getData();
				fe.blockSettings.saveInlineEditChanges();

				// set contenteditable to false and destroy editor
				// set cursor to pointer for editable areas
				$('#' + editor.name).attr('contenteditable', 'false');
				$('#' + editor.name).css('cursor', 'pointer');
				editor.destroy();				
			} else {
				var data = editor.getData();
				
				var elementIdArray = editor.name.split("-");		
				//if needed, strip off unique identifier
				var parts = elementIdArray[elementIdArray.length - 1].split('_');
				var elementId = parts[0];
				var feEditable = $('.fe_editable');
				
				if (typeof feds !== 'undefined') {
					var interestItemType = parts[2];
					
					if (feds.redesignMode) {
						urlPrefix = '../admin/';
					} else {
						urlPrefix = 'admin/';
					}

					if (elementIdArray[1] == 'page') {
						var pc = '&pc=1';
					} else {
						var pc = '';
					}

					if (elementIdArray[1] == 'custom') {
						var cust = '&cust=' + elementIdArray[2];
					} else {
						var cust = '';
					}
					
					var url = urlPrefix + 'ajax_actions.cfm?action=inline_save&content=' + elementIdArray[1] + '&id=' + elementId + '&fieldName=' + elementIdArray[2] + '&flex_design=1&iiversion=' + designSection.options.interest_item_version + pc + cust;
				} else {
					var url = 'admin/ajax_actions.cfm?action=inline_save&content=' + elementIdArray[1] + '&id=' + elementId + '&fieldName=' + elementIdArray[2];
				}

				// if the original data is the same as the data to be saved, don't do anything
				if (data != window[editor.name + '-original']) {
					if(window.location.href.indexOf("/admin") >= 0){
						url = 'ajax_actions.cfm?action=inline_save&content=' + elementIdArray[1] + '&id=' + elementId + '&fieldName=' + elementIdArray[2];
					}
					$.ajax({
						type: 'POST',
						cache: false,
						url: url,
						data: 'data=' + encodeURIComponent(data),
						dataType: 'html',
						success: function(){
							if (typeof NMUtils !== 'undefined') {
								NMUtils.addSuccessAlert("Changes Saved", 3000);
							} else {
								if (typeof nmFlex !== 'undefined') {
									nmFlex.addSuccessAlert("Changes Saved", 3000);
									$('.interest_item_type_' + interestItemType).html(data);
									if (data == '') {
										$('.interest_item_type_' + parts[parts.length - 1]).text('[ optional content here ]').addClass('feds_optional_text');
									} else {
										$('.interest_item_type_' + parts[parts.length - 1]).removeClass('feds_optional_text');
									}
								}
							}
						},
						error: function(){
							if (typeof NMUtils !== 'undefined') {
								NMUtils.addErrorAlert("Changes Not Saved");
							} else {
								if (typeof nmFlex !== 'undefined') {
									nmFlex.addErrorAlert("Changes Not Saved");
								}
							}
						}
					});
				}
				
				
				// set contenteditable to false and destroy editor
				// set cursor to pointer for editable areas
				$('#' + editor.name).attr('contenteditable', 'false');
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
						createCkeditor( elementIdArray[1], elementIdArray[2], elementIdArray[3] );
						
						CKEDITOR.on('instanceReady', function(event){
							var editor = event.editor;
							
							// when the editor is ready to be used, give it the focus
							editor.focus();
						});	 
					});
				} else {
					//normal operating code
				}
				
				// only run if nmUI is defined (typically only on FE)
				if (typeof(nmUI) !== 'undefined') {
					// wrap iframe videos in resizable div
					nmUI.fluidVideo();
				}
			}
		}
	};
	
	var pluginName = 'saveeditor';
	
    CKEDITOR.plugins.add( pluginName,
    {
		onLoad: function() {
			// Display label and change text color to white
			CKEDITOR.addCss( '.cke_button__saveeditor .cke_button_label' +
				'{' +
					'display: inline !important;' +
					'color: #fff;' +
					'text-shadow: none;' +
				'}'
				);
			// Change default bgcolor	
			CKEDITOR.addCss( '.cke_button.cke_button__saveeditor' +
				'{' +
					'background-color: #006CBF;' +
				'}'
				);
			// Change active bgcolor	
			CKEDITOR.addCss( '.cke_button__saveeditor.cke_button_off:hover,.cke_button__saveeditor.cke_button_off:focus,.cke_button__saveeditor.cke_button_off:active' +
				'{' +
					'-moz-box-shadow: 0 0 1px rgba(0,0,0,.3) inset;' +
					'-webkit-box-shadow: 0 0 1px rgba(0,0,0,.3) inset;' +
					'box-shadow: 0 0 1px rgba(0,0,0,.3) inset;' +
					'background: #1885d9;' +
				'}'
				);
			// Change active bgcolor	
			CKEDITOR.addCss( '.cke_button__saveeditor_icon' +
				'{' +
					'display: none;' +
				'}'
				);
				

		},
        init: function( editor )
        {
			editor.addCommand( pluginName, saveCmd );
		    editor.ui.addButton( 'SaveEditor',
            {
                label: 'Save',
                command: pluginName,
                icon: this.path + 'images/save_edit.png',
                toolbar: 'saveeditor'
            } );
        }
    } );
} )();

/*--- ckeditor/plugins/saveeditor/plugin.js ---*/