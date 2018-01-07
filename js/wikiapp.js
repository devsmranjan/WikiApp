$(document).ready(function () {
    $("form").submit(function (e) {
        e.preventDefault();

        var api = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" + $("#search-space").val() + "&callback=?";

        $.getJSON(api, function (data) {
            var html = "";

            $.map(data.query.search, function (val) {
                var new_title = val.title.replace(/ /g, "_");
                var new_link = "https://en.wikipedia.org/wiki/" + new_title;

                html += "<a href=" + new_link + " target=\"_blank\" class=\"card text-left mb-3 animated fadeInUp\"><div class=\"card-body\"><h4 class=\"card-title\">" + val.title + "</h4><hr><p class=\"card-text\">" + val.snippet + "</p></div></a>";


            });

            $(".result").html(html);
        });
    });
});