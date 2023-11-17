document.addEventListener('DOMContentLoaded', function () {
  const giftList = [
    'cadeau1',
    'cadeau2',
    'cadeau3',
    // Ajoutez d'autres cadeaux selon vos besoins
  ];

  const giftForm = document.getElementById('gift-form');
  const selectedGiftDropdown = document.getElementById('selected-gift');
  const giftItems = document.querySelectorAll('#gift-list li');
  const selectedGiftsTable = document.getElementById('selected-gifts-table');
  const selectedGifts = [];

  giftList.forEach(function (gift) {
    const option = document.createElement('option');
    option.value = gift;
    option.textContent = gift;
    selectedGiftDropdown.appendChild(option);
  });

  giftItems.forEach(function (item) {
    item.addEventListener('click', function () {
      if (!item.classList.contains('taken')) {
        const selectedValue = item.getAttribute('data-gift');
        selectedGiftDropdown.value = selectedValue;
      }
    });
  });

  giftForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const guestName = document.getElementById('guest-name').value;
    const selectedGift = selectedGiftDropdown.value;

    giftItems.forEach(function (item) {
      const itemValue = item.getAttribute('data-gift');
      if (itemValue === selectedGift) {
        item.classList.add('taken');
        item.innerHTML = '<s>' + item.innerHTML + '</s>';
      }
    });

    selectedGifts.push(selectedGift);

    updateSelectedGiftsTable();

    giftForm.reset();
  });

  function updateSelectedGiftsTable() {
    selectedGiftsTable.innerHTML = '';

    selectedGifts.forEach(function (gift) {
      const row = selectedGiftsTable.insertRow();
      const cell = row.insertCell(0);
      cell.textContent = gift;
    });
  }
});
