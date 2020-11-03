// require([
//     'jquery'
// ], function ($) {
//     console.log('example');
//
//
// });
require([
        'jQuery',
        'select2',
        'ajax'

],

    //start select issuekey output assignee
    // jQuery(document).ready(function($) {
    //     jQuery.ajax({
    //         url: AJS.params.baseURL + "/rest/api/2/search?jql=project=TEST",
    //         type: "GET",
    //         dataType: "json",
    //         success: function (dateo) {
    //             var i = dateo.total - 1;
    //             for ( j = i; j >=0 ; j--) {
    //                 $("select").append('<option>' + dateo.issues[j].key + '</option>')
    //             }
    //         }
    //     })
    //      $("#demo1").click(function () {
    //            var x = $("#sel").find("option:selected").text();
    //            console.log(x);
    //             jQuery.ajax({
    //                 url: AJS.params.baseURL + "/rest/api/2/issue/"+x+"?fields=assignee",
    //                 type: "GET",
    //                 dataType: "json",
    //                 success: function (data2) {
    //                     console.log(data2);
    //                     $("p").text(data2.fields.assignee.name);
    //                 }
    //             })
    //      })
    // })
    //end select issuekey output assignee

    //load avatar
    // jQuery(document).ready(function($) {
    //         jQuery.ajax({
    //             url: AJS.params.baseURL + "/rest/api/2/user/search?username=.&startAt=0&maxResults=2000",
    //             type: "GET",
    //             dataType: "json",
    //             success: function (dateo) {
    //                 console.log(dateo);
    //                 //$("p").text(dateo[1].avatarUrls["16x16"]);
    //
    //             }
    //         }).done(getAvatar);
    //
    //         function getAvatar(data) {
    //
    //             var info = data[i];
    //             $("#avatar").attr("src",info.avatarUrls["16x16"])
    //         }
    // })


    jQuery(document).ready(function($) {
        var tests = "";
          AJS.$("#my-user-picker").auiSelect2({
              placeholder: "Choose a recipient",
              minimumInputLength: 1,
              width: '300px',
              multiple: false,
              dropdownAutoWidth: true,
                ajax: {
                    url: AJS.params.baseURL + "/rest/api/2/user/picker", // JIRA-relative URL to the REST end-point
                    type: "GET",
                    dataType: 'json',
                    // query parameters for the remote ajax call
                    data: function data(term) {
                        return {
                            query: term,
                            showAvatar: true
                        }
                    },
                    // parse data from the server into form select2 expects
                    results: function results(data) {
                        return{
                            results:  $.map(data.users, function (item) {
                                return {
                                    id: item.key,
                                   text: item.name,
                                    avatarUrl : item.avatarUrl,
                                    displayName: item.displayName
                                }

                            })
                        }
                    },

                },
              formatResult: function (data, term) {
                  return "<div><span><img width='16px' height='16px' src='"+ data.avatarUrl + "'></span><span>" + data.displayName + "</span></div>";
              },
              formatSelection: function (data) {
                  tests = data.avatarUrl;
                  return data.text;
              }
          })
        $("#demo1").click(function (item) {
            img:$("img").attr('src',tests)

        })
    })
);


