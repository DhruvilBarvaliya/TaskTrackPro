//// jshint unused: false

kendo.ui.ARAButton = function () { };

kendo.ui.ARAButton.prototype = {

    enable: function (toggle) {
        /// <summary>
        /// Enables or disables the ARAButton.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Indicates whether the ARAButton should be enabled or disabled. true and false arguments are accepted. If no argument is supplied, the ARAButton will assume true and will be enabled.</param>
    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARAButton = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAButton widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAButton">The kendo.ui.ARAButton instance (if present).</returns>
};

$.fn.kendoARAButton = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAButton widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;enable - Boolean (default: true)
    /// &#10;Indicates whether the ARAButton should be enabled or disabled. By default, it is enabled, unless a disabled="disabled" attribute is detected.
    /// &#10;
    /// &#10;icon - String 
    /// &#10;Defines a name of an existing icon in the Kendo UI theme sprite. The icon will be applied as background image of a span element inside the ARAButton.
    /// &#10;The span element can be added automatically by the widget, or an existing element can be used, if it has a k-icon CSS class applied.
    /// &#10;For a list of available icon names, please refer to the Icons demo.
    /// &#10;
    /// &#10;imageUrl - String 
    /// &#10;Defines a URL, which will be used for an img element inside the ARAButton. The URL can be relative or absolute. In case it is relative, it will be evaluated with relation to the web page URL.The img element can be added automatically by the widget, or an existing element can be used, if it has a k-image CSS class applied.
    /// &#10;
    /// &#10;spriteCssClass - String 
    /// &#10;Defines a CSS class (or multiple classes separated by spaces), which will be used for applying a background image to a span element inside the ARAButton.
    /// &#10;In case you want to use an icon from the Kendo UI theme sprite background image, it is easier to use the icon property.The span element can be added automatically by the widget, or an existing element can be used, if it has a k-sprite CSS class applied.
    /// &#10;
    /// &#10;label - String 
    /// &#10;Defines a text, which will be used for a label element inside the ARAButton.
    /// &#10;
    /// &#10;width - String 
    /// &#10;Defines a width, which will be used for setting width of the element inside the ARAButton.
    /// &#10;
    /// &#10;height - String 
    /// &#10;Defines a height, which will be used for setting the height of the element inside the ARAButton.
    /// &#10;
    /// &#10;toolTip - String 
    /// &#10;Defines a toolTip, which will be used for tooltip to the element inside the ARAButton.
    /// &#10;    
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAGrid = function () { };

kendo.ui.ARAGrid.prototype = {




    addRow: function () {
        /// <summary>
        /// Adds an empty data item to the grid. In "incell" and "inline" editing mode a table row will be appended. Popup window will be displayed in "popup" editing mode.Fires the edit event.
        /// </summary>

    },


    autoFitColumn: function (column) {
        /// <summary>
        /// Applies the minimum possible width for the specified column, so that all text fits without wrapping.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column, or the field to which the columns is bound, or the column object obtained from the columns collection.When using multicolumn headers, using an index is not allowed. In such scenarios, please use a field name or a column object as a method argument.</param>

    },


    cancelChanges: function () {
        /// <summary>
        /// Cancels any pending changes in the data source. Deleted data items are restored, new data items are removed and updated data items are restored to their initial state.
        /// </summary>

    },


    cancelRow: function () {
        /// <summary>
        /// Cancels editing for the table row which is in edit mode. Reverts any changes made.
        /// </summary>

    },


    cellIndex: function (cell) {
        /// <summary>
        /// Returns the index of the specified table cell. Skips group and detail table cells.
        /// </summary>
        /// <param name="cell" type="Object" >A string, DOM element or jQuery object which represents the table cell. A string is treated as a jQuery selector. If there are locked columns in the ARAGrid, the jQuery object, representing the cell, must be passed as an argument.</param>
        /// <returns type="Number">the index of the specified table cell.</returns>

    },


    clearSelection: function () {
        /// <summary>
        /// Clears the currently selected table rows or cells (depending on the current selection mode).
        /// </summary>

    },


    closeCell: function (isCancel) {
        /// <summary>
        /// Stops editing the table cell which is in edit mode. Requires "incell" edit mode.
        /// </summary>
        /// <param name="isCancel" type="Boolean" >A flag specifying whether to fire the cancel event. By default the event is not fired.</param>

    },


    collapseGroup: function (row) {
        /// <summary>
        /// Collapses the specified group. This hides the group items.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the group table row. A string is treated as a jQuery selector.</param>

    },


    collapseRow: function (row) {
        /// <summary>
        /// Collapses the specified master table row. This hides its detail table row.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the master table row. A string is treated as a jQuery selector.</param>

    },


    current: function (cell) {
        /// <summary>
        /// Gets or sets the current cell for keyboard navigation.
        /// </summary>
        /// <param name="cell" type="jQuery" >DOM element or jQuery object which represents the navigatable cell.</param>
        /// <returns type="jQuery">the current cell.</returns>

    },


    dataItem: function (row) {
        /// <summary>
        /// Returns the data item to which the specified table row is bound. The data item is a Kendo UI Model instance.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the table row. A string is treated as a jQuery selector.</param>
        /// <returns type="kendo.data.ObservableObject">the data item to which the specified table row is bound. More information about the ObservableObject type...</returns>

    },


    destroy: function () {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls the destroy method of any child Kendo widgets.
        /// </summary>

    },


    editCell: function (cell) {
        /// <summary>
        /// Switches the specified table cell in edit mode. Requires "incell" edit mode.Fires the edit event.
        /// </summary>
        /// <param name="cell" type="jQuery" >The jQuery object which represents the table cell.</param>

    },


    editRow: function (row) {
        /// <summary>
        /// Switches the specified table row in edit mode. Requires "inline" or "popup" edit mode.Fires the edit event.
        /// </summary>
        /// <param name="row" type="jQuery" >The jQuery object which represents the table row.</param>

    },


    expandGroup: function (row) {
        /// <summary>
        /// Expands the specified group. This shows the group items.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the group table row. A string is treated as a jQuery selector. Expands specified group.</param>

    },


    expandRow: function (row) {
        /// <summary>
        /// Expands the specified master table row. This shows its detail table row.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the master table row. A string is treated as a jQuery selector. Expands specified master row.</param>

    },


    getOptions: function () {
        /// <summary>
        /// Retrieves the options that are currently enabled or disabled on the ARAGrid, also gives the current state of the dataSource.
        /// Use this method if you want to save the state of the ARAGrid into a variable. It is also possible to extract and store only some of the ARAGrid options.
        /// </summary>
        /// <returns type="Object">The configuration options of the widget.</returns>

    },


    hideColumn: function (column) {
        /// <summary>
        /// Hides the specified grid column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column, or the field to which the columns is bound, or the column object obtained from the columns collection.When using multicolumn headers, using an index will hide a top-level column together will all its "child columns". In such scenarios, using field names or column objects may be more appropriate.</param>

    },


    items: function () {
        /// <summary>
        /// Obtains an Array of the DOM elements, which correspond to the data items from the Kendo UI DataSource view (e.g. the ones on the current page).
        /// </summary>
        /// <returns type="Array">The currently rendered data table rows (<tr> elements).</returns>

    },


    lockColumn: function (column) {
        /// <summary>
        /// Locks (freezes) a column, allowing users to see it at all times when scrolling.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column or the field to which the columns is bound.</param>

    },


    refresh: function () {
        /// <summary>
        /// Renders all table rows using the current data items.
        /// </summary>

    },


    removeRow: function (row) {
        /// <summary>
        /// Removes the specified table row from the grid. Also removes the corresponding data item from the data source.Fires the remove event.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the table row. A string is treated as a jQuery selector.</param>

    },


    reorderColumn: function (destIndex, column) {
        /// <summary>
        /// Changes the position of the specified column.
        /// </summary>
        /// <param name="destIndex" type="Number" >The new position of the column. The destination index should be calculated with regard to all columns, including the hidden ones.</param>
        /// <param name="column" type="Object" >The column whose position should be changed.</param>

    },


    saveAsExcel: function () {
        /// <summary>
        /// Initiates the Excel export. Also fires the excelExport event.
        /// </summary>

    },


    saveAsPDF: function () {
        /// <summary>
        /// Initiates the PDF export and returns a promise. Also triggers the pdfExport event.
        /// </summary>
        /// <returns type="Promise">A promise that will be resolved when the export completes. The same promise is available in the pdfExport event arguments.</returns>

    },


    saveChanges: function () {
        /// <summary>
        /// Saves any pending changes by calling the sync method.Fires the saveChanges event.
        /// </summary>

    },


    saveRow: function () {
        /// <summary>
        /// Switches the table row which is in edit mode and saves any changes made by the user.
        /// </summary>

    },


    select: function (rows) {
        /// <summary>
        /// Gets or sets the table rows (or cells) which are selected.
        /// </summary>
        /// <param name="rows" type="Object" >A string, DOM element or jQuery object which represents the table row(s) or cell(s). A string is treated as a jQuery selector.</param>
        /// <returns type="jQuery">the selected table rows or cells.</returns>

    },


    selectedKeyNames: function () {
        /// <summary>
        /// Gets an array that holds the id field values of the selected rows.
        /// </summary>
        /// <returns type="Array">of the id field values of the selected rows.</returns>

    },


    setDataSource: function (dataSource) {
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>

    },


    setOptions: function (options) {
        /// <summary>
        /// Sets the options of the ARAGrid. Use this method if you want to enable/disable a particular feature/option or to load
        /// the complete state obtained previously with the getOptions method.When setOptions is called, the ARAGrid widget will be destroyed and recreated. If the widget is bound to remote data, a new read request will be made.
        /// </summary>
        /// <param name="options" type="Object" >The configuration options to be set.</param>

    },


    showColumn: function (column) {
        /// <summary>
        /// Shows the specified column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column, or the field to which the columns is bound, or the column object obtained from the columns collection.When using multicolumn headers, using an index will hide a top-level column together will all its "child columns". In such scenarios, using field names or column objects may be more appropriate.</param>

    },


    unlockColumn: function (column) {
        /// <summary>
        /// Unlocks (unfreezes) a column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column or the field to which the columns is bound.</param>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARAGrid = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAGrid widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAGrid">The kendo.ui.ARAGrid instance (if present).</returns>
};

$.fn.kendoARAGrid = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAGrid widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;allowCopy - Boolean|Object (default: false)
    /// &#10;If set to true and selection of the ARAGrid is enabled the user could copy the selection into the clipboard and paste it into Excel or other similar programs that understand TSV/CSV formats. By default allowCopy is disabled and the default format is TSV.
    /// &#10;Can be set to a JavaScript object which represents the allowCopy configuration.
    /// &#10;
    /// &#10;altRowTemplate - String|Function 
    /// &#10;The template which renders the alternating table rows. Be default the grid renders a table row () for every data source item.
    /// &#10;
    /// &#10;autoBind - Boolean (default: false)
    /// &#10;If set to true, the ARAGrid will bind to the data source during initialization, i.e. it will call the fetch method of the dataSource instance. 
    /// &#10;By default, autoBind is set to false and the widget data will be binded when the change event of the dataSource instance is fired.
    /// &#10;
    /// &#10;columnResizeHandleWidth - Number (default: 3)
    /// &#10;Defines the width of the column resize handle in pixels. Apply a larger value for easier grasping.
    /// &#10;
    /// &#10;columns - Array 
    /// &#10;The configuration of the grid columns. An array of JavaScript objects or strings. JavaScript objects are interpreted as column configurations. Strings are interpreted as the
    /// &#10;field to which the column is bound. The grid will create a column for every item of the array.
    /// &#10;
    /// &#10;columnMenu - Boolean|Object (default: false)
    /// &#10;If set to true the grid will display the column menu when the user clicks the chevron icon in the column headers. The column menu allows the user to show and hide columns, filter and sort (if filtering and sorting are enabled).
    /// &#10;By default the column menu is not enabled.Can be set to a JavaScript object which represents the column menu configuration.
    /// &#10;
    /// &#10;dataSource - Object|Array|kendo.data.DataSource 
    /// &#10;The data source of the widget which is used render table rows. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
    /// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;detailTemplate - String|Function 
    /// &#10;The template which renders the detail rows.
    /// &#10;Check Detail Template for a live demo.
    /// &#10;
    /// &#10;editable - Boolean|Object (default: false)
    /// &#10;If set to true the user would be able to edit the data to which the grid is bound. By default editing is disabled.Can be set to a string ("inline", "incell" or "popup") to specify the editing mode. The default editing mode is "incell".Can be set to a JavaScript object which represents the editing configuration.
    /// &#10;
    /// &#10;excel - Object 
    /// &#10;Configures the Kendo UI ARAGrid Excel export settings.
    /// &#10;
    /// &#10;filterable - Boolean|Object (default: false)
    /// &#10;If set to true the user can filter the data source using the grid filter menu. Filtering is disabled by default.Can be set to a JavaScript object which represents the filter menu configuration.
    /// &#10;
    /// &#10;groupable - Boolean|Object (default: false)
    /// &#10;If set to true the user could group the grid by dragging the column header cells. By default grouping is disabled.Can be set to a JavaScript object which represents the grouping configuration.
    /// &#10;
    /// &#10;height - Number|String 
    /// &#10;The height of the grid. Numeric values are treated as pixels.
    /// &#10;
    /// &#10;messages - Object 
    /// &#10;Defines the text of the command buttons that are shown within the ARAGrid. Used primarily for localization.
    /// &#10;
    /// &#10;mobile - Boolean|String (default: false)
    /// &#10;If set to true and the grid is viewed on mobile browser it will use adaptive rendering.Can be set to a string phone or tablet which will force the widget to use adaptive rendering regardless of browser type.
    /// &#10;The grid uses same layout for both phone and tablet.
    /// &#10;
    /// &#10;navigatable - Boolean (default: false)
    /// &#10;If set to true the use could navigate the widget using the keyboard navigation. By default keyboard navigation is disabled.
    /// &#10;
    /// &#10;noRecords - Boolean|Object (default: false)
    /// &#10;If set to true and current view contains no records, message similar to "No records available" will be displayed. By default this option is disabled.
    /// &#10;
    /// &#10;pageable - Boolean|Object (default: false)
    /// &#10;If set to true the grid will display a pager. By default paging is disabled.Can be set to a JavaScript object which represents the pager configuration.
    /// &#10;
    /// &#10;pdf - Object 
    /// &#10;Configures the Kendo UI ARAGrid PDF export settings.
    /// &#10;
    /// &#10;persistSelection - Boolean (default: false)
    /// &#10;Sets a value indicating whether the selection will be persisted when sorting, paging, filtering and etc are performed.
    /// &#10;
    /// &#10;reorderable - Boolean (default: false)
    /// &#10;If set to true the user could reorder the columns by dragging their header cells. By default reordering is disabled.
    /// &#10;Multi-level headers allow reordering only in same level.
    /// &#10;
    /// &#10;resizable - Boolean (default: false)
    /// &#10;If set to true, users can resize columns by dragging the edges (resize handles) of their header cells. As of Kendo UI Q1 2015, users can also auto-fit a column by double-clicking
    /// &#10;its resize handle. In this case the column will assume the smallest possible width, which allows the column content to fit without wrapping.By default, column resizing is disabled.
    /// &#10;
    /// &#10;rowTemplate - String|Function 
    /// &#10;The template which renders rows. Be default renders a table row () for every data source item.
    /// &#10;
    /// &#10;scrollable - Boolean|Object (default: true)
    /// &#10;If set to true the grid will display a scrollbar when the total row height (or width) exceeds the grid height (or width). By default scrolling is enabled.Can be set to a JavaScript object which represents the scrolling configuration.
    /// &#10;
    /// &#10;selectable - Boolean|String (default:  "multiple, row")
    /// &#10;If set to true the user would be able to select grid rows. By default selection is "multiple, row", which means user can select multiple rows.
    /// &#10;
    /// &#10;sortable - Boolean|Object (default: false)
    /// &#10;If set to true the user could sort the grid by clicking the column header cells. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.
    /// &#10;
    /// &#10;toolbar - String|Function|Array 
    /// &#10;If a String value is assigned to the toolbar configuration option, it will be treated as a single string template for the whole grid Toolbar,
    /// &#10;and the string value will be passed as an argument to a kendo.template() function.If a Function value is assigned (it may be a kendo.template() function call or a generic function reference), then the return value of the function will be used to render the ARAGrid Toolbar contents.If an Array value is assigned, it will be treated as the list of commands displayed in the grid's Toolbar. Commands can be custom or built-in ("cancel", "create", "save", "excel", "pdf").The "cancel" built-in command reverts any data changes done by the end user.The "create" command adds an empty data item to the grid.The "save" command persists any data changes done by the end user.The "excel" command exports the grid data in MS Excel format.The "pdf" command exports the grid data in PDF format.
    /// &#10;
    /// &#10;focusoncheckboxcolumn - Boolean (default: true)
    /// &#10;If set to true the user could set focus on checkbox of the grid by clicking the column. By default focusoncheckboxcolumn is true. 
    /// &#10;
    /// &#10;totalRecordPerPage - Number(default: 10)
    /// &#10;Specifies the total number of records to be displayed in the grid when ARAGrid is loaded. By default totalRecordPerPage will be set to 10.
    /// &#10;
    /// &#10;autoscrollbyselection - Boolean (default: false)
    /// &#10;If set to true the user could set automatic scrolling based on selected rows in the ARAGrid. By default autoscrollbyselection will be set to false.
    /// &#10;
    /// &#10;rowselectionevent - Boolean (default: false)
    /// &#10;If set to true the user could fire row selection event for selected rows in the ARAGrid. By default rowselectionevent will be set to false.
    /// &#10;
    /// &#10;selectedRecords - Array
    /// &#10;Contains array of records selected from the grid. By default selectedrecords array will be empty.
    /// &#10;
    /// &#10;selectionMemory - Boolean (default: true)
    /// &#10;If set to false the records selected by user will not be saved in memory for ARAGrid. By default selectionMemory will be set to true.
    /// &#10;
    /// &#10;checkboxselection - Boolean 
    /// &#10;If set to true the user can add checkbox for each records in the ARAGrid. In checkboxselection user can set width (default:"50px"), template, headertemplate, reorderable (false).
    /// &#10;If not set checkbox will not be available besides each record.
    /// &#10;
    /// &#10;_aggregate - Array
    /// &#10;Specifies aggregates which are calculated when the data source populates with data.
    /// &#10;
    /// &#10;_group - Boolean (default: false)
    /// &#10;Specifies grouping configuration of the data source. If set, the data items will be grouped when the data source is populated. By default, grouping is not applied.
    /// &#10;
    /// &#10;config - Array
    /// &#10;Specifies the config to be passed for managing the pagination for currentPage, totalPage, recordPerPage, totalRecords and searchText. By default config will be set to CurrentPage: 0, TotalPage: 0,
    /// &#10;RecordPerPage: totalRecordPerPage(dynamic), TotalRecord: 0, searchText: searchText(dynamic).
    /// &#10;
    /// &#10;searchText - String
    /// &#10;Specifies the searchText to be used by the user for applying searching in the ARAGrid. By default searchText will be set to empty.
    /// &#10;
    /// &#10;autoresize - Boolean (default: false)
    /// &#10;If set to false the grid created by user cannot be resized. By default autoresize is false.
    /// &#10;

    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAPagination = function () { };

kendo.ui.ARAPagination.prototype = {

};

$.fn.getKendoARAPagination = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAPagination widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAPagination">The kendo.ui.ARAPagination instance (if present).</returns>
};

$.fn.kendoARAPagination = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAPagination widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;compact - Boolean (default: false)
    /// &#10;Specifies whether the widget should be in compact mode or not. By default compact will be set to false.
    /// &#10;
    /// &#10;isEnablePageSize - Boolean (default: true)
    /// &#10;Specified by user to enable disable pagesize dropdown in ARAPagination. By default isEnablePageSize will be set to true.
    /// &#10;
    /// &#10;pagerConfig - Array
    /// &#10;Specifies to the user config of pagination button for ARAPagination. By default value for pagerConfig will be set to first: true, last: true, next: true, previous: true, more: true.
    /// &#10;
    /// &#10;pagesize - Array
    /// &#10;Specified to set external pagesize for listview in ARAPagination. By default value for pagesize will be set to 2, 5, 10, 20, 30, 50, 100, 200, 500, 1000.
    /// &#10;
    /// &#10;target - String
    /// &#10;Specifies contains the target of the element in which pagination is to be applied in ARAPagination.
    /// &#10;
    /// &#10;message - Boolean (default: false)
    /// &#10;Specifies texts shown within the pager.User can use this option to customize or localize the pagination messages. By default message will be set to false.
    /// &#10;

    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARATreeView = function () { };

kendo.ui.ARATreeView.prototype = {




    append: function (nodeData, parentNode, success) {
        /// <summary>
        /// Appends a node to any level of the ARATreeView . This method may also be used to reorder nodes.
        /// </summary>
        /// <param name="nodeData" type="Object" >A JSON-formatted string or selector that specifies the node to be appended. If the argument is a plain JavaScript object, a new item will be created. If the argument is a jQuery element that holds a node, the ARATreeView node will be moved. If the argument is an array of objects, each item of the array will be appended.</param>
        /// <param name="parentNode" type="jQuery" >The node that will contain the newly appended node. If not specified, the new node will be appended to the root group of the ARATreeView.</param>
        /// <param name="success" type="Function" >A success callback that will be called once the new node has been appended. Useful in the case of remote binding where an item is appended to an unfetched node. The callback is called once the siblings have been fetched.</param>
        /// <returns type="jQuery">The inserted <li> element, wrapped in a jQuery object,or null if the new model has not been inserted immediately.</returns>

    },


    collapse: function (nodes) {
        /// <summary>
        /// Collapses nodes.
        /// </summary>
        /// <param name="nodes" type="Object" >The nodes that will be collapsed.</param>

    },


    dataItem: function (node) {
        /// <summary>
        /// Returns the data item to which the specified node is bound.
        /// </summary>
        /// <param name="node" type="Object" >A string, DOM element or jQuery object which represents the node. A string is treated as a jQuery selector.</param>
        /// <returns type="kendo.data.Node">The model of the item that was passed as a parameter.</returns>

    },


    destroy: function () {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    detach: function (node) {
        /// <summary>
        /// Removes a node from a ARATreeView, but keeps its jQuery.data() objects.
        /// </summary>
        /// <param name="node" type="Object" >The node that is to be detached.</param>
        /// <returns type="jQuery">The node that has been detached.</returns>

    },


    enable: function (nodes, enable) {
        /// <summary>
        /// Enables or disables nodes.
        /// </summary>
        /// <param name="nodes" type="Object" >The nodes that are to be enabled/disabled.</param>
        /// <param name="enable" type="Boolean" >Whether the nodes should be enabled or disabled.</param>

    },


    expand: function (nodes) {
        /// <summary>
        /// Expands collapsed nodes.
        /// </summary>
        /// <param name="nodes" type="Object" >The nodes that are to be expanded.</param>

    },


    expandPath: function (path, complete) {
        /// <summary>
        /// Expands all nodes from a provided path array, including the last node. Nodes may be loaded from a remote end-point.
        /// </summary>
        /// <param name="path" type="Array" >The IDs of the nodes that need to be expanded.</param>
        /// <param name="complete" type="Function" >Callback function that will be called once the path has been expanded.</param>

    },


    expandTo: function (targetNode) {
        /// <summary>
        /// Expands all nodes up to a given element. The element needs to be already loaded.
        /// </summary>
        /// <param name="targetNode" type="Object" >The dataItem of the node up to which to expand. Can also be the node ID</param>

    },


    findByText: function (text) {
        /// <summary>
        /// Searches for a node that has specific text.
        /// </summary>
        /// <param name="text" type="String" >The text that is being searched for.</param>
        /// <returns type="jQuery">All nodes that have the text.</returns>

    },


    findByUid: function (text) {
        /// <summary>
        /// Searches for a node with the given unique identifier.
        /// Applicable when the widget is bound to a HierarchicalDataSource.
        /// If you want to find a node by its id, use the dataSource.get() method and supply its uid to the findByUid method.
        /// </summary>
        /// <param name="text" type="String" >The text that is being searched for.</param>
        /// <returns type="jQuery">All nodes that have the text.</returns>

    },


    focus: function () {
        /// <summary>
        /// Sets the focus to the ARATreeView
        /// </summary>

    },


    insertAfter: function (nodeData, referenceNode) {
        /// <summary>
        /// Inserts a node after a specified node.
        /// This method may also be used to reorder nodes.
        /// </summary>
        /// <param name="nodeData" type="Object" >A JSON-formatted string or selector that specifies the node to be inserted.</param>
        /// <param name="referenceNode" type="jQuery" >The node that will precede the newly-appended node.</param>
        /// <returns type="jQuery">The inserted <li> element, wrapped in a jQuery object.</returns>

    },


    insertBefore: function (nodeData, referenceNode) {
        /// <summary>
        /// Inserts a node before another node. This method may also be used to reorder nodes.
        /// </summary>
        /// <param name="nodeData" type="Object" >A JSON-formatted string or selector that specifies the node to be inserted.</param>
        /// <param name="referenceNode" type="jQuery" >The node that follows the inserted node.</param>
        /// <returns type="jQuery">The inserted <li> element, wrapped in a jQuery object.</returns>

    },


    items: function () {
        /// <summary>
        /// Obtains an Array of the DOM elements, which correspond to the data items from the Kendo UI DataSource view.
        /// </summary>
        /// <returns type="Array">The currently rendered tree items (<div> elements, that are children of the <li> elements).</returns>

    },


    parent: function (node) {
        /// <summary>
        /// Gets the parent node of the item
        /// </summary>
        /// <param name="node" type="Object" >The child node whose parent will be returned.</param>
        /// <returns type="jQuery">The parent node of the given parameter node.</returns>

    },


    remove: function (node) {
        /// <summary>
        /// Removes a node from the widget.
        /// </summary>
        /// <param name="node" type="Object" >The node that is to be removed.</param>

    },


    select: function (node) {
        /// <summary>
        /// Gets or sets the selected node.
        /// </summary>
        /// <param name="node" type="Object" >If provided, the node that should be selected.</param>
        /// <returns type="jQuery">The currently selected node.</returns>

    },


    setDataSource: function (dataSource) {
        /// <summary>
        /// Sets and binds a dataSource to the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.HierarchicalDataSource" >The new dataSource that the widget will bind to</param>

    },


    text: function (node, newText) {
        /// <summary>
        /// Gets or sets the text of a node in a ARATreeView.
        /// </summary>
        /// <param name="node" type="Object" >The node of which the text is being retrieved or set.</param>
        /// <param name="newText" type="String" >Optional. When passed, sets the node text to the specified string</param>
        /// <returns type="String">The text of a node.</returns>

    },


    toggle: function (node) {
        /// <summary>
        /// Toggles the node of a ARATreeView between its expanded and collapsed states.
        /// </summary>
        /// <param name="node" type="Object" >The node that should be toggled.</param>

    },


    updateIndeterminate: function (node) {
        /// <summary>
        /// Updates the indeterminate state of the ARATreeView checkboxes.
        /// Call it after using the insert / remove API on TreeViews with checkChildren: true.
        /// Use to improve performance when checking multiple checkboxes through code.
        /// </summary>
        /// <param name="node" type="jQuery" >Optional. The root of the hierarchy that will be looped through. Allows only a subtree to be processed. The default value is the ARATreeView root.</param>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARATreeView = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARATreeView widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARATreeView">The kendo.ui.ARATreeView instance (if present).</returns>
};

$.fn.kendoARATreeView = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARATreeView widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation - Boolean 
    /// &#10;A collection of visual animations used when items are expanded or collapsed through user interaction.
    /// &#10;Setting this option to false will disable all animations. is not a valid configuration.
    /// &#10;
    /// &#10;animation - Object 
    /// &#10;A collection of visual animations used when items are expanded or collapsed through user interaction.
    /// &#10;Setting this option to false will disable all animations. is not a valid configuration.
    /// &#10;
    /// &#10;autoBind - Boolean (default: true)
    /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
    /// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
    /// &#10;
    /// &#10;autoScroll - Boolean (default: false)
    /// &#10;If set to true the widget will auto-scroll the containing element when the mouse/finger is close to the top/bottom of it.
    /// &#10;
    /// &#10;checkboxes - Boolean 
    /// &#10;If true or an object, renders checkboxes beside each node.
    /// &#10;
    /// &#10;checkboxes - Object 
    /// &#10;If true or an object, renders checkboxes beside each node.
    /// &#10;
    /// &#10;dataImageUrlField - String (default: null)
    /// &#10;Sets the field of the data item that provides the image URL of the ARATreeView nodes.
    /// &#10;
    /// &#10;dataSource - Object|Array|kendo.data.HierarchicalDataSource 
    /// &#10;The data source of the widget which is used render nodes. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.HierarchicalDataSource instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.HierarchicalDataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.HierarchicalDataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;dataSpriteCssClassField - String (default: null)
    /// &#10;Sets the field of the data item that provides the sprite CSS class of the nodes.
    /// &#10;If an array, each level uses the field that is at the same index in the array, or the last item in the array.
    /// &#10;
    /// &#10;dataTextField - String|Array (default: null)
    /// &#10;Sets the field of the data item that provides the text content of the nodes.
    /// &#10;If an array, each level uses the field that is at the same index in the array, or the last item in the array.
    /// &#10;
    /// &#10;dataUrlField - String (default: null)
    /// &#10;Sets the field of the data item that provides the link URL of the nodes.
    /// &#10;
    /// &#10;dragAndDrop - Boolean (default: false)
    /// &#10;Disables (false) or enables (true) drag-and-drop of the nodes.
    /// &#10;
    /// &#10;loadOnDemand - Boolean (default: true)
    /// &#10;Indicates whether the child DataSources should be fetched lazily when parent groups get expanded.
    /// &#10;Setting this to false causes all child DataSources to be loaded at initialization time.
    /// &#10;
    /// &#10;messages - Object 
    /// &#10;The text messages displayed in the widget. Use it to customize or localize the messages.
    /// &#10;
    /// &#10;template - String|Function 
    /// &#10;Template for rendering each node.
    /// &#10;
    /// &#10;ismultiselection - Boolean (default: false)
    /// &#10;If set to true the widget will allow user to select mulitple nodes in ARATreeView. By default ismultiselection will be set to false.
    /// &#10;
    /// &#10;onLoadSelectId - Boolean (default: false)
    /// &#10;Specifies to the user nodes that will be selected at the time of loading ARATreeView i.e. Edit mode of ARATreeView. By default onLoadSelectId will be set to false.
    /// &#10;
    /// &#10;isLabelsFields - Boolean (default: false)
    /// &#10;If set to true the widget will binded for particularly for label datatype fields. By default isLabelsFields will be set to false.
    /// &#10;
    /// &#10;dataValueField - String
    /// &#10;Specifies by the user to pass the value field as schema in the ajax call for binding dataSource of ARATreeView.
    /// &#10;
    /// &#10;hasChildrenField - Boolean 
    /// &#10;Specifies by the user whether selected node has a child node.
    /// &#10;
    /// &#10;url - String
    /// &#10;Specifies the url to be used by the user which will be used in the ajax call for datasource binding of ARATreeView.
    /// &#10;
    /// &#10;expandAll - Boolean (default: true)
    /// &#10;If set to false the widget will be loaded in collaspsed mode in ARATreeView. By default expandAll will be set to true.
    /// &#10;
    /// &#10;allowParentSelection - Boolean (default: true)
    /// &#10;If set to false then the parent element of the treeview will be set to disabled mode and selection for parent element will not be allowed. By default allowParentSelection will be set to true.
    /// &#10;
    /// &#10;data - Array
    /// &#10;Specifies the paramater to be passed by the user to handle the ajax call.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};



kendo.ui.ARADropDownList = function () { };

kendo.ui.ARADropDownList.prototype = {




    close: function () {
        /// <summary>
        /// Closes the widget popup.
        /// </summary>

    },


    dataItem: function (index) {
        /// <summary>
        /// Returns the data item at the specified index. If the index is not specified, the selected index will be used.
        /// </summary>
        /// <param name="index" type="Object" >The zero-based index of the data record.</param>
        /// <returns type="Object">The raw data record. Returns undefined if no data.</returns>

    },


    destroy: function () {
        /// <summary>
        /// Prepares the ARADropDownList for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    focus: function () {
        /// <summary>
        /// Focuses the widget.
        /// </summary>

    },


    items: function () {
        /// <summary>
        /// Obtains an Array of the DOM elements, which correspond to the data items from the Kendo UI DataSource view.
        /// </summary>
        /// <returns type="Array">The currently rendered dropdown list items (<li> elements).</returns>

    },


    enable: function (enable) {
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>

    },


    open: function () {
        /// <summary>
        /// Opens the popup.
        /// </summary>

    },


    readonly: function (readonly) {
        /// <summary>
        /// Controls whether the widget is editable or readonly.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the ARADropDownList should be readonly or editable.</param>

    },


    refresh: function () {
        /// <summary>
        /// Refresh the popup by rendering all items again.
        /// </summary>

    },


    search: function (word) {
        /// <summary>
        /// Selects an item, which starts with the provided value.
        /// </summary>
        /// <param name="word" type="String" >The search value.</param>

    },


    select: function (li) {
        /// <summary>
        /// Gets or sets the selected item. Selects the item provided as an argument and updates the value and text of the widget.
        /// </summary>
        /// <param name="li" type="Object" >A string, DOM element or jQuery object which represents the item to be selected. A string is treated as a jQuery selector. A number representing the index of the item or function predicate which returns the correct data item.</param>
        /// <returns type="Number">The index of the selected item, if called with no parameters. If a custom value is entered, the returned selected index is -1. If called with a parameter as a setter.</returns>

    },


    setDataSource: function (dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing ARADropDownList and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>

    },


    text: function (text) {
        /// <summary>
        /// Gets or sets the text of the ARADropDownList.
        /// </summary>
        /// <param name="text" type="String" >The text to set.</param>
        /// <returns type="String">The text of the ARADropDownList.</returns>

    },


    toggle: function (toggle) {
        /// <summary>
        /// Opens or closes the widget popup.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Defines the whether to open/close the drop-down list.</param>

    },


    value: function (value) {
        /// <summary>
        /// Gets or sets the value of the ARADropDownList. The value will not be set if there is no item with such value. If value is undefined, text of the data item is used.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">The value of the ARADropDownList.</returns>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARADropDownList = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARADropDownList widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARADropDownList">The kendo.ui.ARADropDownList instance (if present).</returns>
};

$.fn.kendoARADropDownList = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARADropDownList widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation - Boolean 
    /// &#10;Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly. is not a valid configuration.
    /// &#10;
    /// &#10;animation - Object 
    /// &#10;Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly. is not a valid configuration.
    /// &#10;
    /// &#10;autoBind - Boolean (default: true)
    /// &#10;Controls whether to bind the widget to the data source on initialization.
    /// &#10;
    /// &#10;autoWidth - Boolean (default: true)
    /// &#10;If set to true, the widget automatically adjusts the width of the popup element and does not wrap up the item label. By default autoWidth will be set to true.
    /// &#10;
    /// &#10;cascadeFrom - String 
    /// &#10;Use it to set the Id of the parent ARADropDownList widget.
    /// &#10;Help topic showing how cascading functionality works
    /// &#10;
    /// &#10;cascadeFromField - String 
    /// &#10;Defines the field to be used to filter the data source. If not defined the parent's dataValueField option will be used.
    /// &#10;Help topic showing how cascading functionality works
    /// &#10;
    /// &#10;dataSource - Object|Array|kendo.data.DataSource 
    /// &#10;The data source of the widget which is used to display a list of values. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
    /// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;dataTextField - String (default: "")
    /// &#10;The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.
    /// &#10;
    /// &#10;dataValueField - String (default: "")
    /// &#10;The field of the data item that provides the value of the widget.
    /// &#10;
    /// &#10;delay - Number (default: 500)
    /// &#10;Specifies the delay in milliseconds before the search-text typed by the end user is cleared.
    /// &#10;
    /// &#10;enable - Boolean (default: true)
    /// &#10;If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.
    /// &#10;
    /// &#10;enforceMinLength - Boolean (default: false)
    /// &#10;If set to true the widget will not show all items when the text of the search input cleared. By default the widget shows all items when the text of the search input is cleared. Works in conjunction with minLength.
    /// &#10;
    /// &#10;filter - String (default: "contains")
    /// &#10;The filtering method used to determine the suggestions for the current value. Filtration is turned off by default, and can be performed over string values only (either the widget's data has to be an array of strings, or over the field, configured in the dataTextField option).
    /// &#10;The supported filter values are startswith, endswith and contains.
    /// &#10;
    /// &#10;fixedGroupTemplate - String|Function 
    /// &#10;The template used to render the fixed header group. By default the widget displays only the value of the current group.
    /// &#10;
    /// &#10;footerTemplate - String|Function 
    /// &#10;The template used to render the footer template. The footer template receives the widget itself as a part of the data argument. Use the widget fields directly in the template.
    /// &#10;
    /// &#10;groupTemplate - String|Function 
    /// &#10;The template used to render the groups. By default the widget displays only the value of the group.
    /// &#10;
    /// &#10;height - Number (default: 200)
    /// &#10;The height of the suggestion popup in pixels. The default value is 200 pixels.
    /// &#10;
    /// &#10;ignoreCase - Boolean (default: true)
    /// &#10;If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.
    /// &#10;
    /// &#10;index - Number (default: 0)
    /// &#10;The index of the initially selected item. The index is 0 based.
    /// &#10;
    /// &#10;minLength - Number (default: 1)
    /// &#10;The minimum number of characters the user must type before a filter is performed. Set to higher value than 1 if the search could match a lot of items.
    /// &#10;
    /// &#10;noDataTemplate - String|Function (default: "NO DATA FOUND.")
    /// &#10;The template used to render the "no data" template, which will be displayed if no results are found or the underlying data source is empty.
    /// &#10;The noData template receives the widget itself as a part of the data argument. The template will be evaluated on every widget data bound.
    /// &#10;
    /// &#10;popup - Object 
    /// &#10;The options that will be used for the popup initialization. For more details about the available options
    /// &#10;refer to Popup documentation.
    /// &#10;
    /// &#10;optionLabel - String|Object (default: "")
    /// &#10;Define the text of the default empty item. If the value is an object, then the widget will use it as a valid data item.
    /// &#10; Note that the optionLabel will not be available if the widget is empty.
    /// &#10;
    /// &#10;optionLabelTemplate - String|Function 
    /// &#10;The template used to render the option label.
    /// &#10;
    /// &#10;headerTemplate - String|Function 
    /// &#10;Specifies a static HTML content, which will be rendered as a header of the popup element.
    /// &#10;
    /// &#10;template - String|Function 
    /// &#10;The template used to render the items. By default the widget displays only the text of the data item (configured via dataTextField).
    /// &#10;
    /// &#10;valueTemplate - String|Function 
    /// &#10;The valueTemplate used to render the selected value. By default the widget displays only the text of the data item (configured via dataTextField).
    /// &#10;
    /// &#10;text - String (default: "")
    /// &#10;The text of the widget used when the autoBind is set to false.
    /// &#10;
    /// &#10;value - String (default: "")
    /// &#10;The value of the widget.
    /// &#10;
    /// &#10;valuePrimitive - Boolean (default: false)
    /// &#10;Specifies the value binding behavior for the widget when the initial model value is null. If set to true, the View-Model field will be updated with the selected item value field. If set to false, the View-Model field will be updated with the selected item.
    /// &#10;
    /// &#10;virtual - Boolean|Object (default: false)
    /// &#10;Enables the virtualization feature of the widget. The configuration can be set on an object, which contains two properties - itemHeight and valueMapper.For detailed information, refer to the article on virtualization.
    /// &#10;
    /// &#10;url - String
    /// &#10;Specifies to the user about the url to be passed for binding dataSource in ARADropDownList.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAListView = function () { };

kendo.ui.ARAListView.prototype = {




    add: function () {
        /// <summary>
        /// Inserts empty item as first item on the current view and prepare it for editing.
        /// </summary>

    },


    cancel: function () {
        /// <summary>
        /// Cancels changes in currently edited item.
        /// </summary>

    },


    clearSelection: function () {
        /// <summary>
        /// Clears ARAListView selected items and triggers change event.
        /// </summary>

    },


    dataItem: function (row) {
        /// <summary>
        /// Returns the specified data item.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the ARAListView item. A string is treated as a jQuery selector.</param>
        /// <returns type="kendo.data.ObservableObject">the data item to which the specified ARAListView item is bound. More information about the ObservableObject type...</returns>

    },


    dataItems: function () {
        /// <summary>
        /// 
        /// </summary>
        /// <returns type="kendo.data.ObservableArray">Returns the observable array that is bound to the widget</returns>

    },


    destroy: function () {
        /// <summary>
        /// Prepares the ARAListView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    edit: function (item) {
        /// <summary>
        /// Edit specified ARAListView item. Fires the edit event.
        /// </summary>
        /// <param name="item" type="jQuery" >jQuery object which represents the item to be edited.</param>

    },


    items: function () {
        /// <summary>
        /// Obtains an Array of the DOM elements, which correspond to the data items from the Kendo UI DataSource view.
        /// </summary>
        /// <returns type="Array">The currently rendered ARAListView items (<div>, <li>, <tr> elements, etc., depending on the item template).</returns>

    },


    refresh: function () {
        /// <summary>
        /// Reloads the data and repaints the list view.
        /// </summary>

    },


    remove: function (item) {
        /// <summary>
        /// Removes specified ARAListView item. Triggers remove event and if not prevented calls DataSource sync method.
        /// </summary>
        /// <param name="item" type="Object" >jQuery object which represents the item to be removed.</param>

    },


    save: function () {
        /// <summary>
        /// Saves edited ARAListView item. Triggers save event. If save event is not prevented and validation succeeds will call DataSource sync method.
        /// </summary>

    },


    select: function (items) {
        /// <summary>
        /// Get/set the selected ARAListView item(s).
        /// </summary>
        /// <param name="items" type="Object" >Items to select.</param>
        /// <returns type="jQuery">the selected items if called without arguments.</returns>

    },


    setDataSource: function (dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing ARAListView and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARAListView = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAListView widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAListView">The kendo.ui.ARAListView instance (if present).</returns>
};

$.fn.kendoARAListView = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAListView widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;autoBind - Boolean (default: false)
    /// &#10;If set to true the widget will bind to the data source specified in the configuration. 
    /// &#10;By default the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the data source is fired.
    /// &#10;
    /// &#10;dataSource - Object|Array|kendo.data.DataSource 
    /// &#10;The data source of the widget which is used render table rows. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
    /// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;editTemplate - Function 
    /// &#10;Specifies ARAListView item template in edit mode.
    /// &#10;
    /// &#10;navigatable - Boolean (default: false)
    /// &#10;Indicates whether keyboard navigation is enabled/disabled.
    /// &#10;
    /// &#10;selectable - Boolean|String (default: false)
    /// &#10;Indicates whether selection is enabled/disabled. Possible values:
    /// &#10;
    /// &#10;template - Function 
    /// &#10;Specifies ARAListView item template.
    /// &#10;
    /// &#10;altTemplate - Function 
    /// &#10;Template to be used for rendering the alternate items in the ARAListView.
    /// &#10;
    /// &#10;totalRecordPerPage - Number 
    /// &#10;Indicates total number of records to be displayed in the ARAListView.
    /// &#10;
    /// &#10;config - Array 
    /// &#10;Specifies to the user about the config to be passed for managing the pagination in ARAListView.
    /// &#10;By default config will contains array with values CurrentPage: 0, TotalPage: 0, RecordPerPage: totalRecordPerPage(dynamic), TotalRecord: 0 
    /// &#10;
    /// </summary>

    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};



kendo.ui.ARAPopupWindow = function () { };

kendo.ui.ARAPopupWindow.prototype = {




    center: function () {
        /// <summary>
        /// Centers the ARAPopupWindow within the viewport.If the ARAPopupWindow has no set dimensions and is centered before its content is loaded with Ajax, it is probably going to resize after the content is loaded. This naturally changes the position of the widget on the screen and it is no longer centered. If this is a requirement, then either center the ARAPopupWindow in its refresh event, or set some explicit dimensions.
        /// </summary>
        /// <returns type="kendo.ui.ARAPopupWindow">Returns the ARAPopupWindow object to support chaining, for example center and open the ARAPopupWindow with a single expression.</returns>

    },


    close: function () {
        /// <summary>
        /// Closes a ARAPopupWindow.
        /// </summary>
        /// <returns type="kendo.ui.ARAPopupWindow">Returns the ARAPopupWindow object to support chaining.</returns>

    },


    content: function (content) {
        /// <summary>
        /// Gets or set the content of a ARAPopupWindow. Supports chaining when used as a setter.
        /// </summary>
        /// <param name="content" type="Object" >The content of the ARAPopupWindow. Can be an HTML string or jQuery object.</param>
        /// <returns type="String">The current ARAPopupWindow content, if used as a getter. If used as a setter, the method will return the ARAPopupWindow object to support chaining.</returns>

    },


    destroy: function () {
        /// <summary>
        /// Destroys the ARAPopupWindow and its modal overlay, if necessary. Removes the widget HTML elements from the DOM.
        /// </summary>

    },


    isMaximized: function () {
        /// <summary>
        /// Indicates whether the ARAPopupWindow is maximized.
        /// </summary>
        /// <returns type="Boolean"></returns>

    },


    isMinimized: function () {
        /// <summary>
        /// Indicates whether the ARAPopupWindow is minimized.
        /// </summary>
        /// <returns type="Boolean"></returns>

    },


    maximize: function () {
        /// <summary>
        /// Maximizes a ARAPopupWindow to the entire viewing area of the user agent. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.ARAPopupWindow">Returns the ARAPopupWindow object to support chaining.</returns>

    },


    minimize: function () {
        /// <summary>
        /// Maximizes a ARAPopupWindow to its title bar.
        /// </summary>
        /// <returns type="kendo.ui.ARAPopupWindow">Returns the ARAPopupWindow object to support chaining.</returns>

    },


    open: function () {
        /// <summary>
        /// Opens a ARAPopupWindow and brings it on top of any other open ARAPopupWindow instances by calling toFront internally.
        /// </summary>
        /// <returns type="kendo.ui.ARAPopupWindow">Returns the ARAPopupWindow object to support chaining.</returns>

    },


    pin: function () {
        /// <summary>
        /// Pins the ARAPopupWindow at its current position with a position:fixed style, i.e. the widget stops moving together with the other page content when the page is scrolled.
        /// The user will still be able to move the ARAPopupWindow with the mouse or keyboard.
        /// </summary>

    },


    refresh: function (options) {
        /// <summary>
        /// Refreshes the content of a ARAPopupWindow from a remote URL or the initially defined content template.
        /// Note that passing data and non-GET requests cannot be sent to an iframe, as they require a form with a target attribute.
        /// </summary>
        /// <param name="options" type="String" >Options for requesting data from the server. If omitted, the ARAPopupWindow uses the content property that was supplied when the ARAPopupWindow was created. Any options specified here are passed to jQuery.ajax().</param>
        /// <returns type="kendo.ui.ARAPopupWindow">Returns the ARAPopupWindow object to support chaining.</returns>

    },


    restore: function () {
        /// <summary>
        /// Restores a maximized or minimized ARAPopupWindow to its previous state. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.ARAPopupWindow">Returns the ARAPopupWindow object to support chaining.</returns>

    },


    setOptions: function (options) {
        /// <summary>
        /// Allows the ARAPopupWindow to be configured with new options.If you change the content url, call refresh afterwards. Another option is to execute the refresh method with the new URL directly.Changing the size or position of the ARAPopupWindow requires the widget to not be in maximized or minimized state.
        /// </summary>
        /// <param name="options" type="Object" >The configuration options to be set.</param>

    },


    title: function (text) {
        /// <summary>
        /// Gets or sets the title of a ARAPopupWindow. Supports chaining when used as a setter.
        /// </summary>
        /// <param name="text" type="String" >The title of the ARAPopupWindow.</param>
        /// <returns type="String">The current ARAPopupWindow title, if used as a getter. If used as a setter, the method will return the ARAPopupWindow object to support chaining.</returns>

    },


    toFront: function () {
        /// <summary>
        /// Increases the z-index style of a Window wrapper to bring the instance on top of other open Windows. This method is executed automatically when the open method is used.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>

    },


    toggleMaximization: function () {
        /// <summary>
        /// Toggles a Window between a maximized and restored state. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>

    },


    unpin: function () {
        /// <summary>
        /// Disables the Window's pinned state, so that the widget will move together with the other page content when the page is scrolled.
        /// </summary>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARAPopupWindow = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAPopupWindow widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAPopupWindow">The kendo.ui.ARAPopupWindow instance (if present).</returns>
};

$.fn.kendoARAPopupWindow = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAPopupWindow widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;actions - Array (default: ["Close"])
    /// &#10;The buttons for interacting with the ARAPopupWindow. Predefined array values are "Close", "Refresh", "Minimize",
    /// &#10;and "Maximize".
    /// &#10;
    /// &#10;animation - Boolean 
    /// &#10;A collection of {Animation} objects, used to change default animations. A value of false will disable all animations in the widget. is not a valid configuration.
    /// &#10;
    /// &#10;animation - Object (default: { open: { duration: 500 } })
    /// &#10;A collection of {Animation} objects, used to change default animations. A value of false will disable all animations in the widget. is not a valid configuration.
    /// &#10;
    /// &#10;appendTo - Object|String (default: document.body)
    /// &#10;The element that the ARAPopupWindow will be appended to. Beneficial if the ARAPopupWindow is used together with a form.
    /// &#10;Note that this does not constrain the ARAPopupWindow dragging within the given element.
    /// &#10;
    /// &#10;autoFocus - Boolean (default: true)
    /// &#10;Determines whether the ARAPopupWindow will be focused automatically when opened. The property also influences the focus behavior when the ARAPopupWindow is clicked when already opened.
    /// &#10;
    /// &#10;content - String 
    /// &#10;Specifies a URL or request options that the ARAPopupWindow should load its content from.Note: For URLs starting with a protocol (e.g. http://),
    /// &#10;a container iframe element is automatically created. This behavior may change in future
    /// &#10;versions, so it is advisable to always use the iframe configuration option.
    /// &#10;
    /// &#10;content - Object 
    /// &#10;Specifies a URL or request options that the ARAPopupWindow should load its content from.Note: For URLs starting with a protocol (e.g. http://),
    /// &#10;a container iframe element is automatically created. This behavior may change in future
    /// &#10;versions, so it is advisable to always use the iframe configuration option.
    /// &#10;
    /// &#10;draggable - Boolean (default: false)
    /// &#10;Enables (true) or disables (false) the ability for users to move/drag the widget.
    /// &#10;
    /// &#10;iframe - Boolean 
    /// &#10;Explicitly states whether a content iframe should be created. For more information, please read Using iframes.
    /// &#10;
    /// &#10;height - Number|String 
    /// &#10;Specifies height of the ARAPopupWindow.
    /// &#10;
    /// &#10;maxHeight - Number (default: Infinity)
    /// &#10;The maximum height (in pixels) that may be achieved by resizing the ARAPopupWindow.
    /// &#10;
    /// &#10;maxWidth - Number (default: Infinity)
    /// &#10;The maximum width (in pixels) that may be achieved by resizing the ARAPopupWindow.
    /// &#10;
    /// &#10;minHeight - Number (default: 50)
    /// &#10;The minimum height (in pixels) that may be achieved by resizing the ARAPopupWindow.
    /// &#10;
    /// &#10;minWidth - Number (default: 50)
    /// &#10;The minimum width (in pixels) that may be achieved by resizing the ARAPopupWindow.
    /// &#10;
    /// &#10;modal - Boolean (default: true)
    /// &#10;Specifies whether the ARAPopupWindow should show a modal overlay over the page.
    /// &#10;
    /// &#10;pinned - Boolean (default: false)
    /// &#10;Specifies whether the ARAPopupWindow should be pinned, i.e. it will not move together with the page content during scrolling.
    /// &#10;
    /// &#10;position - Object 
    /// &#10;A collection of one or two members, which define the initial ARAPopupWindow's top and/or left position on the page.
    /// &#10;
    /// &#10;resizable - Boolean (default: false)
    /// &#10;Enables (true) or disables (false) the ability for users to resize a ARAPopupWindow.
    /// &#10;
    /// &#10;scrollable - Boolean (default: true)
    /// &#10;Enables (true) or disables (false) the ability for users to scroll the ARAPopupWindow contents.
    /// &#10;
    /// &#10;title - String|Boolean (default: "")
    /// &#10;The text in the ARAPopupWindow title bar. If false, the ARAPopupWindow will be displayed without a title bar. Note that this will prevent the ARAPopupWindow from being dragged, and the ARAPopupWindow titlebar buttons will not be shown.
    /// &#10;
    /// &#10;visible - Boolean (default: false)
    /// &#10;Specifies whether the ARAPopupWindow will be initially visible.
    /// &#10;
    /// &#10;width - Number|String 
    /// &#10;Specifies width of the ARAPopupWindow.
    /// &#10;
    /// &#10;center - Boolean 
    /// &#10;Specifies whether the widget element will be in the center of the Window for ARAPopupWindow.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAChart = function () { };

kendo.ui.ARAChart.prototype = {

};

$.fn.getKendoARAChart = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAChart widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAChart">The kendo.ui.ARAChart instance (if present).</returns>
};

$.fn.kendoARAChart = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAChart widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;required - Boolean (default: false)
    /// &#10;Specifies whether the widget is a required value or not. By default required will be set to false.
    /// &#10;
    /// &#10;validationExp - String (default: null)
    /// &#10;Specified by user the expression to validate the element in ARAChart. By default validationExp will be set to null.
    /// &#10;
    /// &#10;mode - String (default: "text")
    /// &#10;Specifies to the user about the mode for ARAChart. mode in ARAChart contains text, password, numeric, decimal.
    /// &#10;By default value for mode will be set to "text".
    /// &#10;
    /// &#10;allowHTML - Boolean (default: false)
    /// &#10;Indicates whether HTML tags are allowed in the widget element or not. By default allowHTML will be set to false.
    /// &#10;
    /// &#10;placeholder - String
    /// &#10;If user needs to display some text on place holder then user needs to set this property in ARAChart.
    /// &#10;
    /// &#10;label - String
    /// &#10;Indicates text which developer wants to display before widget element in ARAChart. Label will be displayed before textbox.
    /// &#10;
    /// &#10;width - String
    /// &#10;Indicates the width of the ARAChart.
    /// &#10;
    /// &#10;enable - Boolean 
    /// &#10;If this is set to true, then ARAChart will be in enabled mode. By default message will be set to false.
    /// &#10;
    /// &#10;maxLength - Boolean (default: false)
    /// &#10;Specifies maximum length of text which user can enter in a ARAChart.
    /// &#10;

    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARATwoGrids = function () { };

kendo.ui.ARATwoGrids.prototype = {

};

$.fn.getKendoARATwoGrids = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARATwoGrids widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARATwoGrids">The kendo.ui.ARATwoGrids instance (if present).</returns>
};

$.fn.kendoARATwoGrids = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARATwoGrids widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;viewId - Guid (default: null)
    /// &#10;Specifies the viewId of the current loaded view in which Excel Export is to be performed in ARATwoGrids.
    /// &#10;
    /// &#10;pageId - Guid (default: null)
    /// &#10;Specifies the pageId of current page in which Excel Export is to be performed in ARATwoGrids.
    /// &#10;
    /// &#10;selectedIDs - Object (default: [])
    /// &#10;Indicates the selected recordIDs which are to be exported from the widget element of ARATwoGrids.
    /// &#10;
    /// &#10;data - Array (default: {})
    /// &#10;Specifies the data to be passed as paramater for binding dataSource in ARATwoGrids.
    /// &#10;
    /// &#10;schemadataSource - String
    /// &#10;Specifies the dataSource which will be used to bind PrimaryGrid in ARATwoGrids.
    /// &#10;
    /// &#10;urlPath - String
    /// &#10;Specifies the urlPath which will be used to call API for performing Excel Export in ARATwoGrids.
    /// &#10;

    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARASplitter = function () { };

kendo.ui.ARASplitter.prototype = {




    ajaxRequest: function (pane, url, data) {
        /// <summary>
        /// Loads the content of a pane from a local or remote URL.
        /// </summary>
        /// <param name="pane" type="Object" >The targeted pane whose content is to be loaded via a URL.</param>
        /// <param name="url" type="String" >A local or remote URL from which the content of the pane is to be loaded.</param>
        /// <param name="data" type="Object" >Any data that is necessary to be sent to the server.</param>

    },


    append: function (config) {
        /// <summary>
        /// Appends a new pane. The method returns the pane element, so it can be populated with arbitrary content, if contentUrl is not set.
        /// Invoking this method will force the widget to redraw and it will trigger the resize event.
        /// </summary>
        /// <param name="config" type="Object" >The new pane configuration</param>
        /// <returns type="jQuery">the pane element.</returns>

    },


    collapse: function (pane) {
        /// <summary>
        /// Collapses a specified pane. Invoking this method will force the widget to redraw and it will trigger the resize event.
        /// Note: Invoking the method will not trigger a collapse event.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be collapsed.</param>

    },


    destroy: function () {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    expand: function (pane) {
        /// <summary>
        /// Expands a specified pane. Invoking this method will force the widget to redraw and it will trigger the resize event.
        /// Note: Invoking the method will not trigger an expand event.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be expanded.</param>

    },


    insertAfter: function (config, referencePane) {
        /// <summary>
        /// Inserts a new pane after the specified one. The method returns the pane element, so it can be populated with arbitrary content, if contentUrl is not set.
        /// Invoking this method will force the widget to redraw and it will trigger the resize event.
        /// </summary>
        /// <param name="config" type="Object" >The new pane configuration.</param>
        /// <param name="referencePane" type="Object" >The existing pane after which the new one will be inserted.</param>
        /// <returns type="jQuery">the pane element.</returns>

    },


    insertBefore: function (config, referencePane) {
        /// <summary>
        /// Inserts a new pane before the specified one. The method returns the pane element, so it can be populated with arbitrary content, if contentUrl is not set.
        /// Invoking this method will force the widget to redraw and it will trigger the resize event.
        /// </summary>
        /// <param name="config" type="Object" >The new pane configuration.</param>
        /// <param name="referencePane" type="Object" >The existing pane before which the new one will be inserted.</param>
        /// <returns type="jQuery">the pane element.</returns>

    },


    max: function (pane, value) {
        /// <summary>
        /// Sets the maximum size of a pane. Setting this value will not cause the widget to redraw, nor will it trigger any events.
        /// </summary>
        /// <param name="pane" type="Object" >The pane being targeted for a new minimum size configuration value.</param>
        /// <param name="value" type="String" >The maximum size value of the pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%").</param>

    },


    min: function (pane, value) {
        /// <summary>
        /// Sets the minimum size of a pane. Setting this value will not cause the widget to redraw, nor will it trigger any events.
        /// </summary>
        /// <param name="pane" type="Object" >The pane being targeted for a new minimum size configuration value.</param>
        /// <param name="value" type="String" >The minimum size value of the pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%").</param>

    },


    remove: function (pane) {
        /// <summary>
        /// Removes one or more panes. The method returns the ARASplitter instance.
        /// Invoking this method will force the widget to redraw and it will trigger the resize event.
        /// </summary>
        /// <param name="pane" type="Object" >The pane(s) to be removed.</param>

    },


    size: function (pane, value) {
        /// <summary>
        /// Get or set the size of the pane. Setting this value will cause the widget to redraw and it will trigger the resize event.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be resized.</param>
        /// <param name="value" type="String" >The new size of the pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%"). Note: This value must not exceed panes.max or be less then panes.min.</param>
        /// <returns type="Object">the pane size.</returns>

    },


    toggle: function (pane, expand) {
        /// <summary>
        /// Toggles the state of a specified pane (i.e. collapsed or expanded).
        /// Invoking this method will force the widget to redraw and it will trigger the resize event.
        /// Note: Invoking the method will not trigger collapse or expand events.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be collapsed.</param>
        /// <param name="expand" type="Boolean" >Represents the desired state of the specified pane; to be expanded (true) or collapsed (false). If undefined, toggle() will collapse the pane if it is expanded or will expand the pane if it is collapsed.</param>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARASplitter = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARASplitter widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARASplitter">The kendo.ui.ARASplitter instance (if present).</returns>
};

$.fn.kendoARASplitter = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARASplitter widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;orientation - String (default: "vertical")
    /// &#10;Specifies the orientation of the widget. Supported values are "horizontal" and "vertical".
    /// &#10;
    /// &#10;panes - Array 
    /// &#10;An array of pane definitions.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAReordering = function () { };

kendo.ui.ARAReordering.prototype = {

};

$.fn.getKendoARAReordering = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAReordering widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAReordering">The kendo.ui.ARAReordering instance (if present).</returns>
};

$.fn.kendoARAReordering = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAReordering widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;totrec - Number
    /// &#10;Specifies the total records  to be set as max value in the widget element of ARAReordering.
    /// &#10;
    /// &#10;apiuri - Object (default: [])
    /// &#10;Specifies uri to the user from which reordering will be performed in the widget element of ARAReordering.
    /// &#10;
    /// &#10;pkid - Guid
    /// &#10;Specifies the PKID to be reordered in the ARAReordering.
    /// &#10;

    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARARadioButtonList = function () { };

kendo.ui.ARARadioButtonList.prototype = {




    add: function () {
        /// <summary>
        /// Inserts empty item as first item on the current view and prepare it for editing.
        /// </summary>

    },


    cancel: function () {
        /// <summary>
        /// Cancels changes in currently edited item.
        /// </summary>

    },


    clearSelection: function () {
        /// <summary>
        /// Clears ARARadioButtonList selected items and triggers change event.
        /// </summary>

    },


    dataItem: function (row) {
        /// <summary>
        /// Returns the specified data item.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the ARARadioButtonList item. A string is treated as a jQuery selector.</param>
        /// <returns type="kendo.data.ObservableObject">the data item to which the specified ARARadioButtonList item is bound. More information about the ObservableObject type...</returns>

    },


    dataItems: function () {
        /// <summary>
        /// 
        /// </summary>
        /// <returns type="kendo.data.ObservableArray">Returns the observable array that is bound to the widget</returns>

    },


    destroy: function () {
        /// <summary>
        /// Prepares the ARARadioButtonList for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    edit: function (item) {
        /// <summary>
        /// Edit specified ARARadioButtonList item. Fires the edit event.
        /// </summary>
        /// <param name="item" type="jQuery" >jQuery object which represents the item to be edited.</param>

    },


    items: function () {
        /// <summary>
        /// Obtains an Array of the DOM elements, which correspond to the data items from the Kendo UI DataSource view.
        /// </summary>
        /// <returns type="Array">The currently rendered ARARadioButtonList items (<div>, <li>, <tr> elements, etc., depending on the item template).</returns>

    },


    refresh: function () {
        /// <summary>
        /// Reloads the data and repaints the list view.
        /// </summary>

    },


    remove: function (item) {
        /// <summary>
        /// Removes specified ARARadioButtonList item. Triggers remove event and if not prevented calls DataSource sync method.
        /// </summary>
        /// <param name="item" type="Object" >jQuery object which represents the item to be removed.</param>

    },


    save: function () {
        /// <summary>
        /// Saves edited ARARadioButtonList item. Triggers save event. If save event is not prevented and validation succeeds will call DataSource sync method.
        /// </summary>

    },


    select: function (items) {
        /// <summary>
        /// Get/set the selected ARARadioButtonList item(s).
        /// </summary>
        /// <param name="items" type="Object" >Items to select.</param>
        /// <returns type="jQuery">the selected items if called without arguments.</returns>

    },


    setDataSource: function (dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing ARARadioButtonList and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARARadioButtonList = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARARadioButtonList widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARARadioButtonList">The kendo.ui.ARARadioButtonList instance (if present).</returns>
};

$.fn.kendoARARadioButtonList = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARARadioButtonList widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;autoBind - Boolean (default: true)
    /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
    /// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
    /// &#10;
    /// &#10;dataSource - Object|Array|kendo.data.DataSource 
    /// &#10;The data source of the widget which is used render table rows. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
    /// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;editTemplate - Function 
    /// &#10;Specifies ARARadioButtonList item template in edit mode.
    /// &#10;
    /// &#10;navigatable - Boolean (default: false)
    /// &#10;Indicates whether keyboard navigation is enabled/disabled.
    /// &#10;
    /// &#10;selectable - Boolean|String (default: false)
    /// &#10;Indicates whether selection is enabled/disabled. Possible values:
    /// &#10;
    /// &#10;template - Function 
    /// &#10;Specifies ARARadioButtonList item template.
    /// &#10;
    /// &#10;altTemplate - Function 
    /// &#10;Template to be used for rendering the alternate items in the ARARadioButtonList.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAColorPicker = function () { };

kendo.ui.ARAColorPicker.prototype = {




    close: function () {
        /// <summary>
        /// Closes the popup.
        /// </summary>

    },


    open: function () {
        /// <summary>
        /// Opens the popup element with the color selector.
        /// </summary>

    },


    toggle: function () {
        /// <summary>
        /// Toggles the popup.
        /// </summary>

    },


    value: function (color) {
        /// <summary>
        /// Get or set the selected color. If no argument is given, this returns the
        /// currently selected color as a string in format #FFFFFF when the opacity
        /// option is off, or rgba(255, 255, 255, 1) when opacity is requested.If one argument is given, it selects the new color and updates the UI.  The
        /// argument can be a string in hex, rgb or rgba format, or a Color object.
        /// This does not trigger the "change" event.
        /// </summary>
        /// <param name="color" type="String" ></param>
        /// <returns type="String">the string representation of the current color.</returns>

    },


    color: function (color) {
        /// <summary>
        /// Get or set the selected color. If no argument is given, this returns the currently selected color as a kendo.Color object.
        /// </summary>
        /// <param name="color" type="kendo.Color" >The color that should be set as the current value</param>
        /// <returns type="kendo.Color">the current value</returns>

    },


    enable: function (enable) {
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >Whether the widget should be enabled (true) or disabled (false). If not specified, the method will enable the widget.</param>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARAColorPicker = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAColorPicker widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAColorPicker">The kendo.ui.ARAColorPicker instance (if present).</returns>
};

$.fn.kendoARAColorPicker = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAColorPicker widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;buttons - Boolean (default: true)
    /// &#10;Specifies whether the widget should display the Apply / Cancel buttons.Applicable only for the HSV selector, when a pallete is not specified.
    /// &#10;
    /// &#10;clearButton - Boolean (default: false)
    /// &#10;Specifies whether the widget should display the 'Clear color' button.Applicable only for the HSV selector, when a pallete is not specified.
    /// &#10;
    /// &#10;columns - Number 
    /// &#10;The number of columns to show in the color dropdown when a pallete is specified.
    /// &#10;This is automatically initialized for the "basic" and "websafe" palettes.
    /// &#10;If you use a custom palette then you can set this to some value that makes sense for your colors.
    /// &#10;
    /// &#10;tileSize - Number (default: 14)
    /// &#10;The size of a color cell.
    /// &#10;
    /// &#10;tileSize - Object (default: 14)
    /// &#10;The size of a color cell.
    /// &#10;
    /// &#10;messages - Object 
    /// &#10;Allows localization of the strings that are used in the widget.
    /// &#10;
    /// &#10;palette - String|Array (default: null)
    /// &#10;When a non-null palette argument is supplied, the drop-down will be
    /// &#10;a simple color picker that lists the colors. The following are supported:If palette is missing or null, the widget will display the HSV
    /// &#10;selector.
    /// &#10;
    /// &#10;opacity - Boolean (default: false)
    /// &#10;Only for the HSV selector.  If true, the widget will display the opacity slider.
    /// &#10;Note that currently in HTML5 the  does not support opacity.
    /// &#10;
    /// &#10;preview - Boolean (default: true)
    /// &#10;Only applicable for the HSV selector.Displays the color preview element, along with an input field where the end user can paste a color in a CSS-supported notation.
    /// &#10;
    /// &#10;toolIcon - String (default: null)
    /// &#10;A CSS class name to display an icon in the color picker button.  If
    /// &#10;specified, the HTML for the element will look like this:
    /// &#10;
    /// &#10;value - String (default: black)
    /// &#10;The initially selected color.
    /// &#10;Note that when initializing the widget from an  element, the initial color will be decided by the field instead.
    /// &#10;
    /// &#10;width - String (default: black)
    /// &#10;Specifies the width of the widget element
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};



kendo.ui.ARACombobox = function () { };

kendo.ui.ARACombobox.prototype = {




    close: function () {
        /// <summary>
        /// Closes the widget popup.
        /// </summary>

    },


    dataItem: function (index) {
        /// <summary>
        /// Returns the data item at the specified index. If the index is not specified, the selected index will be used.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the data record.</param>
        /// <returns type="Object">The raw data record. Returns undefined if no data.</returns>

    },


    destroy: function () {
        /// <summary>
        /// Prepares the ARACombobox for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function (enable) {
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>

    },


    focus: function () {
        /// <summary>
        /// Focuses the widget.
        /// </summary>

    },


    items: function () {
        /// <summary>
        /// Obtains an Array of the DOM elements, which correspond to the data items from the Kendo UI DataSource view.
        /// </summary>
        /// <returns type="Array">The currently rendered dropdown list items (<li> elements).</returns>

    },


    open: function () {
        /// <summary>
        /// Opens the popup.
        /// </summary>

    },


    readonly: function (readonly) {
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >If set to true the widget will not allow user input. If set to false the widget will allow user input.</param>

    },


    refresh: function () {
        /// <summary>
        /// Refresh the popup by rendering all items again.
        /// </summary>

    },


    search: function (word) {
        /// <summary>
        /// Searches the data source for the provided value and displays any matches as suggestions.
        /// </summary>
        /// <param name="word" type="String" >The filter value.</param>

    },


    select: function (li) {
        /// <summary>
        /// Gets or sets the selected item. Selects the item provided as an argument and updates the value and text of the widget.
        /// </summary>
        /// <param name="li" type="Object" >A string, DOM element or jQuery object which represents the item to be selected. A string is treated as a jQuery selector. A number representing the index of the item or function predicate which returns the correct data item.</param>
        /// <returns type="Number">The index of the selected item, if called with no parameters. If a custom value is entered, the returned selected index is -1. If called with a parameter as a setter.</returns>

    },


    setDataSource: function (dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing ARACombobox and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>

    },


    suggest: function (value) {
        /// <summary>
        /// Sets the value of the widget to the specified argument and visually selects the text.
        /// </summary>
        /// <param name="value" type="String" >Characters to force a suggestion.</param>

    },


    text: function (text) {
        /// <summary>
        /// Gets or sets the text of the ARACombobox. Widget will select the item with same text. If
        /// there are no matches then the text will be considered as a custom value of the widget.
        /// </summary>
        /// <param name="text" type="String" >The text to set.</param>
        /// <returns type="String">The text of the ARACombobox.</returns>

    },


    toggle: function (toggle) {
        /// <summary>
        /// Opens or closes the widget popup.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Defines the whether to open/close the drop-down list.</param>

    },


    value: function (value) {
        /// <summary>
        /// Gets or sets the value of the ARACombobox.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">The value of the ARACombobox.</returns>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARACombobox = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARACombobox widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARACombobox">The kendo.ui.ARACombobox instance (if present).</returns>
};

$.fn.kendoARACombobox = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARACombobox widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation - Object 
    /// &#10;Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.
    /// &#10;
    /// &#10;autoBind - Boolean (default: true)
    /// &#10;Controls whether to bind the widget to the data source on initialization.
    /// &#10;
    /// &#10;autoWidth - Boolean (default: true)
    /// &#10;If set to false, the widget will not automatically adjusts the width of the popup element and wraps up the item label.
    /// &#10;
    /// &#10;cascadeFrom - String 
    /// &#10;Use it to set the Id of the parent ARACombobox widget.
    /// &#10;Help topic showing how cascading functionality works
    /// &#10;
    /// &#10;cascadeFromField - String 
    /// &#10;Defines the field to be used to filter the data source. If not defined the parent's dataValueField option will be used.
    /// &#10;Help topic showing how cascading functionality works
    /// &#10;
    /// &#10;clearButton - Boolean (default: true)
    /// &#10;Unless this options is set to false, a button will appear when hovering the widget. Clicking that button will reset the widget's value and will trigger the change event.
    /// &#10;
    /// &#10;dataSource - Object|Array|kendo.data.DataSource 
    /// &#10;The data source of the widget which is used to display a list of values. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
    /// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;dataTextField - String (default: "")
    /// &#10;The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.
    /// &#10;
    /// &#10;dataValueField - String (default: "")
    /// &#10;The field of the data item that provides the value of the widget.
    /// &#10;
    /// &#10;delay - Number (default: 200)
    /// &#10;The delay in milliseconds between a keystroke and when the widget displays the popup.
    /// &#10;
    /// &#10;enable - Boolean (default: true)
    /// &#10;If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.
    /// &#10;
    /// &#10;enforceMinLength - Boolean (default: false)
    /// &#10;If set to true the widget will not show all items when the text of the search input cleared. By default the widget shows all items when the text of the search input is cleared. Works in conjunction with minLength.
    /// &#10;
    /// &#10;filter - String (default: "contains")
    /// &#10;The filtering method used to determine the suggestions for the current value. Filtration is turned off by default, and can be performed over string values only (either the widget's data has to be an array of strings, or over the field, configured in the dataTextField option).
    /// &#10;The supported filter values are none, startswith, endswith and contains.
    /// &#10;
    /// &#10;fixedGroupTemplate - String|Function 
    /// &#10;The template used to render the fixed header group. By default the widget displays only the value of the current group.
    /// &#10;
    /// &#10;footerTemplate - String|Function 
    /// &#10;The template used to render the footer template. The footer template receives the widget itself as a part of the data argument. Use the widget fields directly in the template.
    /// &#10;
    /// &#10;groupTemplate - String|Function 
    /// &#10;The template used to render the groups. By default the widget displays only the value of the group.
    /// &#10;
    /// &#10;height - Number (default: 200)
    /// &#10;The height of the suggestion popup in pixels. The default value is 200 pixels.
    /// &#10;
    /// &#10;highlightFirst - Boolean (default: true)
    /// &#10;If set to true the first suggestion will be automatically highlighted.
    /// &#10;
    /// &#10;ignoreCase - Boolean (default: true)
    /// &#10;If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.
    /// &#10;
    /// &#10;index - Number (default: -1)
    /// &#10;The index of the initially selected item. The index is 0 based.
    /// &#10;
    /// &#10;minLength - Number (default: 1)
    /// &#10;The minimum number of characters the user must type before a search is performed. Set to higher value than 1 if the search could match a lot of items.
    /// &#10;
    /// &#10;noDataTemplate - String|Function (default: "NO DATA FOUND.")
    /// &#10;The template used to render the "no data" template, which will be displayed if no results are found or the underlying data source is empty.
    /// &#10;The noData template receives the widget itself as a part of the data argument. The template will be evaluated on every widget data bound.
    /// &#10;
    /// &#10;placeholder - String (default: "")
    /// &#10;The hint displayed by the widget when it is empty. Not set by default.
    /// &#10;
    /// &#10;popup - Object 
    /// &#10;The options that will be used for the popup initialization. For more details about the available options
    /// &#10;refer to Popup documentation.
    /// &#10;
    /// &#10;suggest - Boolean (default: true)
    /// &#10;If set to false the widget will not automatically use the suggestion as its value.
    /// &#10;
    /// &#10;syncValueAndText - Boolean (default: true)
    /// &#10;When set to true the widget will automatically set selected value to the typed custom text. Set the option to false to
    /// &#10;clear the selected value but keep the custom text.
    /// &#10;
    /// &#10;headerTemplate - String|Function 
    /// &#10;Specifies a static HTML content, which will be rendered as a header of the popup element.
    /// &#10;
    /// &#10;template - String|Function 
    /// &#10;The template used to render the items. By default the widget displays only the text of the data item (configured via dataTextField).
    /// &#10;
    /// &#10;text - String (default: "")
    /// &#10;The text of the widget used when the autoBind is set to false.
    /// &#10;
    /// &#10;value - String (default: "")
    /// &#10;The value of the widget.
    /// &#10;
    /// &#10;valuePrimitive - Boolean (default: false)
    /// &#10;Specifies the value binding behavior for the widget when the initial model value is null. If set to true, the View-Model field will be updated with the selected item value field. If set to false, the View-Model field will be updated with the selected item.
    /// &#10;
    /// &#10;virtual - Boolean (default: false)
    /// &#10;Enables the virtualization feature of the widget. The configuration can be set on an object, which contains two properties - itemHeight and valueMapper.For detailed information, refer to the article on virtualization.
    /// &#10;
    /// &#10;url - String (default: '')
    /// &#10;Contains the url to through which API will be called for binding dataSource for ARACombobox.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};



kendo.ui.ARAScheduler = function () { };

kendo.ui.ARAScheduler.prototype = {




    addEvent: function (data) {
        /// <summary>
        /// Adds a new scheduler event and opens the edit form.
        /// </summary>
        /// <param name="data" type="Object" >The object containing the scheduler event fields.</param>

    },


    cancelEvent: function () {
        /// <summary>
        /// Cancels the scheduler event editing. Closes the edit form.
        /// </summary>

    },


    data: function () {
        /// <summary>
        /// Gets currently expanded scheduler events.
        /// </summary>

    },


    date: function (value) {
        /// <summary>
        /// Gets or sets the current scheduler date.
        /// </summary>
        /// <param name="value" type="Date" >The new date to set.</param>
        /// <returns type="Date">the current date.</returns>

    },


    destroy: function () {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    editEvent: function (event) {
        /// <summary>
        /// Opens the specified scheduler event in the edit form.
        /// </summary>
        /// <param name="event" type="Object" >The event which should be put in edit mode. Also accepts a string which is the uid of the event which should be edited.</param>

    },


    items: function () {
        /// <summary>
        /// Obtains an Array of the DOM elements, which correspond to the data items from the Kendo UI DataSource view.
        /// </summary>
        /// <returns type="Array">The currently rendered events (<div> elements).</returns>

    },


    occurrenceByUid: function (uid) {
        /// <summary>
        /// Gets the event occurrence with the specified uid.
        /// </summary>
        /// <param name="uid" type="String" >The uid of the occurrence to look for.</param>
        /// <returns type="kendo.data.ARASchedulerEvent">the occurrence instance. Returns undefined if an occurrence with the specified uid is not found.</returns>

    },


    occurrencesInRange: function (start, end) {
        /// <summary>
        /// Gets a list of event occurrences in specified time range.
        /// </summary>
        /// <param name="start" type="Date" >The start date of the period.</param>
        /// <param name="end" type="Date" >The end date of the period.</param>
        /// <returns type="Array">a list of scheduler events filtered by the specified start/end period.</returns>

    },


    refresh: function () {
        /// <summary>
        /// Refreshes the ARAScheduler rendering using the current data items.
        /// </summary>

    },


    removeEvent: function (event) {
        /// <summary>
        /// Removes the specified scheduler event.
        /// </summary>
        /// <param name="event" type="Object" >The event which should be removed. Also accepts a string which is the uid of the event which should be removed.</param>

    },


    resourcesBySlot: function (slot) {
        /// <summary>
        /// Get the relevant resources for a given slot.
        /// </summary>
        /// <param name="slot" type="Object" ></param>
        /// <returns type="Object">The relevant resources.</returns>

    },


    saveAsPDF: function () {
        /// <summary>
        /// Initiates the PDF export and returns a promise. Also triggers the pdfExport event.
        /// </summary>
        /// <returns type="Promise">A promise that will be resolved when the export completes. The same promise is available in the pdfExport event arguments.</returns>

    },


    saveEvent: function () {
        /// <summary>
        /// Saves the scheduler event which is open in the edit form and closes it.
        /// </summary>

    },


    select: function (events, options) {
        /// <summary>
        /// Gets or sets the events (or slots) which are selected.
        /// </summary>
        /// <param name="events" type="Array" >The Uids of events which should be selected. List of the available events can be get using the data method.</param>
        /// <param name="options" type="" ></param>

    },


    setDataSource: function (dataSource) {
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.ARASchedulerDataSource" >The data source to which the widget should be bound.</param>

    },


    slotByPosition: function (xPosition, yPosition) {
        /// <summary>
        /// Get the time slot from given horizontal (x) and vertical (y) position.
        /// </summary>
        /// <param name="xPosition" type="Number" >The horizontal position.</param>
        /// <param name="yPosition" type="Number" >The vertical position.</param>
        /// <returns type="Object">The time slot.</returns>

    },


    slotByElement: function (element) {
        /// <summary>
        /// Get the time slot from given element.
        /// </summary>
        /// <param name="element" type="Object" ></param>
        /// <returns type="Object">The time slot.</returns>

    },


    view: function (type) {
        /// <summary>
        /// Gets or sets the current ARAScheduler view.To get the current ARAScheduler view name, use the viewName method.
        /// </summary>
        /// <param name="type" type="String" >The view type to select.</param>
        /// <returns type="kendo.ui.ARASchedulerView">the current ARAScheduler view.</returns>

    },


    viewName: function () {
        /// <summary>
        /// The name of the current view. Can be used for refreshing the current view data.
        /// </summary>
        /// <returns type="String">the name of the current scheduler view.</returns>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARAScheduler = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAScheduler widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAScheduler">The kendo.ui.ARAScheduler instance (if present).</returns>
};

$.fn.kendoARAScheduler = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAScheduler widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;allDayEventTemplate - String|Function 
    /// &#10;The template used to render the "all day" scheduler events.The fields which can be used in the template are:
    /// &#10;
    /// &#10;allDaySlot - Boolean (default: true)
    /// &#10;If set to true the scheduler will display a slot for "all day" events.
    /// &#10;
    /// &#10;autoBind - Boolean (default: true)
    /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
    /// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
    /// &#10;
    /// &#10;currentTimeMarker - Boolean 
    /// &#10;If set to false the "current time" marker of the scheduler would not be displayed.
    /// &#10;
    /// &#10;currentTimeMarker - Object 
    /// &#10;If set to false the "current time" marker of the scheduler would not be displayed.
    /// &#10;
    /// &#10;dataSource - Object|Array|kendo.data.ARASchedulerDataSource 
    /// &#10;The data source of the widget which contains the scheduler events. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.ARASchedulerDataSource
    /// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.ARASchedulerDataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.ARASchedulerDataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;date - Date (default: today's date)
    /// &#10;The current date of the scheduler. Used to determine the period which is displayed by the widget.
    /// &#10;
    /// &#10;dateHeaderTemplate - String|Function 
    /// &#10;The template used to render the date header cells.By default the scheduler renders the date using a custom date format - "ddd M/dd".
    /// &#10;The "ddd" specifier represents the abbreviated name of the week day and will be localized using the current Kendo UI culture.
    /// &#10;If the developer wants to control the day and month order, then one needs to define a custom template.The fields which can be used in the template are:
    /// &#10;
    /// &#10;editable - Boolean (default: true)
    /// &#10;If set to true the user would be able to create new scheduler events and modify or delete existing ones.
    /// &#10;
    /// &#10;editable - Object (default: true)
    /// &#10;If set to true the user would be able to create new scheduler events and modify or delete existing ones.
    /// &#10;
    /// &#10;endTime - Date 
    /// &#10;The end time of the week and day views. The scheduler will display events ending before the endTime.
    /// &#10;
    /// &#10;eventTemplate - String|Function 
    /// &#10;The template used to render the scheduler events.The fields which can be used in the template are:
    /// &#10;
    /// &#10;footer - Boolean 
    /// &#10;If set to false the footer of the scheduler would not be displayed.
    /// &#10;
    /// &#10;footer - Object 
    /// &#10;If set to false the footer of the scheduler would not be displayed.
    /// &#10;
    /// &#10;group - Object 
    /// &#10;The configuration of the scheduler resource(s) grouping.
    /// &#10;
    /// &#10;groupHeaderTemplate - String|Function 
    /// &#10;The template used to render the group headers of scheduler day, week, workWeek and timeline views.The fields which can be used in the template are:
    /// &#10;
    /// &#10;height - Number|String 
    /// &#10;The height of the widget. Numeric values are treated as pixels.
    /// &#10;
    /// &#10;majorTick - Number (default: 60)
    /// &#10;The number of minutes represented by a major tick.
    /// &#10;
    /// &#10;majorTimeHeaderTemplate - String|Function 
    /// &#10;The template used to render the major ticks.By default the scheduler renders the time using the current culture time format.The fields which can be used in the template are:
    /// &#10;
    /// &#10;max - Date (default: 31/12/2099)
    /// &#10;Constraints the maximum date which can be selected via the scheduler navigation.
    /// &#10;
    /// &#10;messages - Object 
    /// &#10;The configuration of the scheduler messages. Use this option to customize or localize the scheduler messages.
    /// &#10;
    /// &#10;min - Date (default: 1/1/1900)
    /// &#10;Constraints the minimum date which can be selected via the scheduler navigation.
    /// &#10;
    /// &#10;minorTickCount - Number (default: 2)
    /// &#10;The number of time slots to display per major tick.
    /// &#10;
    /// &#10;minorTimeHeaderTemplate - String|Function 
    /// &#10;The template used to render the minor ticks.By default the scheduler renders a "&nbsp;".The fields which can be used in the template are:
    /// &#10;
    /// &#10;mobile - Boolean|String (default: false)
    /// &#10;If set to true and the scheduler is viewed on mobile browser it will use adaptive rendering.Can be set to a string phone or tablet which will force the widget to use adaptive rendering regardless of browser type.
    /// &#10;
    /// &#10;pdf - Object 
    /// &#10;Configures the Kendo UI ARAScheduler PDF export settings.
    /// &#10;
    /// &#10;resources - Array 
    /// &#10;The configuration of the scheduler resource(s). A scheduler resource is optional metadata that can be associated
    /// &#10;with a scheduler event.
    /// &#10;
    /// &#10;selectable - Boolean (default: false)
    /// &#10;If set to true the user would be able to select scheduler cells and events. By default selection is disabled.
    /// &#10;
    /// &#10;showWorkHours - Boolean (default: false)
    /// &#10;If set to true the view will be initially shown in business hours mode. By default view is displayed in full day mode.
    /// &#10;
    /// &#10;snap - Boolean (default: true)
    /// &#10;If set to true the scheduler will snap events to the nearest slot during dragging (resizing or moving). Set it to false to allow free moving and resizing of events.
    /// &#10;
    /// &#10;startTime - Date 
    /// &#10;The start time of the week and day views. The scheduler will display events starting after the startTime.
    /// &#10;
    /// &#10;timezone - String 
    /// &#10;The timezone which the scheduler will use to display the scheduler appointment dates. By default the current system timezone is used. This is an acceptable default when the
    /// &#10;scheduler widget is bound to local array of events. It is advisable to specify a timezone if the scheduler is bound to a remote service.
    /// &#10;That way all users would see the same dates and times no matter their configured system timezone.The complete list of the supported timezones is available in the List of IANA time zones Wikipedia page.
    /// &#10;
    /// &#10;toolbar - Array 
    /// &#10;List of commands that the scheduler will display in its toolbar as buttons. Currently supports only the "pdf" command.The "pdf" command exports the scheduler in PDF format.
    /// &#10;
    /// &#10;views - Array 
    /// &#10;The views displayed by the scheduler and their configuration. The array items can be either objects specifying the view configuration or strings representing the view types (assuming default configuration).
    /// &#10;By default the Kendo UI ARAScheduler widget displays "day" and "week" and month(selected: true) view.
    /// &#10;
    /// &#10;width - Number|String 
    /// &#10;The width of the widget. Numeric values are treated as pixels.
    /// &#10;
    /// &#10;workDayStart - Date 
    /// &#10;Sets the start of the work day when the  "Show business hours" button is clicked.
    /// &#10;
    /// &#10;workDayEnd - Date 
    /// &#10;Sets the end of the work day when the  "Show business hours" button is clicked.
    /// &#10;
    /// &#10;workWeekStart - Number (default: 1)
    /// &#10;The start of working week (index based).
    /// &#10;
    /// &#10;workWeekEnd - Number (default: 5)
    /// &#10;The end of working week (index based).
    /// &#10;
    /// &#10;url - String (default: '')
    /// &#10;Contains the url which will be used to bind datasource in ARASchedular.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAChart = function () { };

kendo.ui.ARAChart.prototype = {

};

$.fn.getKendoARAChart = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAChart widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAChart">The kendo.ui.ARAChart instance (if present).</returns>
};

$.fn.kendoARAChart = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAChart widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;RecordPerPage - Number (default: 20)
    /// &#10;Specifies the number of records to be displayed in chart per page.
    /// &#10;
    /// &#10;config - String 
    /// &#10;Specifies the config to be used to manage pagination for the ARAChart which will be loaded.
    /// &#10;By default config will be set to CurrentPage: 0, TotalPage: 0, RecordPerPage: RecordPerPage(dynamic), TotalRecord: 0.
    /// &#10;
    /// &#10;dataSource - Object 
    /// &#10;Specifies the dataSource which will be used in binding the dataSource in ARAChart.
    /// &#10;If dataSource is not passed as a paramater, then dataSource will be binded based on the url passed as paramater.
    /// &#10;
    /// &#10;url - String 
    /// &#10;Specifies the url which will be used in binding the dataSource in ARAChart.
    /// &#10;

    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARACheckBox = function () { };

kendo.ui.ARACheckBox.prototype = {

};

$.fn.getKendoARACheckBox = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARACheckBox widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARACheckBox">The kendo.ui.ARACheckBox instance (if present).</returns>
};

$.fn.kendoARACheckBox = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARACheckBox widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;text - String (default: '')
    /// &#10;Specifies the text which is used as label in the ARACheckbox.
    /// &#10;
 
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARACheckboxList = function () { };

kendo.ui.ARACheckboxList.prototype = {




    add: function () {
        /// <summary>
        /// Inserts empty item as first item on the current view and prepare it for editing.
        /// </summary>

    },


    cancel: function () {
        /// <summary>
        /// Cancels changes in currently edited item.
        /// </summary>

    },


    clearSelection: function () {
        /// <summary>
        /// Clears ARACheckboxList selected items and triggers change event.
        /// </summary>

    },


    dataItem: function (row) {
        /// <summary>
        /// Returns the specified data item.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the listview item. A string is treated as a jQuery selector.</param>
        /// <returns type="kendo.data.ObservableObject">the data item to which the specified listview item is bound. More information about the ObservableObject type...</returns>

    },


    dataItems: function () {
        /// <summary>
        /// 
        /// </summary>
        /// <returns type="kendo.data.ObservableArray">Returns the observable array that is bound to the widget</returns>

    },


    destroy: function () {
        /// <summary>
        /// Prepares the ARACheckboxList for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    edit: function (item) {
        /// <summary>
        /// Edit specified ARACheckboxList item. Fires the edit event.
        /// </summary>
        /// <param name="item" type="jQuery" >jQuery object which represents the item to be edited.</param>

    },


    items: function () {
        /// <summary>
        /// Obtains an Array of the DOM elements, which correspond to the data items from the Kendo UI DataSource view.
        /// </summary>
        /// <returns type="Array">The currently rendered ARACheckboxList items (<div>, <li>, <tr> elements, etc., depending on the item template).</returns>

    },


    refresh: function () {
        /// <summary>
        /// Reloads the data and repaints the list view.
        /// </summary>

    },


    remove: function (item) {
        /// <summary>
        /// Removes specified ARACheckboxList item. Triggers remove event and if not prevented calls DataSource sync method.
        /// </summary>
        /// <param name="item" type="Object" >jQuery object which represents the item to be removed.</param>

    },


    save: function () {
        /// <summary>
        /// Saves edited ARACheckboxList item. Triggers save event. If save event is not prevented and validation succeeds will call DataSource sync method.
        /// </summary>

    },


    select: function (items) {
        /// <summary>
        /// Get/set the selected ARACheckboxList item(s).
        /// </summary>
        /// <param name="items" type="Object" >Items to select.</param>
        /// <returns type="jQuery">the selected items if called without arguments.</returns>

    },


    setDataSource: function (dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing ARACheckboxList and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARACheckboxList = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARACheckboxList widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARACheckboxList">The kendo.ui.ARACheckboxList instance (if present).</returns>
};

$.fn.kendoARACheckboxList = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARACheckboxList widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;autoBind - Boolean (default: true)
    /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
    /// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
    /// &#10;
    /// &#10;dataSource - Object|Array|kendo.data.DataSource 
    /// &#10;The data source of the widget which is used render table rows. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
    /// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;editTemplate - Function 
    /// &#10;Specifies ARACheckboxList item template in edit mode.
    /// &#10;
    /// &#10;navigatable - Boolean (default: false)
    /// &#10;Indicates whether keyboard navigation is enabled/disabled.
    /// &#10;
    /// &#10;selectable - Boolean|String (default: false)
    /// &#10;Indicates whether selection is enabled/disabled. Possible values:
    /// &#10;
    /// &#10;template - Function 
    /// &#10;Specifies ARACheckboxList item template.
    /// &#10;
    /// &#10;altTemplate - Function 
    /// &#10;Template to be used for rendering the alternate items in the ARACheckboxList.
    /// &#10;
    /// &#10;orientation - String (default: 'vertical')
    /// &#10;Indicates whether the ARACheckboxList will be in vertical mode for the ARACheckboxList.
    /// &#10;
    /// &#10;dataCheckedField - String (default: 'isChecked')
    /// &#10;Indicates the checked field data in the ARACheckboxList.
    /// &#10;
    /// &#10;dataValueField - String
    /// &#10;Indicates the value stored in the widget element of the ARACheckboxList.
    /// &#10;
    /// &#10;dataTextField - String 
    /// &#10;Indicates the Text to be shown as label in the widget element of the ARACheckboxList.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARACombobox = function () { };

kendo.ui.ARACombobox.prototype = {




    close: function () {
        /// <summary>
        /// Closes the widget popup.
        /// </summary>

    },


    dataItem: function (index) {
        /// <summary>
        /// Returns the data item at the specified index. If the index is not specified, the selected index will be used.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the data record.</param>
        /// <returns type="Object">The raw data record. Returns undefined if no data.</returns>

    },


    destroy: function () {
        /// <summary>
        /// Prepares the ARACombobox for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function (enable) {
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>

    },


    focus: function () {
        /// <summary>
        /// Focuses the widget.
        /// </summary>

    },


    items: function () {
        /// <summary>
        /// Obtains an Array of the DOM elements, which correspond to the data items from the Kendo UI DataSource view.
        /// </summary>
        /// <returns type="Array">The currently rendered dropdown list items (<li> elements).</returns>

    },


    open: function () {
        /// <summary>
        /// Opens the popup.
        /// </summary>

    },


    readonly: function (readonly) {
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >If set to true the widget will not allow user input. If set to false the widget will allow user input.</param>

    },


    refresh: function () {
        /// <summary>
        /// Refresh the popup by rendering all items again.
        /// </summary>

    },


    search: function (word) {
        /// <summary>
        /// Searches the data source for the provided value and displays any matches as suggestions.
        /// </summary>
        /// <param name="word" type="String" >The filter value.</param>

    },


    select: function (li) {
        /// <summary>
        /// Gets or sets the selected item. Selects the item provided as an argument and updates the value and text of the widget.
        /// </summary>
        /// <param name="li" type="Object" >A string, DOM element or jQuery object which represents the item to be selected. A string is treated as a jQuery selector. A number representing the index of the item or function predicate which returns the correct data item.</param>
        /// <returns type="Number">The index of the selected item, if called with no parameters. If a custom value is entered, the returned selected index is -1. If called with a parameter as a setter.</returns>

    },


    setDataSource: function (dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing ARACombobox and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>

    },


    suggest: function (value) {
        /// <summary>
        /// Sets the value of the widget to the specified argument and visually selects the text.
        /// </summary>
        /// <param name="value" type="String" >Characters to force a suggestion.</param>

    },


    text: function (text) {
        /// <summary>
        /// Gets or sets the text of the ARACombobox. Widget will select the item with same text. If
        /// there are no matches then the text will be considered as a custom value of the widget.
        /// </summary>
        /// <param name="text" type="String" >The text to set.</param>
        /// <returns type="String">The text of the ARACombobox.</returns>

    },


    toggle: function (toggle) {
        /// <summary>
        /// Opens or closes the widget popup.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Defines the whether to open/close the drop-down list.</param>

    },


    value: function (value) {
        /// <summary>
        /// Gets or sets the value of the ARACombobox.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">The value of the ARACombobox.</returns>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARACombobox = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARACombobox widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARACombobox">The kendo.ui.ARACombobox instance (if present).</returns>
};

$.fn.kendoARACombobox = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARACombobox widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation - Object 
    /// &#10;Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.
    /// &#10;
    /// &#10;autoBind - Boolean (default: true)
    /// &#10;Controls whether to bind the widget to the data source on initialization.
    /// &#10;
    /// &#10;autoWidth - Boolean (default: true)
    /// &#10;If set to false, the widget will not adjusts the width of the popup element and wrap up the item label.
    /// &#10;
    /// &#10;cascadeFrom - String 
    /// &#10;Use it to set the Id of the parent ARACombobox widget.
    /// &#10;Help topic showing how cascading functionality works
    /// &#10;
    /// &#10;cascadeFromField - String 
    /// &#10;Defines the field to be used to filter the data source. If not defined the parent's dataValueField option will be used.
    /// &#10;Help topic showing how cascading functionality works
    /// &#10;
    /// &#10;clearButton - Boolean (default: true)
    /// &#10;Unless this options is set to false, a button will appear when hovering the widget. Clicking that button will reset the widget's value and will trigger the change event.
    /// &#10;
    /// &#10;dataSource - Object|Array|kendo.data.DataSource 
    /// &#10;The data source of the widget which is used to display a list of values. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
    /// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;dataTextField - String (default: "")
    /// &#10;The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.
    /// &#10;
    /// &#10;dataValueField - String (default: "")
    /// &#10;The field of the data item that provides the value of the widget.
    /// &#10;
    /// &#10;delay - Number (default: 200)
    /// &#10;The delay in milliseconds between a keystroke and when the widget displays the popup.
    /// &#10;
    /// &#10;enable - Boolean (default: true)
    /// &#10;If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.
    /// &#10;
    /// &#10;enforceMinLength - Boolean (default: false)
    /// &#10;If set to true the widget will not show all items when the text of the search input cleared. By default the widget shows all items when the text of the search input is cleared. Works in conjunction with minLength.
    /// &#10;
    /// &#10;filter - String (default: "contains")
    /// &#10;The filtering method used to determine the suggestions for the current value. Filtration is turned off by default, and can be performed over string values only (either the widget's data has to be an array of strings, or over the field, configured in the dataTextField option).
    /// &#10;The supported filter values are startswith, endswith and contains.
    /// &#10;
    /// &#10;fixedGroupTemplate - String|Function 
    /// &#10;The template used to render the fixed header group. By default the widget displays only the value of the current group.
    /// &#10;
    /// &#10;footerTemplate - String|Function 
    /// &#10;The template used to render the footer template. The footer template receives the widget itself as a part of the data argument. Use the widget fields directly in the template.
    /// &#10;
    /// &#10;groupTemplate - String|Function 
    /// &#10;The template used to render the groups. By default the widget displays only the value of the group.
    /// &#10;
    /// &#10;height - Number (default: 200)
    /// &#10;The height of the suggestion popup in pixels. The default value is 200 pixels.
    /// &#10;
    /// &#10;highlightFirst - Boolean (default: true)
    /// &#10;If set to true the first suggestion will be automatically highlighted.
    /// &#10;
    /// &#10;ignoreCase - Boolean (default: true)
    /// &#10;If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.
    /// &#10;
    /// &#10;index - Number (default: -1)
    /// &#10;The index of the initially selected item. The index is 0 based.
    /// &#10;
    /// &#10;minLength - Number (default: 1)
    /// &#10;The minimum number of characters the user must type before a search is performed. Set to higher value than 1 if the search could match a lot of items.
    /// &#10;
    /// &#10;noDataTemplate - String|Function (default: "NO DATA FOUND.")
    /// &#10;The template used to render the "no data" template, which will be displayed if no results are found or the underlying data source is empty.
    /// &#10;The noData template receives the widget itself as a part of the data argument. The template will be evaluated on every widget data bound.
    /// &#10;
    /// &#10;placeholder - String (default: "")
    /// &#10;The hint displayed by the widget when it is empty. Not set by default.
    /// &#10;
    /// &#10;popup - Object 
    /// &#10;The options that will be used for the popup initialization. For more details about the available options
    /// &#10;refer to Popup documentation.
    /// &#10;
    /// &#10;suggest - Boolean (default: true)
    /// &#10;Sets the value of the Combobox to the specified argument and visually selects the text.
    /// &#10;If set to false the widget will not automatically give suggest as its value.
    /// &#10;
    /// &#10;syncValueAndText - Boolean (default: true)
    /// &#10;When set to true the widget will automatically set selected value to the typed custom text. Set the option to false to
    /// &#10;clear the selected value but keep the custom text.
    /// &#10;
    /// &#10;headerTemplate - String|Function 
    /// &#10;Specifies a static HTML content, which will be rendered as a header of the popup element.
    /// &#10;
    /// &#10;template - String|Function 
    /// &#10;The template used to render the items. By default the widget displays only the text of the data item (configured via dataTextField).
    /// &#10;
    /// &#10;text - String (default: "")
    /// &#10;The text of the widget used when the autoBind is set to false.
    /// &#10;
    /// &#10;value - String (default: "")
    /// &#10;The value of the widget.
    /// &#10;
    /// &#10;valuePrimitive - Boolean (default: false)
    /// &#10;Specifies the value binding behavior for the widget when the initial model value is null. If set to true, the View-Model field will be updated with the selected item value field. If set to false, the View-Model field will be updated with the selected item.
    /// &#10;
    /// &#10;virtual - Boolean (default: false)
    /// &#10;Enables the virtualization feature of the widget. The configuration can be set on an object, which contains two properties - itemHeight and valueMapper.For detailed information, refer to the article on virtualization.
    /// &#10;
    /// &#10;virtual - Object (default: false)
    /// &#10;Enables the virtualization feature of the widget. The configuration can be set on an object, which contains two properties - itemHeight and valueMapper.For detailed information, refer to the article on virtualization.
    /// &#10;
    /// &#10;url - String (default: '')
    /// &#10;Specifies the url to be passed for binding dataSource in the ARACombobox.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};



kendo.ui.ARAContextMenu = function () { };

kendo.ui.ARAContextMenu.prototype = {




    append: function (item, referenceItem) {
        /// <summary>
        /// Appends an item to a ARAContextMenu in the specified referenceItem's sub menu (or the root context menu if not specified).
        /// </summary>
        /// <param name="item" type="Object" >Item to be appended, specified as a JSON object. An array of objects can also be passed.</param>
        /// <param name="referenceItem" type="Object" >A reference item to append the new item in. If omitted, the new item will be appended to the as a root item.</param>
        /// <returns type="kendo.ui.ARAContextMenu">Returns the ARAContextMenu object to support chaining.</returns>

    },


    close: function (element) {
        /// <summary>
        /// Closes the ARAContextMenu. This method can be prevented to stop the closure.
        /// </summary>
        /// <param name="element" type="Object" >If called without arguments, will close the ARAContextMenu. If passed an item, it will be closed (if opened).</param>
        /// <returns type="kendo.ui.ARAContextMenu">Returns the ARAContextMenu object to support chaining.</returns>

    },


    destroy: function () {
        /// <summary>
        /// Safely removes the ARAContextMenu from the DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.If a new ARAContextMenu widget should be created afterwards, use a new <ul> for that, as the old one no longer exists.
        /// </summary>

    },


    enable: function (element, enable) {
        /// <summary>
        /// Enables or disables an item of a ARAContextMenu. This can optionally be accomplished on
        /// initialization by setting the disabled="disabled" on the desired menu item html element.
        /// </summary>
        /// <param name="element" type="Object" >Target element</param>
        /// <param name="enable" type="Boolean" >Desired state</param>
        /// <returns type="kendo.ui.ARAContextMenu">Returns the ARAContextMenu object to support chaining.</returns>

    },


    insertAfter: function (item, referenceItem) {
        /// <summary>
        /// Inserts an item into a ARAContextMenu after the specified referenceItem.
        /// </summary>
        /// <param name="item" type="Object" >Target item, specified as a JSON object. Can also handle an array of such objects.</param>
        /// <param name="referenceItem" type="Object" >A reference item to insert the new item after.</param>
        /// <returns type="kendo.ui.ARAContextMenu">Returns the ARAContextMenu object to support chaining.</returns>

    },


    insertBefore: function (item, referenceItem) {
        /// <summary>
        /// Inserts an item into a ARAContextMenu before the specified referenceItem.
        /// </summary>
        /// <param name="item" type="Object" >Target item, specified as a JSON object. Can also handle an array of such objects.</param>
        /// <param name="referenceItem" type="Object" >A reference item to insert the new item before</param>
        /// <returns type="kendo.ui.ARAContextMenu">Returns the ARAContextMenu object to support chaining.</returns>

    },


    open: function (x, y) {
        /// <summary>
        /// Shows the ARAContextMenu at the specified coordinates in pixels or aligned to the specified anchor. If passed an item, it will be opened. This method can be prevented to stop the ARAContextMenu from opening.
        /// </summary>
        /// <param name="x" type="Object" >X coordinate in pixels or the anchor element to which to align. If passed an item - jQuery object or element - it will be opened.</param>
        /// <param name="y" type="Number" >Y coordinate in pixels. If not specified, ARAContextMenu will assume the first parameter is an anchor element.</param>
        /// <returns type="kendo.ui.ARAContextMenu">Returns the ARAContextMenu object to support chaining.</returns>

    },


    remove: function (element) {
        /// <summary>
        /// Removes a specified item(s) from a ARAContextMenu.
        /// </summary>
        /// <param name="element" type="Object" >Target item selector.</param>
        /// <returns type="kendo.ui.ARAContextMenu">Returns the ARAContextMenu object to support chaining.</returns>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARAContextMenu = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAContextMenu widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAContextMenu">The kendo.ui.ARAContextMenu instance (if present).</returns>
};

$.fn.kendoARAContextMenu = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAContextMenu widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;alignToAnchor - Boolean (default: false)
    /// &#10;Specifies that ARAContextMenu should be shown aligned to the target or the filter element if specified.
    /// &#10;
    /// &#10;animation - Boolean 
    /// &#10;A collection of Animation objects, used to change default animations. A value of false will disable all animations in the widget. is not a valid configuration.Available animations for the ARAContextMenu are listed below.  Each animation has a reverse options which is used for the close effect by default, but can be over-ridden
    /// &#10;by setting the close animation. Each animation also has a direction which can be set off the animation (i.e. slideIn:Down).
    /// &#10;
    /// &#10;animation - Object 
    /// &#10;A collection of Animation objects, used to change default animations. A value of false will disable all animations in the widget. is not a valid configuration.Available animations for the ARAContextMenu are listed below.  Each animation has a reverse options which is used for the close effect by default, but can be over-ridden
    /// &#10;by setting the close animation. Each animation also has a direction which can be set off the animation (i.e. slideIn:Down).
    /// &#10;
    /// &#10;appendTo - String|jQuery (default: document.body)
    /// &#10;The DOM element to which the ARAContextMenu will be appended. The element needs to be relatively positioned.
    /// &#10;
    /// &#10;closeOnClick - Boolean (default: true)
    /// &#10;Specifies that sub menus should close after item selection (provided they won't navigate).
    /// &#10;
    /// &#10;copyAnchorStyles - Boolean (default: true)
    /// &#10;Copies and uses the styles from the anchor.
    /// &#10;
    /// &#10;dataSource - Object|Array 
    /// &#10;The data source of the widget which is used to render its items. Can be a JSON object/Array that contains an item or an Array of items to be rendered.
    /// &#10;Refer to the example below for a list of the supported properties.
    /// &#10;
    /// &#10;direction - String (default: "default")
    /// &#10;Specifies ARAContextMenu's sub menu opening direction. Can be "top", "bottom", "left", "right".
    /// &#10;The example below will initialize the sub menus to open to the left.
    /// &#10;
    /// &#10;filter - String 
    /// &#10;Specifies ARAContextMenu filter selector - the ARAContextMenu will only be shown on items that satisfy the provided selector.
    /// &#10;
    /// &#10;hoverDelay - Number (default: 100)
    /// &#10;Specifies the delay in ms before the sub menus are opened/closed - used to avoid accidental closure on leaving.
    /// &#10;
    /// &#10;orientation - String (default: "vertical")
    /// &#10;Root menu orientation. Could be horizontal or vertical.
    /// &#10;
    /// &#10;popupCollision - String 
    /// &#10;Specifies how ARAContextMenu should adjust to screen boundaries. By default the strategy is "fit" for a sub menu with a horizontal parent or the root menu,
    /// &#10;meaning it will move to fit in screen boundaries in all directions, and "fit flip" for a sub menu with vertical parent, meaning it will fit vertically and flip over
    /// &#10;its parent horizontally. You can also switch off the screen boundary detection completely if you set the popupCollision to false.
    /// &#10;
    /// &#10;showOn - String (default: "click")
    /// &#10;Specifies the event or events on which ARAContextMenu should open. By default ARAContextMenu will show on contextmenu event on desktop and hold event on touch devices.
    /// &#10;Could be any pointer/mouse/touch event, also several, separated by spaces.
    /// &#10;
    /// &#10;target - String|jQuery (default: ".action-tab")
    /// &#10;Specifies the element on which ARAContextMenu should open. The default element is the document body.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAAlert = function () { };

kendo.ui.ARAAlert.prototype = {




    center: function () {
        /// <summary>
        /// Centers the window within the viewport.If the ARAAlert has no set dimensions and is centered before its content is loaded with Ajax, it is probably going to resize after the content is loaded. This naturally changes the position of the widget on the screen and it is no longer centered. If this is a requirement, then either center the ARAAlert in its refresh event, or set some explicit dimensions.
        /// </summary>
        /// <returns type="kendo.ui.ARAAlert">Returns the window object to support chaining, for example center and open the ARAAlert with a single expression.</returns>

    },


    close: function () {
        /// <summary>
        /// Closes a ARAAlert.
        /// </summary>
        /// <returns type="kendo.ui.ARAAlert">Returns the window object to support chaining.</returns>

    },


    content: function (content) {
        /// <summary>
        /// Gets or set the content of a window. Supports chaining when used as a setter.
        /// </summary>
        /// <param name="content" type="Object" >The content of the ARAAlert. Can be an HTML string or jQuery object.</param>
        /// <returns type="String">The current window content, if used as a getter. If used as a setter, the method will return the window object to support chaining.</returns>

    },


    destroy: function () {
        /// <summary>
        /// Destroys the window and its modal overlay, if necessary. Removes the widget HTML elements from the DOM.
        /// </summary>

    },


    isMaximized: function () {
        /// <summary>
        /// Indicates whether the window is maximized.
        /// </summary>
        /// <returns type="Boolean"></returns>

    },


    isMinimized: function () {
        /// <summary>
        /// Indicates whether the window is minimized.
        /// </summary>
        /// <returns type="Boolean"></returns>

    },


    maximize: function () {
        /// <summary>
        /// Maximizes a ARAAlert to the entire viewing area of the user agent. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.ARAAlert">Returns the window object to support chaining.</returns>

    },


    minimize: function () {
        /// <summary>
        /// Maximizes a ARAAlert to its title bar.
        /// </summary>
        /// <returns type="kendo.ui.ARAAlert">Returns the window object to support chaining.</returns>

    },


    open: function () {
        /// <summary>
        /// Opens a ARAAlert and brings it on top of any other open ARAAlert instances by calling toFront internally.
        /// </summary>
        /// <returns type="kendo.ui.ARAAlert">Returns the window object to support chaining.</returns>

    },


    pin: function () {
        /// <summary>
        /// Pins the ARAAlert at its current position with a position:fixed style, i.e. the widget stops moving together with the other page content when the page is scrolled.
        /// The user will still be able to move the ARAAlert with the mouse or keyboard.
        /// </summary>

    },


    refresh: function (options) {
        /// <summary>
        /// Refreshes the content of a ARAAlert from a remote URL or the initially defined content template.
        /// Note that passing data and non-GET requests cannot be sent to an iframe, as they require a form with a target attribute.
        /// </summary>
        /// <param name="options" type="String" >Options for requesting data from the server. If omitted, the window uses the content property that was supplied when the window was created. Any options specified here are passed to jQuery.ajax().</param>
        /// <returns type="kendo.ui.ARAAlert">Returns the window object to support chaining.</returns>

    },


    restore: function () {
        /// <summary>
        /// Restores a maximized or minimized ARAAlert to its previous state. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.ARAAlert">Returns the window object to support chaining.</returns>

    },


    setOptions: function (options) {
        /// <summary>
        /// Allows the ARAAlert to be configured with new options.If you change the content url, call refresh afterwards. Another option is to execute the refresh method with the new URL directly.Changing the size or position of the ARAAlert requires the widget to not be in maximized or minimized state.
        /// </summary>
        /// <param name="options" type="Object" >The configuration options to be set.</param>

    },


    title: function (text) {
        /// <summary>
        /// Gets or sets the title of a ARAAlert. Supports chaining when used as a setter.
        /// </summary>
        /// <param name="text" type="String" >The title of the ARAAlert.</param>
        /// <returns type="String">The current window title, if used as a getter. If used as a setter, the method will return the window object to support chaining.</returns>

    },


    toFront: function () {
        /// <summary>
        /// Increases the z-index style of a ARAAlert wrapper to bring the instance on top of other open ARAAlerts. This method is executed automatically when the open method is used.
        /// </summary>
        /// <returns type="kendo.ui.ARAAlert">Returns the window object to support chaining.</returns>

    },


    toggleMaximization: function () {
        /// <summary>
        /// Toggles a ARAAlert between a maximized and restored state. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.ARAAlert">Returns the window object to support chaining.</returns>

    },


    unpin: function () {
        /// <summary>
        /// Disables the ARAAlert's pinned state, so that the widget will move together with the other page content when the page is scrolled.
        /// </summary>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARAAlert = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAAlert widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAAlert">The kendo.ui.ARAAlert instance (if present).</returns>
};

$.fn.kendoARAAlert = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAAlert widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;actions - Array (default: ["Close"])
    /// &#10;The buttons for interacting with the window. Predefined array values are "Close", "Refresh", "Minimize",
    /// &#10;and "Maximize".
    /// &#10;
    /// &#10;animation - Boolean 
    /// &#10;A collection of {Animation} objects, used to change default animations. A value of false will disable all animations in the widget. is not a valid configuration.
    /// &#10;
    /// &#10;animation - Object 
    /// &#10;A collection of {Animation} objects, used to change default animations. A value of false will disable all animations in the widget. is not a valid configuration.
    /// &#10;
    /// &#10;appendTo - Object|String (default: document.body)
    /// &#10;The element that the ARAAlert will be appended to. Beneficial if the ARAAlert is used together with a form.
    /// &#10;Note that this does not constrain the window dragging within the given element.
    /// &#10;
    /// &#10;autoFocus - Boolean (default: true)
    /// &#10;Determines whether the ARAAlert will be focused automatically when opened. The property also influences the focus behavior when the ARAAlert is clicked when already opened.
    /// &#10;
    /// &#10;content - String 
    /// &#10;Specifies a URL or request options that the window should load its content from.Note: For URLs starting with a protocol (e.g. http://),
    /// &#10;a container iframe element is automatically created. This behavior may change in future
    /// &#10;versions, so it is advisable to always use the iframe configuration option.
    /// &#10;
    /// &#10;content - Object 
    /// &#10;Specifies a URL or request options that the window should load its content from.Note: For URLs starting with a protocol (e.g. http://),
    /// &#10;a container iframe element is automatically created. This behavior may change in future
    /// &#10;versions, so it is advisable to always use the iframe configuration option.
    /// &#10;
    /// &#10;draggable - Boolean (default: true)
    /// &#10;Enables (true) or disables (false) the ability for users to move/drag the widget.
    /// &#10;
    /// &#10;iframe - Boolean 
    /// &#10;Explicitly states whether a content iframe should be created. For more information, please read Using iframes.
    /// &#10;
    /// &#10;height - Number|String (default: "50px")
    /// &#10;Specifies height of the window.
    /// &#10;
    /// &#10;maxHeight - Number (default: Infinity)
    /// &#10;The maximum height (in pixels) that may be achieved by resizing the window.
    /// &#10;
    /// &#10;maxWidth - Number (default: Infinity)
    /// &#10;The maximum width (in pixels) that may be achieved by resizing the window.
    /// &#10;
    /// &#10;minHeight - Number (default: 50)
    /// &#10;The minimum height (in pixels) that may be achieved by resizing the window.
    /// &#10;
    /// &#10;minWidth - Number (default: 50)
    /// &#10;The minimum width (in pixels) that may be achieved by resizing the window.
    /// &#10;
    /// &#10;modal - Boolean (default: true)
    /// &#10;Specifies whether the window should show a modal overlay over the page.
    /// &#10;
    /// &#10;pinned - Boolean (default: false)
    /// &#10;Specifies whether the window should be pinned, i.e. it will not move together with the page content during scrolling.
    /// &#10;
    /// &#10;position - Object 
    /// &#10;A collection of one or two members, which define the initial ARAAlert's top and/or left position on the page.
    /// &#10;
    /// &#10;resizable - Boolean (default: false)
    /// &#10;Enables (true) or disables (false) the ability for users to resize a ARAAlert.
    /// &#10;
    /// &#10;scrollable - Boolean (default: true)
    /// &#10;Enables (true) or disables (false) the ability for users to scroll the window contents.
    /// &#10;
    /// &#10;title - String|Boolean (default: "")
    /// &#10;The text in the window title bar. If false, the window will be displayed without a title bar. Note that this will prevent the window from being dragged, and the window titlebar buttons will not be shown.
    /// &#10;
    /// &#10;visible - Boolean (default: true)
    /// &#10;Specifies whether the window will be initially visible.
    /// &#10;
    /// &#10;width - Number|String 
    /// &#10;Specifies width of the window.
    /// &#10;
    /// &#10;useActions - Boolean (default: false)
    /// &#10;Enables (true) or disables (false) the ability for users to use actions for window contents.
    /// &#10;
    /// &#10;buttons - Array
    /// &#10;Indicates buttons to be used in ARAAlert.
    /// &#10;
    /// &#10;message - Array
    /// &#10;Specifies the message to be displayed in ARAALert.
    /// &#10;
    /// &#10;icon - Array
    /// &#10;Specifies the icon to represent message in ARAAlert.
    /// &#10;
    /// &#10;input - Array
    /// &#10;Specifies the input to be used in ARAAlert.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAPrompt = function () { };

kendo.ui.ARAPrompt.prototype = {




    center: function () {
        /// <summary>
        /// Centers the window within the viewport.If the ARAPrompt has no set dimensions and is centered before its content is loaded with Ajax, it is probably going to resize after the content is loaded. This naturally changes the position of the widget on the screen and it is no longer centered. If this is a requirement, then either center the ARAPrompt in its refresh event, or set some explicit dimensions.
        /// </summary>
        /// <returns type="kendo.ui.ARAPrompt">Returns the window object to support chaining, for example center and open the ARAPrompt with a single expression.</returns>

    },


    close: function () {
        /// <summary>
        /// Closes a ARAPrompt.
        /// </summary>
        /// <returns type="kendo.ui.ARAPrompt">Returns the window object to support chaining.</returns>

    },


    content: function (content) {
        /// <summary>
        /// Gets or set the content of a window. Supports chaining when used as a setter.
        /// </summary>
        /// <param name="content" type="Object" >The content of the ARAPrompt. Can be an HTML string or jQuery object.</param>
        /// <returns type="String">The current window content, if used as a getter. If used as a setter, the method will return the window object to support chaining.</returns>

    },


    destroy: function () {
        /// <summary>
        /// Destroys the window and its modal overlay, if necessary. Removes the widget HTML elements from the DOM.
        /// </summary>

    },


    isMaximized: function () {
        /// <summary>
        /// Indicates whether the window is maximized.
        /// </summary>
        /// <returns type="Boolean"></returns>

    },


    isMinimized: function () {
        /// <summary>
        /// Indicates whether the window is minimized.
        /// </summary>
        /// <returns type="Boolean"></returns>

    },


    maximize: function () {
        /// <summary>
        /// Maximizes a ARAPrompt to the entire viewing area of the user agent. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.ARAPrompt">Returns the window object to support chaining.</returns>

    },


    minimize: function () {
        /// <summary>
        /// Maximizes a ARAPrompt to its title bar.
        /// </summary>
        /// <returns type="kendo.ui.ARAPrompt">Returns the window object to support chaining.</returns>

    },


    open: function () {
        /// <summary>
        /// Opens a ARAPrompt and brings it on top of any other open ARAPrompt instances by calling toFront internally.
        /// </summary>
        /// <returns type="kendo.ui.ARAPrompt">Returns the window object to support chaining.</returns>

    },


    pin: function () {
        /// <summary>
        /// Pins the ARAPrompt at its current position with a position:fixed style, i.e. the widget stops moving together with the other page content when the page is scrolled.
        /// The user will still be able to move the ARAPrompt with the mouse or keyboard.
        /// </summary>

    },


    refresh: function (options) {
        /// <summary>
        /// Refreshes the content of a ARAPrompt from a remote URL or the initially defined content template.
        /// Note that passing data and non-GET requests cannot be sent to an iframe, as they require a form with a target attribute.
        /// </summary>
        /// <param name="options" type="String" >Options for requesting data from the server. If omitted, the window uses the content property that was supplied when the window was created. Any options specified here are passed to jQuery.ajax().</param>
        /// <returns type="kendo.ui.ARAPrompt">Returns the window object to support chaining.</returns>

    },


    restore: function () {
        /// <summary>
        /// Restores a maximized or minimized ARAPrompt to its previous state. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.ARAPrompt">Returns the window object to support chaining.</returns>

    },


    setOptions: function (options) {
        /// <summary>
        /// Allows the ARAPrompt to be configured with new options.If you change the content url, call refresh afterwards. Another option is to execute the refresh method with the new URL directly.Changing the size or position of the ARAPrompt requires the widget to not be in maximized or minimized state.
        /// </summary>
        /// <param name="options" type="Object" >The configuration options to be set.</param>

    },


    title: function (text) {
        /// <summary>
        /// Gets or sets the title of a ARAPrompt. Supports chaining when used as a setter.
        /// </summary>
        /// <param name="text" type="String" >The title of the ARAPrompt.</param>
        /// <returns type="String">The current window title, if used as a getter. If used as a setter, the method will return the window object to support chaining.</returns>

    },


    toFront: function () {
        /// <summary>
        /// Increases the z-index style of a ARAPrompt wrapper to bring the instance on top of other open ARAPrompts. This method is executed automatically when the open method is used.
        /// </summary>
        /// <returns type="kendo.ui.ARAPrompt">Returns the window object to support chaining.</returns>

    },


    toggleMaximization: function () {
        /// <summary>
        /// Toggles a ARAPrompt between a maximized and restored state. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.ARAPrompt">Returns the window object to support chaining.</returns>

    },


    unpin: function () {
        /// <summary>
        /// Disables the ARAPrompt's pinned state, so that the widget will move together with the other page content when the page is scrolled.
        /// </summary>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARAPrompt = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAPrompt widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAPrompt">The kendo.ui.ARAPrompt instance (if present).</returns>
};

$.fn.kendoARAPrompt = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAAlert widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;actions - Array (default: ["Close"])
    /// &#10;The buttons for interacting with the window. Predefined array values are "Close", "Refresh", "Minimize",
    /// &#10;and "Maximize".
    /// &#10;
    /// &#10;animation - Boolean 
    /// &#10;A collection of {Animation} objects, used to change default animations. A value of false will disable all animations in the widget. is not a valid configuration.
    /// &#10;
    /// &#10;animation - Object 
    /// &#10;A collection of {Animation} objects, used to change default animations. A value of false will disable all animations in the widget. is not a valid configuration.
    /// &#10;
    /// &#10;appendTo - Object|String (default: document.body)
    /// &#10;The element that the ARAAlert will be appended to. Beneficial if the ARAAlert is used together with a form.
    /// &#10;Note that this does not constrain the window dragging within the given element.
    /// &#10;
    /// &#10;autoFocus - Boolean (default: true)
    /// &#10;Determines whether the ARAAlert will be focused automatically when opened. The property also influences the focus behavior when the ARAAlert is clicked when already opened.
    /// &#10;
    /// &#10;content - String 
    /// &#10;Specifies a URL or request options that the window should load its content from.Note: For URLs starting with a protocol (e.g. http://),
    /// &#10;a container iframe element is automatically created. This behavior may change in future
    /// &#10;versions, so it is advisable to always use the iframe configuration option.
    /// &#10;
    /// &#10;content - Object 
    /// &#10;Specifies a URL or request options that the window should load its content from.Note: For URLs starting with a protocol (e.g. http://),
    /// &#10;a container iframe element is automatically created. This behavior may change in future
    /// &#10;versions, so it is advisable to always use the iframe configuration option.
    /// &#10;
    /// &#10;draggable - Boolean (default: true)
    /// &#10;Enables (true) or disables (false) the ability for users to move/drag the widget.
    /// &#10;
    /// &#10;iframe - Boolean 
    /// &#10;Explicitly states whether a content iframe should be created. For more information, please read Using iframes.
    /// &#10;
    /// &#10;height - Number|String (default: "50px")
    /// &#10;Specifies height of the window.
    /// &#10;
    /// &#10;maxHeight - Number (default: Infinity)
    /// &#10;The maximum height (in pixels) that may be achieved by resizing the window.
    /// &#10;
    /// &#10;maxWidth - Number (default: Infinity)
    /// &#10;The maximum width (in pixels) that may be achieved by resizing the window.
    /// &#10;
    /// &#10;minHeight - Number (default: 50)
    /// &#10;The minimum height (in pixels) that may be achieved by resizing the window.
    /// &#10;
    /// &#10;minWidth - Number (default: 50)
    /// &#10;The minimum width (in pixels) that may be achieved by resizing the window.
    /// &#10;
    /// &#10;modal - Boolean (default: true)
    /// &#10;Specifies whether the window should show a modal overlay over the page.
    /// &#10;
    /// &#10;pinned - Boolean (default: false)
    /// &#10;Specifies whether the window should be pinned, i.e. it will not move together with the page content during scrolling.
    /// &#10;
    /// &#10;position - Object 
    /// &#10;A collection of one or two members, which define the initial ARAAlert's top and/or left position on the page.
    /// &#10;
    /// &#10;resizable - Boolean (default: false)
    /// &#10;Enables (true) or disables (false) the ability for users to resize a ARAAlert.
    /// &#10;
    /// &#10;scrollable - Boolean (default: true)
    /// &#10;Enables (true) or disables (false) the ability for users to scroll the window contents.
    /// &#10;
    /// &#10;title - String|Boolean (default: "")
    /// &#10;The text in the window title bar. If false, the window will be displayed without a title bar. Note that this will prevent the window from being dragged, and the window titlebar buttons will not be shown.
    /// &#10;
    /// &#10;visible - Boolean (default: true)
    /// &#10;Specifies whether the window will be initially visible.
    /// &#10;
    /// &#10;width - Number|String 
    /// &#10;Specifies width of the window.
    /// &#10;
    /// &#10;useActions - Boolean (default: false)
    /// &#10;Enables (true) or disables (false) the ability for users to use actions for window contents.
    /// &#10;
    /// &#10;buttons - Array
    /// &#10;Indicates buttons to be used in ARAAlert.
    /// &#10;
    /// &#10;message - Array
    /// &#10;Specifies the message to be displayed in ARAALert.
    /// &#10;
    /// &#10;icon - Array
    /// &#10;Specifies the icon to represent message in ARAAlert.
    /// &#10;
    /// &#10;input - Array
    /// &#10;Specifies the input to be used in ARAAlert.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAConfirm = function () { };

kendo.ui.ARAConfirm.prototype = {




    close: function () {
        /// <summary>
        /// Closes a ARAConfirm.
        /// </summary>
        /// <returns type="kendo.ui.ARAConfirm">Returns the dialog object to support chaining.</returns>

    },


    content: function (content) {
        /// <summary>
        /// Gets or set the content of a dialog. Supports chaining when used as a setter.
        /// </summary>
        /// <param name="content" type="Object" >The content of the ARAConfirm. Can be an HTML string or jQuery object.</param>
        /// <returns type="String">The current dialog content, if used as a getter. If used as a setter, the method will return the dialog object to support chaining.</returns>

    },


    destroy: function () {
        /// <summary>
        /// Destroys the dialog and its modal overlay, if necessary. Removes the widget HTML elements from the DOM.
        /// </summary>

    },


    open: function () {
        /// <summary>
        /// Opens a ARAConfirm and brings it on top of any other open ARAConfirm or Window instances by calling toFront internally.
        /// </summary>
        /// <returns type="kendo.ui.ARAConfirm">Returns the dialog object to support chaining.</returns>

    },


    title: function (text) {
        /// <summary>
        /// Gets or sets the title of a ARAConfirm. Can be an HTML string or jQuery object. Supports chaining when used as a setter.
        /// </summary>
        /// <param name="text" type="String" >The title of the ARAConfirm.</param>
        /// <returns type="String">The current dialog title, if used as a getter. If used as a setter, the method will return the dialog object to support chaining.</returns>

    },


    toFront: function () {
        /// <summary>
        /// Increases the z-index style of a ARAConfirm wrapper to bring the instance on top of other open ARAConfirms. This method is executed automatically when the open method is used.
        /// </summary>
        /// <returns type="kendo.ui.ARAConfirm">Returns the dialog object to support chaining.</returns>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARAConfirm = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAConfirm widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAConfirm">The kendo.ui.ARAConfirm instance (if present).</returns>
};

$.fn.kendoARAConfirm = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAConfirm widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;actions - Array 
    /// &#10;A collection of objects containing text, action and primary attributes used to specify the confirmation dialog buttons.
    /// &#10;#### Example
    /// &#10;
    /// &#10;animation - Boolean 
    /// &#10;A collection of {Animation} objects, used to change default animations. A value of false will disable all animations in the widget. is not a valid configuration.
    /// &#10;
    /// &#10;animation - Object 
    /// &#10;A collection of {Animation} objects, used to change default animations. A value of false will disable all animations in the widget. is not a valid configuration.
    /// &#10;
    /// &#10;buttonLayout - String (default: "stretched")
    /// &#10;Specifies the possible layout of the action buttons in the confirmation dialog.Possible values are:
    /// &#10;
    /// &#10;closable - Boolean (default: false)
    /// &#10;Specifies whether a close button should be rendered at the top corner of the confirmation dialog.
    /// &#10;
    /// &#10;content - String (default: <p>message(dynamic)</p>)
    /// &#10;Specifies the content of a confirmation dialog.
    /// &#10;
    /// &#10;height - Number|String 
    /// &#10;Specifies height of the confirmation dialog.
    /// &#10;
    /// &#10;maxHeight - Number (default: Infinity)
    /// &#10;The maximum height (in pixels) that may be achieved by resizing the confirmation dialog.
    /// &#10;
    /// &#10;maxWidth - Number (default: Infinity)
    /// &#10;The maximum width (in pixels) that may be achieved by resizing the confirmation dialog.
    /// &#10;
    /// &#10;messages - Object 
    /// &#10;Defines the text of the labels that are shown within the confirmation dialog. Used primarily for localization.
    /// &#10;
    /// &#10;minHeight - Number (default: 50)
    /// &#10;The minimum height (in pixels) that may be achieved by resizing the confirmation dialog.
    /// &#10;
    /// &#10;minWidth - Number (default: 50)
    /// &#10;The minimum width (in pixels) that may be achieved by resizing the confirmation dialog.
    /// &#10;
    /// &#10;modal - Boolean (default: true)
    /// &#10;Specifies whether the confirmation dialog should show a modal overlay over the page.
    /// &#10;
    /// &#10;title - String|Boolean (default: "")
    /// &#10;The text in the confirmation dialog title bar. If false, the dialog will be displayed without a title bar.
    /// &#10;
    /// &#10;visible - Boolean (default: true)
    /// &#10;Specifies whether the confirmation dialog will be initially visible.
    /// &#10;
    /// &#10;width - Number|String  (default: "400px")
    /// &#10;Specifies width of the confirmation dialog.
    /// &#10;
    /// &#10;title - Number|String  (default: "confirmation")
    /// &#10;Specifies title of the confirmation dialog.
    /// &#10;
    /// &#10;message - Number|String  (default: "")
    /// &#10;Specifies message used in the confirmation dialog.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAEditor = function () { };

kendo.ui.ARAEditor.prototype = {




    createRange: function (document) {
        /// <summary>
        /// Creates a W3C-compatible Range object.
        /// </summary>
        /// <param name="document" type="Document" >The document that the range is associated with. If omitted, the document of the editor editing area will be used.</param>
        /// <returns type="Range">The created Range object.</returns>

    },


    destroy: function () {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    encodedValue: function () {
        /// <summary>
        /// Gets the HTML encoded value of the editor.
        /// </summary>

    },


    exec: function (name, params) {
        /// <summary>
        /// Executes an editor command on the currently selected text.
        /// </summary>
        /// <param name="name" type="String" >The name of the command to be executed. The available names match the list of tools, plus "undo" and "redo".</param>
        /// <param name="params" type="String" >The parameters for the executed command.</param>

    },


    focus: function () {
        /// <summary>
        /// Focuses the editable area.
        /// </summary>

    },


    getRange: function () {
        /// <summary>
        /// Gets a Range object form the editable area.
        /// </summary>
        /// <returns type="Range">A W3C-compatible Range object that represents the currently selected text in the editor area.</returns>

    },


    getSelection: function () {
        /// <summary>
        /// Gets a W3C-compatible Selection object form the editable area.
        /// </summary>
        /// <returns type="Selection">a W3C-compatible Selection object form the editable area.</returns>

    },


    paste: function (html, options) {
        /// <summary>
        /// Inserts HTML into the editable area. Cleans up MS Word formatting.
        /// </summary>
        /// <param name="html" type="String" >The HTML to be inserted.</param>
        /// <param name="options" type="" >Options that configure how the content is processed when pasting.</param>

    },


    selectedHtml: function () {
        /// <summary>
        /// Serializes the currently selected text to a XHTML string.
        /// </summary>
        /// <returns type="String">The selected text as valid XHTML.</returns>

    },


    refresh: function () {
        /// <summary>
        /// Reinitializes the editing area iframe. Should be used after moving the editor in the DOM.
        /// </summary>

    },


    saveAsPDF: function () {
        /// <summary>
        /// Initiates the PDF export and returns a promise. Also triggers the pdfExport event.
        /// </summary>
        /// <returns type="Promise">A promise that will be resolved when the export completes. The same promise is available in the pdfExport event arguments.</returns>

    },


    selectRange: function (range) {
        /// <summary>
        /// Focuses the editable area and selects the range described by the range parameter.
        /// </summary>
        /// <param name="range" type="Range" >The Range object that describes the new selection.</param>

    },


    update: function () {
        /// <summary>
        /// Serializes the current state of the editable area to the <textarea> element.
        /// This method should be called after modifying the editor content through the DOM.
        /// </summary>

    },


    state: function (toolName) {
        /// <summary>
        /// Get the state of a given tool. Introduced in the 2013.2.923 internal build.
        /// </summary>
        /// <param name="toolName" type="String" >The name of the tool that will be tested if formatted.</param>
        /// <returns type="Boolean">The state of the tool.</returns>

    },


    value: function (value) {
        /// <summary>
        /// Gets or sets the editor value.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">The value of the ARAEditor as HTML string.</returns>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARAEditor = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAEditor widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAEditor">The kendo.ui.ARAEditor instance (if present).</returns>
};

$.fn.kendoARAEditor = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAEditor widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;deserialization - Object 
    /// &#10;Fine-tune deserialization in the ARAEditor widget. Deserialization is the process of parsing the HTML string input from the value() method or from the viewHtml dialog into editable content.
    /// &#10;
    /// &#10;domain - String 
    /// &#10;Relaxes the same-origin policy when using the iframe-based editor.
    /// &#10;This is done automatically for all cases except when the policy is relaxed by document.domain = document.domain.
    /// &#10;In that case, this property must be used to allow the editor to function properly across browsers.
    /// &#10;This property has been introduced in internal builds after 2014.1.319.
    /// &#10;
    /// &#10;encoded - Boolean (default: true)
    /// &#10;Indicates whether the ARAEditor should submit encoded HTML tags. By default, the submitted value is encoded.
    /// &#10;
    /// &#10;immutables - Boolean (default: false)
    /// &#10;If enabled, the editor disables the editing and command execution in elements marked with editablecontent="false" attribute.
    /// &#10;
    /// &#10;immutables - Object (default: false)
    /// &#10;If enabled, the editor disables the editing and command execution in elements marked with editablecontent="false" attribute.
    /// &#10;
    /// &#10;messages - Object 
    /// &#10;Defines the text of the labels that are shown within the editor. Used primarily for localization.
    /// &#10;
    /// &#10;pasteCleanup - Object 
    /// &#10;Options for controlling how the pasting content is modified before it is added in the editor.
    /// &#10;
    /// &#10;pdf - Object 
    /// &#10;Configures the Kendo UI ARAEditor PDF export settings.
    /// &#10;
    /// &#10;resizable - Boolean (default: false)
    /// &#10;If enabled, the editor renders a resize handle to allow users to resize it.
    /// &#10;
    /// &#10;resizable - Object (default: { toolbar: true, content: true })
    /// &#10;If enabled, the editor renders a resize handle to allow users to resize it.
    /// &#10;
    /// &#10;serialization - Object 
    /// &#10;Allows setting of serialization options.
    /// &#10;
    /// &#10;stylesheets - Array 
    /// &#10;Allows custom stylesheets to be included within the editing area. This setting is applicable only when the ARAEditor is initialized from a textarea
    /// &#10;and a contenteditable iframe is generated.
    /// &#10;
    /// &#10;tools - Array (default: htmlEditorTools)
    /// &#10;A collection of tools that are used to interact with the ARAEditor.
    /// &#10;Tools may be switched on by specifying their name.
    /// &#10;Custom tools and tools that require configuration are defined as objects.The available editor commands are:
    /// &#10;Collection of tools like, basic text formatting, font and color, alignment, Lists, Links, Images and Files, Table Editing, Snippets, HTML code view, Print Edited Page, Export to pdf.
    /// &#10;
    /// &#10;imageBrowser - Object 
    /// &#10;Configuration for image browser dialog.
    /// &#10;
    /// &#10;fileBrowser - Object 
    /// &#10;Configuration for file browser dialog.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAUpload = function () { };

kendo.ui.ARAUpload.prototype = {




    clearAllFiles: function () {
        /// <summary>
        /// Removes all files (only visually from the UI) without issuing requests to the remove handler.
        /// </summary>

    },


    clearFile: function (callback) {
        /// <summary>
        /// Removes all files for which the callback function returns true (only visually from the UI) without issuing requests to the remove handler.
        /// </summary>
        /// <param name="callback" type="Function" ></param>

    },


    clearFileByUid: function (uid) {
        /// <summary>
        /// Removes a file by ID (only visually from the UI) without issuing requests to the remove handler.
        /// </summary>
        /// <param name="uid" type="String" ></param>

    },


    destroy: function () {
        /// <summary>
        /// Prepares the ARAUpload for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    disable: function () {
        /// <summary>
        /// Disables the upload.
        /// </summary>

    },


    enable: function (enable) {
        /// <summary>
        /// Enables the upload.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable the upload.</param>

    },


    focus: function () {
        /// <summary>
        /// Focuses the upload's input element.
        /// </summary>

    },


    getFiles: function () {
        /// <summary>
        /// Retrieves the files that are currently selected.
        /// </summary>
        /// <returns type="Array">a collection of all currently selected files.</returns>

    },


    pause: function (li) {
        /// <summary>
        /// Pauses the upload of the file that is uploaded in chunks.
        /// </summary>
        /// <param name="li" type="jQuery" >A jQuery object which represents the file to be paused.</param>

    },


    resume: function (li) {
        /// <summary>
        /// Resumes the upload of a paused file that is uploaded in chunks.
        /// </summary>
        /// <param name="li" type="jQuery" >A jQuery object which represents the file to be resumed.</param>

    },


    removeAllFiles: function () {
        /// <summary>
        /// Removes all files by sending a standard remove request to the handler.
        /// </summary>

    },


    removeFile: function (callback) {
        /// <summary>
        /// Removes all files for which the callback function returns true by sending a standard remove request to the handler.
        /// </summary>
        /// <param name="callback" type="Function" ></param>

    },


    removeFileByUid: function (uid) {
        /// <summary>
        /// Removes a file by ID by sending a standard remove request to the handler.
        /// </summary>
        /// <param name="uid" type="String" ></param>

    },


    toggle: function (enable) {
        /// <summary>
        /// Toggles the upload enabled state.
        /// </summary>
        /// <param name="enable" type="Boolean" >(Optional) The new enabled state.</param>

    },


    upload: function () {
        /// <summary>
        /// Manually triggers the upload process.
        /// </summary>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARAUpload = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAUpload widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAUpload">The kendo.ui.ARAUpload instance (if present).</returns>
};

$.fn.kendoARAUpload = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAUpload widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;async - Object 
    /// &#10;Configures the ability to upload a files in an asynchronous manner. Please refer to the
    /// &#10;async mode help topic
    /// &#10;for more details.
    /// &#10;
    /// &#10;directory - Boolean (default: false)
    /// &#10;Enables the selection of folders instead of files. When the user selects a directory, its entire content hierarchy of files is included in the set of selected items. The setting supported only in browsers that support webkitdirectory.
    /// &#10;
    /// &#10;directoryDrop - Boolean (default: false)
    /// &#10;Enables the dropping of folders over the ARAUpload and its drop zone. When a directory is dropped, its entire content hierarchy of files is included in the set of selected items. This setting is supported only in browsers that support DataTransferItem and webkitGetAsEntry.
    /// &#10;
    /// &#10;dropZone - String 
    /// &#10;Initializes a dropzone elements based on a given selector that provides drag and drop file upload.
    /// &#10;
    /// &#10;enabled - Boolean (default: true)
    /// &#10;Enables (true) or disables (false) an ARAUpload. A disabled
    /// &#10;ARAUpload may be re-enabled via enable().
    /// &#10;
    /// &#10;files - Array 
    /// &#10;List of files to be initially rendered in the ARAUpload widget files list.
    /// &#10;
    /// &#10;localization - Object 
    /// &#10;Sets the strings rendered by the ARAUpload.
    /// &#10;
    /// &#10;multiple - Boolean (default: true)
    /// &#10;Enables (true) or disables (false) the ability to select multiple files.
    /// &#10;If false, users will be able to select only one file at a time. Note: This option does not
    /// &#10;limit the total number of uploaded files in an asynchronous configuration.
    /// &#10;
    /// &#10;showFileList - Boolean (default: true)
    /// &#10;Enables (true) or disables (false) the ability to display a file listing
    /// &#10;for uploading a files. Disabling a file listing may be useful you wish to customize the UI; use the
    /// &#10;client-side events to build your own UI.
    /// &#10;
    /// &#10;template - String|Function 
    /// &#10;The template used to render the files in the list
    /// &#10;
    /// &#10;validation - Object 
    /// &#10;Configures the validation options for uploaded files.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARANotes = function () { };

kendo.ui.ARANotes.prototype = {

};

$.fn.getKendoARANotes = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARANotes widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARANotes">The kendo.ui.ARANotes instance (if present).</returns>
};

$.fn.kendoARANotes = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARANotes widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;filter - Boolean (String: 'contains')
    /// &#10;Specifies filter is to be applied in ARANotes. By default, filter will be set to 'contains'.
    /// &#10;
    /// &#10;optionLabelForNote - String (default: 'Write Notes Here...')
    /// &#10;Specifies the option Label used in  the ARANotes. By default optionLabelForNote will be set to  'Write Notes Here...'.
    /// &#10;
    /// &#10;values - Object
    /// &#10;Specifies the values to be set in the ARANotes.
    /// &#10;
    /// &#10;fieldId - Guid
    /// &#10;Specifies the fieldID for dropdownList url which will be used in to load values in the widget element for ARANotes.
    /// &#10;
    /// &#10;dataSource - Object
    /// &#10;Specifies the dataSource which will be used to bind data in DropdownList for ARANotes.
    /// &#10;

    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARANumericTextBox = function () { };

kendo.ui.ARANumericTextBox.prototype = {




    destroy: function () {
        /// <summary>
        /// Prepares the ARANumericTextBox for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function (enable) {
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>

    },


    readonly: function (readonly) {
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >If set to true the widget will not allow user input. If set to false the widget will allow user input.</param>

    },


    focus: function () {
        /// <summary>
        /// Focuses the widget.
        /// </summary>

    },


    max: function (value) {
        /// <summary>
        /// Gets or sets the max value of the widget.
        /// </summary>
        /// <param name="value" type="Object" >The max value to set.</param>
        /// <returns type="Number">The max value of the widget.</returns>

    },


    min: function (value) {
        /// <summary>
        /// Gets or sets the min value of the widget.
        /// </summary>
        /// <param name="value" type="Object" >The min value to set.</param>
        /// <returns type="Number">The min value of the widget.</returns>

    },


    step: function (value) {
        /// <summary>
        /// Gets or sets the step value of the widget.
        /// </summary>
        /// <param name="value" type="Object" >The step value to set.</param>
        /// <returns type="Number">The step value of the widget.</returns>

    },


    value: function (value) {
        /// <summary>
        /// Gets or sets the value of the ARANumericTextBox.
        /// </summary>
        /// <param name="value" type="Object" >The value to set.</param>
        /// <returns type="Number">The value of the widget.</returns>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARANumericTextBox = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARANumericTextBox widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARANumericTextBox">The kendo.ui.ARANumericTextBox instance (if present).</returns>
};

$.fn.kendoARANumericTextBox = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARANumericTextBox widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;culture - String (default: "en-US")
    /// &#10;Specifies the culture info used by the widget.
    /// &#10;
    /// &#10;decimals - Number (default: null)
    /// &#10;Specifies the number precision applied to the widget value and when the ARANumericTextBox is focused. If not set, the precision defined by the current culture is used. If the user enters a number with a greater precision than is currently configured, the widget value will be rounded. For example, if decimals is 2 and the user inputs 12.346, the value will become 12.35. If the user inputs 12.99, the value will become 13.00.Compare with the format property.
    /// &#10;
    /// &#10;downArrowText - String (default: "Decrease value")
    /// &#10;Specifies the text of the tooltip on the down arrow.
    /// &#10;
    /// &#10;factor - Number (default: "1")
    /// &#10;Specifies the factor by which the value is multiplied. The obtained result is used as edit value. So, if 15 as string is entered in the ARANumericTextBox and the factor value is set to 100 the visual value will be 1500. On blur the visual value will be divided by 100 thus scaling the widget value to the original proportion.
    /// &#10;
    /// &#10;format - String (default: "n")
    /// &#10;Specifies the number format used when the widget is not focused. Any valid number format is allowed.Compare with the decimals property.
    /// &#10;
    /// &#10;max - Number (default: null)
    /// &#10;Specifies the largest value the user can enter.
    /// &#10;
    /// &#10;min - Number (default: null)
    /// &#10;Specifies the smallest value the user can enter.
    /// &#10;
    /// &#10;placeholder - String (default: '')
    /// &#10;The hint displayed by the widget when it is empty. Not set by default.
    /// &#10;
    /// &#10;restrictDecimals - Boolean (default: false)
    /// &#10;Specifies whether the decimals length should be restricted during typing. The length of the fraction is defined by the decimals value.
    /// &#10;
    /// &#10;round - Boolean (default: true)
    /// &#10;Specifies whether the value should be rounded or truncated. The length of the fraction is defined by the decimals value.
    /// &#10;
    /// &#10;spinners - Boolean (default: false)
    /// &#10;Specifies whether the up and down spin buttons should be rendered.
    /// &#10;
    /// &#10;step - Number (default: 1)
    /// &#10;Specifies the value used to increment or decrement widget value.
    /// &#10;
    /// &#10;upArrowText - String (default: "Increase value")
    /// &#10;Specifies the text of the tooltip on the up arrow.
    /// &#10;
    /// &#10;value - Number (default: null)
    /// &#10;Specifies the value of the ARANumericTextBox widget.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAPopover = function () { };

kendo.ui.ARAPopover.prototype = {




    close: function () {
        /// <summary>
        /// closes the popover.
        /// </summary>

    },


    open: function () {
        /// <summary>
        /// opens the popover.
        /// </summary>

    },


    position: function () {
        /// <summary>
        /// re-positions the popover element
        /// </summary>

    },


    setoptions: function (options) {
        /// <summary>
        /// changes the initial popover configuration.
        /// </summary>
        /// <param name="options" type="object" >the new configuration options.</param>

    },


    visible: function () {
        /// <summary>
        /// checks whether the popover is visible
        /// </summary>
        /// <returns type="boolean">true when the popover is visible</returns>

    },

    bind: function (event, callback) {
        /// <summary>
        /// binds to a widget event.
        /// </summary>
        /// <param name="event" type="string">the event name</param>
        /// <param name="callback" type="function">the callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="string">the event name</param>
        /// <param name="callback" type="function">the callback to be removed.</param>
    }

};

$.fn.getKendoARAPopover = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAPopover widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAPopover">The kendo.ui.ARAPopover instance (if present).</returns>
};

$.fn.kendoARAPopover = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAPopover widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;adjustSize - Object 
    /// &#10;Configures the margins, which will be added to the popover size, if its position should end up being next to the viewport edges. By default, the adjustment amount in both dimensions is zero. The property takes effect only if collision is set to "fit" for the respective dimension (width or height).
    /// &#10;
    /// &#10;animation - Boolean 
    /// &#10;Configures the opening and closing animations of the popover. Setting the animation option to false will disable the opening and closing animations. As a result the popover will open and close instantly. is not a valid configuration.
    /// &#10;
    /// &#10;animation - Object 
    /// &#10;Configures the opening and closing animations of the popover. Setting the animation option to false will disable the opening and closing animations. As a result the popover will open and close instantly. is not a valid configuration. By default animation will be set to open event with fade:in effect with duration of 0 msecs.
    /// &#10;
    /// &#10;anchor - String|jQuery 
    /// &#10;Specifies the element that will be used as an anchor. The widget will open next to that element.
    /// &#10;
    /// &#10;appendTo - String|jQuery (default: document.body)
    /// &#10;Which element the popover will be appended to. The element needs to be relatively positioned.
    /// &#10;
    /// &#10;collision - String (default: "fit flip")
    /// &#10;Configures how the popover should behave when it cannot be properly displayed and fully visible, if its origin and position settings are obeyed.Valid values are: "fit", "flip", "flip fit" and "fit flip". "Fit" allows the popover to be shifted (moved) until it is fully visible. "Flip" allows the popover to switch its position, according to its anchor. If two words are used, the first one applies to the horizontal dimension and the second one - to the vertical dimension. If one word is used, the setting is applied to both dimensions.
    /// &#10;
    /// &#10;origin - String (default: "bottom left")
    /// &#10;Specifies how to position the popover element based on anchor point. The value is space separated "y" plus "x" position.
    /// &#10;The available "y" positions are: "bottom", "center", "top". The available "x" positions are: "left", "center", "right".
    /// &#10;
    /// &#10;position - String (default: "top left")
    /// &#10;Specifies which point of the popover element to attach to the anchor's origin point.
    /// &#10; The value is space separated "y" plus "x" position.The available "y" positions are:  "bottom", "center", "top". The available "x" positions are:  "left", "center", "right".
    /// &#10;
    /// &#10;content - String
    /// &#10;Specifies the content to be displayed in the widget element of ARAPopover.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAProgressIndicator = function () { };

kendo.ui.ARAProgressIndicator.prototype = {
};

$.fn.getKendoARAProgressIndicator = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAProgressIndicator widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAProgressIndicator">The kendo.ui.ARAProgressIndicator instance (if present).</returns>
};

$.fn.kendoARAProgressIndicator = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAProgressIndicator widget based the DOM elements that match the selector.
    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;withoutImage - Object 
    /// &#10;Specifies whether the ProgressIndicator will be set with or without Images in the widget element in the ARAProgressIndicator.
    /// &#10;
    /// &#10;show - Boolean 
    /// &#10;Specifies whether user wants to show his widget element in the ARAProgressIndicator.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAMultiSelectDropDownList = function () { };

kendo.ui.ARAMultiSelectDropDownList.prototype = {




    close: function () {
        /// <summary>
        /// Closes the widget popup.
        /// </summary>

    },


    dataItems: function () {
        /// <summary>
        /// Returns list of raw data records corresponding to the selected items.
        /// </summary>
        /// <returns type="Array">The raw data records. Returns empty array ([]) if no selected options</returns>

    },


    destroy: function () {
        /// <summary>
        /// Prepares the ARAMultiSelectDropDownList for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function (enable) {
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>

    },


    focus: function () {
        /// <summary>
        /// Focuses the widget.
        /// </summary>

    },


    items: function () {
        /// <summary>
        /// Obtains an Array of the DOM elements, which correspond to the data items from the Kendo UI DataSource view.
        /// </summary>
        /// <returns type="Array">The currently rendered dropdown list items (<li> elements).</returns>

    },


    open: function () {
        /// <summary>
        /// Opens the popup.
        /// </summary>

    },


    readonly: function (readonly) {
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >If set to true the widget will not allow user input. If set to false the widget will allow user input.</param>

    },


    refresh: function () {
        /// <summary>
        /// Refresh the popup by rendering all items again.
        /// </summary>

    },


    search: function (word) {
        /// <summary>
        /// Searches the data source for the provided value and displays any matches as suggestions.
        /// </summary>
        /// <param name="word" type="String" >The filter value.</param>

    },


    setDataSource: function (dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing ARAMultiSelectDropDownList and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>

    },


    toggle: function (toggle) {
        /// <summary>
        /// Opens or closes the widget popup.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Defines the whether to open/close the drop-down list.</param>

    },


    value: function (value) {
        /// <summary>
        /// Gets or sets the value of the ARAMultiSelectDropDownList.
        /// </summary>
        /// <param name="value" type="Object" >The value to set. A String value or an Array of strings is accepted. To clear the value, pass an empty array.</param>
        /// <returns type="Array">The value of the ARAMultiSelectDropDownList.</returns>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARAMultiSelectDropDownList = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAMultiSelectDropDownList widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAMultiSelectDropDownList">The kendo.ui.ARAMultiSelectDropDownList instance (if present).</returns>
};

$.fn.kendoARAMultiSelectDropDownList = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAMultiSelectDropDownList widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation - Boolean 
    /// &#10;Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly. is not a valid configuration.
    /// &#10;
    /// &#10;animation - Object 
    /// &#10;Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly. is not a valid configuration.
    /// &#10;
    /// &#10;autoBind - Boolean (default: true)
    /// &#10;Controls whether to bind the widget to the data source on initialization.
    /// &#10;
    /// &#10;autoClose - Boolean (default: true)
    /// &#10;Controls whether to close the widget suggestion list on item selection.
    /// &#10;
    /// &#10;autoWidth - Boolean 
    /// &#10;If set to true, the widget automatically adjusts the width of the popup element and does not wrap up the item label.
    /// &#10;
    /// &#10;clearButton - Boolean (default: true)
    /// &#10;Unless this options is set to false, a button will appear when hovering the widget. Clicking that button will reset the widget's value and will trigger the change event.
    /// &#10;
    /// &#10;dataSource - Object|Array|kendo.data.DataSource 
    /// &#10;The data source of the widget which is used to display a list of values. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
    /// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;dataTextField - String (default: "")
    /// &#10;The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.
    /// &#10;
    /// &#10;dataValueField - String (default: "")
    /// &#10;The field of the data item that provides the value of the widget.
    /// &#10;
    /// &#10;delay - Number (default: 200)
    /// &#10;Specifies the delay in milliseconds after which the ARAMultiSelectDropDownList will start filtering dataSource.
    /// &#10;
    /// &#10;enable - Boolean (default: true)
    /// &#10;If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.
    /// &#10;
    /// &#10;enforceMinLength - Boolean (default: false)
    /// &#10;If set to true the widget will not show all items when the text of the search input cleared. By default the widget shows all items when the text of the search input is cleared. Works in conjunction with minLength.
    /// &#10;
    /// &#10;filter - String (default: "contains")
    /// &#10;The filtering method used to determine the suggestions for the current value. Filtration is turned of by default, and can be performed over string values only (either the widget's data has to be an array of strings, or over the field, configured in the dataTextField option).
    /// &#10;The supported filter values are startswith, endswith and contains.
    /// &#10;
    /// &#10;fixedGroupTemplate - String|Function 
    /// &#10;The template used to render the fixed header group. By default the widget displays only the value of the current group.
    /// &#10;
    /// &#10;footerTemplate - String|Function 
    /// &#10;The template used to render the footer template. The footer template receives the widget itself as a part of the data argument. Use the widget fields directly in the template.
    /// &#10;
    /// &#10;groupTemplate - String|Function 
    /// &#10;The template used to render the groups. By default the widget displays only the value of the group.
    /// &#10;
    /// &#10;height - Number (default: 200)
    /// &#10;The height of the suggestion popup in pixels. The default value is 200 pixels.
    /// &#10;
    /// &#10;highlightFirst - Boolean (default: true)
    /// &#10;If set to true the first suggestion will be automatically highlighted.
    /// &#10;
    /// &#10;ignoreCase - Boolean (default: true)
    /// &#10;If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.
    /// &#10;
    /// &#10;minLength - Number (default: 1)
    /// &#10;The minimum number of characters the user must type before a search is performed. Set to a higher value if the search could match a lot of items.
    /// &#10;A zero value means that a request will be made as soon as the user focuses the widget.
    /// &#10;
    /// &#10;maxSelectedItems - Number (default: null)
    /// &#10;Defines the limit of the selected items. If set to null widget will not limit number of the selected items.
    /// &#10;
    /// &#10;noDataTemplate - String|Function (default: "NO DATA FOUND.")
    /// &#10;The template used to render the "no data" template, which will be displayed if no results are found or the underlying data source is empty.
    /// &#10;The noData template receives the widget itself as a part of the data argument. The template will be evaluated on every widget data bound.
    /// &#10;
    /// &#10;placeholder - String (default: "")
    /// &#10;The hint displayed by the widget when it is empty. Not set by default.
    /// &#10;
    /// &#10;popup - Object 
    /// &#10;The options that will be used for the popup initialization. For more details about the available options
    /// &#10;refer to Popup documentation.
    /// &#10;
    /// &#10;headerTemplate - String|Function 
    /// &#10;Specifies a static HTML content, which will be rendered as a header of the popup element.
    /// &#10;
    /// &#10;itemTemplate - String|Function 
    /// &#10;The template used to render the items in the popup list.
    /// &#10;
    /// &#10;tagTemplate - String 
    /// &#10;The template used to render the tags.
    /// &#10;
    /// &#10;tagMode - String (default: "multiple")
    /// &#10;The mode used to render the selected tags. The available modes are:
    /// &#10;- multiple - renders a tag for every selected value
    /// &#10;- single - renders only one tag that shows the number of the selected values
    /// &#10;
    /// &#10;value - Array (default: [])
    /// &#10;Define the value of the widget
    /// &#10;
    /// &#10;valuePrimitive - Boolean (default: false)
    /// &#10;Specifies the value binding behavior for the widget. If set to true, the View-Model field will be updated with the selected item value field. If set to false, the View-Model field will be updated with the selected item.
    /// &#10;
    /// &#10;virtual - Boolean (default: false)
    /// &#10;Enables the virtualization feature of the widget. The configuration can be set on an object, which contains two properties - itemHeight and valueMapper.For detailed information, refer to the article on virtualization.
    /// &#10;
    /// &#10;virtual - Object (default: false)
    /// &#10;Enables the virtualization feature of the widget. The configuration can be set on an object, which contains two properties - itemHeight and valueMapper.For detailed information, refer to the article on virtualization.
    /// &#10;
    /// &#10;allowAll - Boolean (default: true)
    /// &#10;Specifies whether user wants to Select All in the widget element of ARAMultiSelectDropDownList.
    /// &#10;
    /// &#10;url - String (default: '')
    /// &#10;Specifies the url for binding the widget element in ARAMultiSelectDropDownList.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAMultiValueSelection = function () { };

kendo.ui.ARAMultiValueSelection.prototype = {




    addRow: function () {
        /// <summary>
        /// Adds an empty data item to the grid. In "incell" and "inline" editing mode a table row will be appended. Popup window will be displayed in "popup" editing mode.Fires the edit event.
        /// </summary>

    },


    autoFitColumn: function (column) {
        /// <summary>
        /// Applies the minimum possible width for the specified column, so that all text fits without wrapping.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column, or the field to which the columns is bound, or the column object obtained from the columns collection.When using multicolumn headers, using an index is not allowed. In such scenarios, please use a field name or a column object as a method argument.</param>

    },


    cancelChanges: function () {
        /// <summary>
        /// Cancels any pending changes in the data source. Deleted data items are restored, new data items are removed and updated data items are restored to their initial state.
        /// </summary>

    },


    cancelRow: function () {
        /// <summary>
        /// Cancels editing for the table row which is in edit mode. Reverts any changes made.
        /// </summary>

    },


    cellIndex: function (cell) {
        /// <summary>
        /// Returns the index of the specified table cell. Skips group and detail table cells.
        /// </summary>
        /// <param name="cell" type="Object" >A string, DOM element or jQuery object which represents the table cell. A string is treated as a jQuery selector. If there are locked columns in the ARAMultiValueSelection, the jQuery object, representing the cell, must be passed as an argument.</param>
        /// <returns type="Number">the index of the specified table cell.</returns>

    },


    clearSelection: function () {
        /// <summary>
        /// Clears the currently selected table rows or cells (depending on the current selection mode).
        /// </summary>

    },


    closeCell: function (isCancel) {
        /// <summary>
        /// Stops editing the table cell which is in edit mode. Requires "incell" edit mode.
        /// </summary>
        /// <param name="isCancel" type="Boolean" >A flag specifying whether to fire the cancel event. By default the event is not fired.</param>

    },


    collapseGroup: function (row) {
        /// <summary>
        /// Collapses the specified group. This hides the group items.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the group table row. A string is treated as a jQuery selector.</param>

    },


    collapseRow: function (row) {
        /// <summary>
        /// Collapses the specified master table row. This hides its detail table row.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the master table row. A string is treated as a jQuery selector.</param>

    },


    current: function (cell) {
        /// <summary>
        /// Gets or sets the current cell for keyboard navigation.
        /// </summary>
        /// <param name="cell" type="jQuery" >DOM element or jQuery object which represents the navigatable cell.</param>
        /// <returns type="jQuery">the current cell.</returns>

    },


    dataItem: function (row) {
        /// <summary>
        /// Returns the data item to which the specified table row is bound. The data item is a Kendo UI Model instance.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the table row. A string is treated as a jQuery selector.</param>
        /// <returns type="kendo.data.ObservableObject">the data item to which the specified table row is bound. More information about the ObservableObject type...</returns>

    },


    destroy: function () {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls the destroy method of any child Kendo widgets.
        /// </summary>

    },


    editCell: function (cell) {
        /// <summary>
        /// Switches the specified table cell in edit mode. Requires "incell" edit mode.Fires the edit event.
        /// </summary>
        /// <param name="cell" type="jQuery" >The jQuery object which represents the table cell.</param>

    },


    editRow: function (row) {
        /// <summary>
        /// Switches the specified table row in edit mode. Requires "inline" or "popup" edit mode.Fires the edit event.
        /// </summary>
        /// <param name="row" type="jQuery" >The jQuery object which represents the table row.</param>

    },


    expandGroup: function (row) {
        /// <summary>
        /// Expands the specified group. This shows the group items.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the group table row. A string is treated as a jQuery selector. Expands specified group.</param>

    },


    expandRow: function (row) {
        /// <summary>
        /// Expands the specified master table row. This shows its detail table row.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the master table row. A string is treated as a jQuery selector. Expands specified master row.</param>

    },


    getOptions: function () {
        /// <summary>
        /// Retrieves the options that are currently enabled or disabled on the ARAMultiValueSelection, also gives the current state of the dataSource.
        /// Use this method if you want to save the state of the ARAMultiValueSelection into a variable. It is also possible to extract and store only some of the ARAMultiValueSelection options.
        /// </summary>
        /// <returns type="Object">The configuration options of the widget.</returns>

    },


    hideColumn: function (column) {
        /// <summary>
        /// Hides the specified grid column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column, or the field to which the columns is bound, or the column object obtained from the columns collection.When using multicolumn headers, using an index will hide a top-level column together will all its "child columns". In such scenarios, using field names or column objects may be more appropriate.</param>

    },


    items: function () {
        /// <summary>
        /// Obtains an Array of the DOM elements, which correspond to the data items from the Kendo UI DataSource view (e.g. the ones on the current page).
        /// </summary>
        /// <returns type="Array">The currently rendered data table rows (<tr> elements).</returns>

    },


    lockColumn: function (column) {
        /// <summary>
        /// Locks (freezes) a column, allowing users to see it at all times when scrolling.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column or the field to which the columns is bound.</param>

    },


    refresh: function () {
        /// <summary>
        /// Renders all table rows using the current data items.
        /// </summary>

    },


    removeRow: function (row) {
        /// <summary>
        /// Removes the specified table row from the grid. Also removes the corresponding data item from the data source.Fires the remove event.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the table row. A string is treated as a jQuery selector.</param>

    },


    reorderColumn: function (destIndex, column) {
        /// <summary>
        /// Changes the position of the specified column.
        /// </summary>
        /// <param name="destIndex" type="Number" >The new position of the column. The destination index should be calculated with regard to all columns, including the hidden ones.</param>
        /// <param name="column" type="Object" >The column whose position should be changed.</param>

    },


    saveAsExcel: function () {
        /// <summary>
        /// Initiates the Excel export. Also fires the excelExport event.
        /// </summary>

    },


    saveAsPDF: function () {
        /// <summary>
        /// Initiates the PDF export and returns a promise. Also triggers the pdfExport event.
        /// </summary>
        /// <returns type="Promise">A promise that will be resolved when the export completes. The same promise is available in the pdfExport event arguments.</returns>

    },


    saveChanges: function () {
        /// <summary>
        /// Saves any pending changes by calling the sync method.Fires the saveChanges event.
        /// </summary>

    },


    saveRow: function () {
        /// <summary>
        /// Switches the table row which is in edit mode and saves any changes made by the user.
        /// </summary>

    },


    select: function (rows) {
        /// <summary>
        /// Gets or sets the table rows (or cells) which are selected.
        /// </summary>
        /// <param name="rows" type="Object" >A string, DOM element or jQuery object which represents the table row(s) or cell(s). A string is treated as a jQuery selector.</param>
        /// <returns type="jQuery">the selected table rows or cells.</returns>

    },


    selectedKeyNames: function () {
        /// <summary>
        /// Gets an array that holds the id field values of the selected rows.
        /// </summary>
        /// <returns type="Array">of the id field values of the selected rows.</returns>

    },


    setDataSource: function (dataSource) {
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>

    },


    setOptions: function (options) {
        /// <summary>
        /// Sets the options of the ARAMultiValueSelection. Use this method if you want to enable/disable a particular feature/option or to load
        /// the complete state obtained previously with the getOptions method.When setOptions is called, the ARAMultiValueSelection widget will be destroyed and recreated. If the widget is bound to remote data, a new read request will be made.
        /// </summary>
        /// <param name="options" type="Object" >The configuration options to be set.</param>

    },


    showColumn: function (column) {
        /// <summary>
        /// Shows the specified column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column, or the field to which the columns is bound, or the column object obtained from the columns collection.When using multicolumn headers, using an index will hide a top-level column together will all its "child columns". In such scenarios, using field names or column objects may be more appropriate.</param>

    },


    unlockColumn: function (column) {
        /// <summary>
        /// Unlocks (unfreezes) a column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column or the field to which the columns is bound.</param>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARAMultiValueSelection = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAMultiValueSelection widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAMultiValueSelection">The kendo.ui.ARAMultiValueSelection instance (if present).</returns>
};

$.fn.kendoARAMultiValueSelection = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAMultiValueSelection widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;allowCopy - Boolean|Object (default: false)
    /// &#10;If set to true and selection of the ARAMultiValueSelection is enabled the user could copy the selection into the clipboard and paste it into Excel or other similar programs that understand TSV/CSV formats. By default allowCopy is disabled and the default format is TSV.
    /// &#10;Can be set to a JavaScript object which represents the allowCopy configuration.
    /// &#10;
    /// &#10;altRowTemplate - String|Function 
    /// &#10;The template which renders the alternating table rows. Be default the grid renders a table row () for every data source item.
    /// &#10;
    /// &#10;autoBind - Boolean (false)
    /// &#10;By default, autoBind is set to false and the widget data will be binded when the change event of the dataSource instance is fired.
    /// &#10;
    /// &#10;columnResizeHandleWidth - Number (default: 3)
    /// &#10;Defines the width of the column resize handle in pixels. Apply a larger value for easier grasping.
    /// &#10;
    /// &#10;columns - Array 
    /// &#10;The configuration of the grid columns. An array of JavaScript objects or strings. JavaScript objects are interpreted as column configurations. Strings are interpreted as the
    /// &#10;field to which the column is bound. The grid will create a column for every item of the array.
    /// &#10;
    /// &#10;columnMenu - Boolean|Object (default: false)
    /// &#10;If set to true the grid will display the column menu when the user clicks the chevron icon in the column headers. The column menu allows the user to show and hide columns, filter and sort (if filtering and sorting are enabled).
    /// &#10;By default the column menu is not enabled.Can be set to a JavaScript object which represents the column menu configuration.
    /// &#10;
    /// &#10;dataSource - Object|Array|kendo.data.DataSource 
    /// &#10;The data source of the widget which is used render table rows. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
    /// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;detailTemplate - String|Function 
    /// &#10;The template which renders the detail rows.
    /// &#10;Check Detail Template for a live demo.
    /// &#10;
    /// &#10;editable - Boolean|Object (default: false)
    /// &#10;If set to true the user would be able to edit the data to which the grid is bound. By default editing is disabled.Can be set to a string ("inline", "incell" or "popup") to specify the editing mode. The default editing mode is "incell".Can be set to a JavaScript object which represents the editing configuration.
    /// &#10;
    /// &#10;excel - Object 
    /// &#10;Configures the Kendo UI ARAMultiValueSelection Excel export settings.
    /// &#10;
    /// &#10;filterable - Boolean|Object (default: mode="row")
    /// &#10;If set to true the user can filter the data source using the grid filter menu. Filtering is disabled by default.Can be set to a JavaScript object which represents the filter menu configuration.
    /// &#10;
    /// &#10;groupable - Boolean|Object (default: false)
    /// &#10;If set to true the user could group the grid by dragging the column header cells. By default grouping is disabled.Can be set to a JavaScript object which represents the grouping configuration.
    /// &#10;
    /// &#10;height - Number|String 
    /// &#10;The height of the grid. Numeric values are treated as pixels.
    /// &#10;
    /// &#10;messages - Object 
    /// &#10;Defines the text of the command buttons that are shown within the ARAMultiValueSelection. Used primarily for localization.
    /// &#10;
    /// &#10;mobile - Boolean|String (default: false)
    /// &#10;If set to true and the grid is viewed on mobile browser it will use adaptive rendering.Can be set to a string phone or tablet which will force the widget to use adaptive rendering regardless of browser type.
    /// &#10;The grid uses same layout for both phone and tablet.
    /// &#10;
    /// &#10;navigatable - Boolean (default: false)
    /// &#10;If set to true the use could navigate the widget using the keyboard navigation. By default keyboard navigation is disabled.
    /// &#10;
    /// &#10;noRecords - Boolean|Object (default: false)
    /// &#10;If set to true and current view contains no records, message similar to "No records available" will be displayed. By default this option is disabled.
    /// &#10;
    /// &#10;pageable - Boolean|Object (default: false)
    /// &#10;If set to true the grid will display a pager. By default paging is disabled.Can be set to a JavaScript object which represents the pager configuration.
    /// &#10;
    /// &#10;pdf - Object 
    /// &#10;Configures the Kendo UI ARAMultiValueSelection PDF export settings.
    /// &#10;
    /// &#10;persistSelection - Boolean (default: false)
    /// &#10;Sets a value indicating whether the selection will be persisted when sorting, paging, filtering and etc are performed.
    /// &#10;
    /// &#10;reorderable - Boolean (default: false)
    /// &#10;If set to true the user could reorder the columns by dragging their header cells. By default reordering is disabled.
    /// &#10;Multi-level headers allow reordering only in same level.
    /// &#10;
    /// &#10;resizable - Boolean (default: false)
    /// &#10;If set to true, users can resize columns by dragging the edges (resize handles) of their header cells. As of Kendo UI Q1 2015, users can also auto-fit a column by double-clicking
    /// &#10;its resize handle. In this case the column will assume the smallest possible width, which allows the column content to fit without wrapping.By default, column resizing is disabled.
    /// &#10;
    /// &#10;rowTemplate - String|Function 
    /// &#10;The template which renders rows. Be default renders a table row () for every data source item.
    /// &#10;
    /// &#10;scrollable - Boolean|Object (default: true)
    /// &#10;If set to true the grid will display a scrollbar when the total row height (or width) exceeds the grid height (or width). By default scrolling is enabled.Can be set to a JavaScript object which represents the scrolling configuration.
    /// &#10;
    /// &#10;selectable - Boolean|String (default:  "multiple, row")
    /// &#10;If set to true the user would be able to select grid rows. By default selection is "multiple, row", which means user can select multiple rows.
    /// &#10;
    /// &#10;sortable - Boolean|Object (default: false)
    /// &#10;If set to true the user could sort the grid by clicking the column header cells. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.
    /// &#10;
    /// &#10;toolbar - String|Function|Array 
    /// &#10;If a String value is assigned to the toolbar configuration option, it will be treated as a single string template for the whole grid Toolbar,
    /// &#10;and the string value will be passed as an argument to a kendo.template() function.If a Function value is assigned (it may be a kendo.template() function call or a generic function reference), then the return value of the function will be used to render the ARAMultiValueSelection Toolbar contents.If an Array value is assigned, it will be treated as the list of commands displayed in the grid's Toolbar. Commands can be custom or built-in ("cancel", "create", "save", "excel", "pdf").The "cancel" built-in command reverts any data changes done by the end user.The "create" command adds an empty data item to the grid.The "save" command persists any data changes done by the end user.The "excel" command exports the grid data in MS Excel format.The "pdf" command exports the grid data in PDF format.
    /// &#10;
    /// &#10;focusoncheckboxcolumn - Boolean (false)
    /// &#10;If set to false the user could not set focus on checkbox of the grid by clicking the column. By default focusoncheckboxcolumn is false. 
    /// &#10;
    /// &#10;totalRecordPerPage - Number(default: 10)
    /// &#10;Specifies the total number of records to be displayed in the grid when ARAMultiValueSelection is loaded. By default totalRecordPerPage will be set to 10.
    /// &#10;
    /// &#10;autoscrollbyselection - Boolean (default: false)
    /// &#10;If set to true the user could set automatic scrolling based on selected rows in the ARAMultiValueSelection. By default autoscrollbyselection will be set to false.
    /// &#10;
    /// &#10;rowselectionevent - Boolean (default: false)
    /// &#10;If set to true the user could fire row selection event for selected rows in the ARAMultiValueSelection. By default rowselectionevent will be set to false.
    /// &#10;
    /// &#10;selectedRecords - Array
    /// &#10;Contains array of records selected from the grid. By default selectedrecords array will be empty.
    /// &#10;
    /// &#10;selectionMemory - Boolean (false)
    /// &#10;If set to false the records selected by user will not be saved in memory for ARAMultiValueSelection. By default selectionMemory will be set to false.
    /// &#10;
    /// &#10;checkboxselection - Boolean (PKID with noPointer class)
    /// &#10;If set to true the user can add checkbox for each records in the ARAMultiValueSelection. In checkboxselection user can set width (default:"50px"), template, headertemplate, reorderable (false).
    /// &#10;If not set checkbox will not be available besides each record.
    /// &#10;
    /// &#10;_aggregate - Array
    /// &#10;Specifies aggregates which are calculated when the data source populates with data.
    /// &#10;
    /// &#10;_group - Boolean (default: false)
    /// &#10;Specifies grouping configuration of the data source. If set, the data items will be grouped when the data source is populated. By default, grouping is not applied.
    /// &#10;
    /// &#10;config - Array
    /// &#10;Specifies the config to be passed for managing the pagination for currentPage, totalPage, recordPerPage, totalRecords and searchText. By default config will be set to CurrentPage: 0, TotalPage: 0,
    /// &#10;RecordPerPage: totalRecordPerPage(dynamic), TotalRecord: 0, searchText: searchText(dynamic).
    /// &#10;
    /// &#10;searchText - String
    /// &#10;Specifies the searchText to be used by the user for applying searching in the ARAMultiValueSelection. By default searchText will be set to empty.
    /// &#10;
    /// &#10;autoresize - Boolean (default: false)
    /// &#10;If set to false the grid created by user cannot be resized. By default autoresize is false.
    /// &#10;
    /// &#10;PKID - Guid
    /// &#10;Specifies the Primary Key ID that will be used in assigning the ID for ARAMultiValueSelection.
    /// &#10;
    /// &#10;relationId - Guid
    /// &#10;Specifies the relationID based on which selected Records will be fetched in ARAMultiValueSelection.
    /// &#10;
    /// &#10;enable - Boolean 
    /// &#10;If set to false DropdownList for ARAMultiValueSelection will be disabled.
    /// &#10;
    /// &#10;queryId - Guid 
    /// &#10;Specifies the queryID based on which columns will be loaded in ARAMultiValueSelection.
    /// &#10;
    /// &#10;parentValue - Number
    /// &#10;Specifies the parent Value passed as parameter based on which records will be fetched in API will be loaded in ARAMultiValueSelection.
    /// &#10;
    /// &#10;isAllowCheck - Boolean 
    /// &#10;Specifies whether checkbox is to be allowed or not in ARAMultiValueSelection
    /// &#10;
    /// &#10;storeChange - Object
    /// &#10;Specifies the store Change allowed in the ARAMultiValueSelection.
    /// &#10;
    /// &#10;selectedIds - Guid
    /// &#10;Indicates to the user the Ids to be selected in the ARAMultiValueSelection.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAToolTip = function () { };

kendo.ui.ARAToolTip.prototype = {

};

$.fn.getKendoARAToolTip = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAToolTip widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAToolTip">The kendo.ui.ARAToolTip instance (if present).</returns>
};

$.fn.kendoARAToolTip = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAToolTip widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;text - String
    /// &#10;Specifies the text to be displayed tooltip of the ARATooltip.
    /// &#10;
    /// &#10;showTitle - Boolean
    /// &#10;Specifies whether the title is to be shown in the ARAToolTip.
    /// &#10;
    /// &#10;position - String (default: auto)
    /// &#10;Specifies the position to display the tooltip
    /// &#10;
    /// &#10;delayValue - Number (default: 100)
    /// &#10; Indicates the delayed time after which tooltip will be displayed in ARAToolTip.
    /// &#10;
    /// &#10;hasHtmlContent - Boolean|Object (default: false)
    /// &#10;Specifies whether html value if htmlcontent is allowed for ARAToolTip.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAWorkspace = function () { };

kendo.ui.ARAWorkspace.prototype = {
    values: function () {
        /// <summary>
        /// Indicates the values to be fetched in Array with Field Display Title, Owner Name, Template for ARAWorkspace.
        /// </summary>
    },
};

$.fn.getKendoARAWorkspace = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAWorkspace widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAWorkspace">The kendo.ui.ARAWorkspace instance (if present).</returns>
};

$.fn.kendoARAWorkspace = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAWorkspace widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;flag - String
    /// &#10;Specifies if the workspace is to activated in create mode or not for the ARAWorkspace.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAAdditionalField = function () { };

kendo.ui.ARAAdditionalField.prototype = {

};

$.fn.getKendoARAAdditionalField = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAAdditionalField widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAAdditionalField">The kendo.ui.ARAAdditionalField instance (if present).</returns>
};

$.fn.kendoARAAdditionalField = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAAdditionalField widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;cascadeFrom - String
    /// &#10;Specifies the value based on which cascading will be performed in ARAAdditionalField.
    /// &#10;
    /// &#10;autoBind - Boolean (false)
    /// &#10;Specifies to the user that data will not bind at the time of initialization. By default autobind will be set to false.
    /// &#10;
    /// &#10;cascadeFromField - Boolean (false)
    /// &#10;Specifies the cascade value based on which the child field will be loaded in the ARAAdditionalField.
    /// &#10;
    /// &#10;queryId - Boolean (false)
    /// &#10;Indicates the queryID passed by the user to bind the dataSource in the ARAAdditionalFields.
    /// &#10;
    /// &#10;additionalFields - Object
    /// &#10;Specifies the field additional field title to be passed as additional fields element widget of the ARAAdditionalField.
    /// &#10;

    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARADropDownTreeView = function () { };

kendo.ui.ARADropDownTreeView.prototype = {

};

$.fn.getKendoARADropDownTreeView = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARADropDownTreeView widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARADropDownTreeView">The kendo.ui.ARADropDownTreeView instance (if present).</returns>
};

$.fn.kendoARADropDownTreeView = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARADropDownTreeView widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;optionLabel - String (Default: '')
    /// &#10; Specifies the optional Label to be passed when binding the dropdown of ARADropdownTreeView.
    /// &#10;
    /// &#10;dataTextField - Boolean (false)
    /// &#10;Specifies the Text Field to be passed in the dropdown of ARADropdownTreeView.
    /// &#10;
    /// &#10;template - Boolean|Object (default: false)
    /// &#10;Specifies the template to be passed externally when binding the dropdownlist in the ARADropdownTreeView.
    /// &#10;
    /// &#10;dataSource - Object
    /// &#10;Specifies the dataSource to be rendered in binding the DropdownList in the ARADropdownTreeView.
    /// &#10;
    /// &#10;autoBind - Boolean (default: false)
    /// &#10;If set to true, the ARADropdownTreeView will bind to the data source during initialization, i.e. it will call the fetch method of the dataSource instance. 
    /// &#10;By default, autoBind is set to false and the widget data will be binded when the change event of the dataSource instance is fired.
    /// &#10;
    /// &#10;checkboxes - Boolean|Object (default: false)
    /// &#10;If true or an object, renders checkboxes beside each node.
    /// &#10;
    /// &#10;ismultiselection - Boolean (default: false)
    /// &#10;If set to true the widget will allow user to select mulitple nodes in ARATreeView. By default ismultiselection will be set to false.
    /// &#10;
    /// &#10;onLoadSelectId - Boolean (default: false)
    /// &#10;Specifies to the user nodes that will be selected at the time of loading ARATreeView i.e. Edit mode of ARATreeView. By default onLoadSelectId will be set to false.
    /// &#10;
    /// &#10;dataValueField - String
    /// &#10;Specifies by the user to pass the value field as schema in the ajax call for binding dataSource of ARATreeView.
    /// &#10;
    /// &#10;hasChildrenField - Boolean 
    /// &#10;Specifies by the user whether selected node has a child node.
    /// &#10;
    /// &#10;url - String
    /// &#10;Specifies the url to be used by the user which will be used in the ajax call for datasource binding of ARATreeView.
    /// &#10;
    /// &#10;expandAll - Boolean (default: true)
    /// &#10;If set to false the widget will be loaded in collaspsed mode in ARATreeView. By default expandAll will be set to true.
    /// &#10;
    /// &#10;data - Array
    /// &#10;Specifies the paramater to be passed by the user to handle the ajax call.
    /// &#10;

    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARADynamicTwoGrids = function () { };

kendo.ui.ARADynamicTwoGrids.prototype = {

};

$.fn.getKendoARADynamicTwoGrids = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARADynamicTwoGrids widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARADynamicTwoGrids">The kendo.ui.ARADynamicTwoGrids instance (if present).</returns>
};

$.fn.kendoARADynamicTwoGrids = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARADynamicTwoGrids widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;viewId - String (default: null)
    /// &#10; Specifies the viewID based on which the grid of ARADynamicTwoGrids data will be loaded.
    /// &#10;
    /// &#10;viewType - Number (default:null)
    /// &#10;Specifies the Type of view which will be passed as parameter in the ARADynamicTwoGrids.
    /// &#10;
    /// &#10;pageId - Guid (default: null)
    /// &#10;Specifies pageID in which Export to Excel is to be performed for ARADynamicTwoGrids.
    /// &#10;
    /// &#10;selectedIDs - Object (default:null)
    /// &#10;Specifies the number of Record IDs in which Export to Excel is to be performed in ARADynamicTwoGrids.
    /// &#10;
    /// &#10;isanySearch - Boolean (default: false)
    /// &#10;Indicates true or false, if any type of search is applied in the current view in the ARADynamicTwoGrids.
    /// &#10;By default, isanySearch is set to false which means no search is applied to current view.
    /// &#10;
  
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARADynamicGrid = function () { };

kendo.ui.ARADynamicGrid.prototype = {




    addRow: function () {
        /// <summary>
        /// Adds an empty data item to the grid. In "incell" and "inline" editing mode a table row will be appended. Popup window will be displayed in "popup" editing mode.Fires the edit event.
        /// </summary>

    },


    autoFitColumn: function (column) {
        /// <summary>
        /// Applies the minimum possible width for the specified column, so that all text fits without wrapping.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column, or the field to which the columns is bound, or the column object obtained from the columns collection.When using multicolumn headers, using an index is not allowed. In such scenarios, please use a field name or a column object as a method argument.</param>

    },


    cancelChanges: function () {
        /// <summary>
        /// Cancels any pending changes in the data source. Deleted data items are restored, new data items are removed and updated data items are restored to their initial state.
        /// </summary>

    },


    cancelRow: function () {
        /// <summary>
        /// Cancels editing for the table row which is in edit mode. Reverts any changes made.
        /// </summary>

    },


    cellIndex: function (cell) {
        /// <summary>
        /// Returns the index of the specified table cell. Skips group and detail table cells.
        /// </summary>
        /// <param name="cell" type="Object" >A string, DOM element or jQuery object which represents the table cell. A string is treated as a jQuery selector. If there are locked columns in the ARADynamicGrid, the jQuery object, representing the cell, must be passed as an argument.</param>
        /// <returns type="Number">the index of the specified table cell.</returns>

    },


    clearSelection: function () {
        /// <summary>
        /// Clears the currently selected table rows or cells (depending on the current selection mode).
        /// </summary>

    },


    closeCell: function (isCancel) {
        /// <summary>
        /// Stops editing the table cell which is in edit mode. Requires "incell" edit mode.
        /// </summary>
        /// <param name="isCancel" type="Boolean" >A flag specifying whether to fire the cancel event. By default the event is not fired.</param>

    },


    collapseGroup: function (row) {
        /// <summary>
        /// Collapses the specified group. This hides the group items.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the group table row. A string is treated as a jQuery selector.</param>

    },


    collapseRow: function (row) {
        /// <summary>
        /// Collapses the specified master table row. This hides its detail table row.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the master table row. A string is treated as a jQuery selector.</param>

    },


    current: function (cell) {
        /// <summary>
        /// Gets or sets the current cell for keyboard navigation.
        /// </summary>
        /// <param name="cell" type="jQuery" >DOM element or jQuery object which represents the navigatable cell.</param>
        /// <returns type="jQuery">the current cell.</returns>

    },


    dataItem: function (row) {
        /// <summary>
        /// Returns the data item to which the specified table row is bound. The data item is a Kendo UI Model instance.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the table row. A string is treated as a jQuery selector.</param>
        /// <returns type="kendo.data.ObservableObject">the data item to which the specified table row is bound. More information about the ObservableObject type...</returns>

    },


    destroy: function () {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls the destroy method of any child Kendo widgets.
        /// </summary>

    },


    editCell: function (cell) {
        /// <summary>
        /// Switches the specified table cell in edit mode. Requires "incell" edit mode.Fires the edit event.
        /// </summary>
        /// <param name="cell" type="jQuery" >The jQuery object which represents the table cell.</param>

    },


    editRow: function (row) {
        /// <summary>
        /// Switches the specified table row in edit mode. Requires "inline" or "popup" edit mode.Fires the edit event.
        /// </summary>
        /// <param name="row" type="jQuery" >The jQuery object which represents the table row.</param>

    },


    expandGroup: function (row) {
        /// <summary>
        /// Expands the specified group. This shows the group items.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the group table row. A string is treated as a jQuery selector. Expands specified group.</param>

    },


    expandRow: function (row) {
        /// <summary>
        /// Expands the specified master table row. This shows its detail table row.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the master table row. A string is treated as a jQuery selector. Expands specified master row.</param>

    },


    getOptions: function () {
        /// <summary>
        /// Retrieves the options that are currently enabled or disabled on the ARADynamicGrid, also gives the current state of the dataSource.
        /// Use this method if you want to save the state of the ARADynamicGrid into a variable. It is also possible to extract and store only some of the ARADynamicGrid options.
        /// </summary>
        /// <returns type="Object">The configuration options of the widget.</returns>

    },


    hideColumn: function (column) {
        /// <summary>
        /// Hides the specified grid column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column, or the field to which the columns is bound, or the column object obtained from the columns collection.When using multicolumn headers, using an index will hide a top-level column together will all its "child columns". In such scenarios, using field names or column objects may be more appropriate.</param>

    },


    items: function () {
        /// <summary>
        /// Obtains an Array of the DOM elements, which correspond to the data items from the Kendo UI DataSource view (e.g. the ones on the current page).
        /// </summary>
        /// <returns type="Array">The currently rendered data table rows (<tr> elements).</returns>

    },


    lockColumn: function (column) {
        /// <summary>
        /// Locks (freezes) a column, allowing users to see it at all times when scrolling.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column or the field to which the columns is bound.</param>

    },


    refresh: function () {
        /// <summary>
        /// Renders all table rows using the current data items.
        /// </summary>

    },


    removeRow: function (row) {
        /// <summary>
        /// Removes the specified table row from the grid. Also removes the corresponding data item from the data source.Fires the remove event.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the table row. A string is treated as a jQuery selector.</param>

    },


    reorderColumn: function (destIndex, column) {
        /// <summary>
        /// Changes the position of the specified column.
        /// </summary>
        /// <param name="destIndex" type="Number" >The new position of the column. The destination index should be calculated with regard to all columns, including the hidden ones.</param>
        /// <param name="column" type="Object" >The column whose position should be changed.</param>

    },


    saveAsExcel: function () {
        /// <summary>
        /// Initiates the Excel export. Also fires the excelExport event.
        /// </summary>

    },


    saveAsPDF: function () {
        /// <summary>
        /// Initiates the PDF export and returns a promise. Also triggers the pdfExport event.
        /// </summary>
        /// <returns type="Promise">A promise that will be resolved when the export completes. The same promise is available in the pdfExport event arguments.</returns>

    },


    saveChanges: function () {
        /// <summary>
        /// Saves any pending changes by calling the sync method.Fires the saveChanges event.
        /// </summary>

    },


    saveRow: function () {
        /// <summary>
        /// Switches the table row which is in edit mode and saves any changes made by the user.
        /// </summary>

    },


    select: function (rows) {
        /// <summary>
        /// Gets or sets the table rows (or cells) which are selected.
        /// </summary>
        /// <param name="rows" type="Object" >A string, DOM element or jQuery object which represents the table row(s) or cell(s). A string is treated as a jQuery selector.</param>
        /// <returns type="jQuery">the selected table rows or cells.</returns>

    },


    selectedKeyNames: function () {
        /// <summary>
        /// Gets an array that holds the id field values of the selected rows.
        /// </summary>
        /// <returns type="Array">of the id field values of the selected rows.</returns>

    },


    setDataSource: function (dataSource) {
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>

    },


    setOptions: function (options) {
        /// <summary>
        /// Sets the options of the ARADynamicGrid. Use this method if you want to enable/disable a particular feature/option or to load
        /// the complete state obtained previously with the getOptions method.When setOptions is called, the ARADynamicGrid widget will be destroyed and recreated. If the widget is bound to remote data, a new read request will be made.
        /// </summary>
        /// <param name="options" type="Object" >The configuration options to be set.</param>

    },


    showColumn: function (column) {
        /// <summary>
        /// Shows the specified column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column, or the field to which the columns is bound, or the column object obtained from the columns collection.When using multicolumn headers, using an index will hide a top-level column together will all its "child columns". In such scenarios, using field names or column objects may be more appropriate.</param>

    },


    unlockColumn: function (column) {
        /// <summary>
        /// Unlocks (unfreezes) a column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column or the field to which the columns is bound.</param>

    },

    bind: function (event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function (event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoARADynamicGrid = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARADynamicGrid widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARADynamicGrid">The kendo.ui.ARADynamicGrid instance (if present).</returns>
};

$.fn.kendoARADynamicGrid = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARADynamicGrid widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;allowCopy - Boolean|Object (default: false)
    /// &#10;If set to true and selection of the ARADynamicGrid is enabled the user could copy the selection into the clipboard and paste it into Excel or other similar programs that understand TSV/CSV formats. By default allowCopy is disabled and the default format is TSV.
    /// &#10;Can be set to a JavaScript object which represents the allowCopy configuration.
    /// &#10;
    /// &#10;altRowTemplate - String|Function 
    /// &#10;The template which renders the alternating table rows. Be default the grid renders a table row () for every data source item.
    /// &#10;
    /// &#10;autoBind - Boolean (default: false)
    /// &#10;If set to true, the ARADynamicGrid will bind to the data source during initialization, i.e. it will call the fetch method of the dataSource instance. 
    /// &#10;By default, autoBind is set to false and the widget data will be binded when the change event of the dataSource instance is fired.
    /// &#10;
    /// &#10;columnResizeHandleWidth - Number (default: 3)
    /// &#10;Defines the width of the column resize handle in pixels. Apply a larger value for easier grasping.
    /// &#10;
    /// &#10;columns - Array 
    /// &#10;The configuration of the grid columns. An array of JavaScript objects or strings. JavaScript objects are interpreted as column configurations. Strings are interpreted as the
    /// &#10;field to which the column is bound. The grid will create a column for every item of the array.
    /// &#10;
    /// &#10;columnMenu - Boolean|Object (default: false)
    /// &#10;If set to true the grid will display the column menu when the user clicks the chevron icon in the column headers. The column menu allows the user to show and hide columns, filter and sort (if filtering and sorting are enabled).
    /// &#10;By default the column menu is not enabled.Can be set to a JavaScript object which represents the column menu configuration.
    /// &#10;
    /// &#10;dataSource - Object|Array|kendo.data.DataSource 
    /// &#10;The data source of the widget which is used render table rows. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
    /// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;detailTemplate - String|Function 
    /// &#10;The template which renders the detail rows.
    /// &#10;Check Detail Template for a live demo.
    /// &#10;
    /// &#10;editable - Boolean|Object (default: false)
    /// &#10;If set to true the user would be able to edit the data to which the grid is bound. By default editing is disabled.Can be set to a string ("inline", "incell" or "popup") to specify the editing mode. The default editing mode is "incell".Can be set to a JavaScript object which represents the editing configuration.
    /// &#10;
    /// &#10;excel - Object 
    /// &#10;Configures the Kendo UI ARADynamicGrid Excel export settings.
    /// &#10;
    /// &#10;filterable - Boolean|Object (default: false)
    /// &#10;If set to true the user can filter the data source using the grid filter menu. Filtering is disabled by default.Can be set to a JavaScript object which represents the filter menu configuration.
    /// &#10;
    /// &#10;groupable - Boolean|Object (default: false)
    /// &#10;If set to true the user could group the grid by dragging the column header cells. By default grouping is disabled.Can be set to a JavaScript object which represents the grouping configuration.
    /// &#10;
    /// &#10;height - Number|String 
    /// &#10;The height of the grid. Numeric values are treated as pixels.
    /// &#10;
    /// &#10;messages - Object 
    /// &#10;Defines the text of the command buttons that are shown within the ARADynamicGrid. Used primarily for localization.
    /// &#10;
    /// &#10;mobile - Boolean|String (default: false)
    /// &#10;If set to true and the grid is viewed on mobile browser it will use adaptive rendering.Can be set to a string phone or tablet which will force the widget to use adaptive rendering regardless of browser type.
    /// &#10;The grid uses same layout for both phone and tablet.
    /// &#10;
    /// &#10;navigatable - Boolean (default: false)
    /// &#10;If set to true the use could navigate the widget using the keyboard navigation. By default keyboard navigation is disabled.
    /// &#10;
    /// &#10;noRecords - Boolean|Object (default: false)
    /// &#10;If set to true and current view contains no records, message similar to "No records available" will be displayed. By default this option is disabled.
    /// &#10;
    /// &#10;pageable - Boolean|Object (default: false)
    /// &#10;If set to true the grid will display a pager. By default paging is disabled.Can be set to a JavaScript object which represents the pager configuration.
    /// &#10;
    /// &#10;pdf - Object 
    /// &#10;Configures the Kendo UI ARADynamicGrid PDF export settings.
    /// &#10;
    /// &#10;persistSelection - Boolean (default: false)
    /// &#10;Sets a value indicating whether the selection will be persisted when sorting, paging, filtering and etc are performed.
    /// &#10;
    /// &#10;reorderable - Boolean (default: false)
    /// &#10;If set to true the user could reorder the columns by dragging their header cells. By default reordering is disabled.
    /// &#10;Multi-level headers allow reordering only in same level.
    /// &#10;
    /// &#10;resizable - Boolean (default: false)
    /// &#10;If set to true, users can resize columns by dragging the edges (resize handles) of their header cells. As of Kendo UI Q1 2015, users can also auto-fit a column by double-clicking
    /// &#10;its resize handle. In this case the column will assume the smallest possible width, which allows the column content to fit without wrapping.By default, column resizing is disabled.
    /// &#10;
    /// &#10;rowTemplate - String|Function 
    /// &#10;The template which renders rows. Be default renders a table row () for every data source item.
    /// &#10;
    /// &#10;scrollable - Boolean|Object (default: true)
    /// &#10;If set to true the grid will display a scrollbar when the total row height (or width) exceeds the grid height (or width). By default scrolling is enabled.Can be set to a JavaScript object which represents the scrolling configuration.
    /// &#10;
    /// &#10;selectable - Boolean|String (default:  "multiple, row")
    /// &#10;If set to true the user would be able to select grid rows. By default selection is "multiple, row", which means user can select multiple rows.
    /// &#10;
    /// &#10;sortable - Boolean|Object (default: false)
    /// &#10;If set to true the user could sort the grid by clicking the column header cells. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.
    /// &#10;
    /// &#10;toolbar - String|Function|Array 
    /// &#10;If a String value is assigned to the toolbar configuration option, it will be treated as a single string template for the whole grid Toolbar,
    /// &#10;and the string value will be passed as an argument to a kendo.template() function.If a Function value is assigned (it may be a kendo.template() function call or a generic function reference), then the return value of the function will be used to render the ARADynamicGrid Toolbar contents.If an Array value is assigned, it will be treated as the list of commands displayed in the grid's Toolbar. Commands can be custom or built-in ("cancel", "create", "save", "excel", "pdf").The "cancel" built-in command reverts any data changes done by the end user.The "create" command adds an empty data item to the grid.The "save" command persists any data changes done by the end user.The "excel" command exports the grid data in MS Excel format.The "pdf" command exports the grid data in PDF format.
    /// &#10;
    /// &#10;focusoncheckboxcolumn - Boolean (default: true)
    /// &#10;If set to true the user could set focus on checkbox of the grid by clicking the column. By default focusoncheckboxcolumn is true. 
    /// &#10;
    /// &#10;totalRecordPerPage - Number(default: 10)
    /// &#10;Specifies the total number of records to be displayed in the grid when ARADynamicGrid is loaded. By default totalRecordPerPage will be set to 10.
    /// &#10;
    /// &#10;autoscrollbyselection - Boolean (default: false)
    /// &#10;If set to true the user could set automatic scrolling based on selected rows in the ARADynamicGrid. By default autoscrollbyselection will be set to false.
    /// &#10;
    /// &#10;rowselectionevent - Boolean (default: false)
    /// &#10;If set to true the user could fire row selection event for selected rows in the ARADynamicGrid. By default rowselectionevent will be set to false.
    /// &#10;
    /// &#10;selectedRecords - Array
    /// &#10;Contains array of records selected from the grid. By default selectedrecords array will be empty.
    /// &#10;
    /// &#10;selectionMemory - Boolean (default: true)
    /// &#10;If set to false the records selected by user will not be saved in memory for ARADynamicGrid. By default selectionMemory will be set to true.
    /// &#10;
    /// &#10;checkboxselection - Boolean 
    /// &#10;If set to true the user can add checkbox for each records in the ARADynamicGrid. In checkboxselection user can set width (default:"50px"), template, headertemplate, reorderable (false).
    /// &#10;If not set checkbox will not be available besides each record.
    /// &#10;
    /// &#10;_aggregate - Array
    /// &#10;Specifies aggregates which are calculated when the data source populates with data.
    /// &#10;
    /// &#10;_group - Boolean (default: false)
    /// &#10;Specifies grouping configuration of the data source. If set, the data items will be grouped when the data source is populated. By default, grouping is not applied.
    /// &#10;
    /// &#10;config - Array
    /// &#10;Specifies the config to be passed for managing the pagination for currentPage, totalPage, recordPerPage, totalRecords and searchText. By default config will be set to CurrentPage: 0, TotalPage: 0,
    /// &#10;RecordPerPage: totalRecordPerPage(dynamic), TotalRecord: 0, searchText: searchText(dynamic).
    /// &#10;
    /// &#10;searchText - String
    /// &#10;Specifies the searchText to be used by the user for applying searching in the ARADynamicGrid. By default searchText will be set to empty.
    /// &#10;
    /// &#10;autoresize - Boolean (default: false)
    /// &#10;If set to false the grid created by user cannot be resized. By default autoresize is false.
    /// &#10;
    /// &#10;ActionVisible - Boolean (default: false)
    /// &#10;Indicates whether action column will be visible to the end user in the ARADynamicGrid.
    /// &#10;
    /// &#10;Action - Array
    /// &#10;Specifies the actions to be used in the ARADynamicGrid which will be applied for each records in ARADynamicGrid.
    /// &#10;By default action columns in Dynamic Grid will be set to "{ 'title': 'Action', 'field': 'Action', 'headerAttributes': { 'class': 'noPointer' }, 'attributes': { 'class': 'action-wrapper', style: 'text-align: center;' }, 'template': "<div class='grid-action'> <a class='text-muted edit-record'onclick='editRecord(this);'><i class='icon-edit1'></i></a> *check create permission*<a class='text-muted' onclick='cloneRecord(this,true);'><i class='icon-copy'></i></a> *check delete permission*<a class='text-danger' onclick='deleteRecord(this);'><i class='icon-delete'></i></a></div>", 'width': 100 }".
    /// &#10;
    /// &#10;storageLocation - String
    /// &#10;Specifies the storage Location from which ImageField Type files will be displayed in the ARADynamicGrid.
    /// &#10;

    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAMassUpdate = function () { };

kendo.ui.ARAMassUpdate.prototype = {

};

$.fn.getKendoARAMassUpdate = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAMassUpdate widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAMassUpdate">The kendo.ui.ARAMassUpdate instance (if present).</returns>
};

$.fn.kendoARAMassUpdate = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAMassUpdate widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;formid - Guid (default: null)
    /// &#10;Specifies the current Form ID based on which its fields and its controls will be loaded and custom validation will be performed in the popup of ARAMassUpdate.
    /// &#10;
    /// &#10;selectedUID - Guid (default: null)
    /// &#10;Specifies selected/all recordIDs on which mass update will be performed in the ARAMassUpdate.
    /// &#10;
    /// &#10;pageID - Guid (default: null)
    /// &#10;Specifies the current Page ID which will be used in saving  the mass updated records.
    /// &#10;
    /// &#10;viewid - String
    /// &#10;Specifies view ID for which Mass Update will be performed in the ARAMassUpdate.
    /// &#10;
      /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAShowmessage = function () { };

kendo.ui.ARAShowmessage.prototype = {

};

$.fn.getKendoARAShowmessage = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAShowmessage widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAShowmessage">The kendo.ui.ARAShowmessage instance (if present).</returns>
};

$.fn.kendoARAShowmessage = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAShowmessage widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;type - String (default: "Error")
    /// &#10;Specifies the type of message to be displayed to the end user.
    /// &#10; The type of message can be "Success", "Warning" or "Error".
    /// &#10;Based on the selected type, message format will be varied.
    /// &#10;
    /// &#10;bottom - Number (default: 50)
    /// &#10;Specifies the position for the notification message to be displayed from the bottom of the current window.
    /// &#10;
    /// &#10;right - Number (default: 50)
    /// &#10;Specifies the position for the notification message to be displayed from the right of the current window.
    /// &#10;
    /// &#10;autohide - Boolean (default: true)
    /// &#10;Specifies whether the notified message is be to hide after 3000 ms.
    /// &#10;If the notified message is not important for the user, then message will be automatically hidden after displayed.
    /// &#10;Else message will remain till user manually clicks on close button of notification.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAColorConfigure = function () { };

kendo.ui.ARAColorConfigure.prototype = {

};

$.fn.getKendoARAColorConfigure = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAColorConfigure widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAColorConfigure">The kendo.ui.ARAColorConfigure instance (if present).</returns>
};

$.fn.kendoARAColorConfigure = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAColorConfigure widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;Fields - String (default:"Error")
    /// &#10;Specifies all the details about the selected field in form field tab of view designer page.
    /// &#10; The fields contains colorconfig, fieldtype, fieldname, tablename, isdisplay, allowsorting and many other fields.
    /// &#10;
 
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAFormManager = function () { };

kendo.ui.ARAFormManager.prototype = {

};

$.fn.getKendoARAFormManager = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAFormManager widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAFormManager">The kendo.ui.ARAFormManager instance (if present).</returns>
};

$.fn.kendoARAFormManager = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAFormManager widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;isEditPermission - Boolean 
    /// &#10;Specifies whether edit permission is allowed to the user or not for the currently loaded form in dynamic form loader.
    /// &#10;
    /// &#10;mode - String
    /// &#10;Specifies the type of operation to be performed when loading dynamic form.
    /// &#10; The mode can be "C"(create), "E"(edit) or "CLONE"(clone).
    /// &#10;
    /// &#10;PKID - Number
    /// &#10;Specifies the Primary Key ID based on which data will be loaded for when form is in edit mode for dynamic form loader.
    /// &#10;
    /// &#10;viewId - Guid
    /// &#10;Specifies the view ID based on which form will be generated in the dynamic form loader.
    /// &#10;

    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARASearchProfileManager = function () { };

kendo.ui.ARASearchProfileManager.prototype = {

};

$.fn.getKendoARASearchProfileManager = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARASearchProfileManager widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARASearchProfileManager">The kendo.ui.ARASearchProfileManager instance (if present).</returns>
};

$.fn.kendoARASearchProfileManager = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARASearchProfileManager widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;isOpen - Boolean (default: false)
    /// &#10;Specifies whether search profile loader is to be opened at the time of initialization. By default isOpen will be set to false.
    /// &#10;
    /// &#10;isHistory - Boolean (default: false)
    /// &#10;Specifies whether search profile loader is performed when viewing history. By default isHistory will be set to false.
    /// &#10;
 
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAViewLoading = function () { };

kendo.ui.ARAViewLoading.prototype = {

};

$.fn.getKendoARAViewLoading = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAViewLoading widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAViewLoading">The kendo.ui.ARAViewLoading instance (if present).</returns>
};

$.fn.kendoARAViewLoading = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAViewLoading widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;totalRecordPerPage - Number (default: 20)
    /// &#10;Specifies the total number of records to be displayed per page when loading view for dynamic view. By default totalRecordPerPage will be set to 20.
    /// &#10;
    /// &#10;config - Object
    /// &#10;Specifies the configuration used for managing the pagination when loading view for dynamic view.
    /// &#10;
    /// &#10;applySearchProfile - Boolean
    /// &#10;Specifies whether search profile is to be applied when loading view for dynamic view.
    /// &#10;
    /// &#10;viewType - Number
    /// &#10;Specifies the view type based on which view will be loaded.
    /// &#10;The viewType can be Grid = 1, Summary = 2, Chart = 3, Timeline = 4
    /// &#10;
    /// &#10;srcPageType - Number
    /// &#10;If scrPageType set to 1, defines srcPageType as dynamic page so facet will also be applicable to currently view loading page.
    /// &#10;
    /// &#10;viewid - Guid
    /// &#10;Specifies the view ID passed at the time of view loading in dynamic page loading.
    /// &#10;
    /// &#10;storageLocation - String
    /// &#10;Specifies the storage location to be used in ARADynamicGrid for displaying the imageField fieldtype.
    /// &#10;
    /// &#10;isDeletePermission - Boolean 
    /// &#10;Specifies whether user has the permission to delete each records in the dynamic view.
    /// &#10;
    /// &#10;isCreatePermission - Boolean (default: false)
    /// &#10;Specifies whether user has the permission to create clone of existing records in the dynamic view.
    /// &#10;
    /// &#10;ActionVisible - Boolean (default: true)
    /// &#10;Specifies whether the current view can display the actions columns or not in the dynamic view.
    /// &#10;
    /// &#10;checkboxselection - Boolean|Object (default: PKID with noPointer class)
    /// &#10;Specifies whether checkbox will be visible for the current view or not in the dynamic view.
    /// &#10;

    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ARAWorkSpaceConnectivity = function () { };

kendo.ui.ARAWorkSpaceConnectivity.prototype = {

};

$.fn.getKendoARAWorkSpaceConnectivity = function () {
    /// <summary>
    /// Returns a reference to the kendo.ui.ARAWorkSpaceConnectivity widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ARAWorkSpaceConnectivity">The kendo.ui.ARAWorkSpaceConnectivity instance (if present).</returns>
};

$.fn.kendoARAWorkSpaceConnectivity = function (options) {
    /// <summary>
    /// Instantiates a kendo.ui.ARAWorkSpaceConnectivity widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;groupID - Number
    /// &#10;Specifies the groupID to be used for connecting workspace when invoking the ARAWorkspaceConnectivity page.
    /// &#10;
    /// &#10;ownerTitle - String
    /// &#10;Specifies group name to be displayed when loading ARAWorkspaceConnectivity page.
    /// &#10;
    /// &#10;workspaceID - Boolean
    /// &#10;Specifies whether specified workspace ID is set as default connected workspace in the ARAWorkspaceConnectivity page.
    /// &#10;
  
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};
