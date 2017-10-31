Meteor.publish('searchApi', function(travelsearch) {
    var self = this;

    try {
        var response = HTTP.get('http://api.travelpayouts.com/v2/prices/latest?currency=usd&period_type=year&page=1&limit=30&show_to_affiliates=true&sorting=price&trip_class=0&token=16ba8a62af9034ccb70acb13a1668225' + travelsearch + '.json');

        _.each(response.data.data.children, function(item) {
            var data = item.data;
            var len = 200;

            var post = {
                currency: data.currency,
                period_type: data.periodType,
                page: data.page,
                limit: data.limit,
                show_to_affiliates: true,
                sorting: data.price,
                trip_class: 0                
            };

            if (data.selftext != "") {
                post.selftext = data.selftext.substr(0, len)
            }

            if (data.thumbnail != "self" && Meteor.call('isUrl', data.thumbnail)) {
                post.thumbnail = data.thumbnail
            }

            self.added('search', Random.id(), post);
        });

        self.ready();
    } catch (error) {
        console.log(error);
    }
});

Meteor.methods({ 
    isUrl: function(url) {
        if (url.indexOf('http') > -1) { return true; }
        return false;
    }
});