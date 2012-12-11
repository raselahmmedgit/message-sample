//-----------------------------------------------------
//start Add, Edit, Delete - Success Common Funtion
function AjaxSuccess(updateTargetId, dailogId, commonMessageId, commonMessage) {

    var _updateTargetId = "#" + updateTargetId;
    var _dailogID = "#" + dailogId;
    var _commonMessageId = "#" + commonMessageId;
    var _commonMessage = commonMessage;

    if ($(_updateTargetId).html() == "True") {

        //now we can close the dialog
        $(_dailogID).dialog('close');
        //twitter type notification
        $(_commonMessageId).html(_commonMessage);
        $(_commonMessageId).delay(400).slideDown(400).delay(3000).slideUp(400);

    }
    else {
        //show message in popup
        $(_updateTargetId).show();
    }
}
//end Add, Edit, Delete - Success Common Funtion
//-----------------------------------------------------

//-----------------------------------------------------
//start JQDialog Notification Funtion
function JQDialogNotify(message, durationTime, status) {
    
    // notify dialog
    $.jqDialog.notify(message, durationTime);
    
    // notify dialog status class in jqDialog_box
    $("#jqDialog_box").addClass(status);
    
}
//end JQDialog Notification Funtion
//-----------------------------------------------------

//-----------------------------------------------------
//start JQDialog Alert Funtion
function JQDialogAlert(message, status, callBackOk) {

    // alert dialog
    $.jqDialog.alert(message, callBackOk);

    // alert dialog status class in jqDialog_box
    $("#jqDialog_box").addClass(status);
    
}
//end JQDialog Alert Funtion
//-----------------------------------------------------

//-----------------------------------------------------
//start JQDialog Confirm Funtion
function JQDialogConfirm(message, status, callBackYes, callBackNo) {

    // confirm dialog
    $.jqDialog.confirm(message, callBackYes, callBackNo);
    
    // confirm dialog status class in jqDialog_box
    $("#jqDialog_box").addClass(status);
    
}
//end JQDialog Confirm Funtion
//-----------------------------------------------------

//-----------------------------------------------------
//start JQDialog Prompt Funtion
function JQDialogPrompt(message, content, status, callBackOk, callBackCancel) {

    // prompt
    $.jqDialog.prompt(message, content, callBackOk, callBackCancel);

    // alert dialog status class in jqDialog_box
    $("#jqDialog_box").addClass(status);
    
}
//end JQDialog Prompt Funtion
//-----------------------------------------------------

//-----------------------------------------------------
//start JQDialog CustomContent Funtion
function JQDialogCustomContent(content, status) {

    // custom content
    $.jqDialog.content(content);

    // alert dialog status class in jqDialog_box
    $("#jqDialog_box").addClass(status);
    
}
//end JQDialog CustomContent Funtion
//-----------------------------------------------------

$(function () {



});