$(function () {

    //Notification
    $('#jqDialogNotify').live('click', function () {

        var _message = "Notification";
        var _durationTime = 3;
        var _status = "info";

        // Notification Function
        JQDialogNotify(_message, _durationTime, _status);

        return false;
    });

    //Alert
    $('#jqDialogAlert').live('click', function () {

        var _message = "Notification";
        var _status = "info";

        // Alert Function
        JQDialogAlert(_message, _status, function () { alert("Ok"); });

        return false;
    });

    //Confirm
    $('#jqDialogConfirm').live('click', function () {

        var _message = "Confirm";
        var _status = "info";

        // Confirm Function
        JQDialogConfirm(_message, _status, function () { alert("Yes"); }, function () { alert("No"); });

        return false;
    });

    //Prompt
    $('#jqDialogPrompt').live('click', function () {

        var _message = "Prompt";
        var _content = "Content";
        var _status = "info";

        // Prompt Function
        JQDialogPrompt(_message, _content, _status, function () { alert("Ok"); }, function () { alert("Cancel"); });

        return false;
    });

    //CustomContent
    $('#jqDialogCustomContent').live('click', function () {

        var _content = "CustomContent";
        var _status = "info";

        // CustomContent Function
        JQDialogCustomContent(_content, _status);

        return false;
    });

});