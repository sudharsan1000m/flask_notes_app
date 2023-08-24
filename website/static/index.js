function deleteNote(noteId) {
    fetch("/delete-note", {
      method: "POST",
      body: JSON.stringify({ noteId: noteId }),
      cache : "no-cache",
    }).then(function(response){
      response.json().then(function(data){
        // window.location.href = "/";
      })
    });
  }



