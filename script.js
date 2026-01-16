function addComment(btn) {
let commentBox = btn.previousElementSibling;
let nameBox = commentBox.previousElementSibling;
let list = btn.nextElementSibling;

```
if (nameBox.value === "" || commentBox.value === "") {
    alert("Fill all fields");
    return;
}

let div = document.createElement("div");
div.innerHTML = "<b>" + nameBox.value + ":</b> " + commentBox.value;
list.appendChild(div);

nameBox.value = "";
commentBox.value = "";
```

}
