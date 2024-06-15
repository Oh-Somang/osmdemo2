class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Music {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
}

class Drama {
  constructor(title) {
    this.title = title;
  }
}

class UI {
  static displayItems(type) {
    let items;
    switch (type) {
      case 'book':
        items = Store.getItems('book');
        items.forEach((item) => UI.addItemToList(item, 'book'));
        break;
      case 'music':
        items = Store.getItems('music');
        items.forEach((item) => UI.addItemToList(item, 'music'));
        break;
      case 'drama':
        items = Store.getItems('drama');
        items.forEach((item) => UI.addItemToList(item, 'drama'));
        break;
    }
  }

  static addItemToList(item, type) {
    const list = document.getElementById(`${type}-list`);
    const row = document.createElement('tr');
    switch (type) {
      case 'book':
        row.innerHTML = `
          <td>${item.title}</td>
          <td>${item.author}</td>
          <td> <a href="#" class="btn btn-danger btn-sm delete"> X </a> </td>
        `;
        break;
      case 'music':
        row.innerHTML = `
          <td>${item.title}</td>
          <td>${item.artist}</td>
          <td> <a href="#" class="btn btn-danger btn-sm delete"> X </a> </td>
        `;
        break;
      case 'drama':
        row.innerHTML = `
          <td>${item.title}</td>
          <td> <a href="#" class="btn btn-danger btn-sm delete"> X </a> </td>
        `;
        break;
    }
    list.appendChild(row);
  }

  static deleteItem(target) {
    target.parentElement.parentElement.remove();
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('form:not([style*="display: none"])');
    container.insertBefore(div, form);

    setTimeout(() => document.querySelector(".alert").remove(), 2000);
  }

  static clearFields(type) {
    document.querySelector(`#${type}-title`).value = "";
    if (type === 'book' || type === 'music') {
      document.querySelector(`#${type}-author`).value = "";
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  UI.displayItems('book');
});

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;

  if (title === "" || author === "") {
    UI.showAlert("모든 필드를 입력해 주세요", "danger");
  } else {
    const book = new Book(title, author);

    UI.addItemToList(book, 'book');
    Store.addItem(book, 'book');
    UI.showAlert("책이 저장되었습니다", "success");
    UI.clearFields('book');
  }
});

document.querySelector('#music-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#music-title').value;
  const artist = document.querySelector('#music-artist').value;

  if (title === "" || artist === "") {
    UI.showAlert("모든 필드를 입력해 주세요", "danger");
  } else {
    const music = new Music(title, artist);

    UI.addItemToList(music, 'music');
    Store.addItem(music, 'music');
    UI.showAlert("음악이 저장되었습니다", "success");
    UI.clearFields('music');
  }
});

document.querySelector('#drama-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#drama-title').value;

  if (title === "") {
    UI.showAlert("모든 필드를 입력해 주세요", "danger");
  } else {
    const drama = new Drama(title);

    UI.addItemToList(drama, 'drama');
    Store.addItem(drama, 'drama');
    UI.showAlert("드라마가 저장되었습니다", "success");
    UI.clearFields('drama');
  }
});

document.querySelector("#book-list").addEventListener("click", (e) => {
  if (e.target.classList.contains('delete')) {
    UI.deleteItem(e.target);
    Store.removeItem(e.target.parentElement.previousElementSibling.previousElementSibling.textContent, 'book');
    UI.showAlert("책을 삭제했습니다", "info");
  }
});

document.querySelector("#music-list").addEventListener("click", (e) => {
  if (e.target.classList.contains('delete')) {
    UI.deleteItem(e.target);
    Store.removeItem(e.target.parentElement.previousElementSibling.previousElementSibling.textContent, 'music');
    UI.showAlert("음악을 삭제했습니다", "info");
  }
});

document.querySelector("#drama-list").addEventListener("click", (e) => {
  if (e.target.classList.contains('delete')) {
    UI.deleteItem(e.target);
    Store.removeItem(e.target.parentElement.previousElementSibling.textContent, 'drama');
    UI.showAlert("드라마를 삭제했습니다", "info");
  }
});

class Store {
  static getItems(type) {
    let items;
    if (localStorage.getItem(type) === null) {
      items = [];
      if (type === 'book') {
        items = [
          { title: 'Book One', author: 'John Doe' },
          { title: 'Book Two', author: 'Jane Smith' },
          { title: 'Book Three', author: 'Billy Bob' },
          { title: '죄와 벌', author: '표도르 도스토옙스키' },
          { title: '데미안', author: '헤르만 헤세' },
          { title: '율리시스 무어', author: '피에르도메니코 바칼라리오' },
          { title: '테메레르', author: '나오미 노빅' },
          { title: '나니아 연대기', author: '클라이브 루이스' },
          { title: '해리포터', author: '조앤 롤링' },
          { title: '비밀의 화원', author: '프랜시스 버넷' },
          { title: '고양이 낸시', author: '엘렌 심' },
          { title: '환생동물학교', author: '엘렌 심' }
        ];
      } else if (type === 'music') {
        items = [
          { title: 'AJR', artist: 'Maybe Man' },
          { title: 'NF', artist: 'Time' },
          { title: 'Avril Lavigne', artist: 'Sk8er Boi' },
          { title: 'Imagine Dragons', artist: 'Demons' },
          { title: 'Arctic Monkeys', artist: 'I Wanna Be Yours' },
          { title: 'Billie Eilish', artist: 'Ocean Eyes' },
          { title: 'Isabel LaRosa', artist: 'im yours' },
          { title: 'Dine On', artist: 'Relax' },
          { title: 'Charming Jo', artist: 'Lost My Phone' }
        ];
      } else if (type === 'drama') {
        items = [
          { title: 'Stranger Things' },
          { title: 'Wednesday' },
          { title: 'The Mentalist' },
          { title: 'The Good Doctor' },
          { title: 'House MD' },
          { title: 'The Big Bang Theory' },
          { title: 'Young Sheldon' },
          { title: 'Victorious' },
          { title: 'Sherlock' }
        ];
      }
      localStorage.setItem(type, JSON.stringify(items));
    } else {
      items = JSON.parse(localStorage.getItem(type));
    }
    return items;
  }

  static addItem(item, type) {
    const items = Store.getItems(type);
    items.push(item);
    localStorage.setItem(type, JSON.stringify(items));
  }

  static removeItem(title, type) {
    const items = Store.getItems(type);
    items.forEach((item, index) => {
      if (item.title === title) {
        items.splice(index, 1);
      }
    });
    localStorage.setItem(type, JSON.stringify(items));
  }
}

document.querySelectorAll('.nav-link').forEach((tab) => {
  tab.addEventListener('shown.bs.tab', (e) => {
    const type = e.target.id.split('-')[0];
    document.querySelector(`#${type}-list`).innerHTML = '';
    UI.displayItems(type);
  });
});
