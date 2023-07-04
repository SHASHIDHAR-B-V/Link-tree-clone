const shareButton = document.querySelectorAll('.tile-share-button');
console.log(shareButton);

const shareTop = document.querySelectorAll('.share-button');

async function copyText(e) {
  //prevent button
  e.preventDefault();
  const link = this.getAttribute('link');
  console.log(link);
  try {
    await navigator.clipboard.writeText(link);
    alert('copied the text: ' + link);
  } catch (err) {
    console.log(error);
  }
}

shareButton.forEach((shareButton) =>
  shareButton.addEventListener('click', copyText)
);

shareTop.forEach((shareTop) => shareTop.addEventListener('click', copyText));
