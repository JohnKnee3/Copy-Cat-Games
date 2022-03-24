async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document
    .querySelector('textarea[name="comment-area"]')
    .value.trim();
  const article_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(comment_text);
  console.log(article_id);
  if (comment_text) {
    const response = await fetch("/api/article_comments", {
      method: "POST",
      body: JSON.stringify({
        article_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#new-comment")
  .addEventListener("submit", commentFormHandler);
