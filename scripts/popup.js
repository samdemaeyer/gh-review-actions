document.getElementById('remove-form').onsubmit = (e) => {
  e.preventDefault();
  const fileNameInput = e.target[0];
  fileNameInput.classList.remove('is-invalid');
  const searchPath = fileNameInput.value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { searchPath, action: 'remove' }, (response) => {
      if (!response) return (fileNameInput.value = '');
      fileNameInput.classList.add('is-invalid');
      document.getElementById('remove-file-name-feedback').innerText = response.message;
    });
  });
};

document.getElementById('toggle-form').onsubmit = (e) => {
  e.preventDefault();
  const fileNameInput = e.target[0];
  fileNameInput.classList.remove('is-invalid');
  const searchPath = fileNameInput.value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { searchPath, action: 'toggle' }, (response) => {
      if (!response) return (fileNameInput.value = '');
      fileNameInput.classList.add('is-invalid');
      document.getElementById('toggle-file-name-feedback').innerText = response.message;
    });
  });
};
