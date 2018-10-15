//Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
//For licensing, see LICENSE.html or http://ckeditor.com/license

// ckeditor/config.js

if (typeof ckeditorBrowserRelativePath === 'undefined') {
    var ckeditorBrowserRelativePath = '';
}
if (typeof ckeditorStyleSheetRelativePath === 'undefined') {
    var ckeditorStyleSheetRelativePath = '';
}

CKEDITOR.editorConfig = function(config){

	config.title = '';

	config.basicEntities = true;
	config.entities = false;
	config.entities_additional = '';	

	// default spell check to on
	//config.scayt_autoStartup = true;

	config.allowedContent =
	    /* [] - Attributes   {} - Styles    () - Classes */
	    'br[*]{*}(*);' +
	    'ol ul li[*]{*}(*);' +
	    'table th td tr tbody tfoot thead[*]{*}(*);' +
	    'form input[*]{*}(*);' +
	    'textarea[*]{*}(*);' +
	    'select option[*]{*}(*);' +
	    'strong b em i u strike s sub sup[*]{*}(*);' +
	    'caption div h1 h2 h3 h4 p pre blockquote[*]{*}(*);' +
	    'a[*]{*}(*);' +
	    'img[*]{*}(*);' +
	    'hr[*]{*}(*);' +
	    'span[*]{*}(*);' +
	    'font[*]{*}(*);' +
	    'center[*]{*}(*);' +
	    'style[*]{*}(*);'
	;

	// allow additional tags with attributes/styles/classes to bypass the Advanced Content Filter
	config.extraAllowedContent =
	    /* [] - Attributes   {} - Styles    () - Classes */
		'img[alt,border,width,height,align,vspace,hspace,!src];' +
		'span[*]{*}(*);' +
	    'iframe[*]{*}(*);' +
	    'script[*]{*}(*);' +
	    'noscript[*]{*}(*);' +
	    'style[*]{*}(*);' +
	    'object[*]{*}(*);' +
	    'param[*]{*}(*);' +
	    'embed[*]{*}(*);' +
	    'map[*]{*}(*);' +
	    'area[*]{*}(*);' +
	    'link[*]{*}(*);' +
	    'label[*]{*}(*);' +

	    //HTML5 tags
	    'canvas[*]{*}(*);' +
	    'audio[*]{*}(*);' +
	    'video[*]{*}(*);' +
	    'source[*]{*}(*);' +
	    'track[*]{*}(*);' +
	    'datalist[*]{*}(*);' +
	    'keygen[*]{*}(*);' +
	    'output[*]{*}(*);' +
	    'article[*]{*}(*);' +
	    'aside[*]{*}(*);' +
	    'bdi[*]{*}(*);' +
	    'command[*]{*}(*);' +
	    'details[*]{*}(*);' +
	    'dialog[*]{*}(*);' +
	    'summary[*]{*}(*);' +
	    'figure[*]{*}(*);' +
	    'figcaption[*]{*}(*);' +
	    'footer[*]{*}(*);' +
	    'header[*]{*}(*);' +
	    'hgroup[*]{*}(*);' +
	    'mark[*]{*}(*);' +
	    'meter[*]{*}(*);' +
	    'nav[*]{*}(*);' +
	    'progress[*]{*}(*);' +
	    'section[*]{*}(*);' +
	    'time[*]{*}(*);' +
	    'button[*]{*}(*);' +
	    'wbr[*]{*}(*);'
	;

	config.allowedContent = true;

	config.docType = '<!DOCTYPE html>';

	config.height = 400;

	config.resize_dir = 'vertical';

	config.contentsCss = [ckeditorStyleSheetRelativePath+'style_sheet.css', 'html,body { margin:0; padding:0; overflow:auto; width:100%; height:100%; color:#000; background: transparent !important; background-color: transparent !important; background-image: none; } .cke_editable.cke_editable_inline{cursor: pointer;} .cke_editable.cke_editable_inline.cke_focus{box-shadow: inset 0px 0px 20px 3px #ddd, inset 0 0 1px #000;outline: none;background: #eee;cursor: text;} .cke_editable_inline pre{white-space: pre-wrap; word-wrap: break-word;}', '/sr/ckeditor/plugins/templates/templates/custom_templates.css', 'code {white-space: pre-wrap}'];

	config.dialog_backgroundCoverColor = 'black';
	config.dialog_backgroundCoverOpacity = 0.8;

	config.skin = 'moono-light';

	config.disableObjectResizing = false;

	config.stylesSet = [
	    {
	        name : 'Normal', element : 'p'
	    },
	    {
	        name : 'Heading 1 (h1)', element : 'h1'
	    },
	    {
	        name : 'Heading 2 (h2)', element : 'h2'
	    },
	    {
	        name : 'Heading 3 (h3)', element : 'h3'
	    },
	    {
	        name : 'Fixed Type', element : 'pre'
	    },
	    {
	        name : 'Blockquote', element : 'blockquote'
	    },
	    {
	        name : 'Border Button', element : 'a', attributes: { 'class': 'custom_button' }
	    },
	    {
	        name : 'Brand Font 1', element : 'span', attributes: { 'class':'fontStack1 brand-font-1' }
	    },
	    {
	        name : 'Brand Font 2', element : 'span', attributes: { 'class':'fontStack2 brand-font-2' }
	    },
	    {
	        name : 'Brand Font 3', element : 'span', attributes: { 'class':'fontStack3 brand-font-3' }
	    },
	    {
	        name : 'Fluid Banner (sm)', element : 'span', attributes: { 'class':'font-responsive-1' }
	    },
	    {
	        name : 'Fluid Banner (md)', element : 'span', attributes: { 'class':'font-responsive-2' }
	    },
	    {
	        name : 'Fluid Banner (lg)', element : 'span', attributes: { 'class':'font-responsive-3' }
	    },
	    {
	        name : 'Fluid Banner (xl)', element : 'span', attributes: { 'class':'font-responsive-4' }
	    },
	    {
	        name : 'Fluid Banner (xxl)', element : 'span', attributes: { 'class':'font-responsive-5' }
	    }
	];

	config.removePlugins = 'autogrow,pastetext';

	config.extraPlugins = 'codemirror,codeembed,iframe,saveeditor,canceleditor,sourcedialog,uploadimage,brangel,layout_2column,layout_3column,layout_4column,layout_3image,layout_4image,layout_3image_text,layout_staff_list,layout_image_left,layout_image_right';

	config.disableNativeSpellChecker = true;

	config.startupFocus = false;

	config.forcePasteAsPlainText = false;

	config.startupShowBorders = false;

	config.toolbarCanCollapse = false;

	config.templates_replaceContent = false;

	config.toolbarLocation = 'top';

	config.toolbar_Full =
	[
	    { name: 'document',    items : [ 'Source','-','CodeEmbed','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
	    { name: 'clipboard',   items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
	    { name: 'editing',     items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
	    { name: 'forms',       items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'HiddenField' ] },
	    '/',
	    { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript' ] },
	    { name: 'removeformat', items : [ 'RemoveFormat' ] },
	    { name: 'paragraph',   items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
	    { name: 'links',       items : [ 'Link','Unlink','Anchor' ] },
	    { name: 'insert',      items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak' ] },
	    '/',
	    { name: 'styles',      items : [ 'Styles','Format','Font','FontSize' ] },
	    { name: 'colors',      items : [ 'TextColor','BGColor' ] },
	    { name: 'tools',       items : [ 'Maximize','ShowBlocks','-','About' ] }
	];

	config.toolbar_FCMain =
	[
	    { name: 'source',      items : [ 'Source'] },
	    { name: 'codeembed',   items : [ 'CodeEmbed' ] },
	    { name: 'codesnippet', items : [ 'CodeSnippet' ] },
	    { name: 'templates',   items : [ 'Templates' ] },
	    { name: 'codesnippet', items : [ 'CodeSnippet' ] },
	    { name: 'document',    items : [ 'Maximize','-','NewPage','Preview' ] },

	    { name: 'selectall',   items : [ 'SelectAll' ] },
	    { name: 'clipboard',   items : [ 'Cut','Copy','Paste' ] },
	    { name: 'history',     items : [ 'Undo','Redo' ] },
	    { name: 'editing',     items : [ 'Find','Replace' ] },
	    { name: 'forms',       items : [ 'Form','-','Checkbox','Radio','TextField','Textarea','Select','Button','HiddenField' ] },
	    '/',
	    { name: 'basicstyles', items : [ 'Bold','Italic','Underline' ] },
	    { name: 'removeformat', items : [ 'RemoveFormat' ] },
	    { name: 'paragraph',   items : [ 'NumberedList','BulletedList','-','Outdent','Indent' ] },
	    { name: 'justify',     items : [ 'JustifyLeft','JustifyCenter','JustifyRight' ] },
	    { name: 'links',       items : [ 'Link','Unlink','Anchor' ] },
	    { name: 'insert',      items : [ 'Image','Table','HorizontalRule','SpecialChar' ] },
	    '/',
	    { name: 'styles',      items : [ 'Styles','Font','FontSize' ] },
	    { name: 'colors',      items : [ 'TextColor' ] },
	    { name: 'block',       items : [ 'ShowBlocks' ] },
	    { name: 'spellchecker',items : [ 'Scayt' ] }
	];

	config.toolbar_FCEmail =
	[
	    { name: 'source',      items : [ 'Source' ] },
	    { name: 'codeembed',   items : [ 'CodeEmbed' ] },
	    { name: 'document',    items : [ 'Maximize','-','NewPage','Preview' ] },
	    { name: 'selectall',   items : [ 'SelectAll' ] },
	    { name: 'clipboard',   items : [ 'Cut','Copy','Paste' ] },
	    { name: 'history',     items : [ 'Undo','Redo' ] },
	    { name: 'editing',     items : [ 'Find','Replace' ] },
	    '/',
	    { name: 'basicstyles', items : [ 'Bold','Italic' ] },
	    { name: 'removeformat', items : [ 'RemoveFormat' ] },
	    { name: 'paragraph',   items : [ 'NumberedList','BulletedList','-','Outdent','Indent' ] },
	    { name: 'justify',     items : [ 'JustifyLeft','JustifyCenter','JustifyRight' ] },
	    { name: 'links',       items : [ 'Link','Unlink' ] },
	    { name: 'insert',      items : [ 'Image','Table','HorizontalRule','SpecialChar' ] },
	    '/',
	    { name: 'styles',      items : [ 'Styles','Font','FontSize' ] },
	    { name: 'colors',      items : [ 'TextColor' ] },
	    { name: 'block',       items : [ 'ShowBlocks' ] },
	    { name: 'spellchecker',items : [ 'Scayt' ] }
	];

	config.toolbar_Basic =
	[
	    { name: 'basicstyles', items : [ 'Bold','Italic' ] },
	    { name: 'removeformat', items : [ 'RemoveFormat' ] },
	    { name: 'selectall',   items : [ 'SelectAll' ] },
	    { name: 'clipboard',   items : [ 'Cut','Copy','Paste' ] },
	    { name: 'history',     items : [ 'Undo','Redo' ] }
	];


	config.toolbar_LiteSiteBasic =
	[
	    { name: 'source',      items : [ 'Source' ] },
	    { name: 'codeembed',   items : [ 'CodeEmbed' ] },
	    { name: 'document',    items : [ 'Maximize','-','NewPage','Preview' ] },
	    { name: 'selectall',   items : [ 'SelectAll' ] },
	    { name: 'clipboard',   items : [ 'Cut','Copy','Paste' ] },
	    { name: 'history',     items : [ 'Undo','Redo' ] },
	    { name: 'editing',     items : [ 'Find','Replace' ] },
	    '/',
	    { name: 'basicstyles', items : [ 'Bold','Italic','Underline' ] },
	    { name: 'removeformat', items : [ 'RemoveFormat' ] },
	    { name: 'paragraph',   items : [ 'NumberedList','BulletedList','-','Outdent','Indent' ] },
	    { name: 'justify',     items : [ 'JustifyLeft','JustifyCenter','JustifyRight' ] },
	    { name: 'links',       items : [ 'Link','Unlink','Anchor' ] },
	    { name: 'insert',      items : [ 'Image','Table','HorizontalRule','SpecialChar' ] },
	    '/',
	    { name: 'styles',      items : [ 'Styles','Font','FontSize' ] },
	    { name: 'block',       items : [ 'ShowBlocks' ] },
	    { name: 'spellchecker',items : [ 'Scayt' ] }
	];

	config.toolbar_SiteManagerBasic =
	[
	    { name: 'source',      items : [ 'Source'] },
	    { name: 'codeembed',   items : [ 'CodeEmbed' ] },
	    { name: 'document',    items : [ 'Maximize','-','NewPage','Preview' ] },
	    { name: 'selectall',   items : [ 'SelectAll' ] },
	    { name: 'clipboard',   items : [ 'Cut','Copy','Paste' ] },
	    { name: 'history',     items : [ 'Undo','Redo' ] },
	    { name: 'editing',     items : [ 'Find','Replace' ] },
	    '/',
	    { name: 'basicstyles', items : [ 'Bold','Italic' ] },
	    { name: 'removeformat', items : [ 'RemoveFormat' ] },
	    { name: 'paragraph',   items : [ 'NumberedList','BulletedList','-','Outdent','Indent' ] },
	    { name: 'links',       items : [ 'Link','Unlink','Anchor' ] },
	    { name: 'spellchecker',items : [ 'Scayt' ] }
	];

	config.toolbar_InlineBasic =
	[
	    { name: 'source',      items : [ 'Sourcedialog' ] },
	    { name: 'codeembed',   items : [ 'CodeEmbed' ] },
	    { name: 'templates',   items : [ 'Templates' ] },
	    { name: 'document',    items : [ 'Maximize','-','NewPage','Preview' ] },
	    { name: 'selectall',   items : [ 'SelectAll' ] },
	    { name: 'clipboard',   items : [ 'Cut','Copy','Paste' ] },
	    { name: 'history',     items : [ 'Undo','Redo' ] },
	    { name: 'editing',     items : [ 'Find','Replace' ] },
	    '/',
	    { name: 'basicstyles', items : [ 'Bold','Italic','Underline' ] },
	    { name: 'removeformat', items : [ 'RemoveFormat' ] },
	    { name: 'paragraph',   items : [ 'NumberedList','BulletedList','-','Outdent','Indent' ] },
	    { name: 'justify',     items : [ 'JustifyLeft','JustifyCenter','JustifyRight' ] },
	    { name: 'links',       items : [ 'Link','Unlink','Anchor' ] },
	    { name: 'insert',      items : [ 'Image','Table','HorizontalRule','SpecialChar' ] },
	    '/',
	    { name: 'styles',      items : [ 'Styles','Font','FontSize' ] },
	    { name: 'colors',      items : [ 'TextColor' ] },
	    { name: 'block',       items : [ 'ShowBlocks' ] },
	    { name: 'spellchecker',items : [ 'Scayt' ] },
	    { name: 'data',        items : [ 'SaveEditor','CancelEditor' ] }
	];

    config.toolbar_flex2 =
    [
        { name: 'source',      items : [ 'Sourcedialog' ] },
        { name: 'codeembed',   items : [ 'CodeEmbed' ] },
        { name: 'clipboard',   items : [ 'SelectAll','Cut','Copy','Paste' ] },
        { name: 'history',     items : [ 'Undo','Redo' ] },
        { name: 'editing',     items : [ 'Find' ] },
        { name: 'spellchecker',items : [ 'Scayt' ] },
        '/',
        { name: 'basicstyles', items : [ 'Bold','Italic','Underline' ] },
        { name: 'justify',     items : [ 'JustifyLeft','JustifyCenter','JustifyRight' ] },
        { name: 'removeformat', items : [ 'RemoveFormat' ] },
        { name: 'links',       items : [ 'Link','Unlink','Anchor' ] },
        { name: 'paragraph',   items : [ 'NumberedList','BulletedList' ] },
        { name: 'insert',      items : [ 'Image','Table','HorizontalRule','SpecialChar' ] },
        '/',
        { name: 'styles',      items : [ 'Styles','FontSize' ] },
        { name: 'colors',      items : [ 'TextColor' ] },
        { name: 'data',        items : [ 'SaveEditor','CancelEditor' ] }
    ];

	config.toolbar = 'FCMain';

	config.baseFloatZIndex = 99999999;

	config.enterMode = CKEDITOR.ENTER_DIV;
	config.shiftEnterMode = CKEDITOR.ENTER_BR;

	config.browserContextMenuOnCtrl = true;

	config.format_tags = 'h1;h2;h3;pre'

	config.font_names = 'Arial;Arial Black;Courier New;Georgia;Helvetica;Impact;Tahoma;Times;Times New Roman;Trebuchet MS;Verdana';

	config.fontSize_sizes = '12px;14px;16px;18px;20px;24px;28px;32px;40px;48px;56px;64px;80px;96px;80%;100%;120%;140%;160%';

	config.filebrowserBrowseUrl = ckeditorBrowserRelativePath + 'links_popup.cfm?filetypes=all&folder=files&relative_path=1';
	config.filebrowserImageBrowseUrl = ckeditorBrowserRelativePath + 'links_popup.cfm?filetypes=image&folder=images/library&relative_path=1&noprotocol=1';
	config.filebrowserImageBrowseLinkUrl = ckeditorBrowserRelativePath + 'links_popup.cfm?filetypes=all&folder=files&relative_path=1&noprotocol=1';

	config.filebrowserWindowWidth = '500';
	config.filebrowserWindowHeight = '600';

	config.filebrowserUploadUrl = null; //disable upload tab
	config.filebrowserImageUploadUrl = null; //disable upload tab
	config.filebrowserFlashUploadUrl = null; //disable upload tab

	// codemirror options
	config.codemirror = {

	    // Set this to the theme you wish to use (codemirror themes)
	    theme: 'rubyblue',

	    // Whether or not you want to show line numbers
	    lineNumbers: true,

	    // Whether or not you want to use line wrapping
	    lineWrapping: true,

	    // Whether or not you want to highlight matching braces
	    matchBrackets: true,

	    // Whether or not you want tags to automatically close themselves
	    autoCloseTags: true,

	    // Whether or not you want Brackets to automatically close themselves
	    autoCloseBrackets: true,

	    // Whether or not to enable search tools, CTRL+F (Find), CTRL+SHIFT+F (Replace), CTRL+SHIFT+R (Replace All), CTRL+G (Find Next), CTRL+SHIFT+G (Find Previous)
	    enableSearchTools: true,

	    // Whether or not you wish to enable code folding (requires 'lineNumbers' to be set to 'true')
	    enableCodeFolding: true,

	    // Whether or not to enable code formatting
	    enableCodeFormatting: true,

	    // Whether or not to automatically format code should be done when the editor is loaded
	    autoFormatOnStart: true,

	    // Whether or not to automatically format code should be done every time the source view is opened
	    autoFormatOnModeChange: true,

	    // Whether or not to automatically format code which has just been uncommented
	    autoFormatOnUncomment: true,

	    // Whether or not to highlight the currently active line
	    highlightActiveLine: true,

	    // Define the language specific mode 'htmlmixed' for html including (css, xml, javascript), 'application/x-httpd-php' for php mode including html, or 'text/javascript' for using java script only
	    mode: 'htmlmixed',

	    // Whether or not to show the search Code button on the toolbar
	    showSearchButton: false,

	    // Whether or not to show Trailing Spaces
	    showTrailingSpace: true,

	    // Whether or not to highlight all matches of current word/selection
	    highlightMatches: true,

	    // Whether or not to show the format button on the toolbar
	    showFormatButton: false,

	    // Whether or not to show the comment button on the toolbar
	    showCommentButton: false,

	    // Whether or not to show the uncomment button on the toolbar
	    showUncommentButton: false,

	    // Whether or not to show the showAutoCompleteButton button on the toolbar
	    showAutoCompleteButton: false
	};

    // Make sure we use image and height attribute tags for images UNTIL Outlook supports styles.
    CKEDITOR.on('instanceReady', function(ev) {
        ev.editor.dataProcessor.htmlFilter.addRules({
            elements: {
                $: function(element) {
                    // Output dimensions of images as width and height
                    if (element.name == 'img') {
                        var style = element.attributes.style;
                        if (style) {
                            // Get the width from the style.
                            var match = /(?:^|\s)width\s*:\s*(\d+)px/i.exec(style),
                                width = match && match[1];
                            // Get the height from the style.
                            match = /(?:^|\s)height\s*:\s*(\d+)px/i.exec(style);
                            var height = match && match[1];
                            // Get the float from the style.
                            match = /(?:^|\s)float\s*:\s*(\w+)/i.exec(style);
                            var float = match && match[1];
                            if (width) {
                                element.attributes.style = element.attributes.style.replace(/(?:^|\s)width\s*:\s*(\d+)px;?/i, '');
                                element.attributes.width = width;
                            }
                            if (height) {
                                element.attributes.style = element.attributes.style.replace(/(?:^|\s)height\s*:\s*(\d+)px;?/i, '');
                                element.attributes.height = height;
                            }
                            if (float) {
                                element.attributes.style = element.attributes.style.replace(/(?:^|\s)float\s*:\s*(\w+)/i, '');
                                element.attributes.align = float;
                            }
                        }
                    }
                    if (!element.attributes.style) delete element.attributes.style;
    	                return element;
                }
            }
        });
    });

	// overrides to not remove empty tags
	$.each(CKEDITOR.dtd.$removeEmpty, function (i, value) {
	    CKEDITOR.dtd.$removeEmpty['span'] = false;
	});
};


// ckeditor/config.js
