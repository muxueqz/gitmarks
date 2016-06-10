var hostArray = window.location.host.split('.'),
    pathArray = window.location.pathname.split('/'),
    username = hostArray[0],
    repository = pathArray[1],
    fullName = username + '/' + repository,
    issuesHref = 'https://github.com/' + fullname,
    issuesElement = document.getElementById('issues'),
    bookmarkElement = document.getElementById('bookmark');

    issuesElement.href = issuesHref;
    bookmarkElement.href='javascript:(function(s){try{s=document.selection.createRange().text}catch(_){s=document.getSelection()}location.href="https://github.com/'+fullName+'/issues/new?title="+document.title+"&body="+location+String.fromCharCode(37)+"0A---"+String.fromCharCode(37)+"0A"+encodeURIComponent(s)})()';
