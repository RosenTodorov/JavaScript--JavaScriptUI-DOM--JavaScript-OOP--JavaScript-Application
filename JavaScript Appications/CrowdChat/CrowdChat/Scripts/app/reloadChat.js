define(['jquery'], function () {
    var reloadChat = function (resourceUrl) {
        return $.ajax({
            url: resourceUrl,
            type: 'GET',
            contentType: 'application/json',
            success: function (data) {
                var chatters = data;
                var chatlist = $('<ul/>').attr("id", "chat-list");
                for (var i = 0; i < chatters.length; i++) {
                    $('<li />')
                    .append($('<strong/>')
                    .html(chatters[i].by))
                    .append($('<br/>'))
                    .append($('<span/>')
                    .html(chatters[i].text))
                    .appendTo(chatlist);
                };

                $('#chat-div').html(chatlist);
            },
            error: function (error) {
            }
        });
    };

    return reloadChat;
});