$.ajax({
    type: "GET",
    url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
    dataType: "xml",
    success: function(t) {
        var i = 1;
        $(t).find("item").each(function() {
            if (10 >= i) {
                var t = $(this).find("title").text(),
                    s = $(this).find("pubDate").text(),
                    e = $(this).find("description").text(),
                    a = $(this).find("link").text(),
                    n = '<p class="url"><a href=\'' + a + "' target='_blank'>Read More</a></p>";
                $("#rss_news").append('<article><div class="rssContent"><p class="title">' + t + '</p><p class="date">' + s + '</p><div class="description">' + e + n + "</div></div></article>"), i++
            }
        })
    }
});