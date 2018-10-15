/*
* Embed Media Dialog based on http://www.fluidbyte.net/embed-youtube-vimeo-etc-into-ckeditor
*
* Plugin name:      codeembed
* Menu button name: CodeEmbed
*
* @original author of mediaembed - Fabian Vogelsteller [frozeman.de]
*/
( function() {
    CKEDITOR.plugins.add( 'codeembed',
    {
        onLoad: function() {
			// Display label
			CKEDITOR.addCss( '.cke_button__codeembed .cke_button_label' +
				'{' +
					'display: inline !important;' +
				'}'
			);
		},
		init: function( editor )
        {
           var me = this;
           CKEDITOR.dialog.add( 'CodeEmbedDialog', function (instance)
           {
              return {
                 title : 'Embed Code',
                 minWidth : 550,
                 minHeight : 200,
                 contents :
                       [
                          {
                             id : 'iframe',
                             expand : true,
                             elements :[{
								//Add textarea to dialog
                                id : 'embedArea',
                                type : 'textarea',
                                label : 'Paste Code Here',
								rows : 10,
                                'autofocus':'autofocus',
                                setup: function(element){
                                },
                                commit: function(element){
                                }
                              },{
								//add error message area to dialog
								id: 'errorMessage',
								type: 'html',
								html: '<div id="embedCodeErrorMessage" style="color:#ff0000;"></div>'
							  }
							  ]
                          }
                       ],
                  onOk: function() {
						//get code from dialog
						var getSource = this.getContentElement('iframe', 'embedArea').getValue();

						//replace invalid quote marks
						var find = '”|″';
						var re = new RegExp(find, 'g');
						getSource = getSource.replace(re, '"');

						try{
							//get tags that can be empty					
							var tags = new Array('a', 'div');
							
							//regex loop to insert space inside empty tags
							for (var i=0;i<tags.length;i++){
								var re = new RegExp('></'+tags[i]+'>', 'g');
								getSource = getSource.replace(re,'>&nbsp;</'+tags[i]+'>');
							}
							
							//insert source into CKEditor
	                        instance.insertHtml(getSource);
							
							// only run if nmUI is defined (typically only on FE)
							if (typeof(nmUI) !== 'undefined') {
								// wrap iframe videos in resizable div
								nmUI.fluidVideo();
							}
						} catch(err) {
							//if there was an error adding the code to CKEditor, then display a message
							var dialogElement = document.getElementById('embedCodeErrorMessage');
							dialogElement.innerHTML = 'This code cannot be embedded';
							
							//do not close dialog
							return false;
						}
                  },
				 onHide: function(){
					//when dialog is closed, clear error message
					var dialogElement = document.getElementById('embedCodeErrorMessage');
					dialogElement.innerHTML = '';
				}
              };
           } );

            editor.addCommand( 'CodeEmbed', new CKEDITOR.dialogCommand( 'CodeEmbedDialog' ) );
			
            editor.ui.addButton( 'CodeEmbed',
            {
                label: 'Embed Code',
                command: 'CodeEmbed',
                icon: this.path + 'images/icon.png',
                toolbar: 'codeembed'
            } );
        }
    } );
} )();
