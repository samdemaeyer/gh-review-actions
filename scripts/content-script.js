chrome.runtime.onMessage.addListener(({ searchPath, action }, _, sendResponse) => {
  // public/images/nested_cards/card-

  const isToggle = action === 'toggle';
  const files = document.querySelectorAll(`[data-file-path*="${searchPath}"]`);
  files.length
    ? [...files].forEach((file) => {
        isToggle ? file.querySelector('.js-reviewed-toggle').click() : file.remove();
      })
    : sendResponse({ message: 'No files matched' });
});
