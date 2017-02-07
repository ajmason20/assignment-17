var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}

$.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then(function(d){
   console.log(d.results)


  var legislatorsContainerEl = document.querySelector('.legislators-container')
  var legislatorsObjectsList = d.results

  var bigHtmlStoryStr = ''

  forEach (legislatorsObjectsList, function(legislatorsObj){

    var legislatorDiv = '<div class="legislator">'
      legislatorDiv += '<h3>' + legislatorsObj.first_name + ' ' + legislatorsObj.last_name + '</h3>'
      legislatorDiv += '<h4>' + legislatorsObj.title + '--' + legislatorsObj.party + '-' + legislatorsObj.state_name + '</h4>'
      legislatorDiv += '<ul>'
        legislatorDiv += '<li>' + 'email: ' + legislatorsObj.oc_email + '</li>'
        legislatorDiv += '<li>' + 'website: ' + legislatorsObj.website + '</li>'
        legislatorDiv += '<li>' + 'facebook: ' + legislatorsObj.facebook_id + '</li>'
        legislatorDiv += '<li>' + 'twitter: ' + legislatorsObj.twitter_id + '</li>'
      legislatorDiv += '</ul>'
      legislatorDiv += '<p>' + 'Term End ' + legislatorsObj.term_end + '</p>'
    legislatorDiv += '</div>'

    bigHtmlStoryStr += legislatorDiv
    // console.log(legislatorsObj.first_name)
  })

  legislatorsContainerEl.innerHTML = bigHtmlStoryStr;
})
